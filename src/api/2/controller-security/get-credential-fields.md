---
layout: full.html.hbs
algolia: true
title: getCredentialFields
---


# getCredentialFields

{{{since "1.0.0"}}}



---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/credentials/<strategy>/_fields
Method: GET  
```

### Other protocols

```js
{
  "controller": "security",
  "action": "getCredentialFields",
  "strategy": "<strategy>"
}
```

---

## Response

```javascript
// example with a "local" authentication

{
  "status": 200,                     
  "error": null,                     
  "action": "getCredentialFields",
  "controller": "security",
  "result": ["username", "password"]
}
```

Retrieve the list of accepted field names by the specified `<strategy>`. These fields might either be required or optional.
