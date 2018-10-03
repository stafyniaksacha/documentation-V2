---
layout: full.html.hbs
algolia: true

title: zscan
---

# zscan

{{{since "1.0.0"}}}




---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_zscan/<key>?cursor=<cursor>[&match=<pattern>][&count=<count>]
Method: GET
```

### Other protocols


```js
{
  "controller": "ms",
  "action": "zscan",
  "_id": "<key>",
  "cursor": "<cursor>",

  "match": "<pattern>",
  "count": "<count>"
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
  "action": "zscan",
  "collection": null,
  "index": null,
  "result": [
    "<new cursor position>",
    [
      "element1",
      "score of element1",
      "element2",
      "score of element2",
      "..."
    ]
  ]
}
```

Identical to [scan]({{ site_base_path }}api/2/controller-memory-storage/scan) but iterates the elements stored in a sorted set.


[[_Redis documentation_]](https://redis.io/commands/zscan)
