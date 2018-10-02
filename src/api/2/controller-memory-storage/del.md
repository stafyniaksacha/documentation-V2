---
layout: full.html.hbs
algolia: true

title: del
---


---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms
Method: `DELETE
Method:  
```

```js
{
  "keys": ["key1", "key2", "..."]
}
```



### Other protocols


```json
{
  "controller": "ms",
  "action": "del",
  "body": {
    "keys": ["key1", "key2", "..."]
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
  "action": "del",
  "collection": null,
  "index": null,
  "volatile": null,
  "result": "<number of deleted keys>"
}
```

Deletes a list of keys.

[[_Redis documentation_]](https://redis.io/commands/del)
