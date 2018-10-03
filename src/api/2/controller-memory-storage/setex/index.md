---
layout: full.html.hbs
algolia: true

title: setex
---

# setex

{{{since "1.0.0"}}}




---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_setex/<key>
Method: POST  
Body:
```


```js
{
  "value": "<value>",
  "seconds": "<time to live>"
}
```



### Other protocols


```js
{
  "controller": "ms",
  "action": "setex",
  "_id": "<key>",
  "body": {
    "value": "<value>",
    "seconds": "<time to live>"
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
  "action": "setex",
  "collection": null,
  "index": null,
  "result": "OK"
}
```

Sets a value and a time to live (in seconds) on a key. If the key already exists, it is overwritten.

[[_Redis documentation_]](https://redis.io/commands/setex)
