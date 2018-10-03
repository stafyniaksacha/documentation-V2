---
layout: full.html.hbs
algolia: true

title: geohash
---

# geohash

{{{since "1.0.0"}}}


---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_geohash/<key>?members=member1,member2,...
Method: GET
```

### Other protocols


```js
{
  "controller": "ms",
  "action": "geohash",
  "_id": "<key>",
  "members": ["member1", "member2", "..."]
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
  "action": "geohash",
  "collection": null,
  "index": null,
  "result": ["geohash1", "geohash2", "..."]
}
```

Returns a valid [geohash](https://en.wikipedia.org/wiki/Geohash) for the provided key's members (see [geoadd]({{ site_base_path }}api/2/controller-memory-storage/geoadd/)).  

[[_Redis documentation_]](https://redis.io/commands/geohash)
