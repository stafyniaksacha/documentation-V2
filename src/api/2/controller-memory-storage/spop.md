---
layout: full.html.hbs
algolia: true

title: spop
---

# spop

{{{since "1.0.0"}}}




---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_spop/<key>
Method: POST  
Body:
```


```js
{
  // optional
  "count": "<number of elements to remove>"
}
```



### Other protocols


```json
{
  "controller": "ms",
  "action": "spop",
  "_id": "<key>",
  "body": {
    "count": "<number of elements to remove>"
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
  "action": "spop",
  "collection": null,
  "index": null,
  "volatile": null,
  "result": "<removed element>"
}
```

Removes and returns one or more elements at random from a set of unique values. If multiple elements are removed, the result set will be an array of removed elements, instead of a string.

[[_Redis documentation_]](https://redis.io/commands/spop)
