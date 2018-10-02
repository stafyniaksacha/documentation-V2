---
layout: full.html.hbs
algolia: true

title: pexpireat
---

# pexpireat

{{{since "1.0.0"}}}




---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_pexpireat/<key>
Method: POST  
Body:
```


```js
{
  "timestamp": "<Epoch time in milliseconds>"
}
```



### Other protocols


```json
{
  "controller": "ms",
  "action": "pexpireat",
  "_id": "<key>",
  "body": {
    "timestamp": "<Epoch time in milliseconds>"
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
  "action": "pexpireat",
  "collection": null,
  "index": null,
  "volatile": null,
  "result": [0|1]
}
```

Sets an expiration timestamp on a key. After the timestamp has been reached, the key will automatically be deleted.  
The `timestamp` parameter accepts an [Epoch time](https://en.wikipedia.org/wiki/Unix_time) value, in milliseconds.

[[_Redis documentation_]](https://redis.io/commands/pexpireat)
