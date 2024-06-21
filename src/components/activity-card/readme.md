# d-activity-card



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description | Type                                | Default     |
| ------------- | ------------- | ----------- | ----------------------------------- | ----------- |
| `date`        | `date`        |             | `string`                            | `undefined` |
| `description` | `description` |             | `string`                            | `undefined` |
| `logo`        | `logo`        |             | `string`                            | `undefined` |
| `message`     | `message`     |             | `string`                            | `undefined` |
| `name`        | `name`        |             | `string`                            | `undefined` |
| `read`        | `read`        |             | `boolean`                           | `false`     |
| `type`        | `type`        |             | `"error" \| "success" \| "warning"` | `undefined` |


## Dependencies

### Depends on

- [d-avatar](../avatar)
- [d-text](../text)
- [d-info-led](../info-led)

### Graph
```mermaid
graph TD;
  d-activity-card --> d-avatar
  d-activity-card --> d-text
  d-activity-card --> d-info-led
  style d-activity-card fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
