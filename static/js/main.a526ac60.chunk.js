(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,n){e.exports=n(15)},15:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(4),l=n.n(i),c=(n(3),n(5)),r=n(6),o=n(8),u=n(7),h=n(1),d=n(9),v=[4,9,16,25],m=0,f=[],k=0;function p(){var e=500/Math.sqrt(m)-2;return{width:e+"px",height:e+"px",fontSize:1e3/m+"px"}}var S=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={seconds:0,count:1,level:0,isStart:!1},n.handleClickSquere=n.handleClickSquere.bind(Object(h.a)(n)),n.handleClick=n.handleClick.bind(Object(h.a)(n)),n.handleReset=n.handleReset.bind(Object(h.a)(n)),n}return Object(d.a)(t,e),Object(r.a)(t,[{key:"tick",value:function(){this.setState((function(e){return{seconds:e.seconds-1}}))}},{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){e.state.isStart&&(e.tick(),0===e.state.seconds&&(f=[],k=0,e.setState((function(e){return{count:e.count=1,seconds:0,isStart:!1,level:e.level=0}}))))}),750)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"handleClick",value:function(){this.setState((function(e){return{count:e.count=1,isStart:!e.isStart,seconds:m+k}})),m=v[this.state.level],f=function(){var e=[],t=0;do{(t=Math.floor(Math.random()*(m+1)))&&!e.includes(t)&&e.push(t)}while(e.length!==m);return e}()}},{key:"handleReset",value:function(){this.setState((function(e){return{count:e.count=1,seconds:0,isStart:!1,level:e.level=0}})),m=v[this.state.level],f=[],k=0}},{key:"handleClickSquere",value:function(e){var t=this;e.preventDefault();var n=this.state.count;Number(e.target.id)===n&&(this.setState((function(){return{count:t.state.count+1}})),this.state.count===m&&(this.state.level===v.length-1?(this.setState((function(e){return{isStart:!e.isStart,level:e.level=0}})),k=0):(this.setState((function(e){return{isStart:!e.isStart,level:e.level+1}})),k=this.state.seconds)))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"timer"},s.a.createElement("h1",null,this.state.seconds)),s.a.createElement("div",{className:"game"},s.a.createElement("div",{className:"gameBtn",onClick:this.handleClick,style:this.state.isStart?{visibility:"hidden"}:{visibility:"visible"}},0===this.state.level?"Start":"Next",s.a.createElement("div",{className:"extraTime",style:this.state.level<1?{display:"none"}:{display:"inline"}},"+",k," extra time")),f.map((function(t){return s.a.createElement("div",{className:t<e.state.count?"square green":"square",key:t,id:t,onClick:e.handleClickSquere,style:p(e.props.size)},t)}))),s.a.createElement("button",{className:"reset",onClick:this.handleReset},"Restart"))}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},3:function(e,t,n){}},[[10,1,2]]]);
//# sourceMappingURL=main.a526ac60.chunk.js.map