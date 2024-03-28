"use strict";(self.webpackChunklazyvim=self.webpackChunklazyvim||[]).push([[7897],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(t),d=i,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||l;return t?a.createElement(g,r(r({ref:n},p),{},{components:t})):a.createElement(g,r({ref:n},p))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:i,r[1]=o;for(var c=2;c<l;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(7294),i=t(6010);const l="tabItem_Ymn6";function r(e){let{children:n,hidden:t,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(l,r),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>T});var a=t(7462),i=t(7294),l=t(6010),r=t(2466),o=t(6550),s=t(1980),c=t(7392),p=t(12);function u(e){return function(e){return i.Children.map(e,(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:i}}=e;return{value:n,label:t,attributes:a,default:i}}))}function m(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??u(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function d(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.k6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s._X)(l),(0,i.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,l=m(e),[r,o]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:l}))),[s,c]=g({queryString:t,groupId:a}),[u,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,p.Nk)(t);return[a,(0,i.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:a}),h=(()=>{const e=s??u;return d({value:e,tabValues:l})?e:null})();(0,i.useLayoutEffect)((()=>{h&&o(h)}),[h]);return{selectedValue:r,selectValue:(0,i.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),f(e)}),[c,f,l]),tabValues:l}}var h=t(2389);const b="tabList__CuJ",v="tabItem_LNqP";function k(e){let{className:n,block:t,selectedValue:o,selectValue:s,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.o5)(),m=e=>{const n=e.currentTarget,t=p.indexOf(n),a=c[t].value;a!==o&&(u(n),s(a))},d=e=>{let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=p.indexOf(e.currentTarget)+1;n=p[t]??p[0];break}case"ArrowLeft":{const t=p.indexOf(e.currentTarget)-1;n=p[t]??p[p.length-1];break}}n?.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},n)},c.map((e=>{let{value:n,label:t,attributes:r}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,key:n,ref:e=>p.push(e),onKeyDown:d,onClick:m},r,{className:(0,l.Z)("tabs__item",v,r?.className,{"tabs__item--active":o===n})}),t??n)})))}function y(e){let{lazy:n,children:t,selectedValue:a}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},l.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function _(e){const n=f(e);return i.createElement("div",{className:(0,l.Z)("tabs-container",b)},i.createElement(k,(0,a.Z)({},e,n)),i.createElement(y,(0,a.Z)({},e,n)))}function T(e){const n=(0,h.Z)();return i.createElement(_,(0,a.Z)({key:String(n)},e))}},5293:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var a=t(7462),i=(t(7294),t(3905)),l=t(4866),r=t(5162);const o={},s="Coding",c={unversionedId:"plugins/coding",id:"plugins/coding",title:"Coding",description:"nvim-cmp",source:"@site/docs/plugins/coding.md",sourceDirName:"plugins",slug:"/plugins/coding",permalink:"/plugins/coding",draft:!1,editUrl:"https://github.com/LazyVim/lazyvim.github.io/tree/master/docs/plugins/coding.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Core Plugins",permalink:"/plugins/"},next:{title:"Colorscheme",permalink:"/plugins/colorscheme"}},p={},u=[{value:"nvim-cmp",id:"nvim-cmp",level:2},{value:"cmp-nvim-lsp",id:"cmp-nvim-lsp",level:2},{value:"cmp-buffer",id:"cmp-buffer",level:2},{value:"cmp-path",id:"cmp-path",level:2},{value:"LuaSnip",id:"luasnip",level:2},{value:"friendly-snippets",id:"friendly-snippets",level:2},{value:"nvim-cmp",id:"nvim-cmp-1",level:2},{value:"cmp_luasnip",id:"cmp_luasnip",level:2},{value:"mini.pairs",id:"minipairs",level:2},{value:"mini.surround",id:"minisurround",level:2},{value:"nvim-ts-context-commentstring",id:"nvim-ts-context-commentstring",level:2},{value:"mini.comment",id:"minicomment",level:2},{value:"mini.ai",id:"miniai",level:2}],m={toc:u};function d(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"coding"},"Coding"),(0,i.kt)("h2",{id:"nvim-cmp"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/hrsh7th/nvim-cmp"},"nvim-cmp")),(0,i.kt)("p",null," auto completion"),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function()\n  vim.api.nvim_set_hl(0, "CmpGhostText", { link = "Comment", default = true })\n  local cmp = require("cmp")\n  local defaults = require("cmp.config.default")()\n  return {\n    auto_brackets = {}, -- configure any filetype to auto add brackets\n    completion = {\n      completeopt = "menu,menuone,noinsert",\n    },\n    mapping = cmp.mapping.preset.insert({\n      ["<C-n>"] = cmp.mapping.select_next_item({ behavior = cmp.SelectBehavior.Insert }),\n      ["<C-p>"] = cmp.mapping.select_prev_item({ behavior = cmp.SelectBehavior.Insert }),\n      ["<C-b>"] = cmp.mapping.scroll_docs(-4),\n      ["<C-f>"] = cmp.mapping.scroll_docs(4),\n      ["<C-Space>"] = cmp.mapping.complete(),\n      ["<C-e>"] = cmp.mapping.abort(),\n      ["<CR>"] = cmp.mapping.confirm({ select = true }), -- Accept currently selected item. Set `select` to `false` to only confirm explicitly selected items.\n      ["<S-CR>"] = cmp.mapping.confirm({\n        behavior = cmp.ConfirmBehavior.Replace,\n        select = true,\n      }), -- Accept currently selected item. Set `select` to `false` to only confirm explicitly selected items.\n      ["<C-CR>"] = function(fallback)\n        cmp.abort()\n        fallback()\n      end,\n    }),\n    sources = cmp.config.sources({\n      { name = "nvim_lsp" },\n      { name = "path" },\n    }, {\n      { name = "buffer" },\n    }),\n    formatting = {\n      format = function(_, item)\n        local icons = require("lazyvim.config").icons.kinds\n        if icons[item.kind] then\n          item.kind = icons[item.kind] .. item.kind\n        end\n        return item\n      end,\n    },\n    experimental = {\n      ghost_text = {\n        hl_group = "CmpGhostText",\n      },\n    },\n    sorting = defaults.sorting,\n  }\nend\n'))),(0,i.kt)(r.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "hrsh7th/nvim-cmp",\n  version = false, -- last release is way too old\n  event = "InsertEnter",\n  dependencies = {\n    "hrsh7th/cmp-nvim-lsp",\n    "hrsh7th/cmp-buffer",\n    "hrsh7th/cmp-path",\n  },\n  -- Not all LSP servers add brackets when completing a function.\n  -- To better deal with this, LazyVim adds a custom option to cmp,\n  -- that you can configure. For example:\n  --\n  -- ```lua\n  -- opts = {\n  --   auto_brackets = { "python" }\n  -- }\n  -- ```\n\n  opts = function()\n    vim.api.nvim_set_hl(0, "CmpGhostText", { link = "Comment", default = true })\n    local cmp = require("cmp")\n    local defaults = require("cmp.config.default")()\n    return {\n      auto_brackets = {}, -- configure any filetype to auto add brackets\n      completion = {\n        completeopt = "menu,menuone,noinsert",\n      },\n      mapping = cmp.mapping.preset.insert({\n        ["<C-n>"] = cmp.mapping.select_next_item({ behavior = cmp.SelectBehavior.Insert }),\n        ["<C-p>"] = cmp.mapping.select_prev_item({ behavior = cmp.SelectBehavior.Insert }),\n        ["<C-b>"] = cmp.mapping.scroll_docs(-4),\n        ["<C-f>"] = cmp.mapping.scroll_docs(4),\n        ["<C-Space>"] = cmp.mapping.complete(),\n        ["<C-e>"] = cmp.mapping.abort(),\n        ["<CR>"] = cmp.mapping.confirm({ select = true }), -- Accept currently selected item. Set `select` to `false` to only confirm explicitly selected items.\n        ["<S-CR>"] = cmp.mapping.confirm({\n          behavior = cmp.ConfirmBehavior.Replace,\n          select = true,\n        }), -- Accept currently selected item. Set `select` to `false` to only confirm explicitly selected items.\n        ["<C-CR>"] = function(fallback)\n          cmp.abort()\n          fallback()\n        end,\n      }),\n      sources = cmp.config.sources({\n        { name = "nvim_lsp" },\n        { name = "path" },\n      }, {\n        { name = "buffer" },\n      }),\n      formatting = {\n        format = function(_, item)\n          local icons = require("lazyvim.config").icons.kinds\n          if icons[item.kind] then\n            item.kind = icons[item.kind] .. item.kind\n          end\n          return item\n        end,\n      },\n      experimental = {\n        ghost_text = {\n          hl_group = "CmpGhostText",\n        },\n      },\n      sorting = defaults.sorting,\n    }\n  end,\n  ---@param opts cmp.ConfigSchema | {auto_brackets?: string[]}\n  config = function(_, opts)\n    for _, source in ipairs(opts.sources) do\n      source.group_index = source.group_index or 1\n    end\n    local cmp = require("cmp")\n    local Kind = cmp.lsp.CompletionItemKind\n    cmp.setup(opts)\n    cmp.event:on("confirm_done", function(event)\n      if not vim.tbl_contains(opts.auto_brackets or {}, vim.bo.filetype) then\n        return\n      end\n      local entry = event.entry\n      local item = entry:get_completion_item()\n      if vim.tbl_contains({ Kind.Function, Kind.Method }, item.kind) then\n        local keys = vim.api.nvim_replace_termcodes("()<left>", false, false, true)\n        vim.api.nvim_feedkeys(keys, "i", true)\n      end\n    end)\n  end,\n}\n')))),(0,i.kt)("h2",{id:"cmp-nvim-lsp"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/hrsh7th/cmp-nvim-lsp"},"cmp-nvim-lsp")),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,i.kt)(r.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "hrsh7th/cmp-nvim-lsp",\n  "hrsh7th/cmp-buffer",\n  "hrsh7th/cmp-path",\n}\n')))),(0,i.kt)("h2",{id:"cmp-buffer"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/hrsh7th/cmp-buffer"},"cmp-buffer")),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,i.kt)(r.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'"hrsh7th/cmp-buffer"\n')))),(0,i.kt)("h2",{id:"cmp-path"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/hrsh7th/cmp-path"},"cmp-path")),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,i.kt)(r.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'"hrsh7th/cmp-path"\n')))),(0,i.kt)("h2",{id:"luasnip"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/L3MON4D3/LuaSnip"},"LuaSnip")),(0,i.kt)("p",null," snippets"),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  history = true,\n  delete_check_events = "TextChanged",\n}\n'))),(0,i.kt)(r.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "L3MON4D3/LuaSnip",\n  build = (not LazyVim.is_win())\n      and "echo \'NOTE: jsregexp is optional, so not a big deal if it fails to build\'; make install_jsregexp"\n    or nil,\n  dependencies = {\n    {\n      "rafamadriz/friendly-snippets",\n      config = function()\n        require("luasnip.loaders.from_vscode").lazy_load()\n      end,\n    },\n    {\n      "nvim-cmp",\n      dependencies = {\n        "saadparwaiz1/cmp_luasnip",\n      },\n      opts = function(_, opts)\n        opts.snippet = {\n          expand = function(args)\n            require("luasnip").lsp_expand(args.body)\n          end,\n        }\n        table.insert(opts.sources, { name = "luasnip" })\n      end,\n    },\n  },\n  opts = {\n    history = true,\n    delete_check_events = "TextChanged",\n  },\n  -- stylua: ignore\n  keys = {\n    {\n      "<tab>",\n      function()\n        return require("luasnip").jumpable(1) and "<Plug>luasnip-jump-next" or "<tab>"\n      end,\n      expr = true, silent = true, mode = "i",\n    },\n    { "<tab>", function() require("luasnip").jump(1) end, mode = "s" },\n    { "<s-tab>", function() require("luasnip").jump(-1) end, mode = { "i", "s" } },\n  },\n}\n')))),(0,i.kt)("h2",{id:"friendly-snippets"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/rafamadriz/friendly-snippets"},"friendly-snippets")),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"opts = {}\n"))),(0,i.kt)(r.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "rafamadriz/friendly-snippets",\n  config = function()\n    require("luasnip.loaders.from_vscode").lazy_load()\n  end,\n}\n')))),(0,i.kt)("h2",{id:"nvim-cmp-1"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/hrsh7th/nvim-cmp"},"nvim-cmp")),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function(_, opts)\n  opts.snippet = {\n    expand = function(args)\n      require("luasnip").lsp_expand(args.body)\n    end,\n  }\n  table.insert(opts.sources, { name = "luasnip" })\nend\n'))),(0,i.kt)(r.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "nvim-cmp",\n  dependencies = {\n    "saadparwaiz1/cmp_luasnip",\n  },\n  opts = function(_, opts)\n    opts.snippet = {\n      expand = function(args)\n        require("luasnip").lsp_expand(args.body)\n      end,\n    }\n    table.insert(opts.sources, { name = "luasnip" })\n  end,\n}\n')))),(0,i.kt)("h2",{id:"cmp_luasnip"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/saadparwaiz1/cmp_luasnip"},"cmp_luasnip")),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,i.kt)(r.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "saadparwaiz1/cmp_luasnip",\n}\n')))),(0,i.kt)("h2",{id:"minipairs"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/echasnovski/mini.pairs"},"mini.pairs")),(0,i.kt)("p",null," auto pairs"),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"opts = {}\n"))),(0,i.kt)(r.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "echasnovski/mini.pairs",\n  event = "VeryLazy",\n  opts = {},\n  keys = {\n    {\n      "<leader>up",\n      function()\n        vim.g.minipairs_disable = not vim.g.minipairs_disable\n        if vim.g.minipairs_disable then\n          LazyVim.warn("Disabled auto pairs", { title = "Option" })\n        else\n          LazyVim.info("Enabled auto pairs", { title = "Option" })\n        end\n      end,\n      desc = "Toggle Auto Pairs",\n    },\n  },\n}\n')))),(0,i.kt)("h2",{id:"minisurround"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/echasnovski/mini.surround"},"mini.surround")),(0,i.kt)("p",null," Fast and feature-rich surround actions. For text that includes\nsurrounding characters like brackets or quotes, this allows you\nto select the text inside, change or modify the surrounding characters,\nand more."),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  mappings = {\n    add = "gsa", -- Add surrounding in Normal and Visual modes\n    delete = "gsd", -- Delete surrounding\n    find = "gsf", -- Find surrounding (to the right)\n    find_left = "gsF", -- Find surrounding (to the left)\n    highlight = "gsh", -- Highlight surrounding\n    replace = "gsr", -- Replace surrounding\n    update_n_lines = "gsn", -- Update `n_lines`\n  },\n}\n'))),(0,i.kt)(r.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "echasnovski/mini.surround",\n  keys = function(_, keys)\n    -- Populate the keys based on the user\'s options\n    local plugin = require("lazy.core.config").spec.plugins["mini.surround"]\n    local opts = require("lazy.core.plugin").values(plugin, "opts", false)\n    local mappings = {\n      { opts.mappings.add, desc = "Add Surrounding", mode = { "n", "v" } },\n      { opts.mappings.delete, desc = "Delete Surrounding" },\n      { opts.mappings.find, desc = "Find Right Surrounding" },\n      { opts.mappings.find_left, desc = "Find Left Surrounding" },\n      { opts.mappings.highlight, desc = "Highlight Surrounding" },\n      { opts.mappings.replace, desc = "Replace Surrounding" },\n      { opts.mappings.update_n_lines, desc = "Update `MiniSurround.config.n_lines`" },\n    }\n    mappings = vim.tbl_filter(function(m)\n      return m[1] and #m[1] > 0\n    end, mappings)\n    return vim.list_extend(mappings, keys)\n  end,\n  opts = {\n    mappings = {\n      add = "gsa", -- Add surrounding in Normal and Visual modes\n      delete = "gsd", -- Delete surrounding\n      find = "gsf", -- Find surrounding (to the right)\n      find_left = "gsF", -- Find surrounding (to the left)\n      highlight = "gsh", -- Highlight surrounding\n      replace = "gsr", -- Replace surrounding\n      update_n_lines = "gsn", -- Update `n_lines`\n    },\n  },\n}\n')))),(0,i.kt)("h2",{id:"nvim-ts-context-commentstring"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/JoosepAlviste/nvim-ts-context-commentstring"},"nvim-ts-context-commentstring")),(0,i.kt)("p",null," comments"),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"opts = {\n  enable_autocmd = false,\n}\n"))),(0,i.kt)(r.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "JoosepAlviste/nvim-ts-context-commentstring",\n  lazy = true,\n  opts = {\n    enable_autocmd = false,\n  },\n}\n')))),(0,i.kt)("h2",{id:"minicomment"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/echasnovski/mini.comment"},"mini.comment")),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  options = {\n    custom_commentstring = function()\n      return require("ts_context_commentstring.internal").calculate_commentstring() or vim.bo.commentstring\n    end,\n  },\n}\n'))),(0,i.kt)(r.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "echasnovski/mini.comment",\n  event = "VeryLazy",\n  opts = {\n    options = {\n      custom_commentstring = function()\n        return require("ts_context_commentstring.internal").calculate_commentstring() or vim.bo.commentstring\n      end,\n    },\n  },\n}\n')))),(0,i.kt)("h2",{id:"miniai"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/echasnovski/mini.ai"},"mini.ai")),(0,i.kt)("p",null," Better text-objects"),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function()\n  local ai = require("mini.ai")\n  return {\n    n_lines = 500,\n    custom_textobjects = {\n      o = ai.gen_spec.treesitter({\n        a = { "@block.outer", "@conditional.outer", "@loop.outer" },\n        i = { "@block.inner", "@conditional.inner", "@loop.inner" },\n      }, {}),\n      f = ai.gen_spec.treesitter({ a = "@function.outer", i = "@function.inner" }, {}),\n      c = ai.gen_spec.treesitter({ a = "@class.outer", i = "@class.inner" }, {}),\n      t = { "<([%p%w]-)%f[^<%w][^<>]->.-</%1>", "^<.->().*()</[^/]->$" },\n      d = { "%f[%d]%d+" }, -- digits\n      e = { -- Word with case\n        {\n          "%u[%l%d]+%f[^%l%d]",\n          "%f[%S][%l%d]+%f[^%l%d]",\n          "%f[%P][%l%d]+%f[^%l%d]",\n          "^[%l%d]+%f[^%l%d]",\n        },\n        "^().*()$",\n      },\n      g = function() -- Whole buffer, similar to `gg` and \'G\' motion\n        local from = { line = 1, col = 1 }\n        local to = {\n          line = vim.fn.line("$"),\n          col = math.max(vim.fn.getline("$"):len(), 1),\n        }\n        return { from = from, to = to }\n      end,\n      u = ai.gen_spec.function_call(), -- u for "Usage"\n      U = ai.gen_spec.function_call({ name_pattern = "[%w_]" }), -- without dot in function name\n    },\n  }\nend\n'))),(0,i.kt)(r.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "echasnovski/mini.ai",\n  -- keys = {\n  --   { "a", mode = { "x", "o" } },\n  --   { "i", mode = { "x", "o" } },\n  -- },\n  event = "VeryLazy",\n  opts = function()\n    local ai = require("mini.ai")\n    return {\n      n_lines = 500,\n      custom_textobjects = {\n        o = ai.gen_spec.treesitter({\n          a = { "@block.outer", "@conditional.outer", "@loop.outer" },\n          i = { "@block.inner", "@conditional.inner", "@loop.inner" },\n        }, {}),\n        f = ai.gen_spec.treesitter({ a = "@function.outer", i = "@function.inner" }, {}),\n        c = ai.gen_spec.treesitter({ a = "@class.outer", i = "@class.inner" }, {}),\n        t = { "<([%p%w]-)%f[^<%w][^<>]->.-</%1>", "^<.->().*()</[^/]->$" },\n        d = { "%f[%d]%d+" }, -- digits\n        e = { -- Word with case\n          {\n            "%u[%l%d]+%f[^%l%d]",\n            "%f[%S][%l%d]+%f[^%l%d]",\n            "%f[%P][%l%d]+%f[^%l%d]",\n            "^[%l%d]+%f[^%l%d]",\n          },\n          "^().*()$",\n        },\n        g = function() -- Whole buffer, similar to `gg` and \'G\' motion\n          local from = { line = 1, col = 1 }\n          local to = {\n            line = vim.fn.line("$"),\n            col = math.max(vim.fn.getline("$"):len(), 1),\n          }\n          return { from = from, to = to }\n        end,\n        u = ai.gen_spec.function_call(), -- u for "Usage"\n        U = ai.gen_spec.function_call({ name_pattern = "[%w_]" }), -- without dot in function name\n      },\n    }\n  end,\n  config = function(_, opts)\n    require("mini.ai").setup(opts)\n    -- register all text objects with which-key\n    LazyVim.on_load("which-key.nvim", function()\n      ---@type table<string, string|table>\n      local i = {\n        [" "] = "Whitespace",\n        [\'"\'] = \'Balanced "\',\n        ["\'"] = "Balanced \'",\n        ["`"] = "Balanced `",\n        ["("] = "Balanced (",\n        [")"] = "Balanced ) including white-space",\n        [">"] = "Balanced > including white-space",\n        ["<lt>"] = "Balanced <",\n        ["]"] = "Balanced ] including white-space",\n        ["["] = "Balanced [",\n        ["}"] = "Balanced } including white-space",\n        ["{"] = "Balanced {",\n        ["?"] = "User Prompt",\n        _ = "Underscore",\n        a = "Argument",\n        b = "Balanced ), ], }",\n        c = "Class",\n        d = "Digit(s)",\n        e = "Word in CamelCase & snake_case",\n        f = "Function",\n        g = "Entire file",\n        o = "Block, conditional, loop",\n        q = "Quote `, \\", \'",\n        t = "Tag",\n        u = "Use/call function & method",\n        U = "Use/call without dot in name",\n      }\n      local a = vim.deepcopy(i)\n      for k, v in pairs(a) do\n        a[k] = v:gsub(" including.*", "")\n      end\n\n      local ic = vim.deepcopy(i)\n      local ac = vim.deepcopy(a)\n      for key, name in pairs({ n = "Next", l = "Last" }) do\n        i[key] = vim.tbl_extend("force", { name = "Inside " .. name .. " textobject" }, ic)\n        a[key] = vim.tbl_extend("force", { name = "Around " .. name .. " textobject" }, ac)\n      end\n      require("which-key").register({\n        mode = { "o", "x" },\n        i = i,\n        a = a,\n      })\n    end)\n  end,\n}\n')))))}d.isMDXComponent=!0}}]);