"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[691],{308:function(t,e,n){n.r(e);var r=n(721),a=n(294),s=function(t){function e(e){var n;return(n=t.call(this,e)||this).start=function(){n.setState((function(){return{running:!0}})),n.interval=setInterval((function(){return n.tick()}),10)},n.stop=function(){n.setState((function(){return{running:!1}})),clearInterval(n.interval)},n.startStop=function(){n.state.running?n.stop():n.start()},n.reset=function(){n.stop(),n.setState((function(){return{cs:0}}))},n.state={running:!0,cs:0},n}(0,r.Z)(e,t);var n=e.prototype;return n.tick=function(){this.setState((function(t){return{cs:t.cs+1}}))},n.componentDidMount=function(){this.start()},n.componentWillUnmount=function(){clearInterval(this.interval)},n.formatTime=function(t){var e=t%100,n=Math.floor(t/100),r=n%60;return(Math.floor(n/60)%60).toString().padStart(2,"0")+":"+r.toString().padStart(2,"0")+"."+e.toString().padStart(2,"0")},n.render=function(){return a.createElement("div",{className:"row u-text-center"},a.createElement("div",{className:"col-12"},a.createElement("h1",{className:"mt-1"},this.formatTime(this.state.cs))),a.createElement("div",{className:"col-12"},a.createElement("button",{onClick:this.startStop,className:"btn-small btn-dark outline mx-1 mb-1 b-0"},"Start/Stop"),a.createElement("button",{onClick:this.reset,className:"btn-small btn-dark outline mx-1 mb-1 b-0"},"Reset")))},e}(a.Component);e.default=function(){return a.createElement("main",null,a.createElement("section",null,a.createElement("div",{className:"hero level fullscreen"},a.createElement("div",{className:"level-item w-100"},a.createElement(s,null)))))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-26021db35d5592464e1a.js.map