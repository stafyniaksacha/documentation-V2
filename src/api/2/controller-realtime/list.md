---
layout: full.html.hbs
algolia: true
title: list
---


# list

{{{since "1.0.0"}}}


---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/_listSubscriptions
Method: GET
```

### Other protocols


```js
{
  "controller": "realtime",
  "action": "list"
}
```

---

## Response

```javascript
{
  "error": null,
  "status": 200,
  "index": "<index>",
  "collection": "<collection>",
  "controller": "realtime",
  "action": "list",
  "volatile": {},
  "requestId": "<unique request identifier>",
  "result": {
    "<index>": {
      "<collection>": {
        "afcd909773f197ab859447594bfbd154": 12,
        "4adbc1948ac4dc84ac89d14b488bcad1": 4,
        ...
      },
      "<anotherCollection>": {
        "bcd4ab54cdb4ad5b464ba4cd4564dc46": 1,
        ...
      },
      ...
    },
    "<anotherIndex>": {
      ...
    },
    ...
  },
}
```

Lists all subscriptions on all indexes and all collections.
