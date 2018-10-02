---
layout: full.html.hbs
algolia: true

title: bitcount
---

# bitcount

{{{since "1.0.0"}}}

---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_bitcount/<key>[?start=<integer>&end=<integer>]
Method: GET  
```


### Other protocols


```json
{
  "controller": "ms",
  "action": "bitcount",
  "_id": "<key>",
  "start": "<integer>",
  "end": "<integer>"
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
  "action": "bitcount",
  "collection": null,
  "index": null,
  "volatile": null,
  "result": "<count>"
}
```

Counts the number of set bits (population counting) in a string.  
The `start` and `end` parameters are optional.

[[_Redis documentation_]](https://redis.io/commands/bitcount)
