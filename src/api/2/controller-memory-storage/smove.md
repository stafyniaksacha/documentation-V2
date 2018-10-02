---
layout: full.html.hbs
algolia: true

title: smove
---

# smove

{{{since "1.0.0"}}}




---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_smove/<key>
Method: POST  
Body:
```


```js
{
  "destination": "<destination key>",
  "member": "<member>"
}
```



### Other protocols


```json
{
  "controller": "ms",
  "action": "smove",
  "_id": "<key>",
  "body": {
    "destination": "<destination key>",
    "member": "<member>"
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
  "action": "smove",
  "collection": null,
  "index": null,
  "volatile": null,
  "result": [0|1]
}
```

Moves a member from a set of unique values to another.

[[_Redis documentation_]](https://redis.io/commands/smove)
