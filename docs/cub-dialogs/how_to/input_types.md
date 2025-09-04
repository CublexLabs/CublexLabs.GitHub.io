---
sidebar_position: 5
sidebar_label: "Input Types"
---

# Input Types

## 1. boolean

```yaml
inputs:
  - id: "preferences"
    type: "boolean"
    label: "&bDon't show me again."
    label_visible: true
    initial: false
    on_true: "accept" # optional
    on_false: "decline" # optional
```

## 2. number_range

```yaml
inputs:
  - id: "level"
    type: "number_range"
    label:
      text: "§2Level"
    min: 0
    max: 999
    step: 1
    initial: 499
    width: 930

  - id: "experience"
    type: "number_range"
    label:
      text: "&6Experience"
    min: 0
    max: 100
    step: 1
    initial: 0
    width: 310
    label_format: "%s: %s percent to the next level"
```

## 3. single_option

```yaml
inputs:
  - id: "choose"
    type: "single_option"
    label: "&bChoose: "
    label_visible: true
    width: 200
    entries:
      - "Option 1"
      - "Option 2"
      - "Option 3"
```

## 4. text

```yaml
inputs:
  - id: "player_name"
    type: "text"
    label:
      text: "Player Name"
      color: "blue"
    #initial: ">_"
    max_length: 16
    width: 300
    label_visible: true
    multiline:
      max_lines: 1
      max_columns: 18
```
