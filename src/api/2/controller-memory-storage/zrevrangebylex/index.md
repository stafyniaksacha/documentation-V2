---
layout: full.html.hbs
algolia: true

title: zrevrangebylex
---

# zrevrangebylex

{{{since "1.0.0"}}}




---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_zrevrangebylex/<key>?min=<min interval>&max=<max interval>[&limit=offset,count]
Method: GET
```

### Other protocols


```js
{
  "controller": "ms",
  "action": "zrevrangebylex",
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
  "action": "zrevrangebylex",
  "collection": null,
  "index": null,
  "result": [
    "...",
    "element2",
    "element1"
  ]
}
```

Identical to [zrangebylex]({{ site_base_path }}api/2/controller-memory-storage/zrangebylex) except that the sorted set is traversed in descending order.

[[_Redis documentation_]](https://redis.io/commands/zrevrangebylex)
