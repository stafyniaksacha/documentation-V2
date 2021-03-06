---
layout: sdk.html.hbs
title: zlexcount
---

# zlexcount

Counts elements in a sorted set where all members have equal score, using lexicographical ordering. 

[[_Redis documentation_]](https://redis.io/commands/zlexcount)

## Arguments

```js
zlexcount(key, min, max, [options])
```

<br/>

| Arguments    | Type    | Description |
|--------------|---------|-------------|
| `key` | <pre>string</pre> | Sorted set key |
| `min` | <pre>string</pre> | Minimum range value |
| `max` | <pre>string</pre> | Maximum range value |
| ``options`` | <pre>object</pre> | Optional query arguments |

By default, the provided min and max values are inclusive. This behavior can be changed using the syntax described in the Redis [ZRANGEBYLEX](https://redis.io/commands/zrangebylex#how-to-specify-intervals) documentation.

### options

The `options` arguments can contain the following option properties:

| Property   | Type (default)   | Description                       |
| ---------- | ------- | --------------------------------- |
| `queuable` | <pre>boolean (true)</pre> | If true, queues the request during downtime, until connected to Kuzzle again |

## Resolve

Resolves to the number of elements in the provided range.

## Usage

[snippet=zlexcount]
