---
layout: full.html.hbs
algolia: true

title: hvals
---

# hvals

{{{since "1.0.0"}}}



---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_hvals/<key>
Method: GET
```

### Other protocols


```json
{
  "controller": "ms",
  "action": "hvals",
  "_id": "<key>"
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
  "action": "hvals",
  "collection": null,
  "index": null,
  "volatile": null,
  "result": [
    "<value of field1>",
    "<value of field2>",
    "..."
  ]
}
```

Returns all values contained in a hash.

[[_Redis documentation_]](https://redis.io/commands/hvals)
