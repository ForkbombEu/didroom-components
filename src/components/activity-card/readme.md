# d-activity-card



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description | Type      | Default     |
| ------------- | ------------- | ----------- | --------- | ----------- |
| `date`        | `date`        |             | `string`  | `undefined` |
| `description` | `description` |             | `string`  | `undefined` |
| `href`        | `href`        |             | `string`  | `undefined` |
| `logo`        | `logo`        |             | `string`  | `undefined` |
| `message`     | `message`     |             | `string`  | `undefined` |
| `read`        | `read`        |             | `boolean` | `false`     |


## Dependencies

### Depends on

- [d-list-item](../d-list-item)
- [d-info-led](../info-led)
- [d-text](../text)

### Graph
```mermaid
graph TD;
  d-activity-card --> d-list-item
  d-activity-card --> d-info-led
  d-activity-card --> d-text
  d-list-item --> d-avatar
  d-list-item --> d-text
  d-list-item --> d-icon
  d-avatar --> d-icon
  style d-activity-card fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
