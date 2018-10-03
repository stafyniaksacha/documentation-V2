---
layout: full.html.hbs
algolia: true
title: hasCredentials
---


# hasCredentials

{{{since "1.0.0"}}}



---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/credentials/<strategy>/<kuid>/_exists
Method: GET  
```

### Other protocols

```js
{
  "controller": "security",
  "action": "hasCredentials",
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
  "action": "hasCredentials",
  "controller": "security",
  "_id": "<kuid>",
  "result": true
}
```

Check the existence of a user's (with [`<kuid>`]({{ site_base_path }}guide/essentials/user-authentication/#kuzzle-user-identifier-kuid)) credentials for the specified `<strategy>`.
