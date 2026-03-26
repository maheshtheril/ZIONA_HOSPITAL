module.exports=[705943,e=>e.a(async(t,i)=>{try{var n=e.i(89171),a=e.i(698902),r=e.i(698043),d=e.i(254799),o=t([a,r]);async function s(t){try{let i=await (0,a.auth)();if(!i?.user?.tenantId)return n.NextResponse.json({error:"Unauthorized"},{status:401});let{patientId:o,appointmentId:s,vitals:u,diagnosis:l,complaint:p,examination:c,plan:h,medicines:m,labTests:_}=await t.json();if(!o&&s){let e=await r.prisma.hms_appointments.findUnique({where:{id:s},select:{patient_id:!0}});e&&(o=e.patient_id)}if(!o)return n.NextResponse.json({error:"Patient ID required"},{status:400});let f=await r.prisma.$transaction(async t=>{let n=i.user.companyId,a=[];for(let e of m){let r=e.id||e.medicineId;if(!r||""===r||"undefined"===r){if(!e.name)continue;let a=n;if(!a){let e=await t.company.findFirst({where:{tenant_id:i.user.tenantId},select:{id:!0}});a=e?.id}if(!a)throw Error(`Cannot create product "${e.name}" because no company is associated with this tenant.`);let o=await t.hms_product.findFirst({where:{name:{equals:e.name,mode:"insensitive"},tenant_id:i.user.tenantId}});if(o)r=o.id;else{let n=d.default.randomUUID();await t.$executeRaw`
                            INSERT INTO hms_product (
                                id, tenant_id, company_id, sku, name, 
                                is_active, is_stockable, price, uom, currency, valuation_method, created_at
                            ) VALUES (
                                CAST(${n} AS uuid),
                                CAST(${i.user.tenantId} AS uuid),
                                CAST(${a} AS uuid),
                                ${`MED-${Date.now()}-${Math.floor(1e3*Math.random())}`},
                                ${e.name},
                                true, true, 0, 'Unit', 'INR', 'fifo', NOW()
                            )
                        `,r=n}}if(!r||""===r||"undefined"===r)throw Error(`Technical Error: Could not resolve product ID for "${e.name}". Please ensure the medicine exists in the catalog or can be auto-created.`);a.push({...e,resolvedId:r})}if(0===a.length&&m.length>0)throw Error("No valid medicines were found in the request.");if(s){let e=await t.prescription.findFirst({where:{appointment_id:s,tenant_id:i.user.tenantId}});e&&await t.prescription.delete({where:{id:e.id}})}let r=d.default.randomUUID();for(let e of(await t.$executeRaw`
                INSERT INTO prescription (
                    id, tenant_id, company_id, patient_id, appointment_id,
                    vitals, diagnosis, complaint, examination, plan,
                    visit_date, created_at, updated_at, doctor_id
                ) VALUES (
                    CAST(${r} AS uuid),
                    CAST(${i.user.tenantId} AS uuid),
                    CAST(${n||null} AS uuid),
                    CAST(${o} AS uuid),
                    CAST(${s||null} AS uuid),
                    ${u||""},
                    ${l||""},
                    ${p||""},
                    ${c||""},
                    ${h||""},
                    NOW(), NOW(), NOW(),
                    CAST(${i.user.id||null} AS uuid)
                )
            `,a)){let i=(e.dosage||"0-0-0").split("-").map(e=>parseInt(e)||0);await t.$executeRaw`
                    INSERT INTO prescription_items (
                        id, prescription_id, medicine_id, 
                        morning, afternoon, evening, night, days, created_at
                    ) VALUES (
                        gen_random_uuid(),
                        CAST(${r} AS uuid),
                        CAST(${e.resolvedId} AS uuid),
                        ${i[0]||0},
                        ${i[1]||0},
                        ${i[2]||0},
                        ${i[3]||0},
                        ${parseInt(e.days)||3},
                        NOW()
                    )
                `}let f=(await t.$queryRaw`
                SELECT p.*, 
                    JSON_AGG(JSON_BUILD_OBJECT(
                        'id', pi.id,
                        'medicine_id', pi.medicine_id,
                        'morning', pi.morning,
                        'afternoon', pi.afternoon,
                        'evening', pi.evening,
                        'night', pi.night,
                        'days', pi.days,
                        'hms_product', JSON_BUILD_OBJECT(
                            'id', prod.id,
                            'name', prod.name,
                            'sku', prod.sku,
                            'price', prod.price
                        )
                    )) as prescription_items
                FROM prescription p
                LEFT JOIN prescription_items pi ON p.id = pi.prescription_id
                LEFT JOIN hms_product prod ON pi.medicine_id = prod.id
                WHERE p.id::text = CAST(${r} AS text)
                GROUP BY p.id
            `)[0];if(s&&await t.hms_lab_order.deleteMany({where:{encounter_id:s,status:"requested",tenant_id:i.user.tenantId}}),_&&_.length>0){let e=[];for(let a of _){let r=a.id,o=a.name||a.testName;if(!o)continue;let s=await t.hms_lab_test.findFirst({where:{name:{equals:o,mode:"insensitive"},tenant_id:i.user.tenantId}});if(s)r=s.id;else{let e=d.default.randomUUID(),a=n||(await t.company.findFirst({where:{tenant_id:i.user.tenantId}}))?.id;await t.$executeRaw`
                            INSERT INTO hms_lab_test (
                                id, tenant_id, company_id, name, code, created_at
                            ) VALUES (
                                CAST(${e} AS uuid),
                                CAST(${i.user.tenantId} AS uuid),
                                CAST(${a} AS uuid),
                                ${o},
                                ${`LAB-${Date.now()}-${Math.floor(1e3*Math.random())}`},
                                NOW()
                            )
                        `,r=e}e.push({...a,resolvedId:r})}if(e.length>0){let a=n;if(!a){let e=await t.company.findFirst({where:{tenant_id:i.user.tenantId}});a=e?.id||null}let r=d.default.randomUUID(),u=`LAB-${Date.now()}`;for(let n of(await t.$executeRaw`
                        INSERT INTO hms_lab_order (
                            id, tenant_id, company_id, patient_id, encounter_id, 
                            status, order_number, ordered_at, created_at
                        ) VALUES (
                            CAST(${r} AS uuid),
                            CAST(${i.user.tenantId} AS uuid),
                            CAST(${a} AS uuid),
                            CAST(${o} AS uuid),
                            CAST(${s||null} AS uuid),
                            'requested',
                            ${u},
                            NOW(), NOW()
                        )
                    `,e))await t.$executeRaw`
                            INSERT INTO hms_lab_order_line (
                                id, tenant_id, company_id, order_id, test_id, status, price, created_at
                            ) VALUES (
                                gen_random_uuid(),
                                CAST(${i.user.tenantId} AS uuid),
                                CAST(${a} AS uuid),
                                CAST(${r} AS uuid),
                                CAST(${n.resolvedId} AS uuid),
                                'pending',
                                ${n.price||0},
                                NOW()
                            );
                        `}}if(s){let i=_&&_.length>0?"in_progress":"completed";await t.$executeRaw`
                    UPDATE hms_appointments 
                    SET status = ${i},
                        updated_at = NOW()
                    WHERE id::text = CAST(${s} AS text)
                `;let{revalidatePath:n}=await e.A(519582);n("/hms/doctor/dashboard"),n("/hms/reception/dashboard"),n("/hms/nursing"),n("/hms/patients/[id]","page")}return f});return n.NextResponse.json({success:!0,prescriptionId:f.id,medicines:f.prescription_items?.filter(e=>e&&e.medicine_id&&e.hms_product&&e.hms_product.id).map(e=>({id:e.hms_product.id,name:e.hms_product.name,sku:e.hms_product.sku,price:e.hms_product.price,quantity:(e.morning+e.afternoon+e.evening+e.night)*e.days}))||[]})}catch(e){return console.error("Error saving prescription:",e),n.NextResponse.json({error:"Failed to save prescription",details:e instanceof Error?e.message:"Unknown error"},{status:500})}}[a,r]=o.then?(await o)():o,e.s(["POST",()=>s]),i()}catch(e){i(e)}},!1),38136,e=>e.a(async(t,i)=>{try{var n=e.i(747909),a=e.i(174017),r=e.i(996250),d=e.i(759756),o=e.i(561916),s=e.i(114444),u=e.i(837092),l=e.i(869741),p=e.i(316795),c=e.i(487718),h=e.i(995169),m=e.i(47587),_=e.i(666012),f=e.i(570101),A=e.i(626937),S=e.i(10372),w=e.i(193695);e.i(52474);var R=e.i(600220),E=e.i(705943),T=t([E]);[E]=T.then?(await T)():T;let g=new n.AppRouteRouteModule({definition:{kind:a.RouteKind.APP_ROUTE,page:"/api/prescriptions/save/route",pathname:"/api/prescriptions/save",filename:"route",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/src/app/api/prescriptions/save/route.ts",nextConfigOutput:"standalone",userland:E}),{workAsyncStorage:C,workUnitAsyncStorage:I,serverHooks:N}=g;function v(){return(0,r.patchFetch)({workAsyncStorage:C,workUnitAsyncStorage:I})}async function $(e,t,i){g.isDev&&(0,d.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let n="/api/prescriptions/save/route";n=n.replace(/\/index$/,"")||"/";let r=await g.prepare(e,t,{srcPage:n,multiZoneDraftMode:!1});if(!r)return t.statusCode=400,t.end("Bad Request"),null==i.waitUntil||i.waitUntil.call(i,Promise.resolve()),null;let{buildId:E,params:T,nextConfig:v,parsedUrl:$,isDraftMode:C,prerenderManifest:I,routerServerContext:N,isOnDemandRevalidate:y,revalidateOnlyGenerated:O,resolvedPathname:x,clientReferenceManifest:U,serverActionsManifest:b}=r,P=(0,l.normalizeAppPath)(n),D=!!(I.dynamicRoutes[P]||I.routes[x]),q=async()=>((null==N?void 0:N.render404)?await N.render404(e,t,$,!1):t.end("This page could not be found"),null);if(D&&!C){let e=!!I.routes[x],t=I.dynamicRoutes[P];if(t&&!1===t.fallback&&!e){if(v.experimental.adapterPath)return await q();throw new w.NoFallbackError}}let M=null;!D||g.isDev||C||(M=x,M="/index"===M?"/":M);let k=!0===g.isDev||!D,H=D&&!k;b&&U&&(0,s.setReferenceManifestsSingleton)({page:n,clientReferenceManifest:U,serverActionsManifest:b,serverModuleMap:(0,u.createServerModuleMap)({serverActionsManifest:b})});let F=e.method||"GET",L=(0,o.getTracer)(),W=L.getActiveScopeSpan(),j={params:T,prerenderManifest:I,renderOpts:{experimental:{authInterrupts:!!v.experimental.authInterrupts},cacheComponents:!!v.cacheComponents,supportsDynamicResponse:k,incrementalCache:(0,d.getRequestMeta)(e,"incrementalCache"),cacheLifeProfiles:v.cacheLife,waitUntil:i.waitUntil,onClose:e=>{t.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(t,i,n)=>g.onRequestError(e,t,n,N)},sharedContext:{buildId:E}},B=new p.NodeNextRequest(e),V=new p.NodeNextResponse(t),K=c.NextRequestAdapter.fromNodeNextRequest(B,(0,c.signalFromNodeResponse)(t));try{let r=async e=>g.handle(K,j).finally(()=>{if(!e)return;e.setAttributes({"http.status_code":t.statusCode,"next.rsc":!1});let i=L.getRootSpanAttributes();if(!i)return;if(i.get("next.span_type")!==h.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${i.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let a=i.get("next.route");if(a){let t=`${F} ${a}`;e.setAttributes({"next.route":a,"http.route":a,"next.span_name":t}),e.updateName(t)}else e.updateName(`${F} ${n}`)}),s=!!(0,d.getRequestMeta)(e,"minimalMode"),u=async d=>{var o,u;let l=async({previousCacheEntry:a})=>{try{if(!s&&y&&O&&!a)return t.statusCode=404,t.setHeader("x-nextjs-cache","REVALIDATED"),t.end("This page could not be found"),null;let n=await r(d);e.fetchMetrics=j.renderOpts.fetchMetrics;let o=j.renderOpts.pendingWaitUntil;o&&i.waitUntil&&(i.waitUntil(o),o=void 0);let u=j.renderOpts.collectedTags;if(!D)return await (0,_.sendResponse)(B,V,n,j.renderOpts.pendingWaitUntil),null;{let e=await n.blob(),t=(0,f.toNodeOutgoingHttpHeaders)(n.headers);u&&(t[S.NEXT_CACHE_TAGS_HEADER]=u),!t["content-type"]&&e.type&&(t["content-type"]=e.type);let i=void 0!==j.renderOpts.collectedRevalidate&&!(j.renderOpts.collectedRevalidate>=S.INFINITE_CACHE)&&j.renderOpts.collectedRevalidate,a=void 0===j.renderOpts.collectedExpire||j.renderOpts.collectedExpire>=S.INFINITE_CACHE?void 0:j.renderOpts.collectedExpire;return{value:{kind:R.CachedRouteKind.APP_ROUTE,status:n.status,body:Buffer.from(await e.arrayBuffer()),headers:t},cacheControl:{revalidate:i,expire:a}}}}catch(t){throw(null==a?void 0:a.isStale)&&await g.onRequestError(e,t,{routerKind:"App Router",routePath:n,routeType:"route",revalidateReason:(0,m.getRevalidateReason)({isStaticGeneration:H,isOnDemandRevalidate:y})},N),t}},p=await g.handleResponse({req:e,nextConfig:v,cacheKey:M,routeKind:a.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:I,isRoutePPREnabled:!1,isOnDemandRevalidate:y,revalidateOnlyGenerated:O,responseGenerator:l,waitUntil:i.waitUntil,isMinimalMode:s});if(!D)return null;if((null==p||null==(o=p.value)?void 0:o.kind)!==R.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==p||null==(u=p.value)?void 0:u.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});s||t.setHeader("x-nextjs-cache",y?"REVALIDATED":p.isMiss?"MISS":p.isStale?"STALE":"HIT"),C&&t.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let c=(0,f.fromNodeOutgoingHttpHeaders)(p.value.headers);return s&&D||c.delete(S.NEXT_CACHE_TAGS_HEADER),!p.cacheControl||t.getHeader("Cache-Control")||c.get("Cache-Control")||c.set("Cache-Control",(0,A.getCacheControlHeader)(p.cacheControl)),await (0,_.sendResponse)(B,V,new Response(p.value.body,{headers:c,status:p.value.status||200})),null};W?await u(W):await L.withPropagatedContext(e.headers,()=>L.trace(h.BaseServerSpan.handleRequest,{spanName:`${F} ${n}`,kind:o.SpanKind.SERVER,attributes:{"http.method":F,"http.target":e.url}},u))}catch(t){if(t instanceof w.NoFallbackError||await g.onRequestError(e,t,{routerKind:"App Router",routePath:P,routeType:"route",revalidateReason:(0,m.getRevalidateReason)({isStaticGeneration:H,isOnDemandRevalidate:y})}),D)throw t;return await (0,_.sendResponse)(B,V,new Response(null,{status:500})),null}}e.s(["handler",()=>$,"patchFetch",()=>v,"routeModule",()=>g,"serverHooks",()=>N,"workAsyncStorage",()=>C,"workUnitAsyncStorage",()=>I]),i()}catch(e){i(e)}},!1)];

//# sourceMappingURL=_89b33c4b._.js.map