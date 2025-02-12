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
- [d-vertical-stack](../vertical-stack)
- [d-copy-button](../copy-button)

### Graph
```mermaid
graph TD;
  d-feedback --> d-text
  d-feedback --> d-vertical-stack
  d-feedback --> d-copy-button
  d-copy-button --> d-button
  style d-feedback fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
