(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{OviF:function(t,n,i){"use strict";i.r(n),i.d(n,"TermsAndConditionModule",(function(){return f}));var e=i("ofXK"),o=i("fXoL"),s=i("sX9H");function c(t,n){if(1&t&&(o.Nb(0,"div"),o.Nb(1,"h1",3),o.qc(2),o.Mb(),o.Kb(3,"div",4),o.Mb()),2&t){const t=o.Wb().$implicit;o.xb(2),o.rc(t.page_name),o.xb(1),o.bc("innerHtml",t.page_content,o.lc)}}function r(t,n){if(1&t&&(o.Nb(0,"div",1),o.oc(1,c,4,2,"div",2),o.Mb()),2&t){const t=n.$implicit;o.xb(1),o.bc("ngIf","Terms and Condition"===t.page_name)}}let a=(()=>{class t{constructor(t){this._staticPage=t,this.termsAndCondition=[]}ngOnInit(){this.getPageDetails()}getPageDetails(){this._staticPage.getAllPageDetails().subscribe(t=>{"ok"===t.status&&(this.termsAndCondition=t.data)})}}return t.\u0275fac=function(n){return new(n||t)(o.Jb(s.a))},t.\u0275cmp=o.Db({type:t,selectors:[["app-terms-and-condition"]],decls:1,vars:1,consts:[["class","container",4,"ngFor","ngForOf"],[1,"container"],[4,"ngIf"],[2,"text-align","center","font-weight","bold"],[3,"innerHtml"]],template:function(t,n){1&t&&o.oc(0,r,2,1,"div",0),2&t&&o.bc("ngForOf",n.termsAndCondition)},directives:[e.j,e.k],styles:[""]}),t})();var d=i("tyNb");const b=[{path:"",component:a}];let l=(()=>{class t{}return t.\u0275mod=o.Hb({type:t}),t.\u0275inj=o.Gb({factory:function(n){return new(n||t)},imports:[[d.g.forChild(b)],d.g]}),t})(),f=(()=>{class t{}return t.\u0275mod=o.Hb({type:t}),t.\u0275inj=o.Gb({factory:function(n){return new(n||t)},imports:[[e.b,l]]}),t})()}}]);