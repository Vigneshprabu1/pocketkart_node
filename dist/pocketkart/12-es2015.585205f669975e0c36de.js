(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{PIvG:function(e,t,o){"use strict";o.r(t),o.d(t,"FeedbackModule",(function(){return h}));var n=o("3Pt+"),r=o("ofXK"),i=o("BwR1"),a=o("fXoL"),b=o("lJxs"),s=o("ZfKr"),c=o("tk/3"),l=o("UYTb");let d=(()=>{class e extends s.a{constructor(e,t){super(e,t),this._http=e,this._storage=t}saveFeedBack(e){return this.post("feedback",e).pipe(Object(b.a)(e=>{if("ok"===e.status)return alert("FeedBack Send Successfully"),e}))}}return e.\u0275fac=function(t){return new(t||e)(a.Rb(c.a),a.Rb(l.a))},e.\u0275prov=a.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),m=(()=>{class e{constructor(e,t,o){this._feedback=e,this.fb=t,this._storageService=o,this.myDefaultValue=1,this.mobile="",this.emailID="",this.feedbackForm=this.fb.group({mobile_no:["",n.o.required],email_id:["",n.o.required],comment:[null,n.o.required]})}ngOnInit(){this._storageService.get(i.a).subscribe(e=>{this.user=e,this.feedbackForm.setValue=this.user.cust_mobile,this.emailID=this.user.cust_email})}saveFeedback(){this.feedbackForm.valid?this._feedback.saveFeedBack({fb_mobile:this.feedbackForm.controls.mobile_no.value,fb_email:this.feedbackForm.controls.email_id.value,fb_comments:this.feedbackForm.controls.comment.value}).subscribe(e=>{"ok"===e.status&&this.feedbackForm.reset()}):alert("full the field")}}return e.\u0275fac=function(t){return new(t||e)(a.Jb(d),a.Jb(n.b),a.Jb(l.a))},e.\u0275cmp=a.Db({type:e,selectors:[["app-feedback"]],decls:40,vars:1,consts:[[1,"container"],[1,"head","mb-3"],[1,"row"],[1,"col-md-4"],[1,"text-uppercase","mb-0"],[2,"font-weight","bold","color","black"],[1,"col-md-6",2,"margin-top","45px"],[2,"color","red","font-size","12px","margin-left","18px"],[3,"formGroup","ngSubmit"],["for","phoneNumber"],["type","text","name","phonenumber","placeholder","","maxlength","10","formControlName","mobile_no",2,"width","60%"],["for","emailId"],["type","email","name","email","placeholder","","maxlength","50","formControlName","email_id",2,"width","60%"],["for","commentd"],["name","comments","placeholder","","maxlength","350","formControlName","comment",2,"height","200px","width","60%"],[2,"text-align","center","border","2px solid saddlebrown","width","20%","height","50px","background-color","saddlebrown","margin-top","10px"],["type","submit",1,"btn","text-uppercase",2,"color","white","margin-top","6px"]],template:function(e,t){1&e&&(a.Nb(0,"div",0),a.Nb(1,"div",1),a.Nb(2,"div",2),a.Nb(3,"div",3),a.Nb(4,"h2",4),a.qc(5,"CONTACT US"),a.Mb(),a.Nb(6,"p"),a.qc(7,"For any Queries."),a.Kb(8,"br"),a.qc(9," Call us "),a.Nb(10,"span",5),a.qc(11,"09400007072"),a.Mb(),a.Mb(),a.Mb(),a.Nb(12,"div",6),a.Nb(13,"p"),a.qc(14,"Customer Service "),a.Kb(15,"br"),a.qc(16," email us at "),a.Nb(17,"span",5),a.qc(18,"%email%"),a.Mb(),a.Mb(),a.Mb(),a.Nb(19,"span",7),a.qc(20,"If you have a question about out service or have an issue to report. please send a request and we will get back to you as soon as possible"),a.Mb(),a.Mb(),a.Nb(21,"form",8),a.Ub("ngSubmit",(function(){return t.saveFeedback()})),a.Nb(22,"label",9),a.qc(23,"Phone Number"),a.Mb(),a.Kb(24,"br"),a.Kb(25,"input",10),a.Kb(26,"br"),a.Nb(27,"label",11),a.qc(28,"Email Id"),a.Mb(),a.Kb(29,"br"),a.Kb(30,"input",12),a.Kb(31,"br"),a.Nb(32,"label",13),a.qc(33,"Comments"),a.Mb(),a.Kb(34,"br"),a.Kb(35,"textarea",14),a.Kb(36,"br"),a.Nb(37,"div",15),a.Nb(38,"button",16),a.qc(39,"Submit"),a.Mb(),a.Mb(),a.Mb(),a.Mb(),a.Mb()),2&e&&(a.xb(21),a.bc("formGroup",t.feedbackForm))},directives:[n.q,n.i,n.d,n.a,n.f,n.h,n.c],styles:["body[_ngcontent-%COMP%]{font-family:Arial,Helvetica,sans-serif}*[_ngcontent-%COMP%]{box-sizing:border-box}input[type=email][_ngcontent-%COMP%], input[type=text][_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{width:100%;padding:12px;border:1px solid #ccc;border-radius:4px;box-sizing:border-box;margin-top:6px;margin-bottom:16px;resize:vertical}.container[_ngcontent-%COMP%]{border-radius:5px;padding:20px}.inp[_ngcontent-%COMP%]{width:400px;border:none;border-bottom:1px solid #a9a9a9;padding:5px 10px;outline:none}[placeholder][_ngcontent-%COMP%]:focus::-webkit-input-placeholder{-webkit-transition:text-indent .4s ease .4s;transition:text-indent .4s ease .4s;text-indent:-100%;opacity:1}"]}),e})();var p=o("tyNb");const u=[{path:"",component:m}];let f=(()=>{class e{}return e.\u0275mod=a.Hb({type:e}),e.\u0275inj=a.Gb({factory:function(t){return new(t||e)},imports:[[p.g.forChild(u)],p.g]}),e})(),h=(()=>{class e{}return e.\u0275mod=a.Hb({type:e}),e.\u0275inj=a.Gb({factory:function(t){return new(t||e)},imports:[[r.b,f,n.e,n.m]]}),e})()}}]);