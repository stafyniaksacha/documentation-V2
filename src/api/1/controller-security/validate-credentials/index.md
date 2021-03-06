---
layout: full.html.hbs
title: validateCredentials
---

# validateCredentials

{{{since "1.0.0"}}}

Checks if the provided credentials are well-formed. Does not actually save credentials.

---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/credentials/<strategy>/<_id>/_validate
Method: POST  
Body:
```

```js
{
  // example for the "local" authentication strategy
  "username": "MyUser",
  "password": "MyPassword"
}
```

### Other protocols

```js
{
  "controller": "security",
  "action": "validateCredentials",
  "strategy": "<strategy>",
  "_id": "<kuid>",
  "body": {
    // example for the "local" authentication strategy
    "username": "MyUser",
    "password": "MyPassword"
  }
}
```

---

## Arguments

* `_id`: user [kuid]({{site_base_path}}guide/1/kuzzle-depth/authentication/#the-kuzzle-user-identifier) 
* `strategy`: authentication strategy

---

## Body properties

The properties that can be sent to validate credentials depend entirely of the authentication strategy. 

---

## Response

Returns a boolean telling whether credentials are valid.

```javascript
{
  "status": 200,
  "error": null,
  "action": "validateCredentials",
  "controller": "security",
  "_id": "<kuid>",
  "result": true
}
```
