# d-button



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute     | Description | Type                                                                      | Default     |
| ------------ | ------------- | ----------- | ------------------------------------------------------------------------- | ----------- |
| `buttonType` | `button-type` |             | `string`                                                                  | `'button'`  |
| `clear`      | `clear`       |             | `boolean`                                                                 | `undefined` |
| `color`      | `color`       |             | `"accent" \| "error" \| "outline" \| "primary" \| "success" \| "warning"` | `'primary'` |
| `disabled`   | `disabled`    |             | `boolean`                                                                 | `false`     |
| `expand`     | `expand`      |             | `boolean`                                                                 | `undefined` |
| `form`       | `form`        |             | `HTMLFormElement \| string`                                               | `undefined` |
| `href`       | `href`        |             | `string`                                                                  | `undefined` |
| `size`       | `size`        |             | `"default" \| "large" \| "small"`                                         | `undefined` |
| `type`       | `type`        |             | `"button" \| "reset" \| "submit"`                                         | `'button'`  |


## Events

| Event    | Description | Type                |
| -------- | ----------- | ------------------- |
| `dBlur`  |             | `CustomEvent<void>` |
| `dFocus` |             | `CustomEvent<void>` |


## Dependencies

### Used by

 - [d-copy-button](../copy-button)
 - [d-empty-state](../empty-state)
 - [d-input](../input)
 - [d-scan-button](../scan-button)
 - [d-settings-menu](../settings-menu)

### Graph
```mermaid
graph TD;
  d-copy-button --> d-button
  d-empty-state --> d-button
  d-input --> d-button
  d-scan-button --> d-button
  d-settings-menu --> d-button
  style d-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
