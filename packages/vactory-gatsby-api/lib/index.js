"use strict";const a=require("kitsu"),t=require("https"),e=require("lodash.get"),s=require("url");var i={kitsu:null,baseURL:"",languages:[],getAll:async(a,t={},n=null)=>{if(!i.kitsu)throw"API has not been initialized. call init()";const o=async(a=[],t,n={})=>{const{data:l,links:u}=await i.kitsu.get(t,n),c=e(u,"next.href");if(a=a.concat(l),c){const e=s.parse(c,!0),i=e.query["page[offset]"],l=e.query["page[limit]"];return n.page={offset:i,limit:l},o(a,t,n)}return a};let l=null;const u=i.kitsu.axios.defaults.baseURL;return n?(i.kitsu.axios.defaults.baseURL="".concat(i.baseURL).concat(n,"/api/"),l=await o([],a,t)):l=await Promise.all(i.languages.map(async e=>(i.kitsu.axios.defaults.baseURL="".concat(i.baseURL).concat(e,"/api/"),await o([],a,t)))),i.kitsu.axios.defaults.baseURL=u,l},get:async(a,t={},e=null)=>{if(!i.kitsu)throw"API has not been initialized. call init()";let s=null;const n=i.kitsu.axios.defaults.baseURL;if(e){i.kitsu.axios.defaults.baseURL="".concat(i.baseURL).concat(e,"/api/");const{data:n}=await i.kitsu.get(a,t);s=n}else s=await Promise.all(i.languages.map(async e=>{i.kitsu.axios.defaults.baseURL="".concat(i.baseURL).concat(e,"/api/");const{data:s}=await i.kitsu.get(a,t);return s}));return i.kitsu.axios.defaults.baseURL=n,s},getRest:async(a,t={},e=null)=>{if(!i.kitsu)throw"API has not been initialized. call init()";return"boolean"==typeof e?await i.kitsu.axios.get("".concat(i.baseURL).concat(a),t):"string"==typeof e?await i.kitsu.axios.get("".concat(i.baseURL).concat(e,"/").concat(a),t):await Promise.all(i.languages.map(async e=>({locale:e,response:await i.kitsu.axios.get("".concat(i.baseURL).concat(e,"/").concat(a),t)})))},init:(e,s={},n=[])=>{i.initialized=!0,i.baseURL=e,i.languages=n,i.kitsu=new a({baseURL:e,camelCaseTypes:!1,resourceCase:"none",pluralize:!1,axiosOptions:{httpsAgent:new t.Agent({rejectUnauthorized:!1}),headers:s},headers:s})},enableDebug:()=>{i.kitsu.axios.interceptors.request.use(a=>(console.log(a),a),a=>Promise.reject(a))}};module.exports=i;
