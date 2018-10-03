---
layout: full.html.hbs
algolia: true
title: zcount
---

# zcount

{{{since "1.0.0"}}}




---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_zcount/<_id>?min=<min score>&max=<max score>
Method: GET
```

### Other protocols


```js
{
  "controller": "ms",
  "action": "zcount",
  "_id": "<key>",
  "min": "<min score>",
  "max": "<max score>"
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
  "action": "zcount",
  "collection": null,
  "index": null,
  "result": "<number of elements in the specified range>"
}
```

Returns the number of elements held by a sorted set with a score between the provided `min` and `max` values.

By default, the provided min and max values are inclusive. This behavior can be changed using the syntax described in the Redis [ZRANGEBYSCORE](https://redis.io/commands/zrangebyscore) documentation.

[[_Redis documentation_]](https://redis.io/commands/zcount)
