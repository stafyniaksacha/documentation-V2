---
layout: full.html.hbs
algolia: true
title: credentialsExist
---

# credentialsExist

{{{since "1.0.0"}}}

Check that the current user has credentials for the specified `<strategy>`.

---

## Arguments

* `jwt` / HTTP `Authorization` header: valid authentication token
* `strategy`: name of the authentication strategy to be tested

---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/credentials/<strategy>/_me/_exists
Method: GET  
Headers: Authorization: "Bearer <authentication token>"
```

### Other protocols

```json
{
  "controller": "auth",
  "action": "credentialsExist",
  "strategy": "<strategy>",
  "jwt": "<authentication token>"
}
```

---

## Response

```json
{
  "status": 200,
  "error": null,
  "action": "credentialsExist",
  "controller": "auth",
  "result": true
}
```
