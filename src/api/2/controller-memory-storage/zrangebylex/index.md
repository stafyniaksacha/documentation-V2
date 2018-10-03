---
layout: full.html.hbs
algolia: true
title: zrangebylex
---

# zrangebylex

{{{since "1.0.0"}}}




---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_zrangebylex/<_id>?min=<min interval>&max=<max interval>[&limit=offset,count]
Method: GET
```

### Other protocols


```js
{
  "controller": "ms",
  "action": "zrangebylex",
  "_id": "<key>",
  "min": "<min interval>",
  "max": "<max interval>",

  "limit": ["<offset>", "<count>"]
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
  "action": "zrangebylex",
  "collection": null,
  "index": null,
  "result": [
    "element1",
    "element2",
    "..."
  ]
}
```

Returns elements in a sorted set where all members have equal score, using lexicographical ordering. The `min` and `max` values are inclusive by default. To change this behavior, please check the full documentation.

The optional LIMIT argument can be used to only get a range of the matching elements (similar to _SELECT LIMIT offset, count_ in SQL).

[[_Redis documentation_]](https://redis.io/commands/zrangebylex)
