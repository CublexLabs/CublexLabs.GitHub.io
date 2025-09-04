---
sidebar_position: 1
sidebar_label: "How to make a Dialog"
---

# How to make a Dialog

You can copy and use a configuration from the auto-generated templates under the CubDialogs folder.

### Common Settings

These are the common settings across all dialogs types. (notice, confirmation, multi_action)

```
type: "notice"
```

Type can be notice, confirmation or multi_action.

```
title: "Important Title"
external_title: "Important Title"
```

Title is shown on top of the custom screen, and external_title is shown on the buttons that open this dialog.

> **Note:** The `dialog_list` type is unavailable for now.

```
can_close_with_escape: true
```

It can be `true` or `false`. If `false`, you must configure a button to allow users to exit this dialog, such as `exit_button` in `notice` and `multi_action` types.

```
enabled: true
```

If this setting is not `true`, then this dialog won't be loaded or opened in-game.

```
permission: "cubDialogs.dialog.open.notice"
```

You can set any string as a permission to restrict access to this dialog.
