---
layout: full.html.hbs
algolia: true

title: hdel
---


# hdel

{{{since "1.0.0"}}}



---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_hdel/<key>
Method: DELETE  
Body:
```


```js
{
  "fields": ["field1", "field2", "..."]
}
```



### Other protocols


```js
{
  "controller": "ms",
  "action": "hdel",
  "_id": "<key>",
  "body": {
    "fields": ["field1", "field2", "..."]
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
  "action": "hdel",
  "collection": null,
  "index": null,
  "result": "<number of removed fields>"
}
```

Removes fields from a hash.

[[_Redis documentation_]](https://redis.io/commands/hdel)
