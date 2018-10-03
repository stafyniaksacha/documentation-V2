---
layout: full.html.hbs
algolia: true

title: pfmerge
---

# pfmerge

{{{since "1.0.0"}}}




---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_pfmerge/<key>
Method: POST  
Body:
```


```js
{
  "sources": ["key1", "key2", "..."]
}
```



### Other protocols


```js
{
  "controller": "ms",
  "action": "pfmerge",
  "_id": "<key>",
  "body": {
    "sources": ["key1", "key2", "..."]
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
  "action": "pfmerge",
  "collection": null,
  "index": null,
  "result": "OK"
}
```

Merges multiple [HyperLogLog](https://en.wikipedia.org/wiki/HyperLogLog) data structures into an unique HyperLogLog structure stored at `key`, approximating the cardinality of the union of the source structures.

[[_Redis documentation_]](https://redis.io/commands/pfmerge)
