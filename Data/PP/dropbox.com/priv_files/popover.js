define(["external/mcl/classnames","external/react","external/mcl/react-aria-menubutton-taylorcode"],function(e,t,r){return(function(e){function t(o){if(r[o])return r[o].exports;var n=r[o]={exports:{},id:o,loaded:!1};return e[o].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)})({0:function(e,t,r){"use strict";function o(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),r(84),r(85),o(r(130)),o(r(131)),o(r(132)),o(r(133)),o(r(134)),o(r(135)),o(r(136)),o(r(137)),o(r(138)),o(r(139)),o(r(140))},3:function(t,r){t.exports=e},4:function(e,r){e.exports=t},5:function(e,t){e.exports=r},84:function(e,t){},85:function(e,t){},130:function(e,t,r){"use strict";var o=this&&this.__assign||Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},n=this&&this.__rest||function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&(r[o[n]]=e[o[n]]);return r};Object.defineProperty(t,"__esModule",{value:!0});var a=r(3),s=r(4),i=r(5);t.Popover=function(e){var t=e.className,r=e.onSelection,c=e.ref,l=n(e,["className","onSelection","ref"]),p=a(t,"mc-popover");return s.createElement(i.Wrapper,o({className:p,onSelection:r||function(){},ref:c},l))},t.Popover.displayName="Popover"},131:function(e,t,r){"use strict";var o=this&&this.__assign||Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},n=this&&this.__rest||function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&(r[o[n]]=e[o[n]]);return r};Object.defineProperty(t,"__esModule",{value:!0});var a=r(3),s=r(4),i=r(5);t.PopoverContent=function(e){var t=e.attachment,r=void 0===t?"left":t,c=e.position,l=void 0===c?"below":c,p=e.children,f=e.className,u=e.height,v=e.isRevealed,m=e.ref,O=e.tagName,y=void 0===O?"nav":O,h=e.width,b=n(e,["attachment","position","children","className","height","isRevealed","ref","tagName","width"]),d=a(f,{"mc-popover-content":!0,"mc-popover-content-attach-left":"left"===r,"mc-popover-content-attach-right":"right"===r,"mc-popover-content-position-above":"above"===l,"mc-popover-content-position-below":"below"===l}),g={width:h,height:u},P=s.createElement("div",{className:"mc-popover-content-scroller",style:g},p);return s.createElement("div",{className:d},s.createElement(i.Menu,o({tag:y,className:"mc-popover-content-menu",ref:m},b),function(e){var t=e.isOpen;return("boolean"==typeof v?v:t)&&P}))},t.PopoverContent.displayName="PopoverContent"},132:function(e,t,r){"use strict";var o=this&&this.__assign||Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},n=this&&this.__rest||function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&(r[o[n]]=e[o[n]]);return r};Object.defineProperty(t,"__esModule",{value:!0});var a=r(3),s=r(4);t.PopoverContentDescription=function(e){var t=e.className,r=n(e,["className"]),i=a(t,"mc-popover-content-description");return s.createElement("div",o({className:i},r))},t.PopoverContentDescription.displayName="PopoverContentDescription"},133:function(e,t,r){"use strict";var o=this&&this.__assign||Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},n=this&&this.__rest||function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&(r[o[n]]=e[o[n]]);return r};Object.defineProperty(t,"__esModule",{value:!0});var a=r(3),s=r(4),i=r(5);t.PopoverContentItem=function(e){var t=e.href,r=e.className,c=e.ref,l=n(e,["href","className","ref"]),p=l.tagName,f=void 0===p?"button":p,u=n(l,["tagName"]),v=a(r,"mc-popover-content-item");return t&&!l.disabled&&(f="a"),s.createElement(i.MenuItem,o({tag:f,className:v,ref:c,href:t},u))},t.PopoverContentItem.displayName="PopoverContentItem"},134:function(e,t,r){"use strict";var o=this&&this.__assign||Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},n=this&&this.__rest||function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&(r[o[n]]=e[o[n]]);return r};Object.defineProperty(t,"__esModule",{value:!0});var a=r(3),s=r(4);t.PopoverContentSeparator=function(e){var t=e.className,r=n(e,["className"]),i=a(t,"mc-popover-content-separator");return s.createElement("hr",o({className:i},r))},t.PopoverContentSeparator.displayName="PopoverContentSeparator"},135:function(e,t,r){"use strict";var o=this&&this.__assign||Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},n=this&&this.__rest||function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&(r[o[n]]=e[o[n]]);return r};Object.defineProperty(t,"__esModule",{value:!0});var a=r(3),s=r(4);t.PopoverContentTitle=function(e){var t=e.className,r=n(e,["className"]),i=a(t,"mc-popover-content-title");return s.createElement("h2",o({className:i},r))},t.PopoverContentTitle.displayName="PopoverContentTitle"},136:function(e,t,r){"use strict";var o=this&&this.__assign||Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},n=this&&this.__rest||function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&(r[o[n]]=e[o[n]]);return r};Object.defineProperty(t,"__esModule",{value:!0});var a=r(3),s=r(4);t.PopoverItemGroup=function(e){var t=e.className,r=n(e,["className"]),i=a("mc-popover-item-group",t);return s.createElement("div",o({className:i},r))},t.PopoverItemGroup.displayName="PopoverItemGroup"},137:function(e,t,r){"use strict";var o=this&&this.__assign||Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},n=this&&this.__rest||function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&(r[o[n]]=e[o[n]]);return r};Object.defineProperty(t,"__esModule",{value:!0});var a=r(3),s=r(4);t.PopoverItemGroupSeparator=function(e){var t=e.className,r=n(e,["className"]),i=a(t,"mc-popover-item-group-separator");return s.createElement("hr",o({className:i},r))},t.PopoverItemGroupSeparator.displayName="PopoverItemGroupSeparator"},138:function(e,t,r){"use strict";var o=this&&this.__assign||Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},n=this&&this.__rest||function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&(r[o[n]]=e[o[n]]);return r};Object.defineProperty(t,"__esModule",{value:!0});var a=r(3),s=r(4);t.PopoverItemGroupTitle=function(e){var t=e.className,r=n(e,["className"]),i=a("mc-popover-item-group-title",t);return s.createElement("h2",o({className:i},r))},t.PopoverItemGroupTitle.displayName="PopoverItemGroupTitle"},139:function(e,t,r){"use strict";var o=this&&this.__assign||Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},n=this&&this.__rest||function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&(r[o[n]]=e[o[n]]);return r};Object.defineProperty(t,"__esModule",{value:!0});var a=r(3),s=r(4),i=r(5);t.BlueCheckIcon=function(){return s.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true"},s.createElement("path",{d:"M10.003 15.15L7.174 12.32 5.76 13.735l3.536 3.536.707.707 8.485-8.485-1.414-1.415-7.071 7.071z",fill:"#0070E0",fillRule:"evenodd"}))},t.PopoverSelectableItem=function(e){var r=e.children,c=e.className,l=e.disabled,p=e.icon,f=e.ref,u=e.selected,v=e.tagName,m=void 0===v?"button":v,O=n(e,["children","className","disabled","icon","ref","selected","tagName"]),y=a(c,"mc-popover-selectable-item",{"mc-popover-selectable-item-disabled":l,"mc-popover-selectable-item-selected":u});return s.createElement(i.MenuItem,o({tag:m,className:y,disabled:l,ref:f},O),s.createElement("span",{className:"mc-popover-selectable-item-content"},s.createElement("span",{className:"mc-popover-selectable-item-check-wrapper"},u&&s.createElement(t.BlueCheckIcon,null)),s.createElement("span",{className:"mc-popover-selectable-item-text"},r),p&&s.createElement("span",{className:"mc-popover-selectable-item-icon-wrapper"},p)))},t.PopoverSelectableItem.displayName="PopoverSelectableItem"},140:function(e,t,r){"use strict";var o=this&&this.__assign||Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},n=this&&this.__rest||function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&(r[o[n]]=e[o[n]]);return r};Object.defineProperty(t,"__esModule",{value:!0});var a=r(3),s=r(4),i=r(5);t.PopoverTrigger=function(e){var t=e.className,r=e.disabled,c=e.ref,l=n(e,["className","disabled","ref"]),p=a(t,"mc-popover-trigger");return s.createElement(i.Button,o({tag:"button",className:p,disabled:r,tabIndex:r?-1:void 0,ref:c},l))},t.PopoverTrigger.displayName="PopoverTrigger"}})});
//# sourceMappingURL=popover.min.js-vflWLBHqK.map