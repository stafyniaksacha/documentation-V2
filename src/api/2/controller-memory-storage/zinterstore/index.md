---
layout: full.html.hbs
algolia: true
title: zinterstore
---

# zinterstore

{{{since "1.0.0"}}}




---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_zinterstore/<_id>
Method: POST  
Body:
```


```js
{
  "keys": ["key1", "key2", "..."],

  // optional parameters
  "weights": ["weight1", "weight2", "..."],
  "aggregate": "[sum|min|max]"
}
```



### Other protocols


```js
{
  "controller": "ms",
  "action": "zinterstore",
  "_id": "<key>",
  "body": {
    "keys": ["key1", "key2", "..."],

    "weights": ["weight1", "weight2", "..."],
    "aggregate": "[sum|min|max]"
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
  "action": "zinterstore",
  "collection": null,
  "index": null,
  "result": "<the number of elements in the new sorted set>"
}
```

Computes the intersection of the provided sorted sets given by the specified `keys`, and stores the result in a new sorted set at `key`.

Optional parameters:

* `weights`: specifies a multiplication factor for each input sorted set
* `aggregate` (default: `sum`): specifies how members' scores are aggregated during the intersection

[[_Redis documentation_]](https://redis.io/commands/zinterstore)
