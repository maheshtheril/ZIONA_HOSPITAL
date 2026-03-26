module.exports=[522734,(a,b,c)=>{b.exports=a.x("fs",()=>require("fs"))},889650,a=>{"use strict";let b={};function c(){return b}a.s(["getDefaultOptions",()=>c])},399602,696818,18956,a=>{"use strict";let b=Symbol.for("constructDateFrom");function c(a,c){return"function"==typeof a?a(c):a&&"object"==typeof a&&b in a?a[b](c):a instanceof Date?new a.constructor(c):new Date(c)}function d(a,b){return c(b||a,a)}a.s(["constructFromSymbol",0,b,"millisecondsInDay",0,864e5,"millisecondsInHour",0,36e5,"millisecondsInWeek",0,6048e5,"minutesInDay",0,1440,"minutesInMonth",0,43200],696818),a.s(["constructFrom",()=>c],18956),a.s(["toDate",()=>d],399602)},868023,979309,247355,a=>{"use strict";let b={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function c(a){return (b={})=>{let c=b.width?String(b.width):a.defaultWidth;return a.formats[c]||a.formats[a.defaultWidth]}}let d={date:c({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:c({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:c({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},e={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function f(a){return(b,c)=>{let d;if("formatting"===(c?.context?String(c.context):"standalone")&&a.formattingValues){let b=a.defaultFormattingWidth||a.defaultWidth,e=c?.width?String(c.width):b;d=a.formattingValues[e]||a.formattingValues[b]}else{let b=a.defaultWidth,e=c?.width?String(c.width):a.defaultWidth;d=a.values[e]||a.values[b]}return d[a.argumentCallback?a.argumentCallback(b):b]}}let g={ordinalNumber:(a,b)=>{let c=Number(a),d=c%100;if(d>20||d<10)switch(d%10){case 1:return c+"st";case 2:return c+"nd";case 3:return c+"rd"}return c+"th"},era:f({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:f({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:a=>a-1}),month:f({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:f({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:f({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function h(a){return(b,c={})=>{let d,e=c.width,f=e&&a.matchPatterns[e]||a.matchPatterns[a.defaultMatchWidth],g=b.match(f);if(!g)return null;let h=g[0],i=e&&a.parsePatterns[e]||a.parsePatterns[a.defaultParseWidth],j=Array.isArray(i)?function(a,b){for(let c=0;c<a.length;c++)if(b(a[c]))return c}(i,a=>a.test(h)):function(a,b){for(let c in a)if(Object.prototype.hasOwnProperty.call(a,c)&&b(a[c]))return c}(i,a=>a.test(h));return d=a.valueCallback?a.valueCallback(j):j,{value:d=c.valueCallback?c.valueCallback(d):d,rest:b.slice(h.length)}}}let i={ordinalNumber:(j={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:a=>parseInt(a,10)},(a,b={})=>{let c=a.match(j.matchPattern);if(!c)return null;let d=c[0],e=a.match(j.parsePattern);if(!e)return null;let f=j.valueCallback?j.valueCallback(e[0]):e[0];return{value:f=b.valueCallback?b.valueCallback(f):f,rest:a.slice(d.length)}}),era:h({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:h({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:a=>a+1}),month:h({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:h({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:h({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};a.s(["defaultLocale",0,{code:"en-US",formatDistance:(a,c,d)=>{let e,f=b[a];if(e="string"==typeof f?f:1===c?f.one:f.other.replace("{{count}}",c.toString()),d?.addSuffix)if(d.comparison&&d.comparison>0)return"in "+e;else return e+" ago";return e},formatLong:d,formatRelative:(a,b,c,d)=>e[a],localize:g,match:i,options:{weekStartsOn:0,firstWeekContainsDate:1}}],868023);var j,k=a.i(399602);function l(a){let b=(0,k.toDate)(a),c=new Date(Date.UTC(b.getFullYear(),b.getMonth(),b.getDate(),b.getHours(),b.getMinutes(),b.getSeconds(),b.getMilliseconds()));return c.setUTCFullYear(b.getFullYear()),a-c}a.s(["getTimezoneOffsetInMilliseconds",()=>l],979309);var m=a.i(18956);function n(a,...b){let c=m.constructFrom.bind(null,a||b.find(a=>"object"==typeof a));return b.map(c)}a.s(["normalizeDates",()=>n],247355)},533652,a=>{"use strict";a.i(12208);var b=a.i(815625);function c(a){return b.CURRENCY_SYMBOLS[a?.toUpperCase()]||b.SYSTEM_DEFAULT_CURRENCY_SYMBOL}function d(a){return b.CURRENCY_CODES[a?.toUpperCase()]||b.SYSTEM_DEFAULT_CURRENCY_CODE}function e(a,c="USD",d=2){let f=c?.toUpperCase();return function(a,b="₹",c=2){let d=function(a,b=2){return null==a?"0.00":new Intl.NumberFormat("en-IN",{minimumFractionDigits:b,maximumFractionDigits:b}).format(a)}(a,c);return 1===b.length||"A$"===b||"C$"===b||"S$"===b?`${b}${d}`:`${d} ${b}`}(a,"INR"===f||"IN"===f?"₹":"USD"===f||"US"===f?"$":"GBP"===f||"GB"===f?"£":"EUR"===f||"EU"===f?"€":"AED"===f||"AE"===f?"AED":"SAR"===f||"SA"===f?"SAR":"AUD"===f||"AU"===f?"A$":"CAD"===f||"CA"===f?"C$":b.CURRENCY_SYMBOLS[f]||b.SYSTEM_DEFAULT_CURRENCY_SYMBOL,d)}a.s(["formatCurrency",()=>e,"getCurrencyCode",()=>d,"getCurrencySymbol",()=>c],533652)},621288,a=>a.a(async(b,c)=>{try{var d=a.i(137936),e=a.i(577607),f=a.i(766518),g=a.i(118558),h=a.i(713095),i=b([e,f]);async function j(a){try{let b=await (0,e.auth)();if(!b?.user)return{success:!1,error:"Unauthorized"};let{tenantId:c,patientId:d,encounterId:h,height:i,weight:j,temperature:k,pulse:l,systolic:m,diastolic:n,spo2:o,respiration:p,notes:q}=a,r=await f.prisma.hms_vitals.findFirst({where:{encounter_id:h}});r?await f.prisma.hms_vitals.update({where:{id:r.id},data:{height:i?parseFloat(i):null,weight:j?parseFloat(j):null,temperature:k?parseFloat(k):null,pulse:l?parseInt(l):null,systolic:m?parseInt(m):null,diastolic:n?parseInt(n):null,spo2:o?parseInt(o):null,respiration:p?parseInt(p):null,notes:q||null}}):await f.prisma.$executeRaw`
                INSERT INTO hms_vitals (
                    id, tenant_id, company_id, patient_id, encounter_id,
                    height, weight, temperature, pulse, systolic, diastolic, spo2, respiration, notes
                ) VALUES (
                    gen_random_uuid(),
                    ${c}::uuid,
                    ${b.user.companyId||c}::uuid,
                    ${d}::uuid,
                    ${h}::uuid,
                    ${i?parseFloat(i):null},
                    ${j?parseFloat(j):null},
                    ${k?parseFloat(k):null},
                    ${l?parseInt(l):null},
                    ${m?parseInt(m):null},
                    ${n?parseInt(n):null},
                    ${o?parseInt(o):null},
                    ${p?parseInt(p):null},
                    ${q||null}
                )
            `;let s=await f.prisma.hms_appointments.findUnique({where:{id:h},select:{status:!0}});return s&&"scheduled"===s.status&&await f.prisma.hms_appointments.update({where:{id:h},data:{status:"arrived"}}),(0,g.revalidatePath)("/hms/nursing"),(0,g.revalidatePath)("/hms/nursing/"+h),(0,g.revalidatePath)("/hms/doctor/dashboard"),(0,g.revalidatePath)("/hms/reception/dashboard"),{success:!0}}catch(a){return console.error("Save Vitals Error:",a),{success:!1,error:a instanceof Error?a.message:"Failed to save vitals"}}}async function k(a){try{let b=await (0,e.auth)();if(!b?.user)return null;return await f.prisma.hms_vitals.findFirst({where:{encounter_id:a}})}catch(a){return console.error("Fetch Vitals Error:",a),null}}[e,f]=i.then?(await i)():i,(0,h.ensureServerEntryExports)([j,k]),(0,d.registerServerReference)(j,"40b6c9983737c43ff78b8545d8038a17f07f562f02",null),(0,d.registerServerReference)(k,"40a4cedeb8c5c1a510d4ba4385d50e3e970044e0f3",null),a.s(["getVitals",()=>k,"saveVitals",()=>j]),c()}catch(a){c(a)}},!1),356264,a=>a.a(async(b,c)=>{try{var d=a.i(137936),e=a.i(577607),f=a.i(766518),g=a.i(118558),h=a.i(254799),i=a.i(713095),j=b([e,f]);async function k(a){let b=await (0,e.auth)();if(!b?.user?.id)return{error:"Unauthorized"};let{companyId:c,tenantId:d,id:h}=b.user;if(!c||!d)return{error:"Review Account Settings: No Company/Tenant ID"};if(!a.productId||a.quantity<=0)return{error:"Invalid Data: Product and Quantity required"};try{let b=(await f.prisma.$queryRaw`
            SELECT id, tenant_id, company_id, name, code, location_type::text as location_type 
            FROM hms_stock_location 
            WHERE company_id::text = CAST(${c} AS text)
            AND (code = 'WH-MAIN' OR location_type::text = 'warehouse')
            LIMIT 1
        `)[0];b||(b=(await f.prisma.$queryRaw`
                SELECT id, tenant_id, company_id, name, code, location_type::text as location_type 
                FROM hms_stock_location 
                WHERE company_id::text = CAST(${c} AS text)
                LIMIT 1
            `)[0]),b||(b=(await f.prisma.$queryRaw`
                INSERT INTO hms_stock_location (
                    id, tenant_id, company_id, name, code, location_type
                ) VALUES (
                    gen_random_uuid(),
                    CAST(${d} AS uuid),
                    CAST(${c} AS uuid),
                    'Main Warehouse',
                    'WH-MAIN',
                    'warehouse'
                )
                RETURNING *
            `)[0]);let e=b.id;if(!e)return{error:"Stock Location not found or could not be created"};return await f.prisma.$transaction(async b=>{let f=await b.hms_product.findUnique({where:{id:a.productId}});if(!f)throw Error("Product not found");await b.$executeRaw`
                INSERT INTO hms_stock_move (
                    id, tenant_id, company_id, product_id, 
                    location_from, location_to, qty, uom, 
                    move_type, source, source_reference, created_by
                ) VALUES (
                    gen_random_uuid(),
                    CAST(${d} AS uuid),
                    CAST(${c} AS uuid),
                    CAST(${a.productId} AS uuid),
                    CAST(${e||null} AS uuid),
                    NULL,
                    ${a.quantity},
                    ${f.uom||"Unit"},
                    'out',
                    'Nursing Consumption',
                    CAST(${a.encounterId||null} AS uuid),
                    CAST(${h||null} AS uuid)
                )
            `,await b.$executeRaw`
                INSERT INTO hms_stock_ledger (
                    id, tenant_id, company_id, product_id,
                    related_type, related_id, movement_type,
                    qty, uom, from_location_id, reference, metadata
                ) VALUES (
                    gen_random_uuid(),
                    CAST(${d} AS uuid),
                    CAST(${c} AS uuid),
                    CAST(${a.productId} AS uuid),
                    'hms_encounter',
                    CAST(${a.encounterId||null} AS uuid),
                    'out',
                    ${a.quantity},
                    ${f.uom||"Unit"},
                    CAST(${e||null} AS uuid),
                    ${`Patient: ${a.patientId}`},
                    ${JSON.stringify({notes:a.notes||"",patient_id:a.patientId})}::jsonb
                )
            `;let g=await b.$queryRaw`
                SELECT id::text as id FROM hms_stock_levels 
                WHERE tenant_id::text = CAST(${d} AS text)
                AND company_id::text = CAST(${c} AS text)
                AND product_id::text = CAST(${a.productId} AS text)
                AND location_id::text = CAST(${e} AS text)
                AND batch_id IS NULL
                LIMIT 1
            `;g.length>0?await b.$executeRaw`
                    UPDATE hms_stock_levels 
                    SET quantity = quantity - CAST(${a.quantity} AS numeric),
                        updated_at = NOW()
                    WHERE id::text = CAST(${g[0].id} AS text)
                `:await b.$executeRaw`
                    INSERT INTO hms_stock_levels (
                        id, tenant_id, company_id, product_id, location_id, quantity, updated_at, reserved
                    ) VALUES (
                        gen_random_uuid(),
                        CAST(${d} AS uuid),
                        CAST(${c} AS uuid),
                        CAST(${a.productId} AS uuid),
                        CAST(${e} AS uuid),
                        CAST(${-a.quantity} AS numeric),
                        NOW(),
                        0
                    )
                `}),(0,g.revalidatePath)("/hms/nursing/dashboard"),(0,g.revalidatePath)("/hms/nursing/inventory/usage"),{success:!0}}catch(a){return console.error("Consume Stock Error:",a),{error:a.message||"Failed to record usage"}}}async function l(a){let b=await (0,e.auth)();if(!b?.user?.id)return{error:"Unauthorized"};let{companyId:c,tenantId:d,id:i}=b.user;if(!c||!d)return{error:"Review Account Settings: No Company/Tenant ID"};if(!a.items||0===a.items.length)return{error:"No items to record"};try{let b=(await f.prisma.$queryRaw`
            SELECT id, tenant_id, company_id, name, code, location_type::text as location_type 
            FROM hms_stock_location 
            WHERE company_id::text = CAST(${c} AS text)
            AND (code = 'WH-MAIN' OR location_type::text = 'warehouse')
            LIMIT 1
        `)[0];b||(b=(await f.prisma.$queryRaw`
                SELECT id, tenant_id, company_id, name, code, location_type::text as location_type 
                FROM hms_stock_location 
                WHERE company_id::text = CAST(${c} AS text)
                LIMIT 1
            `)[0]),b||(b=(await f.prisma.$queryRaw`
                INSERT INTO hms_stock_location (
                    id, tenant_id, company_id, name, code, location_type
                ) VALUES (
                    gen_random_uuid(),
                    CAST(${d} AS uuid),
                    CAST(${c} AS uuid),
                    'Main Warehouse',
                    'WH-MAIN',
                    'warehouse'
                )
                RETURNING *
            `)[0]);let e=b.id;if(!e)return{error:"Stock Location not found or could not be created"};let j=new Map,k=a.items.map(a=>a.productId);return(await f.prisma.hms_product.findMany({where:{id:{in:k}},include:{hms_product_price_history:{orderBy:{valid_from:"desc"},take:1}}})).forEach(a=>j.set(a.id,a)),await f.prisma.$transaction(async b=>{for(let f of a.items){if(f.quantity<=0)continue;let g=j.get(f.productId);if(!g)throw Error(`Product ID ${f.productId} not found`);await b.$executeRaw`
                    INSERT INTO hms_stock_move (
                        id, tenant_id, company_id, product_id, 
                        location_from, location_to, qty, uom, 
                        move_type, source, source_reference, created_by
                    ) VALUES (
                        gen_random_uuid(),
                        CAST(${d} AS uuid),
                        CAST(${c} AS uuid),
                        CAST(${f.productId} AS uuid),
                        CAST(${e||null} AS uuid),
                        NULL,
                        ${f.quantity},
                        ${g.uom||"Unit"},
                        'out',
                        'Nursing Consumption',
                        CAST(${a.encounterId||null} AS uuid),
                        CAST(${i||null} AS uuid)
                    )
                `,await b.$executeRaw`
                    INSERT INTO hms_stock_ledger (
                        id, tenant_id, company_id, product_id,
                        related_type, related_id, movement_type,
                        qty, uom, from_location_id, reference, metadata
                    ) VALUES (
                        gen_random_uuid(),
                        CAST(${d} AS uuid),
                        CAST(${c} AS uuid),
                        CAST(${f.productId} AS uuid),
                        'hms_encounter',
                        CAST(${a.encounterId||null} AS uuid),
                        'out',
                        ${f.quantity},
                        ${g.uom||"Unit"},
                        CAST(${e||null} AS uuid),
                        ${`Patient: ${a.patientId}`},
                        ${JSON.stringify({notes:f.notes||"",patient_id:a.patientId})}::jsonb
                    )
                `;let h=await b.$queryRaw`
                    SELECT id::text as id FROM hms_stock_levels 
                    WHERE tenant_id::text = CAST(${d} AS text)
                    AND company_id::text = CAST(${c} AS text)
                    AND product_id::text = CAST(${f.productId} AS text)
                    AND location_id::text = CAST(${e} AS text)
                    AND batch_id IS NULL
                    LIMIT 1
                `;h.length>0?await b.$executeRaw`
                        UPDATE hms_stock_levels 
                        SET quantity = quantity - CAST(${f.quantity} AS numeric),
                            updated_at = NOW()
                        WHERE id::text = CAST(${h[0].id} AS text)
                    `:await b.$executeRaw`
                        INSERT INTO hms_stock_levels (
                            id, tenant_id, company_id, product_id, location_id, quantity, updated_at, reserved
                        ) VALUES (
                            gen_random_uuid(),
                            CAST(${d} AS uuid),
                            CAST(${c} AS uuid),
                            CAST(${f.productId} AS uuid),
                            CAST(${e} AS uuid),
                            CAST(${-f.quantity} AS numeric),
                            NOW(),
                            0
                        )
                    `}let f=await b.$queryRaw`
                SELECT id::text FROM hms_invoice 
                WHERE company_id::text = CAST(${c} AS text)
                AND appointment_id::text = CAST(${a.encounterId} AS text)
                AND status::text = 'draft'
                LIMIT 1
            `,g=f[0]?.id;if(!g){let e=new Date().toISOString().slice(2,10).replace(/-/g,""),f=Math.floor(1e3*Math.random()).toString().padStart(3,"0"),j=`INV-${e}-${f}`;g=h.default.randomUUID(),await b.$executeRaw`
                    INSERT INTO hms_invoice (
                        id, tenant_id, company_id, patient_id, appointment_id,
                        invoice_number, invoice_no, invoice_date, issued_at,
                        status, currency, total, subtotal, total_tax, 
                        outstanding_amount, outstanding, created_by
                    ) VALUES (
                        CAST(${g} AS uuid),
                        CAST(${d} AS uuid),
                        CAST(${c} AS uuid),
                        CAST(${a.patientId} AS uuid),
                        CAST(${a.encounterId} AS uuid),
                        ${j},
                        ${j},
                        CURRENT_DATE,
                        NOW(),
                        'draft',
                        'INR',
                        0, 0, 0, 0, 0,
                        CAST(${i} AS uuid)
                    )
                `}let k=await b.$queryRaw`
                SELECT COALESCE(MAX(line_idx), 0) as max_idx 
                FROM hms_invoice_lines 
                WHERE invoice_id::text = CAST(${g} AS text)
            `,l=Number(k[0].max_idx)+1;for(let e of a.items){let a=j.get(e.productId);if(!a)continue;let f=a.hms_product_price_history?.[0]?.price?.toNumber()||Number(a.price)||0,h=f*e.quantity;await b.$executeRaw`
                    INSERT INTO hms_invoice_lines (
                        id, tenant_id, company_id, invoice_id, line_idx,
                        product_id, description, quantity, unit_price, net_amount, metadata
                    ) VALUES (
                        gen_random_uuid(),
                        CAST(${d} AS uuid),
                        CAST(${c} AS uuid),
                        CAST(${g} AS uuid),
                        ${l++},
                        CAST(${a.id} AS uuid),
                        ${`(Nursing) ${a.name}`},
                        ${e.quantity},
                        ${f},
                        ${h},
                        ${JSON.stringify({source:"nursing_consumption"})}::jsonb
                    )
                `}let m=await b.$queryRaw`
                SELECT 
                    SUM(net_amount) as subtotal,
                    SUM(tax_amount) as total_tax
                FROM hms_invoice_lines 
                WHERE invoice_id::text = CAST(${g} AS text)
            `,n=Number(m[0].subtotal||0),o=Number(m[0].total_tax||0),p=n+o;await b.$executeRaw`
                UPDATE hms_invoice 
                SET subtotal = ${n},
                    total_tax = ${o},
                    total = ${p},
                    outstanding_amount = ${p},
                    outstanding = ${p},
                    updated_at = NOW()
                WHERE id::text = CAST(${g} AS text)
            `}),(0,g.revalidatePath)("/hms/nursing/dashboard"),(0,g.revalidatePath)("/hms/nursing/inventory/usage"),(0,g.revalidatePath)("/hms/billing"),{success:!0}}catch(a){return console.error("Consume Bulk Stock Error:",a),{error:a.message||"Failed to record usage"}}}[e,f]=j.then?(await j)():j,(0,i.ensureServerEntryExports)([k,l]),(0,d.registerServerReference)(k,"40033471ee6db720568a9997292c5af9c8ec44b368",null),(0,d.registerServerReference)(l,"40c660c52d06ca00b4d776e31d2bf7a199f0d5484d",null),a.s(["consumeStockBulk",()=>l]),c()}catch(a){c(a)}},!1),263813,a=>a.a(async(b,c)=>{try{var d=a.i(137936),e=a.i(577607),f=a.i(766518),g=a.i(713095),h=b([e,f]);async function i(a){let b=await (0,e.auth)();if(!b?.user?.id)return{error:"Unauthorized"};let c=await f.prisma.hms_stock_move.findMany({where:{source_reference:a,source:"Nursing Consumption"},orderBy:{created_at:"desc"}}),d=[...new Set(c.map(a=>a.created_by).filter(a=>null!==a))],g=await f.prisma.app_user.findMany({where:{id:{in:d}},select:{id:!0,name:!0,full_name:!0}}),h=new Map(g.map(a=>[a.id,a.full_name||a.name||"Unknown"])),i=[...new Set(c.map(a=>a.product_id))],j=await f.prisma.hms_product.findMany({where:{id:{in:i}},select:{id:!0,name:!0}}),k=new Map(j.map(a=>[a.id,a.name])),l=(await f.prisma.hms_invoice.findMany({where:{appointment_id:a},select:{status:!0,invoice_number:!0},orderBy:{created_at:"desc"},take:1}))[0],m=l?l.status:"Pending",n=l?l.invoice_number:void 0,o=[];return c.forEach(a=>{let b=new Date(a.created_at).getTime(),c=o.find(c=>2e3>Math.abs(new Date(c.timestamp).getTime()-b)&&c.nurseId===a.created_by);c||(c={id:a.id,timestamp:a.created_at,nurseName:h.get(a.created_by||"")||"Unknown Nurse",nurseId:a.created_by,status:m,invoiceNumber:n,items:[]},o.push(c)),c.items.push({productName:k.get(a.product_id)||"Unknown Item",quantity:a.qty.toNumber(),uom:a.uom})}),o.sort((a,b)=>new Date(b.timestamp).getTime()-new Date(a.timestamp).getTime()),{data:o}}[e,f]=h.then?(await h)():h,(0,g.ensureServerEntryExports)([i]),(0,d.registerServerReference)(i,"404f6bac6fc445f27612a73563e0eabf44759123ed",null),a.s(["getConsumptionHistory",()=>i]),c()}catch(a){c(a)}},!1),356762,a=>a.a(async(b,c)=>{try{var d=a.i(481625),e=a.i(617667),f=a.i(513955),g=a.i(945064),h=a.i(803176),i=a.i(719789),j=a.i(151798),k=a.i(621288),l=a.i(356264),m=a.i(263813),n=a.i(404123),o=b([d,e,f,g,h,i,j,k,l,m,n]);[d,e,f,g,h,i,j,k,l,m,n]=o.then?(await o)():o,a.s([]),c()}catch(a){c(a)}},!1),934512,a=>a.a(async(b,c)=>{try{var d=a.i(356762),e=a.i(481625),f=a.i(617667),g=a.i(513955),h=a.i(945064),i=a.i(803176),j=a.i(719789),k=a.i(151798),l=a.i(621288),m=a.i(356264),n=a.i(263813),o=a.i(404123),p=b([d,e,f,g,h,i,j,k,l,m,n,o]);[d,e,f,g,h,i,j,k,l,m,n,o]=p.then?(await p)():p,a.s(["000da21a3d832a98b95628ea99049903dbdc6fb406",()=>g.seedRolesAndPermissions,"0025c2d23c46cc2b674fa788d9f06225e6adfa30cd",()=>j.logout,"0044ce07c1a5f0d3de2bf9c9ea0db5aa0f4bfa7064",()=>k.getUserProfile,"004b45fe7478b8bc03935ae718617c9a508c437fbe",()=>i.getTenant,"007d011dffeb718d909981ce49b0028643aef3fc79",()=>g.getRoles,"008fb9f01247ca0fc5c68211a09722eba3d5ba9860",()=>g.getAllPermissions,"009c9fcb77bdf8037fa4fc66675bf3ba4ce5276f56",()=>f.getMenuItems,"009f740fed13ef3f494cc2819e6555a7fb76bbc78d",()=>f.auditAndFixMenuPermissions,"00da0ca2d954ea3b06869c3e7719891ca075057a18",()=>h.getCurrentCompany,"00eb031fd1df14c944547b09053c6395a40f504300",()=>h.getTenantCompanies,"404d192ac0cf83d88b21805476a3f1b09748a00d44",()=>g.getUserPermissions,"404f6bac6fc445f27612a73563e0eabf44759123ed",()=>n.getConsumptionHistory,"405ff75c55b25fc7e3ad181ab6a6d0cab5baef74e4",()=>h.getBranches,"4082bde4c5e286d20c3d3c358cbcf14befe18e630a",()=>g.checkPermission,"40a20ff026b43d44a2c525b2ea366b4add79ceef2e",()=>h.switchCompany,"40a4cedeb8c5c1a510d4ba4385d50e3e970044e0f3",()=>l.getVitals,"40abcf8936e7eded4647cc66fc5fd647e454d1f322",()=>h.switchBranch,"40b6c9983737c43ff78b8545d8038a17f07f562f02",()=>l.saveVitals,"40c660c52d06ca00b4d776e31d2bf7a199f0d5484d",()=>m.consumeStockBulk,"40d456d05ed4e3803eeeca36440bf18173652030a4",()=>e.getTenantBrandingByHost,"40d48e6653d9f92263578e88a775cf482e08bd8164",()=>g.createRole,"40de58e5712729666ae9510ee6801d6c86692aee82",()=>g.deleteRole,"40f3984b38829c6d252e265bfa0f3ce0a5517d077e",()=>h.createCompany,"600ab5bd542e11f6fa3b0bc34f4e53b34608794118",()=>g.updateRole,"705fd1bd2d7426a45749b4d421861a1dcaefc9a103",()=>o.getProductsPremium]),c()}catch(a){c(a)}},!1),761015,a=>{a.v(b=>Promise.all(["server/chunks/ssr/src_lib_d5572a00._.js"].map(b=>a.l(b))).then(()=>b(382651)))}];

//# sourceMappingURL=%5Broot-of-the-server%5D__1533ab97._.js.map