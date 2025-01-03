"use strict";(self.webpackChunktandem=self.webpackChunktandem||[]).push([[2949],{1752:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"know-your-nonstop/platform/subsystems","title":"NonStop Subsystems: A Technical Overview","description":"NonStop systems are renowned for their fault-tolerant architecture and high availability. At the core of this reliability are the various subsystems that work together to ensure continuous operation. This article explores the key aspects of NonStop subsystems and their role in maintaining system integrity.","source":"@site/docs/1-know-your-nonstop/1-platform/1-subsystems.md","sourceDirName":"1-know-your-nonstop/1-platform","slug":"/know-your-nonstop/platform/subsystems","permalink":"/nonstop101/docs/know-your-nonstop/platform/subsystems","draft":false,"unlisted":false,"editUrl":"https://github.com/shaniceabigail/nonstop101/blob/main/docs/1-know-your-nonstop/1-platform/1-subsystems.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_label":"Subsystems Overview","sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Guardian Commands Cheat Sheet","permalink":"/nonstop101/docs/know-your-nonstop/platform/guardian-cheat-sheet"},"next":{"title":"OSS Commands Cheat Sheet","permalink":"/nonstop101/docs/know-your-nonstop/platform/oss-cheat-sheet"}}');var a=t(4848),o=t(8453);const i={sidebar_label:"Subsystems Overview",sidebar_position:2},r="NonStop Subsystems: A Technical Overview",c={},l=[{value:"Kernel Subsystem",id:"kernel-subsystem",level:2},{value:"Time Synchronization",id:"time-synchronization",level:2},{value:"Process Pair Management",id:"process-pair-management",level:2},{value:"I/O Subsystem",id:"io-subsystem",level:2},{value:"NonStop SQL",id:"nonstop-sql",level:2},{value:"Manageability Subsystems",id:"manageability-subsystems",level:2},{value:"Advanced Architecture Considerations",id:"advanced-architecture-considerations",level:2}];function u(e){const s={h1:"h1",h2:"h2",header:"header",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.header,{children:(0,a.jsx)(s.h1,{id:"nonstop-subsystems-a-technical-overview",children:"NonStop Subsystems: A Technical Overview"})}),"\n",(0,a.jsx)(s.p,{children:"NonStop systems are renowned for their fault-tolerant architecture and high availability. At the core of this reliability are the various subsystems that work together to ensure continuous operation. This article explores the key aspects of NonStop subsystems and their role in maintaining system integrity."}),"\n",(0,a.jsx)(s.h2,{id:"kernel-subsystem",children:"Kernel Subsystem"}),"\n",(0,a.jsxs)(s.p,{children:["The Kernel subsystem is the foundation of NonStop server management. It configures and maintains subsystem managers, providing essential services for system operation.Key Features:\n\u2022\tConfiguration Management: The Kernel subsystem allows administrators to configure various system parameters using the ",(0,a.jsx)(s.strong,{children:"Subsystem Control Facility (SCF)"}),".\n\u2022\tAttribute Control: Administrators can modify system attributes such as TNSMISALIGN, which controls how data misalignment is handled."]}),"\n",(0,a.jsx)(s.h2,{id:"time-synchronization",children:"Time Synchronization"}),"\n",(0,a.jsx)(s.p,{children:"NonStop systems rely on accurate time synchronization for various operations:\n\u2022\tTime Zone Management: The Kernel subsystem manages time zone offsets and daylight saving time settings.\n\u2022\tSystem Clock: Precise timekeeping is crucial for transaction processing and log management."}),"\n",(0,a.jsx)(s.h2,{id:"process-pair-management",children:"Process Pair Management"}),"\n",(0,a.jsx)(s.p,{children:"One of the hallmarks of NonStop architecture is the use of process pairs for fault tolerance:\n\u2022\tPrimary and Backup Processes: Critical processes run as pairs, with a primary and backup on different processors.\n\u2022\tAutomatic Failover: In case of a primary process failure, the backup seamlessly takes over, ensuring continuous operation."}),"\n",(0,a.jsx)(s.h2,{id:"io-subsystem",children:"I/O Subsystem"}),"\n",(0,a.jsx)(s.p,{children:"The I/O subsystem in NonStop servers is designed for high performance and reliability:\n\u2022\tRedundant Paths: Multiple I/O adapters and storage devices are interconnected to prevent single points of failure.\n\u2022\tDynamic Load Balancing: The system automatically distributes I/O operations across available resources for optimal performance."}),"\n",(0,a.jsx)(s.h2,{id:"nonstop-sql",children:"NonStop SQL"}),"\n",(0,a.jsx)(s.p,{children:"NonStop SQL is a critical subsystem for database management:\n\u2022\tDistributed Processing: It leverages the parallel processing capabilities of NonStop servers for high-performance transaction processing.\n\u2022\tData Integrity: NonStop SQL ensures data consistency across distributed nodes, even in the event of hardware failures."}),"\n",(0,a.jsx)(s.h2,{id:"manageability-subsystems",children:"Manageability Subsystems"}),"\n",(0,a.jsx)(s.p,{children:"NonStop systems include various manageability subsystems to simplify administration:\n\u2022\tSCF (Subsystem Control Facility): A command-line interface for configuring and managing NonStop subsystems.\n\u2022\tMeasure: A subsystem for performance measurement and analysis.\n\u2022\tSafeguard: Provides security management and access control features."}),"\n",(0,a.jsx)(s.h2,{id:"advanced-architecture-considerations",children:"Advanced Architecture Considerations"}),"\n",(0,a.jsx)(s.p,{children:"The NonStop Advanced Architecture (NSAA) builds upon these subsystems:\n\u2022\tModular Redundancy: NSAA systems can be configured with dual or triple modular redundancy for enhanced fault tolerance.\n\u2022\tStandard Hardware Integration: NSAA leverages standard HP 4-way SMP Itanium\xae2 server modules, combining off-the-shelf hardware with NonStop's robust software architecture."}),"\n",(0,a.jsx)(s.p,{children:"NonStop subsystems work in concert to provide a highly available, fault-tolerant environment. By understanding these subsystems, developers and administrators can better leverage the full capabilities of NonStop servers, ensuring mission-critical applications remain operational under diverse conditions."})]})}function d(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>r});var n=t(6540);const a={},o=n.createContext(a);function i(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);