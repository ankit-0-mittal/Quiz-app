(this["webpackJsonpquiz-app"]=this["webpackJsonpquiz-app"]||[]).push([[0],{102:function(e,t,c){},104:function(e,t,c){},105:function(e,t,c){},106:function(e,t,c){},107:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(9),r=c.n(s),i=(c(71),c(42)),o=c(55),l=c(12),u=c(58),j=c.n(u),d=c(30),b=c(8),h=(c(91),c(3)),O=function(){return Object(h.jsxs)("div",{style:{textAlign:"center",marginBottom:10},children:["Made with \u2665 by"," ",Object(h.jsx)("a",{href:"https://www.youtube.com/roadsidecoder",style:{cursor:"pointer"},children:"Ankit Mittal"})]})},v=(c(93),function(){return Object(h.jsxs)("div",{className:"header",children:[Object(h.jsx)(d.b,{to:"/",className:"title",children:"Intuitive Quiz Hub"}),Object(h.jsx)("hr",{className:"divider"})]})}),g=c(140),m=c(141),x=c(138),f=(c(102),[{category:"General Knowledge",value:9},{category:"Books",value:10},{category:"Films",value:11},{category:"Music",value:12},{category:"Musicals and Theaters",value:13},{category:"Television",value:14},{category:"Video Games",value:15},{category:"Board Games",value:16},{category:"Science and Nature",value:17},{category:"Computer",value:18},{category:"Mathematics",value:19},{category:"Mythology",value:20},{category:"Sports",value:21},{category:"Geography",value:22},{category:"History",value:23},{category:"Politics",value:24},{category:"Celebrities",value:26},{category:"Animals",value:27},{category:"Vehicles",value:28},{category:"Comics",value:29},{category:"Gadgets",value:30},{category:"Japanese Anime",value:31},{category:"Cartoon and Animations",value:32}]),y=function(e){var t=e.children;return Object(h.jsx)("div",{style:{width:"100%",padding:10,marginBottom:10,borderRadius:4,backgroundColor:"orangered",textAlign:"center",color:"white",textTransform:"capitalize"},children:t})},p=function(e){var t=e.name,c=e.setName,n=e.fetchQuestions,s=Object(a.useState)(""),r=Object(l.a)(s,2),i=r[0],o=r[1],u=Object(a.useState)(""),j=Object(l.a)(u,2),d=j[0],O=j[1],v=Object(a.useState)(!1),p=Object(l.a)(v,2),S=p[0],N=p[1],z=Object(b.f)();return Object(h.jsxs)("div",{className:"content",children:[Object(h.jsxs)("div",{className:"settings",children:[Object(h.jsx)("span",{style:{fontSize:30},children:"Quiz Settings"}),Object(h.jsxs)("div",{className:"settings__select",children:[S&&Object(h.jsx)(y,{children:"Please Fill all the feilds"}),Object(h.jsx)(g.a,{style:{marginBottom:25},label:"Enter Your Name",variant:"outlined",onChange:function(e){return c(e.target.value)}}),Object(h.jsx)(g.a,{select:!0,label:"Select Category",variant:"outlined",value:i,onChange:function(e){return o(e.target.value)},style:{marginBottom:30},children:f.map((function(e){return Object(h.jsx)(m.a,{value:e.value,children:e.category},e.category)}))}),Object(h.jsxs)(g.a,{select:!0,label:"Select Difficulty",value:d,onChange:function(e){return O(e.target.value)},variant:"outlined",style:{marginBottom:30},children:[Object(h.jsx)(m.a,{value:"easy",children:"Easy"},"Easy"),Object(h.jsx)(m.a,{value:"medium",children:"Medium"},"Medium"),Object(h.jsx)(m.a,{value:"hard",children:"Hard"},"Hard")]}),Object(h.jsx)(x.a,{variant:"contained",color:"primary",size:"large",onClick:function(){i&&d&&t?(N(!1),n(i,d),z.push("/quiz")):N(!0)},children:"Start Quiz"})]})]}),Object(h.jsx)("img",{src:"/quiz.svg",className:"banner",alt:"quiz app"})]})},S=c(19),N=c(139),z=(c(104),function(e){var t=e.currQues,c=e.setCurrQues,n=e.questions,s=e.options,r=e.correct,i=e.setScore,o=e.score,u=Object(a.useState)(),j=Object(l.a)(u,2),d=j[0],O=j[1],v=Object(a.useState)(!1),g=Object(l.a)(v,2),m=g[0],f=g[1],p=Object(b.f)(),S=function(e){return d===e&&d===r?"select":d===e&&d!==r?"wrong":e===r?"select":void 0};return Object(h.jsxs)("div",{className:"question",children:[Object(h.jsxs)("h1",{children:["Question ",t+1," :"]}),Object(h.jsxs)("div",{className:"singleQuestion",children:[Object(h.jsx)("h2",{children:n[t].question}),Object(h.jsxs)("div",{className:"options",children:[m&&Object(h.jsx)(y,{children:m}),s&&s.map((function(e){return Object(h.jsx)("button",{className:"singleOption  ".concat(d&&S(e)),onClick:function(){return function(e){O(e),e===r&&i(o+1),f(!1)}(e)},disabled:d,children:e},e)}))]}),Object(h.jsxs)("div",{className:"controls",children:[Object(h.jsx)(x.a,{variant:"contained",color:"secondary",size:"large",style:{width:185},href:"/",onClick:function(){c(0)},children:"Quit"}),Object(h.jsx)(x.a,{variant:"contained",color:"primary",size:"large",style:{width:185},onClick:function(){t>8?p.push("/result"):d?(c(t+1),O()):f("Please select an option first")},children:t>20?"Submit":"Next Question"})]})]})]})}),w=(c(105),function(e){var t,c=e.name,n=e.questions,s=e.score,r=e.setScore,i=(e.setQuestions,Object(a.useState)()),o=Object(l.a)(i,2),u=o[0],j=o[1],d=Object(a.useState)(0),b=Object(l.a)(d,2),O=b[0],v=b[1];Object(a.useEffect)((function(){var e,t;j(n&&g([null===(e=n[O])||void 0===e?void 0:e.correct_answer].concat(Object(S.a)(null===(t=n[O])||void 0===t?void 0:t.incorrect_answers))))}),[O,n]),console.log(n);var g=function(e){return e.sort((function(){return Math.random()-.5}))};return Object(h.jsxs)("div",{className:"quiz",children:[Object(h.jsxs)("span",{className:"subtitle",children:["Welcome, ",c]}),n?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"quizInfo",children:[Object(h.jsx)("span",{children:n[O].category}),Object(h.jsxs)("span",{children:["Score : ",s]})]}),Object(h.jsx)(z,{currQues:O,setCurrQues:v,questions:n,options:u,correct:null===(t=n[O])||void 0===t?void 0:t.correct_answer,score:s,setScore:r})]}):Object(h.jsx)(N.a,{style:{margin:100},color:"inherit",size:150,thickness:1})]})}),q=(c(106),function(e){var t=e.name,c=e.score,n=Object(b.f)();return Object(a.useEffect)((function(){t||n.push("/")}),[t,n]),Object(h.jsxs)("div",{className:"result",children:[Object(h.jsxs)("span",{className:"title",children:["Final Score : ",c]}),Object(h.jsx)(x.a,{variant:"contained",color:"secondary",size:"large",style:{alignSelf:"center",marginTop:20},href:"/",children:"Go to Homepage"})]})});var C=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(),r=Object(l.a)(s,2),u=r[0],g=r[1],m=Object(a.useState)(0),x=Object(l.a)(m,2),f=x[0],y=x[1],S=function(){var e=Object(o.a)(Object(i.a)().mark((function e(){var t,c,a,n,s=arguments;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:"",c=s.length>1&&void 0!==s[1]?s[1]:"",e.next=4,j.a.get("https://opentdb.com/api.php?amount=10".concat(t&&"&category=".concat(t)).concat(c&&"&difficulty=".concat(c),"&type=multiple"));case 4:a=e.sent,n=a.data,g(n.results);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)(d.a,{children:[Object(h.jsxs)("div",{className:"app",style:{backgroundImage:"url(./ques1.png)"},children:[Object(h.jsx)(v,{}),Object(h.jsxs)(b.c,{children:[Object(h.jsx)(b.a,{path:"/",exact:!0,children:Object(h.jsx)(p,{name:c,setName:n,fetchQuestions:S})}),Object(h.jsx)(b.a,{path:"/quiz",exact:!0,children:Object(h.jsx)(w,{name:c,questions:u,score:f,setScore:y,setQuestions:g})}),Object(h.jsx)(b.a,{path:"/result",exact:!0,children:Object(h.jsx)(q,{name:c,score:f})})]})]}),Object(h.jsx)(O,{})]})};r.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(C,{})}),document.getElementById("root"))},71:function(e,t,c){},91:function(e,t,c){},93:function(e,t,c){}},[[107,1,2]]]);
//# sourceMappingURL=main.9e975190.chunk.js.map