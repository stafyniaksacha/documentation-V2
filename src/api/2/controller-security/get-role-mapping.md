---
layout: full.html.hbs
algolia: true
title: getRoleMapping
---


# getRoleMapping

{{{since "1.0.0"}}}



---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/roles/_mapping
Method: GET
```

### Other protocols

```js
{
  "controller": "security",
  "action": "getRoleMapping"
}
```

---

## Response

```javascript
{
  "status": 200,                     
  "error": null,                     
  "controller": "security",
  "action": "getRoleMapping",
  "requestId": "<unique request identifier>",
  "result": {
    "mapping": {
      ...
    }
  }
}
```

Gets the mapping of the internal `roles` collection.
