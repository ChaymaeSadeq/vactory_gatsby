"use strict";const t=require("kitsu"),e=require("https"),a=require("lodash.get");var i={kitsu:null,baseURL:"",languages:[],getAll:async function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!i.kitsu)throw"API has not been initialized. call init()";const s=async function t(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],s=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const{data:o,links:l}=await i.kitsu.get(s,n),u=a(l,"next.href");if(e=e.concat(o),u){const a=url.parse(u,!0),i=a.query["page[offset]"],o=a.query["page[limit]"];return n.page={offset:i,limit:o},t(e,s,n)}return e},n=i.kitsu.axios.defaults.baseURL,o=await Promise.all(i.languages.map(async a=>(i.kitsu.axios.defaults.baseURL="".concat(i.baseURL).concat(a,"/api/"),await s([],t,e))));return i.kitsu.axios.defaults.baseURL=n,o},get:async function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(!i.kitsu)throw"API has not been initialized. call init()";let s=null;const n=i.kitsu.axios.defaults.baseURL;if(a){i.kitsu.axios.defaults.baseURL="".concat(i.baseURL).concat(a,"/api/");const{data:n}=await i.kitsu.get(t,e);s=n}else s=await Promise.all(i.languages.map(async a=>{i.kitsu.axios.defaults.baseURL="".concat(i.baseURL).concat(a,"/api/");const{data:s}=await i.kitsu.get(t,e);return s}));return i.kitsu.axios.defaults.baseURL=n,s},getRest:async function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(!i.kitsu)throw"API has not been initialized. call init()";return"boolean"==typeof a?await i.kitsu.axios.get("".concat(i.baseURL).concat(t),e):"string"==typeof a?await i.kitsu.axios.get("".concat(i.baseURL).concat(a,"/").concat(t),e):await Promise.all(i.languages.map(async a=>({locale:a,response:await i.kitsu.axios.get("".concat(i.baseURL).concat(a,"/").concat(t),e)})))},init:function(a){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];i.initialized=!0,i.baseURL=a,i.languages=n,i.kitsu=new t({baseURL:a,camelCaseTypes:!1,resourceCase:"none",pluralize:!1,axiosOptions:{httpsAgent:new e.Agent({rejectUnauthorized:!1}),headers:s},headers:s})},enableDebug:()=>{i.kitsu.axios.interceptors.request.use(t=>(console.log(t),t),t=>Promise.reject(t))}};module.exports=i;
