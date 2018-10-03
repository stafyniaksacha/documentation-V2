---
layout: full.html.hbs
algolia: true

title: zadd
---

# zadd

{{{since "1.0.0"}}}




---

## Query Syntax

### HTTP

```http
URL: http://kuzzle:7512/ms/_zadd/<key>
Method: POST  
Body:
```


```js
{
  "elements": [
    {"score": "<score1>", "member": "<value1>"},
    {"score": "<score2>", "member": "<value2>"},
    {"score": "<...>", "member": "<...>"}
  ],

  // optional parameters
  "nx": "[false|true]",
  "xx": "[false|true]",
  "ch": "[false|true]",
  "incr": "[false|true]"
}
```



### Other protocols


```js
{
  "controller": "ms",
  "action": "zadd",
  "_id": "<key>",
  "body": {
    "elements": [
      {"score": "<score1>", "member": "<value1>"},
      {"score": "<score2>", "member": "<value2>"},
      {"score": "<...>", "member": "<...>"}
    ],

    "nx": "[false|true]",
    "xx": "[false|true]",
    "ch": "[false|true]",
    "incr": "[false|true]"
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
  "action": "zadd",
  "collection": null,
  "index": null,
  "result": "<number of added elements>"
}
```

Adds the specified elements to the sorted set stored at `key`. If the key does not exist, it is created, holding an empty sorted set. If it already exists and does not hold a sorted set, an error is returned.

Scores are expressed as floating point numbers.

If a member to insert is already in the sorted set, its score is updated and the member is reinserted at the right position in the set.

Optional parameters may be provided to change the default behavior:

* `nx`: only add new elements, do not update existing ones
* `xx`: never add new elements, update only existing ones
* `ch`: instead of returning the number of added elements, returns the number of changes performed
* `incr`: instead of adding elements, increments the existing member with the provided `score`. Only one score/element pair can be specified if this option is set

[[_Redis documentation_]](https://redis.io/commands/zadd)
