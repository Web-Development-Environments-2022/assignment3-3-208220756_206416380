(self["webpackChunkassignment_3_3"]=self["webpackChunkassignment_3_3"]||[]).push([[818],{4818:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>_});var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"MainPage"},[r("div",{attrs:{id:"Search"}},[r("br"),r("table",[r("tr",[r("td",{staticStyle:{width:"80%"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.query,expression:"query"}],attrs:{type:"text",placeholder:"Find a Recipe",id:"SearchBar"},domProps:{value:e.query},on:{input:function(t){t.target.composing||(e.query=t.target.value)}}})]),r("td",{staticStyle:{width:"20%"}},[r("button",{staticStyle:{width:"100%"},attrs:{id:"searchButton"},on:{click:e.Search}},[e._v("Search")])])])]),r("table",[r("tr",[r("CustomeFilter",{ref:"CustomFilter"})],1)])]),r("RecipePreviewList",{ref:"previewList",attrs:{title:"Search Result"}})],1)},i=[],a=r(7673),n=r(6198),l=(r(1058),r(6492)),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"my-accordion"},[r("div",{staticClass:"Category"},[r("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"collapse-1",expression:"'collapse-1'"}],staticClass:"m-1"},[e._v("Cusine")]),r("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"collapse-2",expression:"'collapse-2'"}],staticClass:"m-1"},[e._v("Diet")]),r("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"collapse-3",expression:"'collapse-3'"}],staticClass:"m-1"},[e._v("Intolerance")]),r("label",[e._v("SortBy:")]),e._m(0),r("label",[e._v("num:")]),e._m(1)],1),r("b-collapse",{attrs:{id:"collapse-1","data-bs-toggle":"collapse",accordion:"my-accordion"}},[r("div",{staticClass:"filter-content"},e._l(e.types,(function(t){return r("span",{key:t,staticClass:"checkbox"},[r("input",{attrs:{type:"checkbox",id:t},on:{click:function(r){return e.cusSelected(t)}}}),r("label",{staticStyle:{color:"black"},attrs:{for:t}},[e._v(e._s(t))])])})),0)]),r("b-collapse",{attrs:{id:"collapse-2",accordion:"my-accordion","data-bs-toggle":"collapse"}},[r("div",{staticClass:"filter-content"},e._l(e.diet,(function(t){return r("span",{key:t,staticClass:"checkbox"},[r("input",{attrs:{name:"diet",type:"radio",id:t},on:{click:function(r){return e.dietSelected(t)}}}),r("label",{staticStyle:{color:"black"},attrs:{for:t}},[e._v(e._s(t))])])})),0)]),r("b-collapse",{attrs:{id:"collapse-3","data-bs-toggle":"collapse",accordion:"my-accordion"}},[r("div",{staticClass:"filter-content"},e._l(e.intol,(function(t){return r("span",{key:t,staticClass:"checkbox"},[r("input",{attrs:{type:"checkbox",id:t},on:{click:function(r){return e.intoSelected(t)}}}),r("label",{staticStyle:{color:"black"},attrs:{for:t}},[e._v(e._s(t))])])})),0)])],1)},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("select",{attrs:{id:"sel"}},[r("option",{attrs:{value:"Default",selected:""}},[e._v("Default")]),r("option",{attrs:{value:"Prepare Time"}},[e._v("Prepare Time")]),r("option",{attrs:{value:"Stars"}},[e._v(" Stars")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("select",{attrs:{id:"numSel"}},[r("option",{attrs:{value:"5",selected:""}},[e._v("5")]),r("option",{attrs:{value:"10"}},[e._v("10")]),r("option",{attrs:{value:"15"}},[e._v(" 15")])])}];r(6699),r(2023),r(2772),r(561);const u=["African","American","British","Cajun","Caribbean","Chinese","Eastern European","European","French","German","Greek","Indian","Irish","Italian","Japanese","Jewish","Korean","Latin American","Mediterranean","Mexican","Middle Eastern","Nordic","Southern","Spanish","Thai","Vietnamese"],d=["Gluten Free","Ketogenic","Vegetarian","Lacto-Vegetarian","Ovo-Vegetarian","Vegan","Pescetarian","Paleo","Primal","Low FODMAP","Whole30"],h=["Dairy","Egg","Gluten","Grain","Peanut","Seafood","Sesame","Shellfish","Soy","Sulfite","Tree Nut","Wheat"],p={name:"MyFilter",data:function(){return{types:u,diet:d,intol:h,selectedCusine:[],selectedDiet:"",selectedIntol:[]}},methods:{getFilters:function(){var e=[];return e.push(this.selectedCusine),e.push(this.selectedDiet),e.push(this.selectedIntol),e.push(this.$el.querySelector("#numSel").value),e.push(this.$el.querySelector("#sel").value),e},cusSelected:function(e){if(this.selectedCusine.includes(e)){var t=this.selectedCusine.indexOf(e);this.selectedCusine.splice(t,1)}else this.selectedCusine.push(e)},dietSelected:function(e){this.selectedDiet=e},intoSelected:function(e){if(this.selectedIntol.includes(e)){var t=this.selectedIntol.indexOf(e);this.selectedIntol.splice(t,1)}else this.selectedIntol.push(e)}}},v=p;var f=r(1001),g=(0,f.Z)(v,c,o,!1,null,null,null);const m=g.exports,y={name:"SearchPage",components:{RecipePreviewList:l.Z,CustomeFilter:m},data:function(){return{query:""}},methods:{Search:function(){var e=this;return(0,n.Z)((0,a.Z)().mark((function t(){var r,s,i,n;return(0,a.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:r=e.$refs.CustomFilter.getFilters(),console.log(r),s=void 0,i=void 0,n=void 0,0!=r[0].length&&(s=String(r[0])),0!=r[1].length&&(i=r[1]),0!=r[2].length&&(n=String(r[2])),console.log(s),console.log(i),console.log(n),e.$refs.previewList.searchQuery(e.query,s,i,n,parseInt(r[3]),r[4]);case 12:case"end":return t.stop()}}),t)})))()}}},b=y;var S=(0,f.Z)(b,s,i,!1,null,"2b7a935c",null);const _=S.exports},4964:(e,t,r)=>{var s=r(5112),i=s("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[i]=!1,"/./"[e](t)}catch(s){}}return!1}},7207:e=>{var t=TypeError,r=9007199254740991;e.exports=function(e){if(e>r)throw t("Maximum allowed index exceeded");return e}},7850:(e,t,r)=>{var s=r(111),i=r(4326),a=r(5112),n=a("match");e.exports=function(e){var t;return s(e)&&(void 0!==(t=e[n])?!!t:"RegExp"==i(e))}},3929:(e,t,r)=>{var s=r(7850),i=TypeError;e.exports=function(e){if(s(e))throw i("The method doesn't accept regular expressions");return e}},6699:(e,t,r)=>{"use strict";var s=r(2109),i=r(1318).includes,a=r(7293),n=r(1223),l=a((function(){return!Array(1).includes()}));s({target:"Array",proto:!0,forced:l},{includes:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),n("includes")},2772:(e,t,r)=>{"use strict";var s=r(2109),i=r(1702),a=r(1318).indexOf,n=r(9341),l=i([].indexOf),c=!!l&&1/l([1],1,-0)<0,o=n("indexOf");s({target:"Array",proto:!0,forced:c||!o},{indexOf:function(e){var t=arguments.length>1?arguments[1]:void 0;return c?l(this,e,t)||0:a(this,e,t)}})},561:(e,t,r)=>{"use strict";var s=r(2109),i=r(7908),a=r(1400),n=r(9303),l=r(6244),c=r(7207),o=r(5417),u=r(6135),d=r(5117),h=r(1194),p=h("splice"),v=Math.max,f=Math.min;s({target:"Array",proto:!0,forced:!p},{splice:function(e,t){var r,s,h,p,g,m,y=i(this),b=l(y),S=a(e,b),_=arguments.length;for(0===_?r=s=0:1===_?(r=0,s=b-S):(r=_-2,s=f(v(n(t),0),b-S)),c(b+r-s),h=o(y,s),p=0;p<s;p++)g=S+p,g in y&&u(h,p,y[g]);if(h.length=s,r<s){for(p=S;p<b-s;p++)g=p+s,m=p+r,g in y?y[m]=y[g]:d(y,m);for(p=b;p>b-s+r;p--)d(y,p-1)}else if(r>s)for(p=b-s;p>S;p--)g=p+s-1,m=p+r-1,g in y?y[m]=y[g]:d(y,m);for(p=0;p<r;p++)y[p+S]=arguments[p+2];return y.length=b-s+r,h}})},2023:(e,t,r)=>{"use strict";var s=r(2109),i=r(1702),a=r(3929),n=r(4488),l=r(1340),c=r(4964),o=i("".indexOf);s({target:"String",proto:!0,forced:!c("includes")},{includes:function(e){return!!~o(l(n(this)),l(a(e)),arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=818.cf2aa3d6.js.map