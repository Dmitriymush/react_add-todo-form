(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,a){e.exports=a(215)},109:function(e,t,a){},215:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(77),s=a.n(i),o=a(27),c=a(78),l=a(10),u=a(11),m=a(13),d=a(12),p=a(14),h=(a(109),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}]),b=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}],y=a(217),g=a(218),f=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.todo,a=e.users;return r.a.createElement(y.a.Row,null,r.a.createElement(y.a.Cell,null,t.title),r.a.createElement(y.a.Cell,null,a.find(function(e){return e.id===t.userId}).name),r.a.createElement(y.a.Cell,{positive:t.completed,negative:!t.completed},r.a.createElement(g.a,{name:"".concat(t.completed?"checkmark":"close")}),t.completed?"Completed":"Not completed"))}}]),t}(n.Component),v=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.users,a=e.todos;return r.a.createElement(y.a,{celled:!0,selectable:!0},r.a.createElement(y.a.Header,null,r.a.createElement(y.a.Row,null,r.a.createElement(y.a.HeaderCell,null,"ToDoItem"),r.a.createElement(y.a.HeaderCell,null,"User"),r.a.createElement(y.a.HeaderCell,null,"Status"))),r.a.createElement(y.a.Body,null,a.map(function(e){return r.a.createElement(f,{users:t,todo:e,key:e.id})})))}}]),t}(n.Component),O=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.users,a=e.selectUser,n=e.changeInput,i=e.value,s=e.valid,o=e.addItem;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:o},r.a.createElement("input",{type:"text",onChange:n,value:i,disabled:!s}),r.a.createElement("button",{type:"submit"},"ADD"),r.a.createElement("select",{className:"form-control mb-3",onChange:a},r.a.createElement("option",{value:"0"},"Choose a user"),t.map(function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.name)}))),r.a.createElement("h1",null))}}]),t}(n.Component);function w(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function j(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?w(a,!0).forEach(function(t){Object(c.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):w(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var C=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).selectUser=function(e){var t=e.target.value;a.setState(function(e){return j({},e,0===+t?{currentUser:+t,isCurrentUserValid:!1}:{currentUser:t,isCurrentUserValid:!0})})},a.changeInput=function(e){var t=e.target.value;a.setState(function(e){return j({},e,{currentValue:t,isValidToDo:null})})},a.addItem=function(e){if(e.preventDefault(),a.state.isCurrentUserValid)if(a.state.currentValue.match(/\w/g)){var t={userId:+a.state.currentUser,title:a.state.currentValue,completed:"todo nothing"===a.state.currentValue||"nothing todo"===a.state.currentValue||"nothing"===a.state.currentValue,id:Math.max.apply(Math,Object(o.a)(a.state.todolist.map(function(e){return e.id})))+1};a.setState(function(e){return j({},e,{todolist:[].concat(Object(o.a)(e.todolist),[t]),currentValue:""})})}else a.setState(function(e){return j({},e,{isValidToDo:!1,currentValue:""})})},a.state={todolist:Object(o.a)(b),users:Object(o.a)(h),currentUser:0,currentValue:"",isCurrentUserValid:null,isValidToDo:null},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(O,{users:this.state.users,selectUser:this.selectUser,changeInput:this.changeInput,value:this.state.currentValue,valid:this.state.isCurrentUserValid,addItem:this.addItem}),r.a.createElement(v,{users:this.state.users,todos:this.state.todolist}))}}]),t}(r.a.Component);s.a.render(r.a.createElement(C,null),document.getElementById("root"))}},[[104,1,2]]]);
//# sourceMappingURL=main.e163873f.chunk.js.map