---
layout: sdk.html.hbs
title: geopos
---

# geopos


Returns the positions of the provided key's members (see [geoadd]({{ site_base_path }}sdk-reference/js/6/ms/geoadd/)).  

[[_Redis documentation_]](https://redis.io/commands/geopos)

## Arguments

```js
geopos(key, geopoints, [options])

```

<br/>

| Arguments    | Type    | Description |
|--------------|---------|-------------|
| `key` | <pre>string</pre> | Key |
| `geopoints` | <pre>string[]</pre> | List of geopoints to return |
| ``options`` | <pre>object</pre> | Optional query arguments |

### options

The `options` arguments can contain the following option properties:

| Property   | Type (default)   | Description                       |
| ---------- | ------- | --------------------------------- |
| `queuable` | <pre>boolean (true)</pre> | If true, queues the request during downtime, until connected to Kuzzle again |

## Resolve

Resolves to the members positions (`[longitude, latitude]`), in the same order than the one provided in the query.

## Usage

[snippet=geopos]
