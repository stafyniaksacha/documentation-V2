---
layout: full.html.hbs
algolia: true

title: pexpire
---

# pexpire

{{{since "1.0.0"}}}




---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_pexpire/<key>
Method: POST  
Body:
```


```js
{
  "milliseconds": <time to live>
}
```



### Other protocols


```js
{
  "controller": "ms",
  "action": "pexpire",
  "_id": "<key>",
  "body": {
    "milliseconds": "<time to live>"
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
  "action": "pexpire",
  "collection": null,
  "index": null,
  "result": [0|1]
}
```

Sets a timeout (in milliseconds) on a key. After the timeout has expired, the key will automatically be deleted.

[[_Redis documentation_]](https://redis.io/commands/pexpire)
