---
layout: full.html.hbs
algolia: true
title: zrevrange
---

# zrevrange

{{{since "1.0.0"}}}




---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_zrevrange/<_id>?start=<index start>&stop=<index stop>[&options=withscores]
Method: GET
```

### Other protocols


```js
{
  "controller": "ms",
  "action": "zrevrange",
  "_id": "<key>",
  "start": "<index start>",
  "stop": "<index stop>",

  "options": ["withscores"]
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
  "action": "zrevrange",
  "collection": null,
  "index": null,
  "result": [
    "...",
    "element2",
    "element1"
  ]
}
```

Identical to [zrange]({{ site_base_path }}api/2/controller-memory-storage/zrange), except that the sorted set is traversed in descending order.

[[_Redis documentation_]](https://redis.io/commands/zrevrange)
