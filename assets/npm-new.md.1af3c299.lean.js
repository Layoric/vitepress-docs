import{_ as n,c as o,o as l,b as e,e as t}from"./app.14440598.js";var a="/assets/dotnet-new-list.73b553c9.png",s="/assets/dotnet-new-spa-files.b2ba0f63.png",r="/assets/disable-av.55516720.png";const z='{"title":".NET 5.0 and ASP.NET Project Templates","description":"","frontmatter":{"slug":"npm-new","title":".NET 5.0 and ASP.NET Project Templates"},"headers":[{"level":3,"title":"Installing @servicestack/cli","slug":"installing-servicestack-cli"},{"level":3,"title":"Create projects with dotnet-new","slug":"create-projects-with-dotnet-new"},{"level":3,"title":"Visual Studio","slug":"visual-studio"},{"level":3,"title":"VS Code and Project Rider","slug":"vs-code-and-project-rider"},{"level":2,"title":"Troubleshooting","slug":"troubleshooting"}],"relativePath":"npm-new.md","lastUpdated":1634794934048}',i={},c=e("p",null,"There are a number of the most popular starting ServiceStack v5 Project Templates available in the GitHub organizations:",-1),d=e("ul",null,[e("li",null,[e("strong",null,".NET 5.0 C# Templates"),t(" - "),e("a",{href:"https://github.com/NetCoreTemplates",target:"_blank",rel:"noopener noreferrer"},"github.com/NetCoreTemplates")]),e("li",null,[e("strong",null,".NET Framework C# Templates"),t(" - "),e("a",{href:"https://github.com/NetFrameworkTemplates",target:"_blank",rel:"noopener noreferrer"},"github.com/NetFrameworkTemplates")]),e("li",null,[e("strong",null,[e("a",{href:"http://ASP.NET",target:"_blank",rel:"noopener noreferrer"},"ASP.NET"),t(" Core .NET Framework C# Templates")]),t(" - "),e("a",{href:"https://github.com/NetFrameworkCoreTemplates",target:"_blank",rel:"noopener noreferrer"},"github.com/NetFrameworkCoreTemplates")])],-1),h=e("p",null,[t("The "),e("strong",null,"dotnet-new"),t(" script included in "),e("a",{href:"https://github.com/ServiceStack/servicestack-cli",target:"_blank",rel:"noopener noreferrer"},"@servicestack/cli"),t(" can be used to create projects from the available templates:")],-1),p=e("h3",{id:"installing-servicestack-cli",tabindex:"-1"},[t("Installing @servicestack/cli "),e("a",{class:"header-anchor",href:"#installing-servicestack-cli","aria-hidden":"true"},"#")],-1),u=e("pre",null,[e("code",null,`$ npm install -g @servicestack/cli
`)],-1),m=e("p",null,"If you have an old version installed, you can upgrade to the latest version with:",-1),_=e("pre",null,[e("code",null,`$ npm install -g @servicestack/cli@latest
`)],-1),g=e("h3",{id:"create-projects-with-dotnet-new",tabindex:"-1"},[t("Create projects with dotnet-new "),e("a",{class:"header-anchor",href:"#create-projects-with-dotnet-new","aria-hidden":"true"},"#")],-1),w=e("p",null,[t("This will make the "),e("code",null,"dotnet-new"),t(" script available which you can use to view all the available templates by running it without any arguments:")],-1),b=e("pre",null,[e("code",null,`$ dotnet-new
`)],-1),f=e("p",null,"Which displays a list of available templates:",-1),v=e("p",null,[e("img",{src:a,alt:""})],-1),k=e("p",null,"You can then create a project from one of the templates, e.g:",-1),T=e("pre",null,[e("code",null,`$ dotnet-new vue-spa Acme
`)],-1),j=e("p",null,"Which will generate a new project with the folder names and source files replaced with your project name, e.g:",-1),N=e("p",null,[e("img",{src:s,alt:""})],-1),y=e("h3",{id:"visual-studio",tabindex:"-1"},[t("Visual Studio "),e("a",{class:"header-anchor",href:"#visual-studio","aria-hidden":"true"},"#")],-1),E=e("p",null,[t("You can open then run the "),e("code",null,"Acme.sln"),t(" in VS .NET 2017+ which will automatically restore and install both the .NET and npm packages when first loaded. This can take a bit of time to install everything, once it's finished you'll see the "),e("code",null,"wwwroot"),t(" folder populated with your generated Webpack app which includes a "),e("code",null,"dist"),t(" folder and "),e("code",null,"index.html"),t(" page. After these are generated you can run your App with "),e("strong",null,"F5"),t(" as normal.")],-1),S=e("h3",{id:"vs-code-and-project-rider",tabindex:"-1"},[t("VS Code and Project Rider "),e("a",{class:"header-anchor",href:"#vs-code-and-project-rider","aria-hidden":"true"},"#")],-1),C=e("p",null,[t("If you're using JetBrains Rider you can install npm packages by opening "),e("code",null,"package.json"),t(` and run the "npm install" tooltip on the bottom right. In VS Code you'll need to run `),e("code",null,"npm install"),t(" from the command-line.")],-1),P=e("h2",{id:"troubleshooting",tabindex:"-1"},[t("Troubleshooting "),e("a",{class:"header-anchor",href:"#troubleshooting","aria-hidden":"true"},"#")],-1),x=e("p",null,[t("If installing templates "),e("a",{href:"https://github.com/Medium/phantomjs/issues/19",target:"_blank",rel:"noopener noreferrer"},'fails on Windows with "EPERM, operation not permitted"'),t(", you'll need to temporarily disable Windows Anti Virus real-time protection:")],-1),A=e("p",null,[e("img",{src:r,alt:""})],-1),V=[c,d,h,p,u,m,_,g,w,b,f,v,k,T,j,N,y,E,S,C,P,x,A];function $(F,I,W,B,R,M){return l(),o("div",null,V)}var D=n(i,[["render",$]]);export{z as __pageData,D as default};