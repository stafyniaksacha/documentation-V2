---
layout: full.html.hbs
algolia: true

title: psetex
---

# psetex

{{{since "1.0.0"}}}




---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_psetex/<key>
Method: POST  
Body:
```


```js
{
  "milliseconds": "<time to live>",
  "value": "<value to set>"
}
```



### Other protocols


```js
{
  "controller": "ms",
  "action": "psetex",
  "_id": "<key>",
  "body": {
    "milliseconds": "<time to live>",
    "value": "<value to set>"
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
  "action": "psetex",
  "collection": null,
  "index": null,
  "result": "OK"
}
```

Sets a key with the provided value, and an expiration delay expressed in milliseconds. If the key does not exist, it is created beforehand.

[[_Redis documentation_]](https://redis.io/commands/psetex)
