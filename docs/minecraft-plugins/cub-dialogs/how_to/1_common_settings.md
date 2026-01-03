---
sidebar_position: 1
sidebar_label: "Common Settings"
---

# Common Settings

> **Note:** You can copy and use a configuration from the auto-generated templates under the CubDialogs folder.
> ![Template Dialog Example](/content/template_dialogs.png)

These are the common settings across all dialogs types. (notice, confirmation, multi_action)

## Keys

### 1. Type

```
type: "notice"
```

Type can be `notice`, `confirmation` or `multi_action`.

### 2. Title and External Title

```
title: "Important Title"
external_title: "Important Title"
```

The `title` is shown on top of the custom screen, and `external_title` is shown on the buttons that open this dialog.

> **Note:** The `dialog_list` dialog type is unavailable for now.

### 3. Close with ESC

```
can_close_with_escape: true
```

It can be `true` or `false`. If `false`, you must configure a button to allow users to exit this dialog, such as `exit_button` in `notice` and `multi_action` dialog types or `exit_buttons` in `confirmation` dialog type.

### 4. Enable/Disable the dialog

```
enabled: true
```

If this setting is not `true`, then this dialog won't be loaded or opened in-game.

### 5. Permission to access this dialog

```
permission_to_open: "cubDialogs.dialog.open.noticement"
```

You can set any string as a permission to restrict access to this dialog. If you don't set a permission (null or "") the dialog will not require any permission.
