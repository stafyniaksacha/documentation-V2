---
layout: full.html.hbs
algolia: true

title: hgetall
---

# hgetall

{{{since "1.0.0"}}}



---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_hgetall/<key>
Method: GET
```

### Other protocols


```json
{
  "controller": "ms",
  "action": "hgetall",
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
  "action": "hgetall",
  "collection": null,
  "index": null,
  "volatile": null,
  "result": {
    "field1": "value",
    "field2": "value",
    "...": "..."
  }
}
```

Returns all fields and values of a hash.

[[_Redis documentation_]](https://redis.io/commands/hgetall)
