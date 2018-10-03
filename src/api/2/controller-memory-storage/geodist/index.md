---
layout: full.html.hbs
algolia: true

title: geodist
---

# geodist

{{{since "1.0.0"}}}


---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_geodist/<key>/<member1>/<member2>[?unit=[m|km|mi|ft]]
Method: GET
```

### Other protocols


```javascript
{
  "controller": "ms",
  "action": "geodist",
  "_id": "<key>",
  "member1": "first member name",
  "member2": "second member name",
  "unit": "(optional)[m|km|mi|ft]"
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
  "action": "geodist",
  "collection": null,
  "index": null,
  "result": <calculated distance>
}
```

Returns the distance between two geospatial members of a key (see [geoadd]({{ site_base_path }}api/2/controller-memory-storage/geoadd/)).  
The returned distance is expressed in meters by default.

[[_Redis documentation_]](https://redis.io/commands/geodist)
