---
layout: full.html.hbs
algolia: true

title: pfadd
---

# pfadd

{{{since "1.0.0"}}}




---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_pfadd/<key>
Method: POST  
Body:
```


```js
{
  "elements": ["element1", "element2", "..."]
}
```



### Other protocols


```json
{
  "controller": "ms",
  "action": "pfadd",
  "_id": "<key>",
  "body": {
    "elements": ["element1", "element2", "..."]
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
  "action": "pfadd",
  "collection": null,
  "index": null,
  "volatile": null,
  "result": [0|1]
}
```

Adds elements to a [HyperLogLog](https://en.wikipedia.org/wiki/HyperLogLog) data structure.

[[_Redis documentation_]](https://redis.io/commands/pfadd)
