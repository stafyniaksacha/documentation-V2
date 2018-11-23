---
layout: sdk.html.hbs
algolia: true
title: incr
description: MemoryStorage:incr
algolia: true
---
  

# incr
Increments the number stored at `key` by 1. If the key does not exist, it is set to 0 before performing the operation.

[[_Redis documentation_]](https://redis.io/commands/incr)

---

## incr(key, [options], [callback])

| Arguments | Type | Description |
|---------------|---------|----------------------------------------|
| `key` | string | Key identifier |
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

Returns an integer containing the updated key value.

## Usage

[snippet=incr-1]
> Callback response:

```json
42
```