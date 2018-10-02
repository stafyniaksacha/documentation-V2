---
layout: full.html.hbs
algolia: true
title: validateMyCredentials
---

# validateMyCredentials

{{{since "1.0.0"}}}

Validate the current user's credentials for the specified `<strategy>`. The `result` field is `true` if the provided credentials are valid; otherwise an error is triggered.

This route does not actually create or modify the user's credentials. The credentials to send will depend on the authentication plugin and authentication strategy.

---

## Arguments

* `jwt` / HTTP `Authorization` header: valid authentication token
* `strategy`: name of the authentication strategy used to validate the provided credentials

---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/credentials/<strategy>/_me/_validate
Method: POST  
Headers: Authorization: "Bearer <authentication token>"  
Body:
```

```js
{
  // example with the "local" authentication strategy
  "username": "MyUser",
  "password": "MyPassword"
}
```

### Other protocols

```json
{
  "controller": "auth",
  "action": "validateMyCredentials",
  "strategy": "<strategy>",
  "jwt": "<authentication token>",
  "body": {
    "username": "MyUser",
    "password": "MyPassword"
  }
}
```

---

## Response

```json
{
  "status": 200,
  "error": null,
  "action": "validateMyCredentials",
  "controller": "auth",
  "result": true
}
```
