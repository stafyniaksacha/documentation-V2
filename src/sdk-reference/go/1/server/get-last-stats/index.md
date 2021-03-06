---
layout: sdk.html.hbs
title: GetLastStats
description: Returns the most recent statistics snapshot.
---

# GetLastStats

{{{since "1.0.0"}}}

Returns the most recent statistics snapshot.
By default, snapshots are made every 10 seconds and they are stored for 1 hour.

These statistics include:

* the number of connected users per protocol (not available for all protocols)
* the number of ongoing requests
* the number of completed requests since the last frame
* the number of failed requests since the last frame

## Arguments

```go
func (s *Server) GetLastStats(options types.QueryOptions) (json.RawMessage, error)
```

| Arguments | Type   | Description                         | Required |
| --------- | ------ | ----------------------------------- | -------- |
| `options` | types.QueryOptions | An object containing query options. | no       |

### **Options**

Additional query options

| Option     | Type   | Description                       | Default |
| ---------- | ------- | --------------------------------- | ------- |
| `Queuable` | bool | If true, queues the request during downtime, until connected to Kuzzle again | `true`  |

## Return

Returns the most recent statistics snapshot as a `json.RawMessage` or a `KuzzleError`. See how to [handle error]({{ site_base_path }}sdk-reference/go/1/error-handling).

## Return

## Usage

[snippet=get-last-stats]
