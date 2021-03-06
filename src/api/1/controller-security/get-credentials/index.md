---
layout: full.html.hbs
title: getCredentials
---


# getCredentials

{{{since "1.0.0"}}}

Gets a user's credential information for the specified authentication strategy.

The returned content depends on the authentication strategy, but it should never include sensitive information.

---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/credentials/<strategy>/<_id>
Method: GET  
```

### Other protocols

```js
{
  "controller": "security",
  "action": "getCredentials",
  "strategy": "<strategy>",
  "_id": "<kuid>"
}
```

---

## Arguments

* `_id`: user [kuid]({{site_base_path}}guide/1/kuzzle-depth/authentication/#the-kuzzle-user-identifier)
* `strategy`: authentication strategy name

---

## Response

Returns credentials information (depend on the authentication strategy).

### Example with the "local" authentication strategy:

```javascript

{
  "status": 200,
  "error": null,
  "action": "getCredentials",
  "controller": "security",
  "_id": "<kuid>",
  "result": {
    "username": "MyUser",
    "kuid": "<kuid>"
  }
}
```
