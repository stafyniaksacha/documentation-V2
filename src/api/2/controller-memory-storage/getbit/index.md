---
layout: full.html.hbs
algolia: true

title: getbit
---

# getbit

{{{since "1.0.0"}}}


---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_getbit/<key>?offset=<offset>
Method: GET
```

### Other protocols


```js
{
  "controller": "ms",
  "action": "getbit",
  "_id": "<key>",
  "offset": "<offset>"
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
  "action": "getbit",
  "collection": null,
  "index": null,
  "result": [0|1]
}
```

Returns the bit value at `offset`, in the string value stored in a key.

[[_Redis documentation_]](https://redis.io/commands/getbit)
