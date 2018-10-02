---
layout: full.html.hbs
algolia: true

title: getCurrentUser
---

# getCurrentUser

{{{since "1.0.0"}}}

Returns the profile object for the user linked to the `JSON Web Token`, provided in the query or the `Authorization` header.

---

## Arguments

* `jwt` / HTTP `Authorization` header: valid authentication token

---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/users/_me
Method: GET  
Headers: Authorization: "Bearer <authentication token>"
```

### Other protocols

```json
{
  "controller": "auth",
  "action": "getCurrentUser",
  "jwt": "authentication token>"
}
```

---

## Response

```javascript
{
  "status": 200,
  "error": null,
  "controller": "auth",
  "action": "getCurrentUser",
  "requestId": "<unique request identifier>",
  "result": {
    "_id": "<kuid>",// The kuzzle user identifier
    "_source": {
      "name": {
        "first": "Steve",
        "last": "Wozniak"
      },
      ...   // The profile object content
      "profile": {
        "_id":"<profileId>",
        "roles": [
          ...  // Users roles definitions
        ]
      }
    },
    "strategies": ["available", "strategies"]
  }
}
```
