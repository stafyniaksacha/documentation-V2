---
layout: full.html.hbs
algolia: true
title: createMyCredentials
---

# createMyCredentials

{{{since "1.0.0"}}}

Create the current user's credentials for the specified `<strategy>`. The credentials to send will depend on the authentication plugin and the authentication strategy.

---

## Arguments

* `jwt` / HTTP `Authorization` header: valid authentication token
* `strategy`: name of the authentication strategy to create

---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/credentials/<strategy>/_me/_create
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
  "action": "createMyCredentials",
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

Example with the "local" authentication strategy:

```json
{
  "status": 200,
  "error": null,
  "action": "createMyCredentials",
  "controller": "auth",
  "result": {
    "username": "MyUser",
    "kuid": "<kuid>"
  }
}
```
