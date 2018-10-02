---
layout: full.html.hbs
algolia: true

title: zrank
---

# zrank

{{{since "1.0.0"}}}




---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_zrank/<key>/<member>
Method: GET
```


### Other protocols


```json
{
  "controller": "ms",
  "action": "zrank",
  "_id": "<key>",
  "member": "<member>"
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
  "action": "zrank",
  "collection": null,
  "index": null,
  "volatile": null,
  "result": "<element's position in the sorted set>"
}
```

Returns the position of an element in a sorted set, with scores in ascending order. The index returned is 0-based (the lowest score member has an index of 0).

[[_Redis documentation_]](https://redis.io/commands/zrank)
