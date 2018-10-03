---
layout: full.html.hbs
algolia: true

title: getUserMapping
---


# getUserMapping

{{{since "1.0.0"}}}



---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/users/_mapping
Method: GET
```

### Other protocols

```js
{
  "controller": "security",
  "action": "getUserMapping"
}
```

---

## Response

```javascript
{
  "status": 200,                     
  "error": null,                     
  "controller": "security",
  "action": "getUserMapping",
  "requestId": "<unique request identifier>",
  "result": {
    "mapping": {
      ...
    }
  }
}
```

Gets the mapping of the internal `users` collection.
