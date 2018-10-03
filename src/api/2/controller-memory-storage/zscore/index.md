---
layout: full.html.hbs
algolia: true

title: zscore
---

# zscore

{{{since "1.0.0"}}}




---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_zscore/<key>/<member>
Method: GET
```


### Other protocols


```js
{
  "controller": "ms",
  "action": "zscore",
  "_id": "<key>",
  "member": "<member>"
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
  "action": "zscore",
  "collection": null,
  "index": null,
  "result": <score>
}
```

Returns the score of an element in a sorted set.

[[_Redis documentation_]](https://redis.io/commands/zscore)
