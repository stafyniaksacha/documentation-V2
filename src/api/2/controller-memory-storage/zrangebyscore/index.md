---
layout: full.html.hbs
algolia: true

title: zrangebyscore
---

# zrangebyscore

{{{since "1.0.0"}}}




---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_zrangebyscore/<key>?min=<min interval>&max=<max interval>[&limit=offset,count][&options=withscores]
Method: GET
```

### Other protocols


```js
{
  "controller": "ms",
  "action": "zrangebyscore",
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
  "action": "zrangebyscore",
  "collection": null,
  "index": null,
  "result": [
    "element1",
    "element2",
    "..."
  ]
}
```

Returns all the elements in the sorted set at key with a score between `min` and `max` (inclusive). The elements are considered to be ordered from low to high scores.

The optional LIMIT argument can be used to only get a range of the matching elements (similar to _SELECT LIMIT offset, count_ in SQL).

The `withscores` option includes the respective elements' scores in the result set, using the following format: `["element1 value", "element1 score", "element2 value", "element2 score", ...]`.

[[_Redis documentation_]](https://redis.io/commands/zrangebyscore)
