---
layout: full.html.hbs
algolia: true
title: checkToken
---

# checkToken

{{{since "1.0.0"}}}

Checks a JWT validity.
This API route does not require the caller to be logged in.

---

## Arguments

* `token`: the JWT to be tested

---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/_checkToken
Method: POST  
Body:  
```

```json
{
  "token": "..."
}
```

### Other protocols

```json
{
  "controller": "auth",
  "action": "checkToken",
  "body": {
    "token": "..."
  }
}
```

---

## Response

```javascript
{
  "status": 200,
  "error": null,
  "controller": "auth",
  "action": "checkToken",
  "requestId": "<unique request identifier>",
  "result": {
    "valid": "<boolean>",

    // if "valid" is false, contains the reason why the provided token is
    // invalid.
    // This field is not present if "valid" is true.
    "state": "Error message",

    // if "valid" is true, contains the expiration timestamp.
    // This field is not present if "valid" is false.
    "expiresAt": "<timestamp>"
  }
}
```
