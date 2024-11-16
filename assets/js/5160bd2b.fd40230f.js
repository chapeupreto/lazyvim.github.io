"use strict";(self.webpackChunklazyvim=self.webpackChunklazyvim||[]).push([[4974],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(h,l(l({ref:t},s),{},{components:n})):a.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(7462),r=n(7294),o=n(6010),l=n(2466),i=n(6550),u=n(1980),c=n(7392),s=n(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[u,c]=h({queryString:n,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,s.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),b=(()=>{const e=u??p;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),f(e)}),[c,f,o]),tabValues:o}}var b=n(2389);const v="tabList__CuJ",y="tabItem_LNqP";function g(e){let{className:t,block:n,selectedValue:i,selectValue:u,tabValues:c}=e;const s=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=s.indexOf(t),a=c[n].value;a!==i&&(p(t),u(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>s.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",y,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function C(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",v)},r.createElement(g,(0,a.Z)({},e,t)),r.createElement(k,(0,a.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return r.createElement(C,(0,a.Z)({key:String(t)},e))}},3196:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),o=n(4866),l=n(5162);const i={},u="Copilot-chat",c={unversionedId:"extras/ai/copilot-chat",id:"extras/ai/copilot-chat",title:"Copilot-chat",description:"You can enable the extra with the :LazyExtras command.",source:"@site/docs/extras/ai/copilot-chat.md",sourceDirName:"extras/ai",slug:"/extras/ai/copilot-chat",permalink:"/extras/ai/copilot-chat",draft:!1,editUrl:"https://github.com/LazyVim/lazyvim.github.io/tree/main/docs/extras/ai/copilot-chat.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Codeium",permalink:"/extras/ai/codeium"},next:{title:"Copilot",permalink:"/extras/ai/copilot"}},s={},p=[{value:"CopilotChat.nvim",id:"copilotchatnvim",level:2},{value:"edgy.nvim <em>(optional)</em>",id:"edgynvim-optional",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"copilot-chat"},(0,r.kt)("inlineCode",{parentName:"h1"},"Copilot-chat")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can enable the extra with the ",(0,r.kt)("inlineCode",{parentName:"p"},":LazyExtras")," command.\nPlugins marked as optional will only be configured if they are installed.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Alternatively, you can add it to your ",(0,r.kt)("code",null,"lazy.nvim")," imports"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="lua/config/lazy.lua" {4}',title:'"lua/config/lazy.lua"',"{4}":!0},'require("lazy").setup({\n  spec = {\n    { "LazyVim/LazyVim", import = "lazyvim.plugins" },\n    { import = "lazyvim.plugins.extras.ai.copilot-chat" },\n    { import = "plugins" },\n  },\n})\n'))),(0,r.kt)("p",null,"Below you can find a list of included plugins and their default settings."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"You don't need to copy the default settings to your config.\nThey are only shown here for reference.")),(0,r.kt)("h2",{id:"copilotchatnvim"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/CopilotC-Nvim/CopilotChat.nvim"},"CopilotChat.nvim")),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function()\n  local user = vim.env.USER or "User"\n  user = user:sub(1, 1):upper() .. user:sub(2)\n  return {\n    auto_insert_mode = true,\n    question_header = "\uf007  " .. user .. " ",\n    answer_header = "\uf4b8  Copilot ",\n    window = {\n      width = 0.4,\n    },\n  }\nend\n'))),(0,r.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "CopilotC-Nvim/CopilotChat.nvim",\n  branch = "canary",\n  cmd = "CopilotChat",\n  opts = function()\n    local user = vim.env.USER or "User"\n    user = user:sub(1, 1):upper() .. user:sub(2)\n    return {\n      auto_insert_mode = true,\n      question_header = "\uf007  " .. user .. " ",\n      answer_header = "\uf4b8  Copilot ",\n      window = {\n        width = 0.4,\n      },\n    }\n  end,\n  keys = {\n    { "<c-s>", "<CR>", ft = "copilot-chat", desc = "Submit Prompt", remap = true },\n    { "<leader>a", "", desc = "+ai", mode = { "n", "v" } },\n    {\n      "<leader>aa",\n      function()\n        return require("CopilotChat").toggle()\n      end,\n      desc = "Toggle (CopilotChat)",\n      mode = { "n", "v" },\n    },\n    {\n      "<leader>ax",\n      function()\n        return require("CopilotChat").reset()\n      end,\n      desc = "Clear (CopilotChat)",\n      mode = { "n", "v" },\n    },\n    {\n      "<leader>aq",\n      function()\n        local input = vim.fn.input("Quick Chat: ")\n        if input ~= "" then\n          require("CopilotChat").ask(input)\n        end\n      end,\n      desc = "Quick Chat (CopilotChat)",\n      mode = { "n", "v" },\n    },\n    -- Show prompts actions with telescope\n    { "<leader>ap", M.pick("prompt"), desc = "Prompt Actions (CopilotChat)", mode = { "n", "v" } },\n  },\n  config = function(_, opts)\n    local chat = require("CopilotChat")\n    if pcall(require, "cmp") then\n      require("CopilotChat.integrations.cmp").setup()\n    end\n\n    vim.api.nvim_create_autocmd("BufEnter", {\n      pattern = "copilot-chat",\n      callback = function()\n        vim.opt_local.relativenumber = false\n        vim.opt_local.number = false\n      end,\n    })\n\n    chat.setup(opts)\n  end,\n}\n')))),(0,r.kt)("h2",{id:"edgynvim-optional"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/folke/edgy.nvim"},"edgy.nvim")," ",(0,r.kt)("em",{parentName:"h2"},"(optional)")),(0,r.kt)("p",null," Edgy integration"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function(_, opts)\n  opts.right = opts.right or {}\n  table.insert(opts.right, {\n    ft = "copilot-chat",\n    title = "Copilot Chat",\n    size = { width = 50 },\n  })\nend\n'))),(0,r.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "folke/edgy.nvim",\n  optional = true,\n  opts = function(_, opts)\n    opts.right = opts.right or {}\n    table.insert(opts.right, {\n      ft = "copilot-chat",\n      title = "Copilot Chat",\n      size = { width = 50 },\n    })\n  end,\n}\n')))))}m.isMDXComponent=!0}}]);