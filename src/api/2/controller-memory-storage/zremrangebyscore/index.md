---
layout: full.html.hbs
algolia: true

title: zremrangebyscore
---

# zremrangebyscore

{{{since "1.0.0"}}}




---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_zremrangebyscore/<key>
Method: DELETE  
Body:
```


```js
{
  "min": "<min interval>",
  "max": "<max interval>"
}
```



### Other protocols


```js
{
  "controller": "ms",
  "action": "zremrangebyscore",
  "_id": "<key>",
  "body": {
    "min": "<min interval>",
    "max": "<max interval>"
  }
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
  "action": "zremrangebyscore",
  "collection": null,
  "index": null,
  "result": "<number of removed members>"
}
```

Removes members from a sorted set with a score between `min` and `max`.

The `min` and `max` values are inclusive, but this behavior can be changed (see the [redis documentation](https://redis.io/commands/zrangebyscore)).

[[_Redis documentation_]](https://redis.io/commands/zremrangebylex)
