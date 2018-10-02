---
layout: full.html.hbs
algolia: true

title: lindex
---

# lindex

{{{since "1.0.0"}}}



---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_lindex/<key>/<index>
Method: GET
```

### Other protocols


```json
{
  "controller": "ms",
  "action": "lindex",
  "_id": "<key>",
  "index": "<index>"
}
```

---

## Response

```javascript
{
  "requestId": "<unique request identifier>",
  "status": 200,
  "error": null,
  "controller": "ms",
  "action": "lindex",
  "collection": null,
  "index": null,
  "volatile": null,
  "result": "<value>"
}
```

Returns the element at the provided index in a list.

[[_Redis documentation_]](https://redis.io/commands/lindex)
