---
layout: full.html.hbs
algolia: true

title: bitop
---

# bitop

{{{since "1.0.0"}}}

---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512//ms/_bitop/<destination key>
Method: `POST
Method:  
```

```js
{
  "operation": "[AND|OR|XOR|NOT]",
  "keys": ["srckey1", "srckey2", "..."]
}
```



### Other protocols


```json
{
  "controller": "ms",
  "action": "bitop",
  "_id": "destination key",
  "body": {
    "operation": "[AND|OR|XOR|NOT]",
    "keys": ["srckey1", "srckey2", "..."]
  }
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
  "action": "bitop",
  "collection": null,
  "index": null,
  "volatile": null,
  "result": "<new destination key length>"
}
```

Performs a bitwise operation between multiple keys (containing string values) and stores the result in the destination key.

[[_Redis documentation_]](https://redis.io/commands/bitop)
