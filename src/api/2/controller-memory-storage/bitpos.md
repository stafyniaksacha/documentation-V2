---
layout: full.html.hbs
algolia: true

title: bitpos
---

# bitpos

{{{since "1.0.0"}}}



---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_bitpos/<key>?bit=[0|1][&start=<integer>&end=<integer>]
Method: GET
```

### Other protocols


```json
{
  "controller": "ms",
  "action": "bitpos",
  "_id": "<key>",
  "bit": "[0|1]",
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
  "action": "bitpos",
  "collection": null,
  "index": null,
  "volatile": null,
  "result": "<bit 1st position (integer)>"
}
```

Returns the position of the first bit set to 1 or 0 in a string, or in a substring.

[[_Redis documentation_]](https://redis.io/commands/bitpos)
