---
layout: full.html.hbs
algolia: true

title: getMyRights
---

# getMyRights

{{{since "1.0.0"}}}

Returns the rights for the user linked to the `JSON Web Token`, provided in the query or the `Authorization` header.

---

## Arguments

* `jwt` / HTTP `Authorization` header: valid authentication token

---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/users/_me/_rights
Method: GET  
Headers: Authorization: "Bearer <authentication token>"
```

### Other protocols

```json
{
  "controller": "auth",
  "action": "getMyRights",
  "jwt": "<authentication token>"
}
```

---

## Response

```javascript
{
  "status": 200,
  "error": null,
  "result": {
    // An array of objects containing the user rights
    "hits": [
      {
        "controller": "<ctrl_name|*>",
        "action": "<action_name|*>",
        "index": "<index_name|*>",
        "collection": "<collection_name|*>",
        "value": "<allowed|denied|conditional>"
      },
      {
        // Another rights item... and so on
      }
    ],
}
```
