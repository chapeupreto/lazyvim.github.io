"use strict";(self.webpackChunklazyvim=self.webpackChunklazyvim||[]).push([[8937],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=a.createContext({}),u=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=u(e.components);return a.createElement(c.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(t),d=o,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||l;return t?a.createElement(f,r(r({ref:n},s),{},{components:t})):a.createElement(f,r({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,r=new Array(l);r[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[p]="string"==typeof e?e:o,r[1]=i;for(var u=2;u<l;u++)r[u]=t[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(7294),o=t(6010);const l="tabItem_Ymn6";function r(e){let{children:n,hidden:t,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(l,r),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>T});var a=t(7462),o=t(7294),l=t(6010),r=t(2466),i=t(6550),c=t(1980),u=t(7392),s=t(12);function p(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:o}}=e;return{value:n,label:t,attributes:a,default:o}}))}function m(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=n??p(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function d(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.k6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c._X)(l),(0,o.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,l=m(e),[r,i]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:l}))),[c,u]=f({queryString:t,groupId:a}),[p,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,s.Nk)(t);return[a,(0,o.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:a}),g=(()=>{const e=c??p;return d({value:e,tabValues:l})?e:null})();(0,o.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:r,selectValue:(0,o.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),b(e)}),[u,b,l]),tabValues:l}}var g=t(2389);const y="tabList__CuJ",h="tabItem_LNqP";function v(e){let{className:n,block:t,selectedValue:i,selectValue:c,tabValues:u}=e;const s=[],{blockElementScrollPositionUntilNextRender:p}=(0,r.o5)(),m=e=>{const n=e.currentTarget,t=s.indexOf(n),a=u[t].value;a!==i&&(p(n),c(a))},d=e=>{let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;n=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=s[t]??s[s.length-1];break}}n?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},n)},u.map((e=>{let{value:n,label:t,attributes:r}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,key:n,ref:e=>s.push(e),onKeyDown:d,onClick:m},r,{className:(0,l.Z)("tabs__item",h,r?.className,{"tabs__item--active":i===n})}),t??n)})))}function k(e){let{lazy:n,children:t,selectedValue:a}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},l.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function x(e){const n=b(e);return o.createElement("div",{className:(0,l.Z)("tabs-container",y)},o.createElement(v,(0,a.Z)({},e,n)),o.createElement(k,(0,a.Z)({},e,n)))}function T(e){const n=(0,g.Z)();return o.createElement(x,(0,a.Z)({key:String(n)},e))}},4615:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var a=t(7462),o=(t(7294),t(3905)),l=t(4866),r=t(5162);const i={},c="Copilot",u={unversionedId:"extras/coding/copilot",id:"extras/coding/copilot",title:"Copilot",description:"You can enable the extra with the :LazyExtras command.",source:"@site/docs/extras/coding/copilot.md",sourceDirName:"extras/coding",slug:"/extras/coding/copilot",permalink:"/extras/coding/copilot",draft:!1,editUrl:"https://github.com/LazyVim/lazyvim.github.io/tree/master/docs/extras/coding/copilot.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Codeium",permalink:"/extras/coding/codeium"},next:{title:"Native_snippets",permalink:"/extras/coding/native_snippets"}},s={},p=[{value:"copilot.lua",id:"copilotlua",level:2},{value:"nvim-cmp",id:"nvim-cmp",level:2},{value:"copilot-cmp",id:"copilot-cmp",level:2},{value:"lualine.nvim <em>(optional)</em>",id:"lualinenvim-optional",level:2}],m={toc:p};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"copilot"},"Copilot"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You can enable the extra with the ",(0,o.kt)("inlineCode",{parentName:"p"},":LazyExtras")," command.\nPlugins marked as optional will only be configured if they are installed.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Alternatively, you can add it to your ",(0,o.kt)("code",null,"lazy.nvim")," imports"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="lua/config/lazy.lua" {4}',title:'"lua/config/lazy.lua"',"{4}":!0},'require("lazy").setup({\n  spec = {\n    { "LazyVim/LazyVim", import = "lazyvim.plugins" },\n    { import = "lazyvim.plugins.extras.coding.copilot" },\n    { import = "plugins" },\n  },\n})\n'))),(0,o.kt)("p",null,"Below you can find a list of included plugins and their default settings."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"You don't need to copy the default settings to your config.\nThey are only shown here for reference.")),(0,o.kt)("h2",{id:"copilotlua"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/zbirenbaum/copilot.lua"},"copilot.lua")),(0,o.kt)("p",null," copilot"),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"opts = {\n  suggestion = { enabled = false },\n  panel = { enabled = false },\n  filetypes = {\n    markdown = true,\n    help = true,\n  },\n}\n"))),(0,o.kt)(r.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "zbirenbaum/copilot.lua",\n  cmd = "Copilot",\n  build = ":Copilot auth",\n  opts = {\n    suggestion = { enabled = false },\n    panel = { enabled = false },\n    filetypes = {\n      markdown = true,\n      help = true,\n    },\n  },\n}\n')))),(0,o.kt)("h2",{id:"nvim-cmp"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/hrsh7th/nvim-cmp"},"nvim-cmp")),(0,o.kt)("p",null," copilot cmp source"),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function(_, opts)\n  table.insert(opts.sources, 1, {\n    name = "copilot",\n    group_index = 1,\n    priority = 100,\n  })\nend\n'))),(0,o.kt)(r.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "nvim-cmp",\n  dependencies = {\n    {\n      "zbirenbaum/copilot-cmp",\n      dependencies = "copilot.lua",\n      opts = {},\n      config = function(_, opts)\n        local copilot_cmp = require("copilot_cmp")\n        copilot_cmp.setup(opts)\n        -- attach cmp source whenever copilot attaches\n        -- fixes lazy-loading issues with the copilot cmp source\n        LazyVim.lsp.on_attach(function(client)\n          if client.name == "copilot" then\n            copilot_cmp._on_insert_enter({})\n          end\n        end)\n      end,\n    },\n  },\n  ---@param opts cmp.ConfigSchema\n  opts = function(_, opts)\n    table.insert(opts.sources, 1, {\n      name = "copilot",\n      group_index = 1,\n      priority = 100,\n    })\n  end,\n}\n')))),(0,o.kt)("h2",{id:"copilot-cmp"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/zbirenbaum/copilot-cmp"},"copilot-cmp")),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"opts = {}\n"))),(0,o.kt)(r.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "zbirenbaum/copilot-cmp",\n  dependencies = "copilot.lua",\n  opts = {},\n  config = function(_, opts)\n    local copilot_cmp = require("copilot_cmp")\n    copilot_cmp.setup(opts)\n    -- attach cmp source whenever copilot attaches\n    -- fixes lazy-loading issues with the copilot cmp source\n    LazyVim.lsp.on_attach(function(client)\n      if client.name == "copilot" then\n        copilot_cmp._on_insert_enter({})\n      end\n    end)\n  end,\n}\n')))),(0,o.kt)("h2",{id:"lualinenvim-optional"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/nvim-lualine/lualine.nvim"},"lualine.nvim")," ",(0,o.kt)("em",{parentName:"h2"},"(optional)")),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function(_, opts)\n  local colors = {\n    [""] = LazyVim.ui.fg("Special"),\n    ["Normal"] = LazyVim.ui.fg("Special"),\n    ["Warning"] = LazyVim.ui.fg("DiagnosticError"),\n    ["InProgress"] = LazyVim.ui.fg("DiagnosticWarn"),\n  }\n  table.insert(opts.sections.lualine_x, 2, {\n    function()\n      local icon = require("lazyvim.config").icons.kinds.Copilot\n      local status = require("copilot.api").status.data\n      return icon .. (status.message or "")\n    end,\n    cond = function()\n      if not package.loaded["copilot"] then\n        return\n      end\n      local ok, clients = pcall(LazyVim.lsp.get_clients, { name = "copilot", bufnr = 0 })\n      if not ok then\n        return false\n      end\n      return ok and #clients > 0\n    end,\n    color = function()\n      if not package.loaded["copilot"] then\n        return\n      end\n      local status = require("copilot.api").status.data\n      return colors[status.status] or colors[""]\n    end,\n  })\nend\n'))),(0,o.kt)(r.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "nvim-lualine/lualine.nvim",\n  optional = true,\n  event = "VeryLazy",\n  opts = function(_, opts)\n    local colors = {\n      [""] = LazyVim.ui.fg("Special"),\n      ["Normal"] = LazyVim.ui.fg("Special"),\n      ["Warning"] = LazyVim.ui.fg("DiagnosticError"),\n      ["InProgress"] = LazyVim.ui.fg("DiagnosticWarn"),\n    }\n    table.insert(opts.sections.lualine_x, 2, {\n      function()\n        local icon = require("lazyvim.config").icons.kinds.Copilot\n        local status = require("copilot.api").status.data\n        return icon .. (status.message or "")\n      end,\n      cond = function()\n        if not package.loaded["copilot"] then\n          return\n        end\n        local ok, clients = pcall(LazyVim.lsp.get_clients, { name = "copilot", bufnr = 0 })\n        if not ok then\n          return false\n        end\n        return ok and #clients > 0\n      end,\n      color = function()\n        if not package.loaded["copilot"] then\n          return\n        end\n        local status = require("copilot.api").status.data\n        return colors[status.status] or colors[""]\n      end,\n    })\n  end,\n}\n')))))}d.isMDXComponent=!0}}]);