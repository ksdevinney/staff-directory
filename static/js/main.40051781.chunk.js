(this["webpackJsonpstaff-directory"]=this["webpackJsonpstaff-directory"]||[]).push([[0],{42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),c=a(12),o=a.n(c),s=a(0);var l=function(){return Object(s.jsx)("header",{children:Object(s.jsx)("h1",{children:"Employee Directory"})})},i=a(13),h=a(14),d=a(17),j=a(16);var u=function(e){var t=e.name,a=e.location,n=e.email,r=e.phone;return Object(s.jsxs)("tr",{children:[Object(s.jsxs)("td",{children:[t," "]}),Object(s.jsxs)("td",{children:[a," "]}),Object(s.jsx)("td",{children:n}),Object(s.jsx)("td",{children:r})]})};var m=function(e){return Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("table",{className:"table table-hover table-bordered border-info table-striped",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{className:"info",children:[Object(s.jsx)("th",{"data-column":"name",onClick:function(e){console.log(e.target)},children:"Name"}),Object(s.jsx)("th",{"data-column":"location",children:"Location"}),Object(s.jsx)("th",{"data-column":"email",children:"Email"}),Object(s.jsx)("th",{"data-column":"phone",children:"Phone"})]})}),Object(s.jsx)("tbody",{id:"myTable",children:e.employeeData.map((function(e,t){return Object(s.jsx)(u,{name:e.name,location:e.city,email:e.email,phone:e.phone},t)}))})]})})},b=a(15),p=a.n(b);var f=function(e){return Object(s.jsx)("span",{className:"form-floating input-group-lg mb-3 search-bar",children:Object(s.jsx)("input",{onChange:function(t){return e.handleSearch(t)},placeholder:"Search",value:e.searchString})})};var O=function(e){return Object(s.jsx)("button",{type:"button",className:"sort-button btn btn-info btn-outline-dark",onClick:function(t){return e.handleSort(t)},value:e.sorted,children:"Sort"})},x=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={employeeData:[],employeeSearch:"",employeeDatabase:[],sorted:!1},e.componentDidMount=function(){p.a.get("https://randomuser.me/api/?results=50&nat=us").then((function(t){for(var a=t.data.results,n=[],r=0;r<a.length;r++)n.push({name:a[r].name.first+" "+a[r].name.last,city:a[r].location.city+", "+a[r].location.state,email:a[r].email,phone:a[r].phone});e.setState({employeeData:n,employeeDatabase:n})}))},e.handleSearch=function(t){t.preventDefault();var a=t.target.value;if(""===a)e.setState({employeeData:e.state.employeeDatabase});else{for(var n=e.state.employeeData,r=[],c=0;c<n.length;c++)n[c].name.toLocaleLowerCase().indexOf(a.toLocaleLowerCase())>-1&&r.push(n[c]);console.log(r),e.setState({employeeSearch:a,employeeData:r})}},e.handleSort=function(){var t=e.state.employeeData,a=!1,n=t.sort((function(e,t){return e.name<t.name&&a?-1:e.name>t.name&&!a?(a=!0,1):0}));e.setState({employeeData:n})},e}return Object(h.a)(a,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"StaffList",children:[Object(s.jsx)(O,{onClick:this.handleSort,handleSort:this.handleSort,employeesToSort:this.handleSort}),Object(s.jsx)(f,{searchString:this.state.userSearch,handleSearch:this.handleSearch}),Object(s.jsx)(m,{employeeData:this.state.employeeData,employeesToSort:this.handleSort})]})}}]),a}(r.a.Component);var y=function(){return Object(s.jsx)("div",{children:Object(s.jsx)("h6",{className:"footer",children:"\xa92021 Katie Devinney"})})};var v=function(){return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)(l,{}),Object(s.jsx)(x,{}),Object(s.jsx)(y,{})]})};a(41),a(42);o.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(v,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.40051781.chunk.js.map