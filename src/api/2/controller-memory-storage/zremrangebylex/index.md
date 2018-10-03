---
layout: full.html.hbs
algolia: true

title: zremrangebylex
---

# zremrangebylex

{{{since "1.0.0"}}}




---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_zremrangebylex/<key>
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
  "action": "zremrangebylex",
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
  "action": "zremrangebylex",
  "collection": null,
  "index": null,
  "result": "<number of removed members>"
}
```

Removes members from a sorted set where all elements have the same score, using lexicographical ordering. The `min` and `max` interval are inclusive, see the [Redis documentation](https://redis.io/commands/zrangebylex) to change this behavior.

[[_Redis documentation_]](https://redis.io/commands/zremrangebylex)
