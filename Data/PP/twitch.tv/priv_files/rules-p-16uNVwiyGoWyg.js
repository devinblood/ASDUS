/*
 Quantcast measurement tag
 Copyright (c) 2008-2017, Quantcast Corp.
*/
(function(b,l,k){var m="twitter:title og:title title author authors article:author article:authors bt:author bt:authors sailthru.author sailthru.authors sailthru.title lv:author lv:authors lv:title".split(" "),n=function(b){return{}.toString.call(b).match(/\s([a-zA-Z]+)/)[1].toLowerCase()},p=function(b,e,a){return b?"nc"===b?!e||!a||0>e.indexOf(a):"eq"===b?e===a:"sw"===b?0===e.indexOf(a):"ew"===b?(b=e.length-a.length,e=e.lastIndexOf(a,b),-1!==e&&e===b):"c"===b?0<=e.indexOf(a):!1:!1},a=function(b,
e,a){var c;if(l.top===l.self)c=k.location.href;else{c=k.referrer;var f=k.createElement("a");f.href=c;c=f.href}p(e,c,a)?b(c):b(!1)},h=function(b){return{labels:b}},c=function(b){return"array"===n(b)?h(b.join(",")):h(""+b)};__qc("rules",[b,null,[[c,"Channel.Twitch"]],[[a,"eq","https://www.twitch.tv/twitch"]]],[b,null,[[c,"Channel.Twitch Presents"]],[[a,"c","twitchpresents"]]],[b,null,[[c,"Channel.Rocket League"]],[[a,"c","rocketleague"]]],[b,null,[[c,"Channel.Capcom Fighters"]],[[a,"c","capcomfighters"]]],
[b,null,[[c,"Channel.MANvsGAME"]],[[a,"c","manvsgame"]]],[b,null,[[c,"Channel.Reynad27"]],[[a,"c","reynad27"]]],[b,null,[[c,"Channel.FuturemanGaming"]],[[a,"c","futuremangaming"]]],[b,null,[[c,"Channel.ActaBunniFooFoo"]],[[a,"c","actabunnifoofoo"]]],[b,null,[[c,"Channel.DuckSauce"]],[[a,"c","ducksauce"]]],[b,null,[[c,"Channel.Summit1G"]],[[a,"c","summit1g"]]],[b,null,[[c,"Channel.Lirik"]],[[a,"c","lirik"]]],[b,null,[[c,"Channel.Towelliee"]],[[a,"c","towelliee"]]],[b,null,[[c,"Channel.Cohhcarnage"]],
[[a,"c","cohhcarnage"]]],[b,null,[[c,"Channel.OMGitsfirefoxx"]],[[a,"c","omgitsfirefoxx"]]],[b,null,[[c,"Channel.Lolerenaynay"]],[[a,"c","lolrenaynay"]]],[b,null,[[c,"Channel.DansGaming"]],[[a,"c","dansgaming"]]],[b,null,[[c,"Channel.Bacon Donut"]],[[a,"c","bacon_donut"]]],[b,null,[[c,"Channel.Giant Waffle"]],[[a,"c","giantwaffle"]]],[b,null,[[c,"Channel.GoldGlove"]],[[a,"c","goldglove"]]],[b,null,[[c,"Channel.Sevadus"]],[[a,"c","sevadus"]]],[b,null,[[c,"Channel.iiJERiiCHOii"]],[[a,"c","iijeriichoii"]]],
[b,null,[[c,"Channel.Swiftor"]],[[a,"c","swiftor"]]],[b,null,[[function(b,a){var c=[],d;if("array"===n(a)){for(d=0;d<a.length;d++)c.push(b+"."+a[d]);return h(c.join(","))}return h(b+"."+a)},"Channels"]],[[function(b,a,c){a=document.getElementsByTagName("meta");for(var d,f,g=0;g<a.length;g++)if(d=a[g],f=d.getAttribute("name")||d.getAttribute("property"),f==c){f=d.getAttribute("content");a=d=a=void 0;b:{a=void 0;for(a=0;a<m.length;a++)if(m[a]===c){a=!1;break b}a=!0}if(f)if(a){d=f.split(",");for(a=0;a<
d.length;a++)c=d,f=a,g=d[a].replace(/[^\w*]/g," ").replace(/^[\s\ufeff\xA0]+|[\s\ufeff\xA0]+$/g,""),c[f]=g;c=d}else c=f.replace(/[^\w*]/g," ");else c=f;b(c);return}b(!1)},"exactmatch","og:title"],[a,"c","twitch"]]],[b,null,[[c,"Channel.kinggothalion"]],[[a,"c","twitch.tv/kinggothalion"]]],[b,null,[[c,"Channel.playhearthstone"]],[[a,"c","twitch.tv/playhearthstone"]]],[b,null,[[c,"Channel.riotgames"]],[[a,"c","twitch.tv/riotgames"]]],[b,null,[[c,"Channel.drdisrespectlive"]],[[a,"c","twitch.tv/drdisrespectlive"]]])})("p-16uNVwiyGoWyg",
window,document);