---
layout: full.html.hbs
algolia: true
title: sscan
---

# sscan

{{{since "1.0.0"}}}




---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_sscan/<_id>?cursor=<cursor>[&match=<pattern>][&count=<count>]
Method: GET
```

### Other protocols


```js
{
  "controller": "ms",
  "action": "sscan",
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
  "action": "sscan",
  "collection": null,
  "index": null,
  "result": [
    "<new cursor position>",
    [
      "member1",
      "member2",
      "..."
    ]
  ]
}
```

Identical to [scan]({{ site_base_path }}api/2/controller-memory-storage/scan) but iterates members contained in a set of unique values.


[[_Redis documentation_]](https://redis.io/commands/sscan)
