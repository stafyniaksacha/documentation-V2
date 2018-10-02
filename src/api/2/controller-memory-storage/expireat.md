---
layout: full.html.hbs
algolia: true

title: expireat
---

# expireat

{{{since "1.0.0"}}}



---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_expireat/<key>
Method: POST  
Body:
```


```js
{
  "timestamp": "<Epoch time>"
}
```



### Other protocols


```json
{
  "controller": "ms",
  "action": "expireat",
  "_id": "<key>",
  "body": {
    "timestamp": "<Epoch time>"
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
  "action": "expireat",
  "collection": null,
  "index": null,
  "volatile": null,
  "result": [0|1] // success status
}
```

Sets an expiration timestamp on a key. After the timestamp has been reached, the key will automatically be deleted.  
The `timestamp` parameter accepts an [Epoch time](https://en.wikipedia.org/wiki/Unix_time) value.

[[_Redis documentation_]](https://redis.io/commands/expireat)
