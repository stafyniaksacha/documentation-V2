---
layout: full.html.hbs
algolia: true

title: strlen
---

# strlen

{{{since "1.0.0"}}}




---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_strlen/<key>
Method: GET
```


### Other protocols


```json
{
  "controller": "ms",
  "action": "strlen",
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
  "action": "strlen",
  "collection": null,
  "index": null,
  "volatile": null,
  "result": <string length>
}
```

Returns the length of a value stored at `key`.

[[_Redis documentation_]](https://redis.io/commands/strlen)
