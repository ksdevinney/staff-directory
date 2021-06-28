(this["webpackJsonpstaff-directory"]=this["webpackJsonpstaff-directory"]||[]).push([[0],{42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),r=a(12),o=a.n(r),s=a(0);var l=function(){return Object(s.jsxs)("header",{children:[Object(s.jsx)("h1",{children:"Employee Directory"}),Object(s.jsx)("h5",{children:"Search for employees by name or click a column to sort alphabetically."})]})},i=a(13),h=a(14),d=a(17),j=a(16);var m=function(e){var t=e.name,a=e.city,n=e.email,c=e.phone;return Object(s.jsxs)("tr",{children:[Object(s.jsxs)("td",{children:[t," "]}),Object(s.jsxs)("td",{children:[a," "]}),Object(s.jsx)("td",{children:n}),Object(s.jsx)("td",{children:c})]})};var u=function(e){return Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("table",{className:"table table-hover table-striped table-bordered border-danger",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{className:"info",children:[Object(s.jsx)("th",{"data-column":"name","data-order":"asc",onClick:function(e){console.log(e.target)},children:"Name \ud83d\udd3b"}),Object(s.jsx)("th",{"data-column":"city",children:"City"}),Object(s.jsx)("th",{"data-column":"email",children:"Email"}),Object(s.jsx)("th",{"data-column":"phone",children:"Phone"})]})}),Object(s.jsx)("tbody",{id:"myTable",children:e.employeeData.map((function(e,t){return Object(s.jsx)(m,{name:e.name,city:e.city,email:e.email,phone:e.phone},t)}))})]})})},b=a(15),p=a.n(b);var f=function(e){return Object(s.jsx)("div",{children:Object(s.jsx)("input",{onChange:function(t){return e.handleSearch(t)},placeholder:"Search",value:e.searchString})})},y=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={employeeData:[],employeeSearch:"",employeeDatabase:[],order:"asc",orderName:"ascending"},e.componentDidMount=function(){p.a.get("https://randomuser.me/api/?results=20").then((function(t){console.log(t);for(var a=t.data.results,n=[],c=0;c<a.length;c++)n.push({name:a[c].name.first+" "+a[c].name.last,city:a[c].location.city,email:a[c].email,phone:a[c].phone});e.setState({employeeData:n,employeeDatabase:n})}))},e.handleSearch=function(t){t.preventDefault();var a=t.target.value;if(""===a)e.setState({employeeData:e.state.employeeDatabase});else{for(var n=e.state.employeeData,c=[],r=0;r<n.length;r++)n[r].name.toLocaleLowerCase().indexOf(a.toLocaleLowerCase())>-1&&c.push(n[r]);console.log(c),e.setState({employeeSearch:a,employeeData:c})}},e.handleSort=function(t){t.onClick();e.state.employeeData.sort((function(e,t){var a=e.name.toLowerCase(),n=t.name.toLowerCase();return a<n?-1:a<n?1:0}));e.setState({employeeData:e.asc})},e}return Object(h.a)(a,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"StaffList",children:[Object(s.jsx)(f,{searchString:this.state.userSearch,handleSearch:this.handleSearch}),Object(s.jsx)(u,{employeeData:this.state.employeeData,employeesToSort:this.handleSort})]})}}]),a}(c.a.Component);var O=function(){return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)(l,{}),Object(s.jsx)(y,{})]})},x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,44)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),c(e),r(e),o(e)}))};a(41),a(42);o.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(O,{})}),document.getElementById("root")),x()}},[[43,1,2]]]);
//# sourceMappingURL=main.e1bc799d.chunk.js.map