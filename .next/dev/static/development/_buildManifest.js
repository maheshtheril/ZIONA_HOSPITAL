self.__BUILD_MANIFEST = {
  "__rewrites": {
    "afterFiles": [],
    "beforeFiles": [
      {
        "has": [
          {
            "type": "header",
            "key": "next-url",
            "value": "/hms(?:/.*)?"
          }
        ],
        "source": "/hms/prescriptions/new",
        "destination": "/hms/(.)prescriptions/new"
      },
      {
        "has": [
          {
            "type": "header",
            "key": "next-url",
            "value": "/hms/billing(?:/.*)?"
          }
        ],
        "source": "/hms/billing/new",
        "destination": "/hms/billing/(.)new"
      },
      {
        "has": [
          {
            "type": "header",
            "key": "next-url",
            "value": "/hms(?:/.*)?"
          }
        ],
        "source": "/hms/prescriptions/new",
        "destination": "/hms/(.)prescriptions/new"
      },
      {
        "has": [
          {
            "type": "header",
            "key": "next-url",
            "value": "/hms/billing(?:/.*)?"
          }
        ],
        "source": "/hms/billing/:nxtIid/edit",
        "destination": "/hms/billing/(.):nxtIid/edit"
      },
      {
        "has": [
          {
            "type": "header",
            "key": "next-url",
            "value": "/hms/billing(?:/.*)?"
          }
        ],
        "source": "/hms/billing/new",
        "destination": "/hms/billing/(.)new"
      },
      {
        "has": [
          {
            "type": "header",
            "key": "next-url",
            "value": "/hms(?:/.*)?"
          }
        ],
        "source": "/hms/prescriptions/new",
        "destination": "/hms/(.)prescriptions/new"
      },
      {
        "has": [
          {
            "type": "header",
            "key": "next-url",
            "value": "/hms/billing(?:/.*)?"
          }
        ],
        "source": "/hms/billing/:nxtIid/edit",
        "destination": "/hms/billing/(.):nxtIid/edit"
      },
      {
        "has": [
          {
            "type": "header",
            "key": "next-url",
            "value": "/hms/billing(?:/.*)?"
          }
        ],
        "source": "/hms/billing/new",
        "destination": "/hms/billing/(.)new"
      }
    ],
    "fallback": []
  },
  "sortedPages": [
    "/_app",
    "/_error"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()