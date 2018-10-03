---
layout: full.html.hbs
algolia: true

title: hlen
---

# hlen

{{{since "1.0.0"}}}



---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_hlen/<key>
Method: GET
```

### Other protocols


```js
{
  "controller": "ms",
  "action": "hlen",
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
  "action": "hlen",
  "collection": null,
  "index": null,
  "result": "<number of fields contained in the hash>"
}
```

Returns the number of fields contained in a hash.

[[_Redis documentation_]](https://redis.io/commands/hlen)
