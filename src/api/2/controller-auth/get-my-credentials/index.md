---
layout: full.html.hbs
algolia: true
title: getMyCredentials
---

# getMyCredentials

{{{since "1.0.0"}}}

Returns the current user's credential information for the specified `<strategy>`. 

The data returned will depend on the specified strategy, and they should not include any sensitive information.

The result can be an empty object.

---

## Arguments

* `jwt` / HTTP `Authorization` header: valid authentication token
* `strategy`: name of the authentication strategy to retrieve

---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/credentials/<strategy>/_me
Method: GET  
Headers: Authorization: "Bearer <authentication token>"
```

### Other protocols

```json
{
  "controller": "auth",
  "action": "getMyCredentials",
  "strategy": "<strategy>",
  "jwt": "<authentication token>"
}
```

---

## Response

```javascript
// example with a "local" authentication

{
  "status": 200,
  "error": null,
  "action": "getMyCredentials",
  "controller": "auth",
  "result": {
    "username": "MyUser",
    "kuid": "<kuid>"
  }
}
```
