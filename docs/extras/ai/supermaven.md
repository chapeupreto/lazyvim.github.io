# `Supermaven`

<!-- plugins:start -->

:::info
You can enable the extra with the `:LazyExtras` command.
Plugins marked as optional will only be configured if they are installed.
:::

<details>
<summary>Alternatively, you can add it to your <code>lazy.nvim</code> imports</summary>

```lua title="lua/config/lazy.lua" {4}
require("lazy").setup({
  spec = {
    { "LazyVim/LazyVim", import = "lazyvim.plugins" },
    { import = "lazyvim.plugins.extras.ai.supermaven" },
    { import = "plugins" },
  },
})
```

</details>

Below you can find a list of included plugins and their default settings.

:::caution
You don't need to copy the default settings to your config.
They are only shown here for reference.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## [supermaven-nvim](https://github.com/supermaven-inc/supermaven-nvim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  keymaps = {
    accept_suggestion = nil, -- handled by nvim-cmp / blink.cmp
  },
  disable_inline_completion = vim.g.ai_cmp,
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "supermaven-inc/supermaven-nvim",
  opts = {
    keymaps = {
      accept_suggestion = nil, -- handled by nvim-cmp / blink.cmp
    },
    disable_inline_completion = vim.g.ai_cmp,
  },
}
```

</TabItem>

</Tabs>

## [supermaven-nvim](https://github.com/supermaven-inc/supermaven-nvim)

 add ai_accept action


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function()
  require("supermaven-nvim.completion_preview").suggestion_group = "SupermavenSuggestion"
  LazyVim.cmp.actions.ai_accept = function()
    local suggestion = require("supermaven-nvim.completion_preview")
    if suggestion.has_suggestion() then
      LazyVim.create_undo()
      vim.schedule(function()
        suggestion.on_accept_suggestion()
      end)
      return true
    end
  end
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "supermaven-inc/supermaven-nvim",
  opts = function()
    require("supermaven-nvim.completion_preview").suggestion_group = "SupermavenSuggestion"
    LazyVim.cmp.actions.ai_accept = function()
      local suggestion = require("supermaven-nvim.completion_preview")
      if suggestion.has_suggestion() then
        LazyVim.create_undo()
        vim.schedule(function()
          suggestion.on_accept_suggestion()
        end)
        return true
      end
    end
  end,
}
```

</TabItem>

</Tabs>

## [supermaven-nvim](https://github.com/supermaven-inc/supermaven-nvim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = nil
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{ "supermaven-nvim" }
```

</TabItem>

</Tabs>

## [supermaven-nvim](https://github.com/supermaven-inc/supermaven-nvim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  disable_inline_completion = false,
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "supermaven-nvim",
  opts = {
    disable_inline_completion = false,
  },
}
```

</TabItem>

</Tabs>

## [nvim-cmp](https://github.com/hrsh7th/nvim-cmp) _(optional)_

 cmp integration


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  if vim.g.ai_cmp then
    table.insert(opts.sources, 1, {
      name = "supermaven",
      group_index = 1,
      priority = 100,
    })
  end
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "hrsh7th/nvim-cmp",
  optional = true,
  dependencies = { "supermaven-nvim" },
  opts = function(_, opts)
    if vim.g.ai_cmp then
      table.insert(opts.sources, 1, {
        name = "supermaven",
        group_index = 1,
        priority = 100,
      })
    end
  end,
}
```

</TabItem>

</Tabs>

## [blink.cmp](https://github.com/saghen/blink.cmp) _(optional)_

 blink.cmp integration

 FIXME: this currently doesn't work properly
 {
   "saghen/blink.cmp",
   optional = true,
   opts = {
     sources = {
       compat = vim.g.ai_cmp and { "supermaven" } or nil,
     },
   },
   dependencies = {
     "supermaven-nvim",
     vim.g.ai_cmp and "saghen/blink.compat" or nil,
   },
 },

 Disabble cmp integration for now


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  windows = { ghost_text = { enabled = false } },
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "saghen/blink.cmp",
  optional = true,
  opts = {
    windows = { ghost_text = { enabled = false } },
  },
  dependencies = {
    {
      "supermaven-nvim",
      opts = {
        disable_inline_completion = false,
      },
    },
  },
}
```

</TabItem>

</Tabs>

## [lualine.nvim](https://github.com/nvim-lualine/lualine.nvim) _(optional)_

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  table.insert(opts.sections.lualine_x, 2, LazyVim.lualine.cmp_source("supermaven"))
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "nvim-lualine/lualine.nvim",
  optional = true,
  event = "VeryLazy",
  opts = function(_, opts)
    table.insert(opts.sections.lualine_x, 2, LazyVim.lualine.cmp_source("supermaven"))
  end,
}
```

</TabItem>

</Tabs>

## [noice.nvim](https://github.com/folke/noice.nvim) _(optional)_

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  vim.list_extend(opts.routes, {
    {
      filter = {
        event = "msg_show",
        any = {
          { find = "Starting Supermaven" },
          { find = "Supermaven Free Tier" },
        },
      },
      skip = true,
    },
  })
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "folke/noice.nvim",
  optional = true,
  opts = function(_, opts)
    vim.list_extend(opts.routes, {
      {
        filter = {
          event = "msg_show",
          any = {
            { find = "Starting Supermaven" },
            { find = "Supermaven Free Tier" },
          },
        },
        skip = true,
      },
    })
  end,
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
