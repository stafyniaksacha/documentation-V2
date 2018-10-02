---
layout: full.html.hbs
algolia: true

title: zrevrangebyscore
---

# zrevrangebyscore

{{{since "1.0.0"}}}




---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_zrevrangebyscore/<key>?min=<min interval>&max=<max interval>[&limit=offset,count][&options=withscores]
Method: GET
```

### Other protocols


```json
{
  "controller": "ms",
  "action": "zrevrangebyscore",
  "_id": "<key>",
  "min": "<min interval>",
  "max": "<max interval>",

  "limit": ["<offset>", "<count>"],
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
  "action": "zrevrangebyscore",
  "collection": null,
  "index": null,
  "volatile": null,
  "result": [
    "...",
    "element2",
    "element1"
  ]
}
```

Identical to [zrangebyscore]({{ site_base_path }}api/2/controller-memory-storage/zrangebyscore) except that the sorted set is traversed in descending order.

[[_Redis documentation_]](https://redis.io/commands/zrevrangebyscore)
