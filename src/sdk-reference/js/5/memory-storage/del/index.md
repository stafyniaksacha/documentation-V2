---
layout: sdk.html.hbs
title: del
description: MemoryStorage:del
---
  

# del
Deletes a list of keys.

[[_Redis documentation_]](https://redis.io/commands/del)

---

## del(keys, [options], [callback])

| Arguments | Type | Description |
|---------------|---------|----------------------------------------|
| `keys` | array | List of keys to delete |
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

Return an integer containing the number of deleted keys.

## Usage

[snippet=del-1]
> Callback response:

```json
3
```