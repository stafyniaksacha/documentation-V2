---
layout: sdk.html.hbs
title: zrevrange
description: MemoryStorage:zrevrange
---
  

# zrevrange
Identical to [zrange]({{ site_base_path }}sdk-reference/android/3/memory-storage/zrange), except that the sorted set is traversed in descending order.

[[_Redis documentation_]](https://redis.io/commands/zrevrange)

---

## zrevrange(key, start, stop, [options], [callback])

| Arguments | Type | Description |
|---------------|---------|----------------------------------------|
| `key` | string | Key identifier |
| `start` | int | Start position in the set (index starts at position `0`) |
| `stop` | int | End position in the set |
| `options` | JSON Object | Optional parameters |
| `callback` | function | Callback |

---

## Options

| Option | Type | Description | Default |
|---------------|---------|----------------------------------------|---------|
| `queuable` | boolean | Make this request queuable or not  | ``true`` |
---

## Return Value

Returns the `MemoryStorage` object to allow chaining.

---

## Callback Response

Returns an array of objects, each containing the following properties:

* `member`: member value in the sorted set
* `score`: member associated score

## Usage

[snippet=zrevrange-1]
> Callback response:

```json
[
  { "member": "baz", "score": 3 },
  { "member": "bar", "score": 2 },
  { "member": "foo", "score": 1 }
]
```