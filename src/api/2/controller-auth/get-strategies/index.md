---
layout: full.html.hbs
algolia: true
title: getStrategies
---

# getStrategies

{{{since "1.0.0"}}}

Get all authentication strategies registered in Kuzzle

---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/strategies
Method: GET
```

### Other protocols

```json
{
  "controller": "auth",
  "action": "getStrategies"
}
```

---

## Response

```javascript
// example with a "local" and "facebook" strategy

{
  "status": 200,
  "error": null,
  "action": "getStrategies",
  "controller": "auth",
  "result": [
    "local",
    "facebook"
  ]
}
```
