(this.webpackJsonpsdc=this.webpackJsonpsdc||[]).push([[0],{201:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(8),i=t.n(o),l=t(84),c=t(30),u=t(27),f=t(17),s=t(34),p=t(35),m=t(37),d=t(4),h=t(5),v=t(79),g=t.n(v),w=t(75),E=t.n(w);function y(){var e=Object(d.a)(["\n  width: 28px !important;\n  height: 28px !important;\n"]);return y=function(){return e},e}function b(){var e=Object(d.a)(["\n  align-self: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  float: 'right';\n"]);return b=function(){return e},e}function x(){var e=Object(d.a)(["\n  font-family: Arial;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  color: #000000;\n  margin-bottom: 13.4px;\n"]);return x=function(){return e},e}function k(){var e=Object(d.a)(["\n  font-family: Arial;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 27px;\n  display: flex;\n  align-items: flex-end;\n  letter-spacing: 0.01em;\n  color: #09433c;\n"]);return k=function(){return e},e}function j(){var e=Object(d.a)(["\n  display: flex;\n  min-height: 160px;\n  justify-content: space-between;\n  border-bottom: 1px solid rgba(196, 196, 196, 0.75);\n"]);return j=function(){return e},e}function O(){var e=Object(d.a)(["\n  display: grid;\n  grid-template-columns: 40px 40px 40px;\n  grid-column-gap: 30px;\n  margin-bottom: 13.4px;\n"]);return O=function(){return e},e}var C={width:48,height:48,paddingTop:16},T=h.a.div(O()),N=h.a.div(j()),_=h.a.h1(k()),I=h.a.div(x()),D=h.a.div(b()),P=Object(h.a)(g.a)(y()),S=function(e){function n(){return Object(u.a)(this,n),Object(s.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(f.a)(n,[{key:"render",value:function(){var e=this.props.onClick,n=e?"80%":"100%";return r.a.createElement(N,{onClick:e},r.a.createElement("div",{style:{width:n,whitespace:"nowrap",display:"inline-block"}},r.a.createElement(_,null,this.props.title),r.a.createElement(I,null,r.a.createElement(E.a,{source:this.props.description})),r.a.createElement("div",null,this.IconsExist(this.props.flowchart_icons))),e&&r.a.createElement(D,null,r.a.createElement(P,null)))}},{key:"IconsExist",value:function(e){if(e){var n=e.map((function(e){return r.a.createElement("img",{key:e.id,alt:e.id,src:e.url,style:C})}));return r.a.createElement(T,null,n)}return null}}]),n}(r.a.Component),M=t(46),A=t(224),H=t(225),z=t(226),G=t(227),B=t(235),F=t(236),W=t(228),L=t(234),R=t(229),U=t(53),q=t.n(U);function J(){var e=Object(d.a)(["\n  background-color: #2d2d2e;\n  color: #ffffff;\n  text-align: center;\n\n  &:hover {\n    color: #000000;\n  }\n"]);return J=function(){return e},e}function K(){var e=Object(d.a)(["\n  padding-top: 60px;\n  padding-bottom: 0px;\n  @media (max-width: 600px) {\n    margin-top: 0px;\n  }\n"]);return K=function(){return e},e}function Q(){var e=Object(d.a)(["\n  margin-left: auto;\n"]);return Q=function(){return e},e}function V(){var e=Object(d.a)([""]);return V=function(){return e},e}function X(){var e=Object(d.a)(["\n  background-color: #2d2d2e;\n  padding: 0px 16px;\n  @media (max-width: 601px) {\n    display: none;\n  }\n"]);return X=function(){return e},e}function Y(){var e=Object(d.a)(["\n  background-color: #2d2d2e;\n  @media (min-width: 601px) {\n    display: none;\n  }\n"]);return Y=function(){return e},e}var Z,$={marginTop:10,height:50,width:"auto"},ee={position:"relative",zIndex:1400,fontFamily:"Arial"},ne=Object(h.a)(A.a)(Y()),te=Object(h.a)(H.a)(X()),ae=Object(h.a)(H.a)(V()),re=Object(h.a)(z.a)(Q()),oe=Object(h.a)(G.a)(K()),ie=Object(h.a)(B.a)(J());function le(e){var n=r.a.useState({top:!1}),t=Object(M.a)(n,2),a=t[0],o=t[1],i=function(){return function(e){("keydown"!==e.type||"Tab"!==e.key&&"Shift"!==e.key)&&(!0===a.top?o({top:!1}):o({top:!0}))}};return r.a.createElement(r.a.Fragment,null,r.a.createElement(W.a,{position:"relative",style:ee},r.a.createElement(ne,null,r.a.createElement("img",{button:!0,src:q.a,onClick:function(){window.open("http://www.waterlooregion.org/","_blank")},style:$,alt:""}),r.a.createElement(re,{edge:"end",color:"inherit","aria-label":"menu"},r.a.createElement(R.a,{onClick:i()}))),r.a.createElement(te,{container:!0,direction:"row",alignItems:"center"},r.a.createElement(H.a,{item:!0,sm:2,md:2,justify:"center"},r.a.createElement("img",{src:q.a,onClick:function(){window.open("http://www.waterlooregion.org/","_blank")},style:$,alt:""})),[{title:"Homepage",link:"/",openMethod:"_self"},{title:"About Us",link:"http://www.waterlooregion.org/content/about-us",openMethod:"_blank"},{title:"Get Involved",link:"http://www.waterlooregion.org/community-development",openMethod:"_blank"},{title:"Get Informed",link:"http://www.waterlooregion.org/community-information",openMethod:"_blank"},{title:"Resource Directory",link:"https://www.wwhealthline.ca",openMethod:"_blank"}].map((function(e,n){return r.a.createElement(ae,{container:!0,item:!0,justify:"center",xs:2,onClick:function(){window.open(e.link,e.openMethod)}},e.title)})))),r.a.createElement(L.a,{anchor:"top",open:a.top,onClose:i()},r.a.createElement("div",{role:"presentation",onClick:i(),onKeyDown:i()},r.a.createElement(oe,null,[{title:"Homepage",link:"http://www.waterlooregion.org/",openMethod:"_blank"},{title:"About Us",link:"http://www.waterlooregion.org/content/about-us",openMethod:"_blank"},{title:"Get Involved",link:"http://www.waterlooregion.org/community-development",openMethod:"_blank"},{title:"Get Informed",link:"http://www.waterlooregion.org/community-information",openMethod:"_blank"},{title:"Resource Directory",link:"https://www.wwhealthline.ca",openMethod:"_blank"}].map((function(e,n){return r.a.createElement(ie,{button:!0,key:e.title,onClick:function(){window.open(e.link,e.openMethod)}},r.a.createElement(F.a,{primary:e.title}))}))))))}!function(e){e.PUT="PUT",e.POST="POST",e.GET="GET",e.DELETE="DELETE"}(Z||(Z={}));var ce=t(83),ue=t.n(ce),fe=function(e,n,t){var a={method:e,url:n,responseType:"json",data:t};return ue()(a).then((function(e){var n=e.data;return n||null}))},se="".concat("https://tranquil-cliffs-51227.herokuapp.com","/flowchart"),pe=t(233),me="".concat("https://tranquil-cliffs-51227.herokuapp.com","/flowchart_node"),de=t(231),he=t(230);function ve(){var e=Object(d.a)(["\n  flex: 1;\n  @media (min-width: 600px) {\n    &:first-child {\n      margin-right: 5%;\n    }\n  }\n"]);return ve=function(){return e},e}function ge(){var e=Object(d.a)(["\n  display: flex;\n  justify-content: space-between;\n  padding-bottom: 16px;\n"]);return ge=function(){return e},e}function we(){var e=Object(d.a)(["\n  text-decoration: underline;\n"]);return we=function(){return e},e}function Ee(){var e=Object(d.a)(["\n  display: inline-block;\n  font-family: PT Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 21px;\n"]);return Ee=function(){return e},e}function ye(){var e=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  @media (min-width: 600px) {\n    flex-direction: row;\n    max-width: 75%;\n  }\n"]);return ye=function(){return e},e}var be=h.a.div(ye()),xe=h.a.div(Ee()),ke=Object(h.a)(xe)(we()),je=h.a.div(ge()),Oe=h.a.div(ve()),Ce=function(){return r.a.createElement(be,null,r.a.createElement(Oe,null,r.a.createElement(je,null,r.a.createElement(xe,null,"Bylaw Kitchener"),r.a.createElement(ke,null,"519-741-2345")),r.a.createElement(je,null,r.a.createElement(xe,null,"Bylaw Waterloo"),r.a.createElement(ke,null,"519-889-1550")),r.a.createElement(je,null,r.a.createElement(xe,null,"Fire Prevention"),r.a.createElement(ke,null,"519-889-1550")),r.a.createElement(je,null,r.a.createElement(xe,null,"Police (Emergency)"),r.a.createElement(ke,null,"911"))),r.a.createElement(Oe,null,r.a.createElement(je,null,r.a.createElement(xe,null,"Police (Non-Emergency)"),r.a.createElement(ke,null,"519-653-7700")),r.a.createElement(je,null,r.a.createElement(xe,null,"Waterloo Crime Stoppers"),r.a.createElement(ke,null,"1-800-22-8477")),r.a.createElement(je,null,r.a.createElement(xe,null,"WR Community Legal Services"),r.a.createElement(ke,null,"519-743-0254")),r.a.createElement(je,null,r.a.createElement(xe,null,"R.E.N.T"),r.a.createElement(ke,null,"519-579-3800"))))};function Te(){var e=Object(d.a)(["\n  font-family: PT Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 21px;\n  text-decoration-line: underline;\n  &:hover {\n    cursor: pointer;\n  }\n"]);return Te=function(){return e},e}function Ne(){var e=Object(d.a)(["\n  padding-bottom: 40px;\n"]);return Ne=function(){return e},e}function _e(){var e=Object(d.a)(["\n  font-family: Arial;\n  padding-top: 40px;\n"]);return _e=function(){return e},e}function Ie(){var e=Object(d.a)(["\n  font-family: PT Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 19px;\n  line-height: 25px;\n  padding-bottom: 1%;\n"]);return Ie=function(){return e},e}function De(){var e=Object(d.a)(["\n  font-size: 16px;\n"]);return De=function(){return e},e}function Pe(){var e=Object(d.a)(["\n  padding: 30px 0px;\n  text-decoration: underline;\n"]);return Pe=function(){return e},e}function Se(){var e=Object(d.a)(["\n  text-align: center;\n  @media (min-width: 600px) {\n    display: none;\n  }\n"]);return Se=function(){return e},e}function Me(){var e=Object(d.a)(["\n  padding-top: 30px;\n  @media (max-width: 600px) {\n    display: none;\n  }\n"]);return Me=function(){return e},e}var Ae=Object(h.a)(H.a)(Me()),He=Object(h.a)(H.a)(Se()),ze=Object(h.a)(H.a)(Pe()),Ge=Object(h.a)(he.a)(De()),Be=h.a.div(Ie()),Fe=h.a.div(_e()),We=h.a.div(Ne()),Le=h.a.a(Te()),Re=function(e){function n(){var e,t;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(p.a)(n)).call.apply(e,[this].concat(r)))).state={flowchartNodes:[],parents:[],parentNode:{}},t}return Object(m.a)(n,e),Object(f.a)(n,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"componentDidUpdate",value:function(e){var n=this.props.match.params.nodeId;e.match.params.nodeId!==n&&this.fetchData()}},{key:"fetchParents",value:function(e){return(n=e,fe(Z.GET,"".concat(me,"/").concat(n,"/parents"),null)).then((function(e){return e})).catch((function(e){e.response||console.log("Error fetching flow charts")}));var n}},{key:"isLastNode",value:function(){return!this.state.flowchartNodes.some((function(e){return!e.is_leaf}))}},{key:"goBack",value:function(){var e=this.props.match.params.flowchartId;null!==this.state.parentNode?this.props.history.push("/flowchart/".concat(e,"/node/").concat(this.state.parentNode.id)):this.props.history.push("/")}},{key:"fetchParentNode",value:function(e){return(n=e,fe(Z.GET,"".concat(me,"/").concat(n,"/parent"),null)).then((function(e){return e})).catch((function(e){e&&console.log(e)}));var n}},{key:"fetchChildNodes",value:function(e){var n,t=this;return(n=e,fe(Z.GET,"".concat(me,"/").concat(n,"/children"),null)).then((function(e){if(e.length>0)return e;console.log("This node should be marked as a leaf"),t.props.history.goBack()})).catch((function(e){e.response||console.log("Error fetching flowchart nodes")}))}},{key:"fetchNextNode",value:function(){var e=this.props.match.params.flowchartId,n=this.props.match.params.nodeId;return null!=e&&null==n?function(e){return fe(Z.GET,"".concat(se,"/").concat(e),null)}(e).then((function(e){return e.flowchart.root_id})):null!=e&&null!=n?Promise.resolve(n):void 0}},{key:"fetchData",value:function(){var e=this;this.fetchNextNode().then((function(n){return Promise.all([e.fetchChildNodes(n),e.fetchParentNode(n),e.fetchParents(n)])})).then((function(n){e.setState({flowchartNodes:n[0]||[],parentNode:n[1],parents:n[2]||[]})})).catch((function(e){e.response||console.log("Error fetching flow charts")}))}},{key:"routeToHome",value:function(){this.props.history.push("/")}},{key:"routeToNextNode",value:function(e){var n=this.props.match.params.flowchartId;this.props.history.push("/flowchart/".concat(n,"/node/").concat(e))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(le,null),r.a.createElement(an,null,r.a.createElement("div",{style:{fontFamily:"Arial"}},r.a.createElement(He,{container:!0,justify:"space-evenly"},r.a.createElement(ze,{item:!0,xs:5},r.a.createElement("div",{onClick:function(){return e.goBack()}},r.a.createElement(Ge,null),"Previous Step")),r.a.createElement(de.a,{orientation:"vertical",flexItem:!0}),r.a.createElement(ze,{item:!0,xs:5},r.a.createElement("div",{onClick:function(){return e.routeToHome()}},"Homepage"))),r.a.createElement(de.a,null),r.a.createElement(Ae,null,this.renderBreadcrumbs()),r.a.createElement("div",null,this.renderHeader()),r.a.createElement("div",null,this.renderCards())),this.renderFooter()))}},{key:"renderBreadcrumbs",value:function(){var e=this,n=this.state.parents,t=this.props.match.params.flowchartId;return r.a.createElement("span",null,r.a.createElement("span",{onClick:function(){return e.props.history.push("/")}},r.a.createElement("span",{style:{textDecoration:"underline"}},"Home")),n.map((function(a,o,i){var l="";return 0!==o&&(l="/node/".concat(n[o-1].id)),r.a.createElement("span",{key:o,onClick:function(){return e.props.history.push("/flowchart/".concat(t).concat(l))}},"  >  ",r.a.createElement("span",{style:{textDecoration:"underline"}},a.breadcrumb_title))})))}},{key:"renderHeader",value:function(){var e=this.state.flowchartNodes;return r.a.createElement(en,null,r.a.createElement(nn,null,0!==e.length?e[0].next_question:null))}},{key:"renderCards",value:function(){var e=this;return this.state.flowchartNodes.map((function(n){var t=n.id,a=n.header,o=n.text,i=n.flowchart_icons,l=n.is_leaf?null:function(){return e.routeToNextNode(t)};return r.a.createElement(pe.a,{key:t},r.a.createElement(S,{id:t,title:a,description:o,flowchart_icons:i,onClick:l}))}))}},{key:"renderFooter",value:function(){var e=this;return r.a.createElement(Fe,null,this.isLastNode()&&r.a.createElement(We,null,r.a.createElement(Be,null,"Didn't find what you were looking for?"),r.a.createElement(Le,{onClick:function(){return e.routeToHome()}},"Back To Homepage")),r.a.createElement(Be,null,"Contact Information"),r.a.createElement(Ce,null))}}]),n}(r.a.Component);function Ue(){var e=Object(d.a)(["\n  padding: 0 16px 0 16px;\n  @media (min-width: 600px) {\n    margin-left: 10%;\n    margin-right: 10%;\n  }\n"]);return Ue=function(){return e},e}function qe(){var e=Object(d.a)(["\n  left: 0px;\n  font-family: Arial;\n  font-weight: 100;\n  font-size: 20px;\n  line-height: 23px;\n  color: #ffffff;\n  letter-spacing: 1px;\n  @media (min-width: 600px) {\n    margin-left: 10%;\n    margin-right: 10%;\n  }\n"]);return qe=function(){return e},e}function Je(){var e=Object(d.a)(["\n  font-family: Arial;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 25px;\n  line-height: 29px;\n  margin: 0;\n"]);return Je=function(){return e},e}function Ke(){var e=Object(d.a)(["\n  display: flex;\n  align-items: center;\n  min-height: 142px;\n  border-bottom: 1px solid rgba(196, 196, 196, 0.75);\n"]);return Ke=function(){return e},e}function Qe(){var e=Object(d.a)(["\n  left: 0px;\n  color: #ffffff;\n  font-family: Arial;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 24px;\n  line-height: 29px;\n  letter-spacing: 1px;\n  padding-bottom: 18px;\n  @media (min-width: 600px) {\n    margin-left: 10%;\n    margin-right: 10%;\n  }\n"]);return Qe=function(){return e},e}function Ve(){var e=Object(d.a)(["\n  font-weight: bold;\n"]);return Ve=function(){return e},e}function Xe(){var e=Object(d.a)(["\n  background: #09433c;\n  padding: 36px 20px;\n  display: flex;\n  position: relative;\n  flex-direction: column;\n"]);return Xe=function(){return e},e}var Ye=h.a.div(Xe()),Ze=h.a.span(Ve()),$e=h.a.div(Qe()),en=h.a.div(Ke()),nn=h.a.h1(Je()),tn=h.a.div(qe()),an=h.a.div(Ue()),rn=function(e){function n(){var e,t;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(p.a)(n)).call.apply(e,[this].concat(r)))).state={flowcharts:[]},t}return Object(m.a)(n,e),Object(f.a)(n,[{key:"componentDidMount",value:function(){var e=this;fe(Z.GET,"".concat(se,"s"),null).then((function(n){return e.setState({flowcharts:n})})).catch((function(e){e.response||console.log("Error fetching flow charts")}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(le,null),r.a.createElement("div",null,this.renderHeader(),r.a.createElement(an,null,this.renderQuestion(),this.renderCards(),this.renderFooter())))}},{key:"renderHeader",value:function(){return r.a.createElement(Ye,null,r.a.createElement($e,null,"Welcome to the"," ",r.a.createElement(Ze,null,"Social Development Centre Waterloo Region.")),r.a.createElement(tn,null,"The Social Development Centre is a learning organization whose vision is to ensure fair and equal access to social, economic and political life for everyone in the Waterloo Region."))}},{key:"renderQuestion",value:function(){return r.a.createElement(en,null,r.a.createElement(nn,null,"What type of information are you looking for?"))}},{key:"renderCards",value:function(){var e=this.state.flowcharts,n=this.props.history;return e.map((function(e){return r.a.createElement(pe.a,{key:e.id},r.a.createElement(S,{id:e.id,title:e.title,description:e.description,onClick:function(){return n.push("/flowchart/".concat(e.id))}}))}))}},{key:"renderFooter",value:function(){return r.a.createElement(Fe,null,r.a.createElement(Ce,null))}}]),n}(r.a.Component),on=function(){return r.a.createElement(l.a,null,r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/",component:rn}),r.a.createElement(c.a,{exact:!0,path:"/flowchart/:flowchartId",component:Re}),r.a.createElement(c.a,{exact:!0,path:"/flowchart/:flowchartId/node/:nodeId",component:Re})))};i.a.render(r.a.createElement(on,null),document.getElementById("root"))},53:function(e,n,t){e.exports=t.p+"static/media/SocialDevelopmentCentre_Logo_WhiteOnBlack_1.59c4667d.png"},94:function(e,n,t){e.exports=t(201)}},[[94,1,2]]]);
//# sourceMappingURL=main.167a3547.chunk.js.map