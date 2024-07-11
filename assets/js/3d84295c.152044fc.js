"use strict";(self.webpackChunktandem=self.webpackChunktandem||[]).push([[2189],{85:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>a,frontMatter:()=>r,metadata:()=>d,toc:()=>h});var o=t(4848),i=t(8453);const r={sidebar_label:"Git",sidebar_position:1},s="Git",d={id:"open-source-integration/git",title:"Git",description:"Git is the industry standard for version control in the DevOps (Developer x Operations) space. So much that it has become a household name for every developer in the world.",source:"@site/docs/open-source-integration/1-git.md",sourceDirName:"open-source-integration",slug:"/open-source-integration/git",permalink:"/nonstop101/docs/open-source-integration/git",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/open-source-integration/1-git.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Git",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Open Source Tutorials",permalink:"/nonstop101/docs/category/open-source-tutorials"}},c={},h=[{value:"1. Generating the Public Key on NonStop",id:"1-generating-the-public-key-on-nonstop",level:2},{value:"2. Retrieving the Key from Guardian",id:"2-retrieving-the-key-from-guardian",level:2},{value:"3. Dropping the key onto the cloud repository",id:"3-dropping-the-key-onto-the-cloud-repository",level:2},{value:"4. Adding the Host onto the NonStop",id:"4-adding-the-host-onto-the-nonstop",level:2},{value:"Bitbucket",id:"bitbucket",level:3},{value:"GitHub",id:"github",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"git",children:"Git"}),"\n",(0,o.jsx)(n.h1,{id:"what-is-git",children:"What is git?"}),"\n",(0,o.jsx)(n.p,{children:"Git is the industry standard for version control in the DevOps (Developer x Operations) space. So much that it has become a household name for every developer in the world."}),"\n",(0,o.jsx)(n.p,{children:"Git and its workflow management maintains good coding practices, and regulates the development of applications."}),"\n",(0,o.jsx)(n.p,{children:"Here's how to get started on getting git onto your NonStop."}),"\n",(0,o.jsx)(n.h1,{id:"connecting-your-repos-on-the-public-cloud-to-your-nonstop",children:"Connecting your repos on the public cloud to your NonStop"}),"\n",(0,o.jsx)(n.p,{children:"Now that you have git set up on your NonStop, our next steps would be to figure out how to connect the repositories on the cloud and other systems to our NonStop."}),"\n",(0,o.jsx)(n.p,{children:"We will need to do 4 things:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Generate the public key on the NonStop to establish a SSH Connection"}),"\n",(0,o.jsx)(n.li,{children:"Retrieve the Key generated on the NonStop"}),"\n",(0,o.jsx)(n.li,{children:"Drop the Public Key onto the cloud repository"}),"\n",(0,o.jsx)(n.li,{children:"Add the Host into the NonStop"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Let's get started!"}),"\n",(0,o.jsx)(n.h2,{id:"1-generating-the-public-key-on-nonstop",children:"1. Generating the Public Key on NonStop"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Log onto your NonStop system and type this command in Guardian."}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"     $VOLUME USER 1> sshcom $ZSTCF\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsx)(n.li,{children:"Switch to client mode."}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"     % mode client\r\n     mode client\r\n     OK, switched to client mode\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsx)(n.li,{children:"Generate key with a key name i.e mykey, and add a comment for the key generated with your email id."}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'     % GENERATE KEY mykey,TYPE RSE, BITS 2048, COMMENT "myemail@email.com"\n'})}),"\n",(0,o.jsxs)(n.ol,{start:"4",children:["\n",(0,o.jsx)(n.li,{children:"Export mykey into the OpenSSH format, store into a volume and exit."}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"     % EXPORT KEY mykey, FORMAT OPENSSH, FILE $volume.USER.pubkey\r\n     OK, key user:mykey exported\r\n     % exit\n"})}),"\n",(0,o.jsx)(n.h2,{id:"2-retrieving-the-key-from-guardian",children:"2. Retrieving the Key from Guardian"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Using Guardian, go to the volume where the key is stored in and copy the key into the command line."}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"     $VOLUME USER 2> volume $volume.USER\r\n     $VOLUME USER 3> fup copy pubkey,,recin 4096, recout 4096, fold\n"})}),"\n",(0,o.jsx)(n.h2,{id:"3-dropping-the-key-onto-the-cloud-repository",children:"3. Dropping the key onto the cloud repository"}),"\n",(0,o.jsxs)(n.p,{children:["Here are the tutorial links for ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.a,{href:"https://support.atlassian.com/bitbucket-cloud/docs/set-up-an-ssh-key/",children:"Bitbucket"})})," and for ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.a,{href:"https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account",children:"GitHub"})}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"4-adding-the-host-onto-the-nonstop",children:"4. Adding the Host onto the NonStop"}),"\n",(0,o.jsxs)(n.p,{children:["Log into OSS and add the repository url into volume, ",(0,o.jsx)(n.strong,{children:"$ZSTCF"}),", and add host onto store (yes/no)."]}),"\n",(0,o.jsx)(n.h3,{id:"bitbucket",children:"Bitbucket"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"    /home/usr: /G/system/zssh/sshoss -T -S \\$ZSTCF git@bitbucket.org\n"})}),"\n",(0,o.jsx)(n.h3,{id:"github",children:"GitHub"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"    /home/usr: /G/system/zssh/sshoss -T -S \\$ZSTCF git@github.com\n"})}),"\n",(0,o.jsx)(n.p,{children:"Congratulations! You now have a git repository on your NonStop, ready for development and your git workflows!"}),"\n",(0,o.jsx)(n.p,{children:"Happy development!"})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>d});var o=t(6540);const i={},r=o.createContext(i);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);