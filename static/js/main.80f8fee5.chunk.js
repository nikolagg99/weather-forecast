(this.webpackJsonpweatherforecast=this.webpackJsonpweatherforecast||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){},20:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a(1),r=a(8),n=a.n(r),i=(a(15),a(2)),o=a(3),l=a(5),h=a(4),d=a(7),j=a.n(d),b=a(9),u=(a(17),a(18)),f=function(e){var t=e.reading,a=new Date,s=1e3*t.dt;a.setTime(s);var r="owf owf-".concat(t.weather[0].id," owf-5x");return Object(c.jsx)("div",{className:"tc dib br3 pa3 ma2 grow bw2",children:Object(c.jsxs)("div",{className:"card ba tc dib br3 pa3 ma2 grow bw1 shadow-5 dayCard",children:[Object(c.jsx)("h3",{className:"cardTitle",children:u(a).format("dddd")}),Object(c.jsx)("p",{children:u(a).format("MMMM Do, h:mm a")}),Object(c.jsx)("i",{className:r}),Object(c.jsxs)("h2",{children:[Math.round(t.main.temp)," \xb0C"]}),Object(c.jsx)("div",{className:"card-body",children:Object(c.jsx)("p",{className:"card-text",children:t.weather[0].description})})]})})},m=(a(20),function(e){var t=e.searchChange;return Object(c.jsxs)("html",{children:[Object(c.jsx)("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"}),Object(c.jsxs)("form",{className:"tc",onSubmit:t,children:[Object(c.jsx)("input",{className:"ba3 pa2 b--white",name:"city",type:"search",placeholder:"Search city..."}),Object(c.jsx)("button",{className:"ba3 pa2 ma2 b--white",children:Object(c.jsx)("i",{class:"fa fa-search"})})]})]})}),O=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("h1",{className:"tc",children:"Enter a city to check the weather forecast"})})},p=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).getWeatherAPI=function(){var t=Object(b.a)(j.a.mark((function t(a){var c,s;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.preventDefault(),(c=a.target.elements.city.value)?(s="http://api.openweathermap.org/data/2.5/forecast?q=".concat(c,"&units=metric&appid=").concat("48f03e9a552bc9d2ac15755691345280"),fetch(s).then((function(e){return e.json()})).then((function(t){var a=t.list.filter((function(e){return e.dt_txt.includes("18:00:00")}));e.setState({fullData:t.list,dailyData:a,searchfield:c},(function(){return console.log(e.state)}))}))):console.log("no city");case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.formatDayCards=function(){return e.state.dailyData.map((function(e,t){return Object(c.jsx)(f,{reading:e},t)}))},e.state={fullData:[],dailyData:[],searchfield:""},e}return Object(o.a)(a,[{key:"render",value:function(){return this.state.searchfield?Object(c.jsxs)("div",{className:"example",children:[Object(c.jsx)("h1",{className:"tc title",children:"Weather Forecast"}),Object(c.jsx)(m,{searchChange:this.getWeatherAPI}),Object(c.jsx)("h3",{className:"tc cityname",children:this.state.searchfield}),this.formatDayCards(),Object(c.jsx)("footer",{className:"tc",children:"Weather forecast created by Nikola Georgiev"})]}):Object(c.jsxs)("div",{className:"example",children:[Object(c.jsx)("h1",{className:"tc title",children:"Weather Forecast"}),Object(c.jsx)(m,{searchChange:this.getWeatherAPI}),Object(c.jsx)("h3",{className:"tc cityname",children:this.state.searchfield}),Object(c.jsx)(O,{}),Object(c.jsx)("footer",{className:"tc",children:"Weather forecast created by Nikola Georgiev"})]})}}]),a}(s.Component),x=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(c.jsx)("div",{className:"AppDiv",children:Object(c.jsx)(p,{})})}}]),a}(s.Component),v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,23)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,n=t.getTTFB;a(e),c(e),s(e),r(e),n(e)}))};a(21);n.a.render(Object(c.jsx)(x,{}),document.getElementById("root")),v()}},[[22,1,2]]]);
//# sourceMappingURL=main.80f8fee5.chunk.js.map