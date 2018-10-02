---
layout: full.html.hbs
algolia: true

title: llen
---

# llen

{{{since "1.0.0"}}}



---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_llen/<key>
Method: GET
```

### Other protocols


```json
{
  "controller": "ms",
  "action": "llen",
  "_id": "<key>"
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
  "action": "llen",
  "collection": null,
  "index": null,
  "volatile": null,
  "result": "<length of the list>"
}
```

Returns the length of a list.

[[_Redis documentation_]](https://redis.io/commands/llen)
