(this["webpackJsonpmy-learning-app"]=this["webpackJsonpmy-learning-app"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),i=n(3),r=n.n(i),s=n(4),l=n(5),o=n(7),u=n(6),d=(n(12),n(0)),j=function(t){Object(o.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={count:0},t.incrementCount=function(){t.setState({count:t.state.count+1})},t.decrementCount=function(){t.state.count>0&&t.setState({count:t.state.count-1})},t.startTimer=function(){t.state.count>0&&!t.intervalId&&(t.intervalId=setInterval((function(){t.setState({count:t.state.count-1},(function(){0===t.state.count&&(alert("Timer Finished"),clearInterval(t.intervalId),t.intervalId=null)}))}),1e3))},t.stopTimer=function(){t.intervalid&&(clearInterval(t.intervalId),t.intervalId=null)},t.resetTimer=function(){t.setState({count:0}),clearInterval(t.intervalid),t.intervalid=null},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"home",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h1",{children:"Timer Project with react"}),Object(d.jsxs)("div",{className:"btn",children:[Object(d.jsx)("p",{className:"Text",onClick:this.decrementCount,children:"-"}),Object(d.jsx)("input",{type:"submit",value:this.state.count}),Object(d.jsx)("p",{className:"Text",onClick:this.incrementCount,children:"+"})]}),Object(d.jsxs)("div",{className:"hero-ctn",children:[Object(d.jsx)("button",{className:"ctn",onClick:this.startTimer,children:"Start"}),Object(d.jsx)("button",{className:"ctn",onClick:this.resetTimer,children:"Restart"}),Object(d.jsx)("button",{className:"ctn",onClick:this.stopTimer,children:"Stop"})]})]})})}}]),n}(c.Component);r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(j,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.ce682483.chunk.js.map