---
sidebar_position: 1
sidebar_label: "Common Settings"
---

# How to make a Dialog

> **Note:** You can copy and use a configuration from the auto-generated templates under the CubDialogs folder.

These are the common settings across all dialogs types. (notice, confirmation, multi_action)

### Common Settings

1. Type

```
type: "notice"
```

Type can be notice, confirmation or multi_action.

2. Title and external title

```
title: "Important Title"
external_title: "Important Title"
```

Title is shown on top of the custom screen, and external_title is shown on the buttons that open this dialog.

> **Note:** The `dialog_list` type is unavailable for now.

3. Close with ESC

```
can_close_with_escape: true
```

It can be `true` or `false`. If `false`, you must configure a button to allow users to exit this dialog, such as `exit_button` in `notice` and `multi_action` types.

4. Enable/Disable the dialog

```
enabled: true
```

If this setting is not `true`, then this dialog won't be loaded or opened in-game.

5. Permission to access this dialog

```
permission: "cubDialogs.dialog.open.notice"
```

You can set any string as a permission to restrict access to this dialog.
