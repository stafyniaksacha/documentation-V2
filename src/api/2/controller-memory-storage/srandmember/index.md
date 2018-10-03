---
layout: full.html.hbs
algolia: true

title: srandmember
---

# srandmember

{{{since "1.0.0"}}}




---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_srandmember/<key>[?count=<count>]
Method: GET
```

### Other protocols


```js
{
  "controller": "ms",
  "action": "srandmember",
  "_id": "<key>",
  "count": "<count>"
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
  "action": "srandmember",
  "collection": null,
  "index": null,
  "result": "<member value>"
}
```

Returns one or more members of a set of unique values, at random.  
If `count` is provided and is positive, the returned values are unique. If `count` is negative, a set member can be returned multiple times.

If more than 1 member is returned, the result set will be an array of values instead of a string.

[[_Redis documentation_]](https://redis.io/commands/srandmember)
