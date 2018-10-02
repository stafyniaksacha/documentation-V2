---
layout: full.html.hbs
algolia: true

title: lrange
---

# lrange

{{{since "1.0.0"}}}



---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_lrange/<key>?start=<start>&stop=<stop>
Method: GET
```

### Other protocols


```json
{
  "controller": "ms",
  "action": "lrange",
  "_id": "<key>",
  "start": "<start>",
  "stop": "<stop>"
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
  "action": "lrange",
  "collection": null,
  "index": null,
  "volatile": null,
  "result": [
    "value1",
    "value2",
    "..."
  ]
}
```

Returns the list elements between the `start` and `stop` positions.

[[_Redis documentation_]](https://redis.io/commands/lrange)
