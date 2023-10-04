import{m as r,V as l}from"./vue-b220ace6.js";import{N as c,O as m,P as u,Q as n,s as _,t as d,V as g,v as y,z as h,a as o,L as p,E as C,x as s}from"./index-0ecc54a7.js";import{M as f}from"./Modal-f5e0cc6c.js";import{_ as v}from"./VDialog-73b722c1.js";import{_ as x}from"./VContainer-b061e8df.js";const w={name:"CreateNewCategoryDialog",mixins:[f],props:{initialCategory:Object},data:()=>({category:{name:"",savePath:""},mdiCancel:c,mdiTagPlus:m,mdiPencil:u}),computed:{...r(["getSelectedCategory"]),hasInitialCategory(){return!!(this.initialCategory&&this.initialCategory.name)},nameRules(){return[i=>!!i||this.$t("modals.newCategory.tipOnNoName")]},isValid(){return!!this.category.name}},created(){this.$store.commit("FETCH_CATEGORIES"),this.hasInitialCategory&&(this.category=this.initialCategory)},methods:{async submit(){this.hasInitialCategory?await this.edit():await this.create()},async create(){this.isValid&&(await n.createCategory(this.category),this.cancel())},async edit(){this.isValid&&(await n.editCategory(this.category),l.$toast.success(this.$t("toast.categorySaved")),this.cancel())},cancel(){this.$store.commit("FETCH_CATEGORIES"),this.dialog=!1}}};var b=function(){var t=this,a=t._self._c;return a(v,{attrs:{"content-class":"rounded-form","max-width":"300px"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.submit.apply(null,arguments))}},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a(d,[a(g,{staticClass:"pa-0"},[a(y,{staticClass:"ma-4 primarytext--text"},[a("h3",[t._v(t._s(t.hasInitialCategory?t.$t("edit"):t.$t("createNew"))+" "+t._s(t.$t("category")))])])],1),a(h,[a(x,[a(o,{attrs:{rules:t.nameRules,label:t.$t("modals.newCategory.categoryName"),required:"",autofocus:!t.hasInitialCategory,disabled:t.hasInitialCategory},model:{value:t.category.name,callback:function(e){t.$set(t.category,"name",e)},expression:"category.name"}}),a(o,{attrs:{label:t.$t("path"),autofocus:t.hasInitialCategory},model:{value:t.category.savePath,callback:function(e){t.$set(t.category,"savePath",e)},expression:"category.savePath"}})],1)],1),a(p),a(C,{staticClass:"justify-end"},[t.hasInitialCategory?a(s,{staticClass:"accent white--text elevation-0 px-4",attrs:{disabled:!t.isValid},on:{click:t.edit}},[t._v(" "+t._s(t.$t("edit"))+" ")]):a(s,{staticClass:"accent white--text elevation-0 px-4",attrs:{disabled:!t.isValid},on:{click:t.create}},[t._v(" "+t._s(t.$t("create"))+" ")]),a(s,{staticClass:"error white--text elevation-0 px-4",on:{click:t.cancel}},[t._v(" "+t._s(t.$t("cancel"))+" ")])],1)],1)],1)},V=[],$=_(w,b,V,!1,null,null,null,null);const P=$.exports;export{P as default};
