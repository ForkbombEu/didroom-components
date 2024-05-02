# d-toast



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description | Type                   | Default     |
| ---------- | ---------- | ----------- | ---------------------- | ----------- |
| `feedback` | `feedback` |             | `string`               | `''`        |
| `message`  | `message`  |             | `string`               | `undefined` |
| `type`     | `type`     |             | `"error" \| "success"` | `'success'` |


## Events

| Event    | Description | Type                |
| -------- | ----------- | ------------------- |
| `dClose` |             | `CustomEvent<void>` |


## Dependencies

### Depends on

- [d-text](../text)

### Graph
```mermaid
graph TD;
  d-feedback --> d-text
  style d-feedback fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
