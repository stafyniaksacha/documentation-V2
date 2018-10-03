---
layout: full.html.hbs
algolia: true

title: adminExists
---

# adminExists

{{{since "1.0.0"}}}


---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/_adminExists
Method: GET
```

### Other protocols


```js
{
  "controller": "server",
  "action": "adminExists"
}
```

---

## Response

```javascript
{
  "status": 200,                     
  "error": null,                     
  "index": "<index>",
  "action": "adminExists",
  "controller": "server",
  "requestId": "<unique request identifier>",
  "result": {
    "exists": true
  }
}
```

Checks if an administrator account has been created, return `true` if it exists and `false` if it does not.
