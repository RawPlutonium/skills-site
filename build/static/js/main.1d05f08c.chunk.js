(this["webpackJsonpskills-react"]=this["webpackJsonpskills-react"]||[]).push([[0],{18:function(e,t,s){},19:function(e,t,s){},29:function(e,t,s){},37:function(e,t,s){"use strict";s.r(t);var n=s(1),c=s(21),a=s.n(c),i=(s(29),s(8)),l=s(9),r=s(11),o=s(10),u=(s(18),s(0)),j=function(e){return Object(u.jsxs)("form",{onSubmit:e.z,children:[Object(u.jsx)("input",{type:"text",value:e.cr,placeholder:"Add new skill",onChange:e.y,className:"inputskill"}),Object(u.jsx)("button",{className:"btn btnskill",children:"Add Skill"})]})},d=function(e){Object(r.a)(s,e);var t=Object(o.a)(s);function s(e){var n;return Object(i.a)(this,s),(n=t.call(this,e)).renderSkill=function(){return Object(u.jsxs)("li",{className:"skillname",children:[Object(u.jsx)("span",{children:n.props.x.name}),Object(u.jsx)("button",{className:"btn editbtn",onClick:function(){n.goToManage()},children:"Manage"}),Object(u.jsx)("button",{className:"btn editbtn",onClick:function(){n.toggleState()},children:"Edit"}),Object(u.jsx)("button",{className:"btn deletebtn",onClick:function(){n.props.del(n.props.index)},children:"Delete"})]})},n.toggleState=function(){var e=n.state.isEdit;n.setState({isEdit:!e})},n.goToManage=function(){console.log("Name",n.props.x.name),n.props.handleManage(n.props.x.name)},n.updateSkillItem=function(e){e.preventDefault(),n.props.editt(n.props.index,n.input.value),n.toggleState()},n.renderUpdateFrom=function(){return Object(u.jsxs)("form",{onSubmit:n.updateSkillItem,className:"updateForm",children:[Object(u.jsx)("input",{type:"text",ref:function(e){n.input=e},defaultValue:n.props.x.name,className:"inputUpdate"}),Object(u.jsx)("button",{className:"btn updatebtn",children:"Update"})]})},console.log(e),n.state={isEdit:!1},n}return Object(l.a)(s,[{key:"render",value:function(){var e=this.state.isEdit;return Object(u.jsx)(n.Fragment,{children:e?this.renderUpdateFrom():this.renderSkill()})}}]),s}(n.Component),b=(s(19),function(e){Object(r.a)(s,e);var t=Object(o.a)(s);function s(){var e;Object(i.a)(this,s);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={skills:[],current:"",name:""},e.updateSkill=function(t){t.preventDefault(),e.setState({current:t.target.value})},e.addNewSkill=function(t){t.preventDefault();var s=e.state.current,n=e.state.skills;n.push({name:s}),e.setState({skills:n,current:""})},e.deleteSkill=function(t){var s=e.state.skills;s.splice(t,1),e.setState({skills:s})},e.editSkill=function(t,s){var n=e.state.skills;n[t].name=s,e.setState({skills:n})},e.handleManage=function(t){console.log("Name 2",t),e.props.history.push({pathname:"/edit",state:{name:t}})},e}return Object(l.a)(s,[{key:"render",value:function(){var e=this,t=this.state.skills.map((function(t,s){return Object(u.jsx)(d,{x:t,index:s,del:e.deleteSkill,editt:e.editSkill,handleManage:e.handleManage},s)}));return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)("h2",{className:"heading",children:[Object(u.jsx)("span",{class:"fas fa-bahai awsome"}),"Manage Your Skills"]}),Object(u.jsx)(j,{y:this.updateSkill,z:this.addNewSkill,cr:this.state.current}),Object(u.jsx)("div",{className:"current",children:0===this.state.skills.length?Object(u.jsx)("p",{className:"currentp",children:" You have no current skills added. "}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("p",{className:"currentp",children:" Your Current Skills: "}),Object(u.jsxs)("ul",{className:"skillList",children:[" ",Object(u.jsxs)("li",{children:[" ",t," "]})," "]})]})})]})}}]),s}(n.Component)),h=s(16),p=s(22);s(31);var x=function(e){var t=Object(n.useState)(0),s=Object(h.a)(t,2),c=s[0],a=s[1],i=Object(n.useState)(!1),l=Object(h.a)(i,2),r=l[0],o=l[1],j=function(){o(!r),d()},d=function(){a(c+1)},b=Math.round(c/5*100,1);return Object(u.jsxs)("div",{children:[Object(u.jsxs)("h2",{className:"heading",children:[Object(u.jsx)("span",{class:"fas fa-bahai awsome"}),"Edit ",e.history.location.state.name]}),Object(u.jsxs)("div",{className:"progressbar",style:{width:200,height:200},children:[Object(u.jsx)(p.a,{value:b,text:"".concat(b,"%")}),";"]}),Object(u.jsxs)("div",{className:"container box columns",children:[Object(u.jsx)("div",{className:"column",children:Object(u.jsxs)("ol",{className:"list",children:[Object(u.jsxs)("li",{children:[Object(u.jsx)("input",{type:"text",className:"input  is-success is-normal is-rounded"})," ",Object(u.jsx)("input",{className:"checkbox",type:"checkbox",onChange:j})]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("input",{type:"text",className:"input  is-success is-normal is-rounded"})," ",Object(u.jsx)("input",{className:"checkbox",type:"checkbox",onChange:j})]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("input",{type:"text",className:"input  is-success is-normal is-rounded"})," ",Object(u.jsx)("input",{className:"checkbox",type:"checkbox",onChange:j})]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("input",{type:"text",className:"input  is-success is-normal is-rounded"})," ",Object(u.jsx)("input",{className:"checkbox",type:"checkbox",onChange:j})]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("input",{type:"text",className:"input  is-success is-normal is-rounded"})," ",Object(u.jsx)("input",{className:"checkbox",type:"checkbox",onChange:j})]})]})}),Object(u.jsxs)("div",{className:"column",children:[Object(u.jsx)("h1",{children:"Describe your skill"}),Object(u.jsx)("div",{class:"control",children:Object(u.jsx)("textarea",{class:"textarea is-focused",placeholder:"Skill Description"})}),Object(u.jsx)("button",{class:"button is-success",children:"Save"})]})]})]})},m=s(23),O=s(2),k=function(e){Object(r.a)(s,e);var t=Object(o.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(u.jsx)(m.a,{children:Object(u.jsxs)(O.c,{children:[Object(u.jsx)(O.a,{exact:!0,path:"/",component:b}),Object(u.jsx)(O.a,{exact:!0,path:"/edit",component:x})]})})}}]),s}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(u.jsx)(k,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[37,1,2]]]);
//# sourceMappingURL=main.1d05f08c.chunk.js.map