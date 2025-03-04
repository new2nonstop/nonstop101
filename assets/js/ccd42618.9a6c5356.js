"use strict";(self.webpackChunktandem=self.webpackChunktandem||[]).push([[6418],{1304:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>a,frontMatter:()=>t,metadata:()=>r,toc:()=>c});var i=s(4848),o=s(8453);const t={sidebar_label:"Cheat Sheet - Guardian",sidebar_position:3,tags:["guardian"]},l="Guardian Commands Cheat Sheet",r={id:"know-your-nonstop/guardian-cheat-sheet",title:"Guardian Commands Cheat Sheet",description:"Edit",source:"@site/docs/1-know-your-nonstop/3-guardian-cheat-sheet.md",sourceDirName:"1-know-your-nonstop",slug:"/know-your-nonstop/guardian-cheat-sheet",permalink:"/nonstop101/docs/know-your-nonstop/guardian-cheat-sheet",draft:!1,unlisted:!1,editUrl:"https://github.com/new2nonstop/nonstop101/blob/main/docs/1-know-your-nonstop/3-guardian-cheat-sheet.md",tags:[{inline:!0,label:"guardian",permalink:"/nonstop101/docs/tags/guardian"}],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Cheat Sheet - Guardian",sidebar_position:3,tags:["guardian"]},sidebar:"tutorialSidebar",previous:{title:"Crash Course - Guardian",permalink:"/nonstop101/docs/know-your-nonstop/getting-started"},next:{title:"Cheat Sheet - OSS",permalink:"/nonstop101/docs/know-your-nonstop/oss-cheat-sheet"}},d={},c=[{value:"Edit",id:"edit",level:2},{value:"Exit - &quot;press F16&quot;",id:"exit---press-f16",level:2},{value:"Finding Help",id:"finding-help",level:2},{value:"Search For Files",id:"search-for-files",level:2},{value:"Check if memory pressure at a snapshot",id:"check-if-memory-pressure-at-a-snapshot",level:3},{value:"View All:",id:"view-all",level:3},{value:"Disks",id:"disks",level:4},{value:"Processes in CPU 0",id:"processes-in-cpu-0",level:4},{value:"to get into oss",id:"to-get-into-oss",level:2},{value:"Pathcom",id:"pathcom",level:2},{value:"Tmfcom",id:"tmfcom",level:2},{value:"SCF",id:"scf",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"guardian-commands-cheat-sheet",children:"Guardian Commands Cheat Sheet"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"status"})," - checks on the process"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"status *"})," - lists all processess"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"fileinfo "})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"tedit [filename], r"})," - open file, read-only"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"fc"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"purge [FILENAME]"})}),"\n",(0,i.jsx)(n.h2,{id:"edit",children:"Edit"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"l"})," - list"]}),"\n",(0,i.jsx)(n.h2,{id:"exit---press-f16",children:'Exit - "press F16"'}),"\n",(0,i.jsx)(n.h2,{id:"finding-help",children:"Finding Help"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Safecom","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Log into safecom"}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"=help"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"search-for-files",children:"Search For Files"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"fileinfo"})," - see all files in the subvolume"]}),"\n",(0,i.jsx)(n.h3,{id:"check-if-memory-pressure-at-a-snapshot",children:"Check if memory pressure at a snapshot"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"peek /cpu [number]/"}),"  - i.e peek /cpu 2/"]}),"\n",(0,i.jsx)(n.h3,{id:"view-all",children:"View All:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.h4,{id:"disks",children:"Disks"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"status *, prog [$DISK.SUBVOL.OBJECTNAME]"})," - status, including system disks"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"dsap *, short"})," - ",(0,i.jsx)(n.strong,{children:"short"})," list of all disks (*) using the disk space analysis program (dsap)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.h4,{id:"processes-in-cpu-0",children:"Processes in CPU 0"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"status 0"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Fileinfo $ * .*.pathmon"}),"\n",(0,i.jsx)(n.p,{children:"status *, prog $system.system.pathmon"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"fup"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"fup dup"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"whoami"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"set prompt both"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:" volume $disk.subvolume"})}),"\n",(0,i.jsx)(n.h2,{id:"to-get-into-oss",children:"to get into oss"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"osh "})}),"\n",(0,i.jsx)(n.h2,{id:"pathcom",children:"Pathcom"}),"\n",(0,i.jsx)(n.h2,{id:"tmfcom",children:"Tmfcom"}),"\n",(0,i.jsx)(n.h2,{id:"scf",children:"SCF"})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>r});var i=s(6540);const o={},t=i.createContext(o);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);