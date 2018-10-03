---
layout: full.html.hbs
algolia: true

title: lpop
---

# lpop

{{{since "1.0.0"}}}



---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_lpop/<key>
Method: POST
```

### Other protocols


```js
{
  "controller": "ms",
  "action": "lpop",
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
  "action": "lpop",
  "collection": null,
  "index": null,
  "result": "<removed value>"
}
```

Removes and returns the first element of a list.

[[_Redis documentation_]](https://redis.io/commands/lpop)
