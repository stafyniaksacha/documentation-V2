---
layout: sdk.html.hbs
title: pfcount
description: MemoryStorage:pfcount
---
  

# pfcount
Returns the probabilistic cardinality of a [HyperLogLog](https://en.wikipedia.org/wiki/HyperLogLog) data structure, or of the merged HyperLogLog structures if more than 1 is provided (see [pfadd]({{ site_base_path }}sdk-reference/js/5/memory-storage/pfadd)).

[[_Redis documentation_]](https://redis.io/commands/pfcount)

---

## pfcount(keys, [options], callback)

| Arguments | Type | Description |
|---------------|---------|----------------------------------------|
| `keys` | string | List of HyperLogLog key identifiers |
| `options` | JSON Object | Optional parameters |
| `callback` | function | Callback |

---

## Options

| Option | Type | Description | Default |
|---------------|---------|----------------------------------------|---------|
| `queuable` | boolean | Make this request queuable or not  | `true` |
---

## Callback Response

Returns an integer containing the aggregated probabilistic cardinality of HyperLogLog structures.

## Usage

[snippet=pfcount-1]
> Callback response:

```json
42
```