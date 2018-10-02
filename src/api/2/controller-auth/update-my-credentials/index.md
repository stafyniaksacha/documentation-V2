---
layout: full.html.hbs
algolia: true
title: updateMyCredentials
---

# updateMyCredentials

{{{since "1.0.0"}}}

Update the current user's credentials for the specified `<strategy>`. The credentials to send will depend on the authentication plugin and the authentication strategy.


---

## Arguments

* `jwt` / HTTP `Authorization` header: valid authentication token
* `strategy`: name of the authentication strategy to update

---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/credentials/<strategy>/_me/_update
Method: PUT  
Headers: Authorization: "Bearer <authentication token>"  
Body:
```

```js
{
  // example with the "local" authentication strategy
  "password": "MyPassword"
}
```

### Other protocols

```javascript
{
  "controller": "auth",
  "action": "updateMyCredentials",
  "strategy": "<strategy>",
  "jwt": "<authentication token>",
  "body": {
    // example with the "local" authentication strategy
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
  "action": "updateMyCredentials",
  "controller": "auth",
  "result": {
    "username": "MyUser",
    "kuid": "<kuid>"
  }
}
```
