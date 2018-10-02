---
layout: full.html.hbs
algolia: true

title: getAllCredentialFields
---


# getAllCredentialFields

{{{since "1.0.0"}}}



---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/credentials/_fields
Method: GET  
```

### Other protocols

```json
{
  "controller": "security",
  "action": "getAllCredentialFields"
}
```

---

## Response

```javascript
// example with a "local" authentication

{
  "status": 200,                     
  "error": null,                     
  "action": "getAllCredentialFields",
  "controller": "security",
  "result": {
    "local": ["username", "password"],
    ...
  }
}
```

Retrieve a list of accepted fields per authentication strategy. These fields might either be required or optional.
