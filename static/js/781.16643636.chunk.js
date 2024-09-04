"use strict";(self.webpackChunkuser_management_table=self.webpackChunkuser_management_table||[]).push([[781],{781:(e,r,n)=>{n.r(r),n.d(r,{default:()=>u});var o=n(43),t=n(3),a=n(355);const s=e=>e.users.items,d=e=>e.users.filters;var l=n(102),h=n(579);const c=e=>{let{value:r,onChange:n}=e;return(0,h.jsx)("input",{type:"text",placeholder:"Search...",name:"filter",value:r,onChange:n})};const i=n(464).Ay.table`
  border-collapse: collapse;
  color: #333;
  background-color: #f9f9f9;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;

  td,
  th {
    padding: 12px 15px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  thead {
    background-color: #f1f1f1;
  }

  th {
    font-weight: 600;
    background-color: #a39e90;
    color: #fff;
  }

  tbody tr {
    transition: background-color 200ms ease;
  }

  tbody tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  tbody tr:hover {
    background-color: #e9ecef;
  }

  tbody td {
    border-bottom: 1px solid #e9ecef;
  }

  input[type="text"] {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`,u=()=>{const e=(0,t.wA)(),r=(0,t.d4)(s),n=(0,t.d4)(d);(0,o.useEffect)((()=>{e((0,a.h)())}),[e]);const u=r.filter((e=>e.name.toLowerCase().includes(n.name.toLowerCase())&&e.username.toLowerCase().includes(n.username.toLowerCase())&&e.email.toLowerCase().includes(n.email.toLowerCase())&&e.phone.toLowerCase().includes(n.phone.toLowerCase()))),x=r=>n=>{e((0,l.R)({field:r,value:n.target.value}))};return(0,h.jsx)("div",{children:(0,h.jsxs)(i,{children:[(0,h.jsxs)("thead",{children:[(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{children:"Name"}),(0,h.jsx)("th",{children:"Username"}),(0,h.jsx)("th",{children:"Email"}),(0,h.jsx)("th",{children:"Phone"})]}),(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{children:(0,h.jsx)(c,{value:n.name,onChange:x("name")})}),(0,h.jsx)("th",{children:(0,h.jsx)(c,{value:n.username,onChange:x("username")})}),(0,h.jsx)("th",{children:(0,h.jsx)(c,{value:n.email,onChange:x("email")})}),(0,h.jsx)("th",{children:(0,h.jsx)(c,{value:n.phone,onChange:x("phone")})})]})]}),(0,h.jsx)("tbody",{children:u.map((e=>(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{children:e.name}),(0,h.jsx)("td",{children:e.username}),(0,h.jsx)("td",{children:e.email}),(0,h.jsx)("td",{children:e.phone})]},e.id)))})]})})}}}]);
//# sourceMappingURL=781.16643636.chunk.js.map