(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{247:function(e,t,n){},248:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(14),s=n.n(r),c=(n(93),n(15)),i=n(16),u=n(18),l=n(17),m=n(19),d=n(26),h=n.n(d),g=n(25),p=n.n(g),f=n(42),b=n.n(f),v=n(43),w=n.n(v),E=n(27),y=n.n(E),j=n(41),k=n.n(j),O={button:{margin:"20px auto"}},R=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).onUsernameChangeHandler=function(t){e.setState({UsernameInput:t.target.value})},e.onPasswordChangeHandler=function(t){e.setState({PasswordInput:t.target.value})},e.onLoginPressButton=function(){fetch("https://chatback123.herokuapp.com/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userid:e.state.UsernameInput,pass:e.state.PasswordInput})}).then(function(e){return e.json()}).then(function(t){t.id&&e.props.userHandler(t)}).catch(function(e){return console.log("User not found")})},e.state={UsernameInput:"",PasswordInput:""},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(p.a,{container:!0,justify:"center",alignItems:"center",style:{height:"100vh",backgroundImage:"url(".concat(k.a,")"),backgroundSize:"cover"}},o.a.createElement(b.a,{style:{width:"300px"}},o.a.createElement(p.a,{container:!0,direction:"column",alignItems:"center",justify:"space-around"},o.a.createElement(w.a,{title:"Login"}),o.a.createElement(h.a,{label:"Username",style:{width:"200px"},type:"text",margin:"normal",onChange:this.onUsernameChangeHandler}),o.a.createElement(h.a,{label:"Password",style:{width:"200px"},type:"password",margin:"normal",onChange:this.onPasswordChangeHandler}),o.a.createElement(y.a,{onClick:this.onLoginPressButton,style:O.button,variant:"contained"},"Login"),o.a.createElement(y.a,{style:{marginBottom:"20px"},size:"small",color:"primary",onClick:function(){return e.props.changeRoute("register")}},"Click here to register"))))}}]),t}(a.Component),C={button:{margin:"20px auto"}},I=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).onUsernameChangeHandler=function(t){e.setState({UsernameInput:t.target.value})},e.onPasswordChangeHandler=function(t){e.setState({PasswordInput:t.target.value})},e.onRegisterPressed=function(){fetch("https://chatback123.herokuapp.com/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userid:e.state.UsernameInput,pass:e.state.PasswordInput})}).then(function(e){return e.json()}).then(function(t){t.id&&e.props.userHandler(t)}).catch(function(e){return console.log("Register failed")})},e.state={UsernameInput:"",PasswordInput:""},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(p.a,{container:!0,justify:"center",alignItems:"center",style:{height:"100vh",backgroundImage:"url(".concat(k.a,")"),backgroundSize:"cover"}},o.a.createElement(b.a,{style:{width:"300px"}},o.a.createElement(p.a,{container:!0,direction:"column",alignItems:"center",justify:"space-around"},o.a.createElement(w.a,{title:"Register"}),o.a.createElement(h.a,{label:"Username",style:{width:"200px"},type:"text",margin:"normal",onChange:this.onUsernameChangeHandler}),o.a.createElement(h.a,{label:"Password",style:{width:"200px"},type:"password",margin:"normal",onChange:this.onPasswordChangeHandler}),o.a.createElement(y.a,{onClick:this.onRegisterPressed,style:C.button,variant:"contained"},"Register"),o.a.createElement(y.a,{style:{marginBottom:"20px"},size:"small",color:"primary",onClick:function(){return e.props.changeRoute("login")}},"Click here to login"))))}}]),t}(a.Component),S=n(28),N=n(55),P=function(e){return o.a.createElement("div",{className:"add-room"},o.a.createElement("form",{onSubmit:e.createRoom},o.a.createElement("input",{placeholder:"Enter a room name",className:"input",type:"text",onChange:e.inputRoom,value:e.value})))},U=function(e){return console.log(e),o.a.createElement("div",{className:"message-list"},e.messages.map(function(e,t){return console.log(e),o.a.createElement("div",{className:"message",key:t},o.a.createElement("div",{className:"message-username"},e.senderId),o.a.createElement("div",{className:"message-text"},e.parts[0].payload.content))}))},x=function(e){return o.a.createElement("form",{className:"input",onSubmit:e.sendMessage},o.a.createElement("input",{placeholder:"Enter a message",className:"input",type:"text",onChange:e.inputMessage,value:e.value,disabled:e.disabled}))},M=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=Object(S.a)(this.props.rooms).sort(function(e,t){return e.id-t.id});return o.a.createElement("div",{className:"rooms-list"},o.a.createElement("ul",null,t.map(function(t,n){return o.a.createElement("li",{className:"room",key:n},o.a.createElement("a",{onClick:function(){return e.props.subscribeToRoom(t.id)},href:"# "},t.name))})))}}]),t}(o.a.Component),H=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).subscribeToRoom=function(e){n.setState({messages:[],roomid:e}),n.currentUser.subscribeToRoomMultipart({roomId:e,hooks:{onMessage:function(e){n.setState({messages:[].concat(Object(S.a)(n.state.messages),[e])})}},messageLimit:10}).catch(function(e){return console.log("something went wrong")})},n.getAllRooms=function(){n.currentUser.getJoinableRooms().then(function(e){n.setState({rooms:[].concat(Object(S.a)(e),Object(S.a)(n.currentUser.rooms))})}).catch(function(e){console.log("Error getting joinable rooms: ".concat(e))})},n.inputMessage=function(e){n.setState({inputMessage:e.target.value})},n.inputRoom=function(e){n.setState({roomName:e.target.value})},n.createRoom=function(e){e.preventDefault(),n.currentUser.createRoom({name:n.state.roomName}).then(function(e){e&&(n.setState({roomName:""}),n.getAllRooms(),n.subscribeToRoom(e.id))}).catch(function(e){console.log("Error creating room ".concat(e))})},n.sendMessage=function(e){e.preventDefault(),n.currentUser.sendSimpleMessage({text:n.state.inputMessage,roomId:n.state.roomid}).then(function(e){e&&n.setState({inputMessage:""})}).catch(function(e){console.log("Error adding message to my room: ".concat(e))})},n.state={messages:[],rooms:[],inputMessage:"",roomName:"",roomid:null},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;new N.ChatManager({instanceLocator:"v1:us1:70765878-2ac8-4e66-938d-b18c7503aded",userId:this.props.user.id,tokenProvider:new N.TokenProvider({url:"https://chatback123.herokuapp.com/auth"})}).connect().then(function(t){e.currentUser=t,e.getAllRooms()}).catch(function(e){console.log("Error on connection",e)})}},{key:"render",value:function(){return o.a.createElement("div",{className:"app"},o.a.createElement("div",{className:"top-row"},o.a.createElement(M,{subscribeToRoom:this.subscribeToRoom,rooms:this.state.rooms}),o.a.createElement(U,{messages:this.state.messages})),o.a.createElement("div",{className:"bottom-row"},o.a.createElement(P,{createRoom:this.createRoom,inputRoom:this.inputRoom,value:this.state.roomName}),o.a.createElement(x,{disabled:!this.state.roomid,sendMessage:this.sendMessage,inputMessage:this.inputMessage,value:this.state.inputMessage})))}}]),t}(a.Component),T=(n(247),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).changeRouteHandler=function(t){e.setState({route:t})},e.userHandler=function(t){e.setState({user:t,route:"app"})},e.state={route:"login",user:""},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){fetch("https://chatback123.herokuapp.com/")}},{key:"render",value:function(){var e;return"register"===this.state.route?e=o.a.createElement(I,{changeRoute:this.changeRouteHandler,userHandler:this.userHandler}):"login"===this.state.route?e=o.a.createElement(R,{userHandler:this.userHandler,changeRoute:this.changeRouteHandler}):"app"===this.state.route&&(e=o.a.createElement(H,{user:this.state.user})),o.a.createElement("div",null,e)}}]),t}(a.Component)),L=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function B(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}s.a.render(o.a.createElement(T,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/chat",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/chat","/service-worker.js");L?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):B(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):B(e)})}}()},41:function(e,t,n){e.exports=n.p+"static/media/photo1.aa57deaa.jpg"},88:function(e,t,n){e.exports=n(248)},93:function(e,t,n){}},[[88,1,2]]]);
//# sourceMappingURL=main.351e1160.chunk.js.map