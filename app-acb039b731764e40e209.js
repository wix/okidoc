webpackJsonp([0xd2a57dc1d883],{66:function(e,n,t){"use strict";function o(e,n,t){var o=a.map(function(t){if(t.plugin[e]){var o=t.plugin[e](n,t.options);return o}});return o=o.filter(function(e){return"undefined"!=typeof e}),o.length>0?o:t?[t]:[]}function r(e,n,t){return a.reduce(function(t,o){return o.plugin[e]?t.then(function(){return o.plugin[e](n,o.options)}):t},Promise.resolve())}n.__esModule=!0,n.apiRunner=o,n.apiRunnerAsync=r;var a=[{plugin:t(336),options:{plugins:[]}},{plugin:t(335),options:{plugins:[]}},{plugin:t(341),options:{plugins:[]}}]},204:function(e,n,t){"use strict";var o;n.components={"component---src-templates-md-js":t(318),"component---src-pages-index-js":t(317),"component---src-pages-404-js":t(316)},n.json=(o={"layout-index.json":t(4),"pages-page-with-include.json":t(330)},o["layout-index.json"]=t(4),o["api.json"]=t(322),o["layout-index.json"]=t(4),o["adapters.json"]=t(321),o["layout-index.json"]=t(4),o["events.json"]=t(323),o["layout-index.json"]=t(4),o["modules.json"]=t(329),o["layout-index.json"]=t(4),o["index.json"]=t(328),o["layout-index.json"]=t(4),o["player-config.json"]=t(331),o["layout-index.json"]=t(4),o["video-source.json"]=t(333),o["layout-index.json"]=t(4),o["player-public-methods.json"]=t(332),o["layout-index.json"]=t(4),o["events-playback-states.json"]=t(325),o["layout-index.json"]=t(4),o["events-errors.json"]=t(324),o["layout-index.json"]=t(4),o["events-ui-events.json"]=t(326),o["layout-index.json"]=t(4),o["events-video-events.json"]=t(327),o["layout-index.json"]=t(4),o["404.json"]=t(319),o["layout-index.json"]=t(4),o["404-html.json"]=t(320),o),n.layouts={"layout---index":t(315)}},205:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function u(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}n.__esModule=!0;var i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},s=t(1),c=o(s),l=t(2),f=o(l),p=t(134),d=o(p),m=t(44),h=o(m),g=t(66),y=t(402),v=o(y),j=function(e){var n=e.children;return c.default.createElement("div",null,n())},x=function(e){function n(t){r(this,n);var o=a(this,e.call(this)),u=t.location;return d.default.getPage(u.pathname)||(u=i({},u,{pathname:"/404.html"})),o.state={location:u,pageResources:d.default.getResourcesForPathname(u.pathname)},o}return u(n,e),n.prototype.componentWillReceiveProps=function(e){var n=this;if(this.state.location.pathname!==e.location.pathname){var t=d.default.getResourcesForPathname(e.location.pathname);if(t)this.setState({location:e.location,pageResources:t});else{var o=e.location;d.default.getPage(o.pathname)||(o=i({},o,{pathname:"/404.html"})),d.default.getResourcesForPathname(o.pathname,function(e){n.setState({location:o,pageResources:e})})}}},n.prototype.componentDidMount=function(){var e=this;h.default.on("onPostLoadPageResources",function(n){d.default.getPage(e.state.location.pathname)&&n.page.path===d.default.getPage(e.state.location.pathname).path&&e.setState({pageResources:n.pageResources})})},n.prototype.shouldComponentUpdate=function(e,n){return!n.pageResources||(!(this.state.pageResources||!n.pageResources)||(this.state.pageResources.component!==n.pageResources.component||(this.state.pageResources.json!==n.pageResources.json||(!(this.state.location.key===n.location.key||!n.pageResources.page||!n.pageResources.page.matchPath&&!n.pageResources.page.path)||(0,v.default)(this,e,n)))))},n.prototype.render=function(){var e=(0,g.apiRunner)("replaceComponentRenderer",{props:i({},this.props,{pageResources:this.state.pageResources}),loader:p.publicLoader}),n=e[0];return this.props.page?this.state.pageResources?n||(0,s.createElement)(this.state.pageResources.component,i({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?n||(0,s.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:j,i({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},n}(c.default.Component);x.propTypes={page:f.default.bool,layout:f.default.bool,location:f.default.object},n.default=x,e.exports=n.default},44:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(369),a=o(r),u=(0,a.default)();e.exports=u},206:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(61),a=t(135),u=o(a),i={};e.exports=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(t){var o=decodeURIComponent(t),a=(0,u.default)(o,n);if(a.split("#").length>1&&(a=a.split("#").slice(0,-1).join("")),a.split("?").length>1&&(a=a.split("?").slice(0,-1).join("")),i[a])return i[a];var s=void 0;return e.some(function(e){if(e.matchPath){if((0,r.matchPath)(a,{path:e.path})||(0,r.matchPath)(a,{path:e.matchPath}))return s=e,i[a]=e,!0}else{if((0,r.matchPath)(a,{path:e.path,exact:!0}))return s=e,i[a]=e,!0;if((0,r.matchPath)(a,{path:e.path+"index.html"}))return s=e,i[a]=e,!0}return!1}),s}}},207:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(112),a=o(r),u=t(66),i=(0,u.apiRunner)("replaceHistory"),s=i[0],c=s||(0,a.default)();e.exports=c},320:function(e,n,t){t(3),e.exports=function(e){return t.e(0xa2868bfb69fc,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(352)})})}},319:function(e,n,t){t(3),e.exports=function(e){return t.e(0xe70826b53c04,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(353)})})}},321:function(e,n,t){t(3),e.exports=function(e){return t.e(47558472723404,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(354)})})}},322:function(e,n,t){t(3),e.exports=function(e){return t.e(43937140173235,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(355)})})}},324:function(e,n,t){t(3),e.exports=function(e){return t.e(0xe75750ab4d50,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(356)})})}},325:function(e,n,t){t(3),e.exports=function(e){return t.e(0x9c4d32172b48,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(357)})})}},326:function(e,n,t){t(3),e.exports=function(e){return t.e(0xda597a1db1be,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(358)})})}},327:function(e,n,t){t(3),e.exports=function(e){return t.e(0xae3e92ce714f,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(359)})})}},323:function(e,n,t){t(3),e.exports=function(e){return t.e(44713349584700,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(360)})})}},328:function(e,n,t){t(3),e.exports=function(e){return t.e(0x81b8806e4260,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(361)})})}},4:function(e,n,t){t(3),e.exports=function(e){return t.e(60335399758886,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(115)})})}},329:function(e,n,t){t(3),e.exports=function(e){return t.e(0x9a4f798583ba,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(362)})})}},330:function(e,n,t){t(3),e.exports=function(e){return t.e(0xcef41a979ab6,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(363)})})}},331:function(e,n,t){t(3),e.exports=function(e){return t.e(0xfc0d157ea05d,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(364)})})}},332:function(e,n,t){t(3),e.exports=function(e){return t.e(23086292683156,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(365)})})}},333:function(e,n,t){t(3),e.exports=function(e){return t.e(77098458055955,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(366)})})}},315:function(e,n,t){t(3),e.exports=function(e){return t.e(0x67ef26645b2a,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(208)})})}},134:function(e,n,t){(function(e){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}n.__esModule=!0,n.publicLoader=void 0;var r=t(1),a=(o(r),t(206)),u=o(a),i=t(44),s=o(i),c=t(135),l=o(c),f=void 0,p={},d={},m={},h={},g={},y=[],v=[],j={},x="",R=[],w={},b=function(e){return e&&e.default||e},_=void 0,N=!0,P=[],C={},k={},E=5;_=t(209)({getNextQueuedResources:function(){return R.slice(-1)[0]},createResourceDownload:function(e){L(e,function(){R=R.filter(function(n){return n!==e}),_.onResourcedFinished(e)})}}),s.default.on("onPreLoadPageResources",function(e){_.onPreLoadPageResources(e)}),s.default.on("onPostLoadPageResources",function(e){_.onPostLoadPageResources(e)});var O=function(e,n){return w[e]>w[n]?1:w[e]<w[n]?-1:0},T=function(e,n){return j[e]>j[n]?1:j[e]<j[n]?-1:0},L=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(h[n])e.nextTick(function(){t(null,h[n])});else{var o=void 0;o="component---"===n.slice(0,12)?d.components[n]:"layout---"===n.slice(0,9)?d.layouts[n]:d.json[n],o(function(e,o){h[n]=o,P.push({resource:n,succeeded:!e}),k[n]||(k[n]=e),P=P.slice(-E),t(e,o)})}},S=function(n,t){g[n]?e.nextTick(function(){t(null,g[n])}):k[n]?e.nextTick(function(){t(k[n])}):L(n,function(e,o){if(e)t(e);else{var r=b(o());g[n]=r,t(e,r)}})},A=function(){var e=navigator.onLine;if("boolean"==typeof e)return e;var n=P.find(function(e){return e.succeeded});return!!n},D=function(e,n){console.log(n),C[e]||(C[e]=n),A()&&window.location.pathname.replace(/\/$/g,"")!==e.replace(/\/$/g,"")&&(window.location.pathname=e)},U=1,M={empty:function(){v=[],j={},w={},R=[],y=[],x=""},addPagesArray:function(e){y=e,x="/video-player.js",f=(0,u.default)(e,x)},addDevRequires:function(e){p=e},addProdRequires:function(e){d=e},dequeue:function(){return v.pop()},enqueue:function(e){var n=(0,l.default)(e,x);if(!y.some(function(e){return e.path===n}))return!1;var t=1/U;U+=1,j[n]?j[n]+=1:j[n]=1,M.has(n)||v.unshift(n),v.sort(T);var o=f(n);return o.jsonName&&(w[o.jsonName]?w[o.jsonName]+=1+t:w[o.jsonName]=1+t,R.indexOf(o.jsonName)!==-1||h[o.jsonName]||R.unshift(o.jsonName)),o.componentChunkName&&(w[o.componentChunkName]?w[o.componentChunkName]+=1+t:w[o.componentChunkName]=1+t,R.indexOf(o.componentChunkName)!==-1||h[o.jsonName]||R.unshift(o.componentChunkName)),R.sort(O),_.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:R,resourcesCount:w}},getPages:function(){return{pathArray:v,pathCount:j}},getPage:function(e){return f(e)},has:function(e){return v.some(function(n){return n===e})},getResourcesForPathname:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};N&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(f(n)||navigator.serviceWorker.getRegistrations().then(function(e){if(e.length){for(var n=e,t=Array.isArray(n),o=0,n=t?n:n[Symbol.iterator]();;){var r;if(t){if(o>=n.length)break;r=n[o++]}else{if(o=n.next(),o.done)break;r=o.value}var a=r;a.unregister()}window.location.reload()}})),N=!1;if(C[n])return D(n,'Previously detected load failure for "'+n+'"'),t();var o=f(n);if(!o)return D(n,"A page wasn't found for \""+n+'"'),t();if(n=o.path,m[n])return e.nextTick(function(){t(m[n]),s.default.emit("onPostLoadPageResources",{page:o,pageResources:m[n]})}),m[n];s.default.emit("onPreLoadPageResources",{path:n});var r=void 0,a=void 0,u=void 0,i=function(){if(r&&a&&(!o.layoutComponentChunkName||u)){m[n]={component:r,json:a,layout:u,page:o};var e={component:r,json:a,layout:u,page:o};t(e),s.default.emit("onPostLoadPageResources",{page:o,pageResources:e})}};return S(o.componentChunkName,function(e,n){e&&D(o.path,"Loading the component for "+o.path+" failed"),r=n,i()}),S(o.jsonName,function(e,n){e&&D(o.path,"Loading the JSON for "+o.path+" failed"),a=n,i()}),void(o.layoutComponentChunkName&&S(o.layout,function(e,n){e&&D(o.path,"Loading the Layout for "+o.path+" failed"),u=n,i()}))},peek:function(e){return v.slice(-1)[0]},length:function(){return v.length},indexOf:function(e){return v.length-v.indexOf(e)-1}};n.publicLoader={getResourcesForPathname:M.getResourcesForPathname};n.default=M}).call(n,t(62))},367:function(e,n){e.exports=[{componentChunkName:"component---src-templates-md-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"pages-page-with-include.json",path:"/pages/__page-with-include/"},{componentChunkName:"component---src-templates-md-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"api.json",path:"/api/"},{componentChunkName:"component---src-templates-md-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"adapters.json",path:"/adapters/"},{componentChunkName:"component---src-templates-md-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"events.json",path:"/events/"},{componentChunkName:"component---src-templates-md-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"modules.json",path:"/modules/"},{componentChunkName:"component---src-pages-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-templates-md-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"player-config.json",path:"/player-config/"},{componentChunkName:"component---src-templates-md-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"video-source.json",path:"/video-source/"},{componentChunkName:"component---src-templates-md-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"player-public-methods.json",path:"/player-public-methods/"},{componentChunkName:"component---src-templates-md-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"events-playback-states.json",path:"/events/playback-states/"},{componentChunkName:"component---src-templates-md-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"events-errors.json",path:"/events/errors/"},{componentChunkName:"component---src-templates-md-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"events-ui-events.json",path:"/events/ui-events/"},{componentChunkName:"component---src-templates-md-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"events-video-events.json",path:"/events/video-events/"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404-html.json",path:"/404.html"}]},209:function(e,n){"use strict";e.exports=function(e){var n=e.getNextQueuedResources,t=e.createResourceDownload,o=[],r=[],a=function(){var e=n();e&&(r.push(e),t(e))},u=function(e){switch(e.type){case"RESOURCE_FINISHED":r=r.filter(function(n){return n!==e.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(e.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(n){return n!==e.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===o.length&&a()},0)};return{onResourcedFinished:function(e){u({type:"RESOURCE_FINISHED",payload:e})},onPreLoadPageResources:function(e){u({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:e})},onPostLoadPageResources:function(e){u({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:e})},onNewResourcesAdded:function(){u({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:r}},empty:function(){o=[],r=[]}}}},0:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},a=t(66),u=t(1),i=o(u),s=t(60),c=o(s),l=t(61),f=t(340),p=t(304),d=o(p),m=t(207),h=o(m),g=t(44),y=o(g),v=t(367),j=o(v),x=t(368),R=o(x),w=t(205),b=o(w),_=t(204),N=o(_),P=t(134),C=o(P);t(288),window.___history=h.default,window.___emitter=y.default,C.default.addPagesArray(j.default),C.default.addProdRequires(N.default),window.asyncRequires=N.default,window.___loader=C.default,window.matchPath=l.matchPath;var k=R.default.reduce(function(e,n){return e[n.fromPath]=n,e},{}),E=function(e){var n=k[e];return null!=n&&(h.default.replace(n.toPath),!0)};E(window.location.pathname),(0,a.apiRunnerAsync)("onClientEntry").then(function(){function e(e){window.___history&&s!==!1||(window.___history=e,s=!0,e.listen(function(e,n){E(e.pathname)||setTimeout(function(){(0,a.apiRunner)("onRouteUpdate",{location:e,action:n})},0)}))}function n(e,n){var t=n.location.pathname,o=(0,a.apiRunner)("shouldUpdateScroll",{prevRouterProps:e,pathname:t});if(o.length>0)return o[0];if(e){var r=e.location.pathname;if(r===t)return!1}return!0}(0,a.apiRunner)("registerServiceWorker").length>0&&t(210);var o=function(e){function n(t){t.page.path===C.default.getPage(e).path&&(y.default.off("onPostLoadPageResources",n),clearTimeout(o),window.___history.push(e))}var t=k[e];if(t&&(e=t.toPath),window.location.pathname!==e){var o=setTimeout(function(){y.default.off("onPostLoadPageResources",n),y.default.emit("onDelayedLoadPageResources",{pathname:e}),window.___history.push(e)},1e3);C.default.getResourcesForPathname(e)?(clearTimeout(o),window.___history.push(e)):y.default.on("onPostLoadPageResources",n)}};window.___navigateTo=o,(0,a.apiRunner)("onRouteUpdate",{location:h.default.location,action:h.default.action});var s=!1,p=(0,a.apiRunner)("replaceRouterComponent",{history:h.default})[0],m=function(e){var n=e.children;return i.default.createElement(l.Router,{history:h.default},n)},g=(0,l.withRouter)(b.default);C.default.getResourcesForPathname(window.location.pathname,function(){var t=function(){return(0,u.createElement)(p?p:m,null,(0,u.createElement)(f.ScrollContext,{shouldUpdateScroll:n},(0,u.createElement)(g,{layout:!0,children:function(n){return(0,u.createElement)(l.Route,{render:function(t){e(t.history);var o=n?n:t;return C.default.getPage(o.location.pathname)?(0,u.createElement)(b.default,r({page:!0},o)):(0,u.createElement)(b.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},o=(0,a.apiRunner)("wrapRootComponent",{Root:t},t)[0];(0,d.default)(function(){return c.default.render(i.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,a.apiRunner)("onInitialClientRender")})})})})},368:function(e,n){e.exports=[]},210:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(44),a=o(r),u="/";u="/video-player.js/","serviceWorker"in navigator&&navigator.serviceWorker.register(u+"sw.js").then(function(e){e.addEventListener("updatefound",function(){var n=e.installing;console.log("installingWorker",n),n.addEventListener("statechange",function(){switch(n.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(e){console.error("Error during service worker registration:",e)})},135:function(e,n){"use strict";n.__esModule=!0,n.default=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.substr(0,n.length)===n?e.slice(n.length):e},e.exports=n.default},304:function(e,n,t){!function(n,t){e.exports=t()}("domready",function(){var e,n=[],t=document,o=t.documentElement.doScroll,r="DOMContentLoaded",a=(o?/^loaded|^c/:/^loaded|^i|^c/).test(t.readyState);return a||t.addEventListener(r,e=function(){for(t.removeEventListener(r,e),a=1;e=n.shift();)e()}),function(e){a?setTimeout(e,0):n.push(e)}})},3:function(e,n,t){"use strict";function o(){function e(e){var n=o.lastChild;return"SCRIPT"!==n.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",n)):void(n.onload=n.onerror=function(){n.onload=n.onerror=null,setTimeout(e,0)})}var n,o=document.querySelector("head"),r=t.e,a=t.s;t.e=function(o,u){var i=!1,s=!0,c=function(e){u&&(u(t,e),u=null)};return!a&&n&&n[o]?void c(!0):(r(o,function(){i||(i=!0,s?setTimeout(function(){c()}):c())}),void(i||(s=!1,e(function(){i||(i=!0,a?a[o]=void 0:(n||(n={}),n[o]=!0),c(!0))}))))}}o()},334:function(e,n){"use strict";e.exports=function(e,n){e.addEventListener("click",function(e){if(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||e.defaultPrevented)return!0;for(var t=null,o=e.target;o.parentNode;o=o.parentNode)if("A"===o.nodeName){t=o;break}if(!t)return!0;if(t.target&&"_self"!==t.target.toLowerCase())return!0;if(t.pathname===window.location.pathname&&""!==t.hash)return!0;if(""===t.pathname)return!0;if(t.pathname.search(/^.*\.((?!htm)[a-z0-9]{1,5})$/i)!==-1)return!0;var r=document.createElement("a");r.href=t.href;var a=document.createElement("a");return a.href=window.location.href,r.host!==a.host||(e.preventDefault(),n(t.getAttribute("href")),!1)})}},335:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(57),a=t(334),u=o(a);(0,u.default)(window,function(e){(0,r.navigateTo)(e)})},336:function(e,n,t){"use strict";t(226),t(227)},341:function(e,n,t){"use strict";var o=function(e){setTimeout(function(){var n=window.decodeURI(window.location.hash.replace("#",""));if(""!==n){var t=document.getElementById(n);if(t){var o=t.offsetTop;window.scrollTo(0,o-e)}}},10)};n.onClientEntry=function(e,n){var t=0;n.offsetY&&(t=n.offsetY)},n.onRouteUpdate=function(e,n){var t=0;n.offsetY&&(t=n.offsetY),o(t)}},114:function(e,n){"use strict";var t={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r=Object.defineProperty,a=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,i=Object.getOwnPropertyDescriptor,s=Object.getPrototypeOf,c=s&&s(Object);e.exports=function e(n,l,f){if("string"!=typeof l){if(c){var p=s(l);p&&p!==c&&e(n,p,f)}var d=a(l);u&&(d=d.concat(u(l)));for(var m=0;m<d.length;++m){var h=d[m];if(!(t[h]||o[h]||f&&f[h])){var g=i(l,h);try{r(n,h,g)}catch(e){}}}return n}return n}},369:function(e,n){function t(e){return e=e||Object.create(null),{on:function(n,t){(e[n]||(e[n]=[])).push(t)},off:function(n,t){e[n]&&e[n].splice(e[n].indexOf(t)>>>0,1)},emit:function(n,t){(e[n]||[]).slice().map(function(e){e(t)}),(e["*"]||[]).slice().map(function(e){e(n,t)})}}}e.exports=t},402:function(e,n){"use strict";function t(e,n){for(var t in e)if(!(t in n))return!0;for(var o in n)if(e[o]!==n[o])return!0;return!1}n.__esModule=!0,n.default=function(e,n,o){return t(e.props,n)||t(e.state,o)},e.exports=n.default},62:function(e,n){function t(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(e){if(l===setTimeout)return setTimeout(e,0);if((l===t||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(n){try{return l.call(null,e,0)}catch(n){return l.call(this,e,0)}}}function a(e){if(f===clearTimeout)return clearTimeout(e);if((f===o||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(n){try{return f.call(null,e)}catch(n){return f.call(this,e)}}}function u(){h&&d&&(h=!1,d.length?m=d.concat(m):g=-1,m.length&&i())}function i(){if(!h){var e=r(u);h=!0;for(var n=m.length;n;){for(d=m,m=[];++g<n;)d&&d[g].run();g=-1,n=m.length}d=null,h=!1,a(e)}}function s(e,n){this.fun=e,this.array=n}function c(){}var l,f,p=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:t}catch(e){l=t}try{f="function"==typeof clearTimeout?clearTimeout:o}catch(e){f=o}}();var d,m=[],h=!1,g=-1;p.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];m.push(new s(e,n)),1!==m.length||h||r(i)},s.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=c,p.addListener=c,p.once=c,p.off=c,p.removeListener=c,p.removeAllListeners=c,p.emit=c,p.prependListener=c,p.prependOnceListener=c,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},316:function(e,n,t){t(3),e.exports=function(e){return t.e(0x9427c64ab85d,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(215)})})}},317:function(e,n,t){t(3),e.exports=function(e){return t.e(35783957827783,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(216)})})}},318:function(e,n,t){t(3),e.exports=function(e){return t.e(0xce3156526740,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(79)})})}}});
//# sourceMappingURL=app-acb039b731764e40e209.js.map