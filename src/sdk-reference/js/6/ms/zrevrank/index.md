---
layout: sdk.html.hbs
title: zrevrank
---

# zrevrank

Returns the position of an element in a sorted set, with scores in descending order. The index returned is 0-based (the lowest score member has an index of 0).

[[_Redis documentation_]](https://redis.io/commands/zrevrank)

## Arguments

```js
zrevrank(key, member, [options])
```

<br/>

| Arguments    | Type    | Description |
|--------------|---------|-------------|
| `key` | <pre>string</pre> | Sorted set key |
| `member` | <pre>string</pre> | Member value |
| ``options`` | <pre>object</pre> | Optional query arguments |

### options

The `options` arguments can contain the following option properties:

| Property   | Type (default)   | Description                       |
| ---------- | ------- | --------------------------------- |
| `queuable` | <pre>boolean (true)</pre> | If true, queues the request during downtime, until connected to Kuzzle again |

## Resolve

Resolves to the index of the found member in the sorted set, or to `null` if the member is not found.

## Usage

[snippet=zrevrank]
