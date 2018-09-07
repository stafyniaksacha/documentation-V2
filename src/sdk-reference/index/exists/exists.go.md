## Signature

```go
Exists(index string, options types.QueryOptions) (bool, error)
```

## Arguments

| Arguments     | Type        | Description                            | Required
|---------------|-------------|----------------------------------------|----------
| ``index``     | String      | Index name               | yes
| ``options``   | QueryOptions | A structure containing query options. | no

### __Options__

Additional query options

| Option   | Type    | Description                       | Default |
| -------- | ------- | --------------------------------- | ------- |
| `queuable` | boolean | Make this request queuable or not | `true`    |

## Return

Returns a `boolean` that indicate whether the index exists, or an error

## Usage

[code-example=exists]