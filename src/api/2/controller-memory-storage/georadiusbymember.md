---
layout: full.html.hbs
algolia: true

title: georadiusbymember
---

# georadiusbymember

{{{since "1.0.0"}}}


---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_georadiusbymember/<key>?member=<member>&distance=<distance>&unit=[m|km|mi|ft][&options=option1,option2,...]
Method: GET
```

### Other protocols


```json
{
  "controller": "ms",
  "action": "georadiusbymember",
  "_id": "<key>",
  "member": "<member>",
  "distance": "<distance>",
  "unit": "[m|km|mi|ft]",
  "options": ["(optional)", "option1", "option2", "..."]
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
  "action": "georadiusbymember",
  "collection": null,
  "index": null,
  "volatile": null,
  "result": [
    "member1",
    "member2",
    "..."
  ]
}
```

Returns the members (added with [geoadd]({{ site_base_path }}api/2/controller-memory-storage/geoadd/)) of a given key inside the provided geospatial radius, centered around one of a key's member.

The `options` parameter accepts the following options: `withcoord`, `withdist`, `count <count>`, `asc` and `desc`.  
The provided count value for the `count` option must be passed as a separate option.  
For instance, `&options=count,<count>` for HTTP requests, or `options: ['count', <count>]` for other protocols.

The `result` format may change if `options` parameters are provided: instead of an array of values, the result may instead be an array of arrays (for instance with `withdist` or `withcoord` options).

[[_Redis documentation_]](https://redis.io/commands/georadiusbymember)
