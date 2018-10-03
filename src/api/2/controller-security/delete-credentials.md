---
layout: full.html.hbs
algolia: true
title: deleteCredentials
---


# deleteCredentials

{{{since "1.0.0"}}}



---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/credentials/<strategy>/<kuid>
Method: DELETE  
```

### Other protocols

```js
{
  "controller": "security",
  "action": "deleteCredentials",
  "strategy": "<strategy>",
  "_id": "<kuid>"
}
```

---

## Response

```javascript
{
  "status": 200,
  "error": null,
  "action": "deleteCredentials",
  "controller": "security",
  "_id": "<kuid>",
  "result": {
    "acknowledged": true
  }
}
```

Delete credentials of user with [`<kuid>`]({{ site_base_path }}guide/essentials/user-authentication/#kuzzle-user-identifier-kuid) for the specified `<strategy>`.
