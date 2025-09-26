# d-scanner-mask



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description | Type     | Default     |
| ------------- | -------------- | ----------- | -------- | ----------- |
| `cancelLabel` | `cancel-label` |             | `string` | `'Cancel'`  |
| `description` | `description`  |             | `string` | `undefined` |
| `heading`     | `heading`      |             | `string` | `undefined` |


## Events

| Event         | Description | Type                |
| ------------- | ----------- | ------------------- |
| `cancelClick` |             | `CustomEvent<void>` |


## Dependencies

### Depends on

- [d-page-description](../page-description)
- [d-button](../button)

### Graph
```mermaid
graph TD;
  d-scanner-mask --> d-page-description
  d-scanner-mask --> d-button
  d-page-description --> d-heading
  d-page-description --> d-text
  style d-scanner-mask fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
