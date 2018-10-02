---
layout: full.html.hbs
algolia: true

title: getProfileMapping
---


# getProfileMapping

{{{since "1.0.0"}}}



---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/profiles/_mapping
Method: GET
```

### Other protocols

```json
{
  "controller": "security",
  "action": "getProfileMapping"
}
```

---

## Response

```javascript
{
  "status": 200,                     
  "error": null,                     
  "controller": "security",
  "action": "getProfileMapping",
  "requestId": "<unique request identifier>",
  "result": {
    "mapping": {
      ...
    }
  }
}
```

Gets the mapping of the internal security `profiles` collection.
