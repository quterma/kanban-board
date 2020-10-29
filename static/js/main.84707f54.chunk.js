(this.webpackJsonpkanban=this.webpackJsonpkanban||[]).push([[0],{156:function(n,e){},158:function(n,e){},168:function(n,e){},170:function(n,e){},197:function(n,e){},198:function(n,e){},203:function(n,e){},205:function(n,e){},229:function(n,e){},256:function(n,e,t){"use strict";t.r(e);var r=t(1),i=t(0),c=t.n(i),a=t(38),o=t.n(a),u=t(3),s=t(4),d=t(9),l=t(7);function b(){var n=Object(u.a)(["\n  margin-right: 4px;\n"]);return b=function(){return n},n}function f(){var n=Object(u.a)(["\n  background-color: inherit;\n  border-radius: 5px;\n  border: none;\n  outline: none;\n  font-size: 1.2rem;\n  transition: 0.2s ease;\n  color: ",";\n  padding: 6px;\n  &:hover {\n    background-color: ",";\n    cursor: ",";\n    color: #5E6C84;\n  };\n  margin: 7px 11px;\n  margin-top: ",";\n"]);return f=function(){return n},n}var j=s.b.button(f(),(function(n){return n.light?"#FFFFFF":"#5E6C84"}),(function(n){return n.disabled?"inherit":n.dark?"#EBECF0":"#FFFFFF"}),(function(n){return n.disabled?"inherit":"pointer"}),(function(n){return n.top&&n.top})),p=s.b.i(b()),O=function(n){var e=n.onHandleClick,t=n.disabled,i=n.name,c=n.light,a=n.clear,o=n.top,u=n.dark;return Object(r.jsxs)(j,{onClick:e,disabled:t,light:c,top:o,dark:u,children:[!a&&Object(r.jsx)(p,{className:"fas fa-plus",light:c}),i]})},x=t(8),h=t.p+"static/media/ava.516bf9aa.svg",m=t.p+"static/media/arrow.9bf3f871.svg";var g=function(n){var e,t,c=Object(i.useRef)(null);return e=c,t=n.onHandleOutsideClicks,Object(i.useEffect)((function(){function n(n){e.current&&!e.current.contains(n.target)&&t()}return document.addEventListener("mousedown",n),function(){document.removeEventListener("mousedown",n)}}),[e,t]),Object(r.jsx)("div",{ref:c,children:n.children})};function v(){var n=Object(u.a)(["\n  text-align: left;\n  font-size: 1.2rem;\n  line-height: 1.4rem;\n  padding: 8px;\n  display: block;\n  cursor: pointer;\n  border-radius: 5px;\n\n  &:hover { background-color: #DEDEDE }\n"]);return v=function(){return n},n}function k(){var n=Object(u.a)(["\n  position: absolute;\n  background-color: #FFFFFF;\n  min-width: 258px;\n  min-height: 70px;\n  max-height: 170px;\n  right: ",";\n  transform: translateX(",");\n  top: ",";\n\n  border-radius: 5px;\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n  z-index: 1;\n  padding: 5px;\n  overflow-y: auto;\n"]);return k=function(){return n},n}var w=s.b.ul(k(),(function(n){return n.right}),(function(n){return n.right}),(function(n){return n.top})),I=s.b.li(v()),y=function(n){var e=n.onSubmit,t=n.onHandleLeave,i=n.mappingData,c=n.right,a=n.top,o=function(n){return e(n.currentTarget)},u=i.map((function(n){return Object(r.jsx)(I,{id:n.id,onClick:o,children:n.content},n.id)}));return Object(r.jsx)(w,{onMouseLeave:t,right:c,top:a,children:Object(r.jsx)(g,{onHandleOutsideClicks:t,children:u})})};function C(){var n=Object(u.a)(["\n  height: 8px;\n  transform: ",";\n  margin-left: 8px;\n"]);return C=function(){return n},n}function F(){var n=Object(u.a)(["\n  height: 33px;\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n"]);return F=function(){return n},n}function S(){var n=Object(u.a)(["\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border: 1px solid #FFFFFF;\n  background-color: #FFFFFF;\n  position: relative;\n"]);return S=function(){return n},n}function T(){var n=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: 0.2s ease;\n  &:hover { opacity: 0.8 }\n"]);return T=function(){return n},n}function D(){var n=Object(u.a)(["\n  margin-left: 20px;\n  display: inline-block;\n"]);return D=function(){return n},n}var E=s.b.div(D()),z=s.b.div(T()),H=s.b.div(S()),B=s.b.img(F()),M=s.b.img(C(),(function(n){return n.open?"matrix(1, 0, 0, -1, 0, 0)":"unset"})),L=function(){var n=Object(i.useState)(!1),e=Object(x.a)(n,2),t=e[0],c=e[1],a=function(){return c(!1)};return Object(r.jsxs)(E,{children:[Object(r.jsxs)(z,{onClick:function(){return c(!0)},children:[Object(r.jsx)(H,{children:Object(r.jsx)(B,{src:h,alt:"avatar"})}),Object(r.jsx)(M,{src:m,alt:"arrow",open:t})]}),t&&Object(r.jsx)(y,{mappingData:[{id:"profile",content:"Profile"},{id:"logout",content:"Log Out"}],onSubmit:function(n){console.log('Hey! This is currently unavailable. You pressed "'.concat(n.id,'" item. Good for you! :)')),a()},onHandleLeave:a,right:"1%",top:"50px"})]})},P=t(14),R=t(52),N=t(53),A=Object(R.b)({name:"kanban",initialState:{steps:{},tasks:{"task-1":{id:"task-1",content:"One",steps:[]},"task-2":{id:"task-2",content:"Two",steps:[]},"task-3":{id:"task-3",content:"Three",steps:[]},"task-4":{id:"task-4",content:"Four",steps:[]}},columns:{"column-1":{id:"column-1",title:"Backlog",taskIds:["task-1","task-2","task-3","task-4"]},"column-2":{id:"column-2",title:"Ready",taskIds:[]},"column-3":{id:"column-3",title:"In Progress",taskIds:[]},"column-4":{id:"column-4",title:"Finished",taskIds:[]}},columnOrder:["column-1","column-2","column-3","column-4"]},reducers:{setHomeIndex:function(n,e){n.homeIndex=e.payload},setColumnOrder:function(n,e){n.columnOrder=e.payload},createColumn:function(n){var e=Object(N.v4)();n.columns[e]={id:e,title:"",taskIds:[]},n.columnOrder.splice(1,0,e)},setColumn:function(n,e){var t=Object.keys(e.payload)[0],r=Object.values(e.payload)[0];n.columns[t].taskIds=r},deleteColumn:function(n,e){var t=e.payload,r=n.columns[t].taskIds;0===n.columnOrder.indexOf(t)?r.forEach((function(e){return delete n.tasks[e]})):n.columns[t].taskIds.forEach((function(e){return n.columns[n.columnOrder[0]].taskIds.push(e)})),delete n.columns[t],n.columnOrder.splice(n.columnOrder.indexOf(t),1)},setColumnTitle:function(n,e){var t=e.payload,r=t.columnId,i=t.newTitle;n.columns[r].title=i},createTask:function(n,e){var t=e.payload,r=Object(N.v4)();n.tasks[r]={id:r,content:"",steps:[],created:t};var i=n.columnOrder[0];n.columns[i].taskIds.push(r)},deleteTask:function(n,e){var t=e.payload;for(var r in n.columns){var i=n.columns[r].taskIds.findIndex((function(n){return n===t}));i>=0&&n.columns[r].taskIds.splice(i,1)}delete n.tasks[t]},setTaskTitle:function(n,e){var t=e.payload,r=t.id,i=t.newTitle;n.tasks[r].content=i},createStep:function(n,e){var t=e.payload,r=Object(N.v4)();n.steps[r]={id:r,content:"",isCompleted:!1},n.tasks[t].steps.push(r)},updateStep:function(n,e){var t=e.payload.id;n.steps[t]=Object(P.a)(Object(P.a)({},n.steps[t]),e.payload)},deleteStep:function(n,e){var t=e.payload,r=t.taskId,i=t.stepId;n.tasks[r].steps.splice(n.tasks[r].steps.indexOf(i),1),delete n.steps[i]}}}),J=A.actions,W=J.setHomeIndex,K=J.setColumnOrder,X=J.setColumn,G=J.createTask,Y=J.createColumn,q=J.deleteColumn,Q=J.setColumnTitle,U=J.setTaskTitle,V=J.createStep,Z=J.updateStep,$=J.deleteStep,_=J.deleteTask,nn=function(n){return n.kanban.homeIndex&&Object.values(n.kanban.homeIndex)[0]},en=function(n){return n.kanban.columnOrder},tn=function(n){return n.kanban.columns},rn=function(n){return n.kanban.tasks},cn=function(n){return n.kanban.steps},an=A.reducer,on=function(){var n=Object(i.useState)([0,0]),e=Object(x.a)(n,2),t=e[0],r=e[1];return Object(i.useLayoutEffect)((function(){var n=function(){return r([window.innerWidth,window.innerHeight])};return window.addEventListener("resize",n),n(),function(){return window.removeEventListener("resize",n)}}),[]),t};function un(){var n=Object(u.a)(["\n  background: #0079BF;\n  width: 100%;\n  display: block;\n  text-align: right;\n  padding: 10px 20px;\n"]);return un=function(){return n},n}function sn(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return sn=function(){return n},n}function dn(){var n=Object(u.a)(["\n  font-size: 1.8rem;\n  color: #FFFFFF;\n"]);return dn=function(){return n},n}function ln(){var n=Object(u.a)(["\n  background: #0067A3;\n  display: flex;\n  justify-content: ",";\n  align-items: center;\n  padding: 5px 30px;\n"]);return ln=function(){return n},n}var bn=s.b.header(ln(),(function(n){return n.width>600?"space-between":"flex-end"})),fn=s.b.h2(dn()),jn=s.b.div(sn()),pn=s.b.div(un());var On=Object(d.j)((function(){var n=on()[0],e=Object(d.h)().pathname.startsWith("/editor"),t=Object(l.c)();return n<480?Object(r.jsx)(pn,{children:Object(r.jsx)(L,{})}):Object(r.jsxs)(bn,{width:n,children:[n>600&&Object(r.jsx)(fn,{children:"Awesome Kanban Board"}),Object(r.jsxs)(jn,{children:[e||Object(r.jsx)(O,{onHandleClick:function(){return t(Y())},name:"Create new list",light:!0}),Object(r.jsx)(L,{})]})]})})),xn=t(24),hn=t(81),mn=function(n,e,t,r,i){var c=Object(hn.a)(r);c.splice(n,1);var a=i?Object(hn.a)(i):c;return a.splice(e,0,t),[c,a]},gn=t(23);function vn(){var n=Object(u.a)(["\n  line-height: 2.5rem;\n  font-size: 1.1rem;\n"]);return vn=function(){return n},n}function kn(){var n=Object(u.a)(["\n  width: 100%;\n  border: none;\n  line-height: 2.4rem;\n  font-size: 1.1rem;\n"]);return kn=function(){return n},n}function wn(){var n=Object(u.a)(["\n  background: #FFFFFF;\n  border-radius: 5px;\n  width: 100%;\n  padding: 0 8px;\n  height: 2.5rem;\n  margin: 0 auto 15px auto;\n  background-color: ",";\n  outline: none;\n"]);return wn=function(){return n},n}var In=s.b.div(wn(),(function(n){return n.isDragging?"#9ae455":"white"})),yn=s.b.input(kn()),Cn=s.b.h3(vn()),Fn=function(n){var e=n.task,t=n.index,c=Object(l.c)(),a=Object(i.useState)(""===e.content),o=Object(x.a)(a,2),u=o[0],s=o[1],b=Object(i.useState)(e.content),f=Object(x.a)(b,2),j=f[0],p=f[1],O=function(n){return p(n.currentTarget.value)},h=function(){c(U({id:e.id,newTitle:j||"New Task"})),s(!1)},m=Object(d.g)(),g=function(){return m.push("/editor/".concat(e.id))};return Object(r.jsx)(gn.b,{draggableId:e.id,index:t,children:function(n,t){return Object(r.jsx)(In,Object(P.a)(Object(P.a)(Object(P.a)({},n.draggableProps),n.dragHandleProps),{},{ref:n.innerRef,isDragging:t.isDragging,children:u?Object(r.jsx)(yn,{autoFocus:!0,onBlur:h,onChange:O,value:j,name:e.content}):Object(r.jsx)(Cn,{onDoubleClick:g,children:e.content})}))}})},Sn=function(n){return n.tasks.map((function(n,e){return Object(r.jsx)(Fn,{task:n,index:e},n.id)}))};function Tn(){var n=Object(u.a)(["\n  margin-left: 12px;\n  font-size: 1.2rem;\n  width: 160px;\n  line-height: 21px;\n  border: none;\n"]);return Tn=function(){return n},n}function Dn(){var n=Object(u.a)(["\n  position: relative;\n"]);return Dn=function(){return n},n}function En(){var n=Object(u.a)(["\n  padding: 12px;\n  font-size: 1.2rem;\n"]);return En=function(){return n},n}var zn=s.b.h3(En()),Hn=s.b.div(Dn()),Bn=s.b.input(Tn()),Mn=function(n){var e=n.title,t=n.thisColId,c=Object(l.c)(),a=Object(i.useState)(""===e),o=Object(x.a)(a,2),u=o[0],s=o[1],d=function(){return s(!0)},b=Object(i.useState)(e),f=Object(x.a)(b,2),j=f[0],p=f[1],h=Object(i.useState)(!1),m=Object(x.a)(h,2),g=m[0],v=m[1];return Object(r.jsxs)(r.Fragment,{children:[u?Object(r.jsx)(Bn,{autoFocus:!0,onBlur:function(){c(Q({newTitle:j||"New Column",columnId:t})),s(!1)},onChange:function(n){return p(n.currentTarget.value.substring(0,18))},value:j,name:e}):Object(r.jsx)(zn,{onDoubleClick:d,children:e}),g?Object(r.jsx)(Hn,{children:Object(r.jsx)(y,{mappingData:[{id:"delete column",content:"Delete Column"},{id:"rename column",content:"Rename column"}],onSubmit:function(n){switch(n.id){case"delete column":c(q(t)),v(!1);break;case"rename column":d(),v(!1);break;default:return}},onHandleLeave:function(){return v(!1)},right:"-4%",top:"15px"})}):Object(r.jsx)(O,{onHandleClick:function(){return v(!0)},name:" ... ",clear:!0})]})};function Ln(){var n=Object(u.a)(["\n  position: relative;\n  height: 48px;\n"]);return Ln=function(){return n},n}var Pn=s.b.div(Ln()),Rn=function(n){var e=n.thisColumn,t=n.prevColumn,c=n.index,a=Object(l.c)(),o=Object(l.d)(rn),u=c>0&&t.taskIds.length<1,s=Object(i.useState)(u),d=Object(x.a)(s,2),b=d[0],f=d[1];Object(i.useEffect)((function(){f(u)}),[u]);var j=Object(i.useState)(!1),p=Object(x.a)(j,2),h=p[0],m=p[1],g=function(){return m(!1)},v=c>0&&t.taskIds.map((function(n){return o[n]}));return Object(r.jsx)(Pn,{children:h?Object(r.jsx)(y,{mappingData:v,onSubmit:function(n){var r=n.id,i=t,c=e,o=t.taskIds.indexOf(r),u=e.taskIds.length,s=mn(o,u,r,i.taskIds,c.taskIds),d=Object(x.a)(s,2),l=d[0],b=d[1];a(X(Object(xn.a)({},i.id,l))),a(X(Object(xn.a)({},c.id,b))),g()},onHandleLeave:g,right:"50%",top:"-120px"}):Object(r.jsx)(O,{onHandleClick:0===c?function(){var n=(new Date).toISOString().split(".")[0].replace(/-/g,".").replace(/t/gi," at ");a(G(n))}:function(){return m(!0)},disabled:b,name:0===c?"Create new task":"Add task"})})};function Nn(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 44px;\n  width: 100%;\n  outline: none;\n"]);return Nn=function(){return n},n}function An(){var n=Object(u.a)(["\n  padding: 12px;\n  align-self: stretch;\n  flex-grow: 1;\n  min-height: 140px;\n  max-width: 280px;\n  transition: background-color 0.1s ease;\n  background-color: ",";\n  overflow-y: auto;\n"]);return An=function(){return n},n}function Jn(){var n=Object(u.a)(["\n  border: 1px solid lightgrey;\n  min-width: 282px;\n  max-height: 78vh;\n  background-color: #EBECF0;\n  display: flex;\n  flex-direction: column;\n  border-radius: 10px;\n  text-align: left;\n  margin: 20px;\n"]);return Jn=function(){return n},n}var Wn=s.b.div(Jn()),Kn=s.b.div(An(),(function(n){return n.isDraggingOver?"#add8e6c4":"inherit"})),Xn=s.b.div(Nn()),Gn=function(n){var e=n.column,t=n.tasks,i=n.index,c=n.isDropDisabled,a=n.columns,o=n.columnOrder,u=a[o[i-1]],s=a[o[i]];return Object(r.jsx)(gn.b,{draggableId:e.id,index:i,children:function(n){return Object(r.jsxs)(Wn,Object(P.a)(Object(P.a)({ref:n.innerRef},n.draggableProps),{},{children:[Object(r.jsx)(Xn,Object(P.a)(Object(P.a)({},n.dragHandleProps),{},{children:Object(r.jsx)(Mn,{title:e.title,thisColId:o[i]})})),Object(r.jsx)(gn.c,{droppableId:e.id,isDropDisabled:c,type:"task",top:"100px",children:function(n,e){return Object(r.jsxs)(Kn,Object(P.a)(Object(P.a)({ref:n.innerRef},n.droppableProps),{},{isDraggingOver:e.isDraggingOver,children:[Object(r.jsx)(Sn,{tasks:t}),n.placeholder]}))}}),Object(r.jsx)(Rn,{thisColumn:s,prevColumn:u,index:i})]}))}})},Yn=function(n){var e=n.column,t=n.index,i=n.isDropDisabled,c=n.columns,a=n.columnOrder,o=Object(l.d)(rn),u=e.taskIds.map((function(n){return o[n]}));return Object(r.jsx)(Gn,{column:e,tasks:u,taskMap:o,index:t,isDropDisabled:i,columns:c,columnOrder:a})},qn=function(n){var e=n.columnOrder,t=n.columns,i=n.homeIndex;return e.map((function(n,c){var a=t[n],o=c<i||c>i+1;return Object(r.jsx)(Yn,{column:a,isDropDisabled:o,index:c,columns:t,columnOrder:e},a.id)}))};function Qn(){var n=Object(u.a)(["\n  overflow-x: auto;\n  background-color: #0079BF;\n  height: 100%;\n  text-align: center;\n"]);return Qn=function(){return n},n}function Un(){var n=Object(u.a)(["\n  display: flex;\n  align-items: flex-start;\n  flex-wrap: ",";\n  justify-content: ",";\n  padding: 20px 0;\n"]);return Un=function(){return n},n}var Vn=s.b.main(Un(),(function(n){return n.width<780?"wrap":"nowrap"}),(function(n){return n.isOverflow?"start":"center"})),Zn=s.b.div(Qn()),$n=function(n){var e=n.columnOrder,t=n.columns,c=n.homeIndex,a=on()[0],o=Object(i.useRef)(null),u=Object(i.useState)(!1),s=Object(x.a)(u,2),d=s[0],b=s[1];Object(i.useEffect)((function(){return o.current&&b(o.current.getBoundingClientRect().width<o.current.scrollWidth)}),[a,e.length]);var f=Object(i.useState)(e.length>0),j=Object(x.a)(f,2),p=j[0],h=j[1];Object(i.useEffect)((function(){return h(!(e.length>0))}),[e]);var m=Object(l.c)();return Object(r.jsx)(Zn,{ref:o,children:p?Object(r.jsx)(O,{onHandleClick:function(){return m(Y())},name:"Create new list",light:!0,top:"40vh"}):Object(r.jsx)(gn.c,{droppableId:"all-columns",direction:"horizontal",type:"column",children:function(n){return Object(r.jsxs)(Vn,Object(P.a)(Object(P.a)({ref:n.innerRef},n.droppableProps),{},{isOverflow:d,width:a,children:[Object(r.jsx)(qn,{columnOrder:e,columns:t,homeIndex:c}),n.placeholder]}))}})})},_n=function(){var n=Object(l.c)(),e=Object(l.d)(en),t=Object(l.d)(tn),c=Object(l.d)(nn),a=Object(i.useCallback)((function(t){var r=e.indexOf(t.source.droppableId);n(W({homeIndex:r}))}),[e,n]),o=Object(i.useCallback)((function(r){n(W({homeIndex:null}));var i=r.destination,c=r.source,a=r.draggableId,o=r.type;if(i&&(i.droppableId!==c.droppableIs||i.index!==c.index))if("column"!==o){var u=t[c.droppableId],s=t[i.droppableId];if(u!==s){var d=mn(c.index,i.index,a,u.taskIds,s.taskIds),l=Object(x.a)(d,2),b=l[0],f=l[1];n(X(Object(xn.a)({},u.id,b))),n(X(Object(xn.a)({},s.id,f)))}else{var j=mn(c.index,i.index,a,u.taskIds)[0];n(X(Object(xn.a)({},u.id,j)))}}else{var p=mn(c.index,i.index,a,e)[0];n(K(p))}}),[e,t,n]);return Object(r.jsx)(gn.a,{onDragStart:a,onDragEnd:o,children:Object(r.jsx)($n,{columnOrder:e,columns:t,homeIndex:c})})};function ne(){var n=Object(u.a)(["\n  font-size: 1.2rem;\n  display: inline-block;\n  color: #FFFFFF;\n  margin: 0 10px;\n  text-align: center;\n"]);return ne=function(){return n},n}function ee(){var n=Object(u.a)(["\n  padding: 5px;\n"]);return ee=function(){return n},n}function te(){var n=Object(u.a)(["\n  height: 55px;\n  background: #0067A3;\n  padding: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: ",";\n  max-width: 100%;\n"]);return te=function(){return n},n}var re=s.b.footer(te(),(function(n){return n.width>700?"space-between":"center"})),ie=s.b.div(ee()),ce=s.b.div(ne()),ae=(new Date).toISOString().split("T")[0].replace(/-/g,"."),oe=function(){var n=on()[0],e=Object(l.d)(en),t=Object(l.d)(tn),i=0===e.length?0:t[e[0]].taskIds.length,c=0===e.length?0:t[e[e.length-1]].taskIds.length;return Object(r.jsxs)(re,{width:n,children:[Object(r.jsxs)(ie,{children:[Object(r.jsxs)(ce,{children:["Active tasks:  ",i]}),Object(r.jsxs)(ce,{children:["Finished tasks:  ",c]})]}),n>700&&Object(r.jsxs)(ie,{children:[Object(r.jsxs)(ce,{children:["Kanban board by:  ","NAME"]}),Object(r.jsx)(ce,{children:ae})]})]})},ue=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1440;return"".concat(n/e*100,"vw")};function se(){var n=Object(u.a)(["\n*, body {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 400;\n  \n  &::-webkit-scrollbar {\n    height: 9px;\n    width: 9px;\n    }\n  &::-webkit-scrollbar-track {\n    border-radius: 6px;\n    background-color: rgb(14, 43, 38, 0.4);\n  }\n  &::-webkit-scrollbar-thumb {\n    border-radius: 6px;\n    background-color: rgba(255, 254, 214, 0.6);\n  }\n}\n\n:root {\n    font-size: ",";\n\n    @media (min-width: 400px) {\n      font-size: ",";\n    }\n\n    @media (min-width: 500px) {\n      font-size: ",";\n    }\n\n    @media (min-width: 600px) {\n      font-size: ",";\n    }\n\n    @media (min-width: 700px) {\n      font-size: ",";\n    }\n\n    @media (min-width: 800px) {\n      font-size: ",";\n    }\n\n    @media (min-width: 900px) {\n      font-size: ",";\n    }\n\n    @media (min-width: 1000px) {\n      font-size: ",";\n    }\n\n    @media (min-width: 1200px) {\n      font-size: ",";\n    }\n\n    @media (min-width: 1400px) {\n      font-size: ",";\n    }\n\n    @media (min-width: 1600px) {\n      font-size: ",";\n    }\n} \n\ninput {\n  outline: thin;\n}\n"]);return se=function(){return n},n}var de=Object(s.a)(se(),ue(48),ue(40),ue(34),ue(28),ue(24),ue(22),ue(20),ue(18),ue(16),ue(14),ue(12));function le(){var n=Object(u.a)(["\n  width: 100%;\n  flex: 1;\n  line-height: 2rem;\n  padding: 0;\n  font-size: 1.2rem;\n  border: none;\n  margin: 0;\n  text-decoration: underline;\n"]);return le=function(){return n},n}function be(){var n=Object(u.a)(["\n  font-size: 1.2rem;\n  line-height: 2rem;\n  margin: 0;\n  padding: 0;\n  text-decoration: ",";\n"]);return be=function(){return n},n}function fe(){var n=Object(u.a)(["\n  -ms-transform: scale(1.5); /* IE */\n  -moz-transform: scale(1.5); /* FF */\n  -webkit-transform: scale(1.5); /* Safari and Chrome */\n  -o-transform: scale(1.5); /* Opera */\n  transform: scale(1.5);\n  margin: 0;\n"]);return fe=function(){return n},n}function je(){var n=Object(u.a)(["\n  min-height: 40px;\n  width: 100%;\n  padding-left: 10px;\n"]);return je=function(){return n},n}function pe(){var n=Object(u.a)(["\n  min-height: 40px;\n"]);return pe=function(){return n},n}function Oe(){var n=Object(u.a)(["\n  flex: 1;\n  display: flex;\n  align-items: center;\n  padding: 2px;\n"]);return Oe=function(){return n},n}function xe(){var n=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 12px;\n  padding: 6px;\n"]);return xe=function(){return n},n}var he=s.b.div(xe()),me=s.b.div(Oe()),ge=s.b.div(pe()),ve=s.b.div(je()),ke=s.b.input(fe()),we=s.b.p(be(),(function(n){return n.isCompleted&&"line-through #0000ffa9"})),Ie=s.b.input(le()),ye=function(n){var e=n.onHandleToggle,t=n.updateThisStep,i=n.onHandleChange,c=n.activateEditMode,a=n.deleteThisStep,o=n.newContent,u=n.isCompleted,s=n.content,d=n.editMode;return Object(r.jsxs)(he,{children:[Object(r.jsxs)(me,{children:[Object(r.jsx)(ge,{children:Object(r.jsx)(ke,{type:"checkbox",onChange:e,name:"checkbox",checked:u})}),Object(r.jsx)(ve,{children:d?Object(r.jsx)(Ie,{autoFocus:!0,onBlur:t,onChange:i,value:o,name:"content"}):Object(r.jsx)(we,{onDoubleClick:c,isCompleted:u,children:s})})]}),Object(r.jsx)(O,{onHandleClick:a,name:"Delete step",clear:!0,dark:!0})]})},Ce=function(n){var e=n.stepId,t=n.taskId,c=Object(l.c)(),a=Object(l.d)(cn)[e],o=a.content,u=a.isCompleted,s=Object(i.useState)(""===o),d=Object(x.a)(s,2),b=d[0],f=d[1],j=Object(i.useState)(o),p=Object(x.a)(j,2),O=p[0],h=p[1];Object(i.useEffect)((function(){return h(o)}),[o]);return Object(r.jsx)(ye,{onHandleToggle:function(){return c(Z({id:a.id,isCompleted:!u}))},updateThisStep:function(){c(Z({id:a.id,content:O||"new step"})),f(!1)},onHandleChange:function(n){return h(n.currentTarget.value)},activateEditMode:function(){return f(!0)},deleteThisStep:function(){return c($({taskId:t,stepId:e}))},newContent:O,isCompleted:u,content:o,editMode:b})},Fe=function(n){var e=n.stepIds,t=n.taskId;return e.map((function(n){return Object(r.jsx)(Ce,{stepId:n,taskId:t},n)}))};function Se(){var n=Object(u.a)(["\n  width: 90%;\n  height: 75%;\n  margin: 20px auto;\n  padding: 20px 30px;\n  font-size: 22px;\n  display: block;\n  border: 1px solid grey;\n  border-radius: 5px;\n  background-color: white;\n  overflow-y: auto;\n"]);return Se=function(){return n},n}function Te(){var n=Object(u.a)(["\n  border: 1px solid grey;\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n  max-width: 40%;\n"]);return Te=function(){return n},n}function De(){var n=Object(u.a)(["\n  margin-top: 12px;\n  font-weight: 400;\n  font-size: 0.8rem;\n  padding-left: 10px;\n"]);return De=function(){return n},n}function Ee(){var n=Object(u.a)(["\n  line-height: 1.4rem;\n  font-size: 1.3rem;\n  padding-left: 10px;\n  border: none;\n"]);return Ee=function(){return n},n}function ze(){var n=Object(u.a)(["\n  font-size: 1.3rem;\n  height: 1.5rem;\n  font-weight: 700;\n  padding-left: 10px;\n"]);return ze=function(){return n},n}function He(){var n=Object(u.a)(["\n  max-width: 50%;\n  height: 55px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"]);return He=function(){return n},n}function Be(){var n=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 30px 5% 10px 5%;\n"]);return Be=function(){return n},n}function Me(){var n=Object(u.a)(["\n  border: 1px solid lightgrey;\n  width: 100%;\n  height: 100%;\n  background-color: #EBECF0;\n  border-radius: 10px;\n  text-align: left;\n"]);return Me=function(){return n},n}function Le(){var n=Object(u.a)(["\n  background-color: #0079BF;\n  width: 100%;\n  min-width: 400px;\n  height: 100%;\n  min-height: 600px;\n  padding: 2%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return Le=function(){return n},n}var Pe,Re=s.b.div(Le()),Ne=s.b.div(Me()),Ae=s.b.div(Be()),Je=s.b.div(He()),We=s.b.h3(ze()),Ke=s.b.input(Ee()),Xe=s.b.h4(De()),Ge=s.b.div(Te()),Ye=s.b.div(Se()),qe=function(n){var e=n.updateTaskTitle,t=n.onInputHandleChange,i=n.activateEditMode,c=n.createNewStep,a=n.deleteThisTask,o=n.closeEditPage,u=n.editMode,s=n.created,d=n.newTitle,l=n.title,b=n.stepIds,f=n.taskId;return Object(r.jsx)(Re,{children:Object(r.jsxs)(Ne,{children:[Object(r.jsxs)(Ae,{children:[Object(r.jsxs)(Je,{children:[u?Object(r.jsx)(Ke,{autoFocus:!0,onBlur:e,onChange:t,value:d,name:"title"}):Object(r.jsx)(We,{onDoubleClick:i,children:l}),s&&Object(r.jsx)(Xe,{children:s})]}),Object(r.jsxs)(Ge,{children:[Object(r.jsx)(O,{onHandleClick:c,name:"Add step",clear:!0}),Object(r.jsx)(O,{onHandleClick:a,name:"Delete task",clear:!0}),Object(r.jsx)(O,{onHandleClick:o,name:"Close edit",clear:!0})]})]}),Object(r.jsx)(Ye,{children:Object(r.jsx)(Fe,{stepIds:b,taskId:f})})]})})},Qe=(Pe=Object(d.j)((function(){var n=Object(l.c)(),e=Object(d.i)(),t=Object(l.d)(rn)[e.taskId],c=t.id,a=t.content,o=t.steps,u=t.created,s=Object(d.g)(),b=function(){return s.push("/")},f=Object(i.useState)(!1),j=Object(x.a)(f,2),p=j[0],O=j[1],h=Object(i.useState)(a),m=Object(x.a)(h,2),g=m[0],v=m[1];return Object(r.jsx)(qe,{updateTaskTitle:function(){n(U({newTitle:g||"New Task",id:c})),O(!1)},onInputHandleChange:function(n){return v(n.currentTarget.value)},activateEditMode:function(){return O(!0)},createNewStep:function(){return n(V(c))},deleteThisTask:function(){b(),n(_(c))},closeEditPage:b,editMode:p,created:u,newTitle:g,title:a,stepIds:o,taskId:c})})),function(){var n=Object(d.i)();return Object(l.d)(rn)[n.taskId]?Object(r.jsx)(Pe,{}):Object(r.jsx)(d.a,{to:"/"})});function Ue(){var n=Object(u.a)(["\n\theight: 100vh;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n"]);return Ue=function(){return n},n}var Ve=s.b.div(Ue()),Ze=Object(d.j)((function(){var n=on()[0];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(de,{}),Object(r.jsxs)(Ve,{children:[Object(r.jsx)(On,{}),Object(r.jsxs)(d.d,{children:[Object(r.jsx)(d.b,{path:"/editor/:taskId?",render:function(){return Object(r.jsx)(Qe,{})}}),Object(r.jsx)(d.b,{path:"/",render:function(){return Object(r.jsx)(_n,{})}})]}),n>480&&Object(r.jsx)(oe,{})]})]})})),$e=t(142),_e=t.n($e),nt=function(){try{var n=localStorage.getItem("state");if(null===n)return;return JSON.parse(n)}catch(e){return}}(),et=Object(R.a)({reducer:{kanban:an},preloadedState:nt});et.subscribe(_e()((function(){!function(n){try{var e=JSON.stringify(n);localStorage.setItem("state",e)}catch(t){}}(et.getState())})),1e3);var tt=t(30);t(255);o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(tt.a,{children:Object(r.jsx)(l.a,{store:et,children:Object(r.jsx)(Ze,{})})})}),document.getElementById("root"))}},[[256,1,2]]]);
//# sourceMappingURL=main.84707f54.chunk.js.map