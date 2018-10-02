---
layout: full.html.hbs
algolia: true
title: logout
---

# logout

{{{since "1.0.0"}}}

Revoke the provided authentication token.

If there were any, real-time subscriptions are cancelled.

---

## Arguments

* `jwt` / HTTP `Authorization` header: valid authentication token

---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/_logout
Method: POST  
Headers: Authorization: "Bearer <authentication token>"
```

### Other protocols


```json
{
  "controller": "auth",
  "action": "logout",
  "jwt": "<authentication token>"
}
```

---

## Response

```json
{
  "status": 200,
  "error": null,
  "controller": "auth",
  "action": "logout",
  "requestId": "<unique request identifier>",
  "volatile": {},
  "result": {}
}
```
