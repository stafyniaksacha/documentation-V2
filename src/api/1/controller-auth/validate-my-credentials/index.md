---
layout: full.html.hbs
algolia: true
title: validateMyCredentials
---

# validateMyCredentials

{{{since "1.0.0"}}}

Validate provided credentials against a specified authentication strategy. 

This route does not actually create or modify credentials. 

The credentials to send will depend on the authentication plugin and authentication strategy.

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
  "username": "MyUser",
  "password": "MyPassword"
}
```

### Other protocols

```js
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

## Arguments

* `jwt`: valid authentication token (for the HTTP protocol, the token is to be passed to the `Authorization` header instead)
* `strategy`: name of the authentication strategy used to validate the provided credentials

---

## Body properties

Credentials to validate. The properties to send will depend on the chosen authentication strategy.

Examples in this page are for the [`local` authentication plugin](https://github.com/kuzzleio/kuzzle-plugin-auth-passport-local).

---

## Response

Return a boolean telling whether the provided credentials are valid:

```js
{
  "status": 200,
  "error": null,
  "action": "validateMyCredentials",
  "controller": "auth",
  "result": true
}
```