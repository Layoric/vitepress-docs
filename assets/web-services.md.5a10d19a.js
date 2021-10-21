import{_ as e,c as t,o as a,a as o}from"./app.14440598.js";const f='{"title":"Web Services","description":"","frontmatter":{"title":"Web Services","slug":"web-services"},"headers":[{"level":2,"title":"Available web service endpoints","slug":"available-web-service-endpoints"},{"level":2,"title":"History of Web Services","slug":"history-of-web-services"},{"level":3,"title":"HTTP the defacto web services transport protocol","slug":"http-the-defacto-web-services-transport-protocol"},{"level":3,"title":"XML the winning serialization format?","slug":"xml-the-winning-serialization-format"},{"level":3,"title":"REST vs SOAP","slug":"rest-vs-soap"},{"level":3,"title":"Enter SOAP","slug":"enter-soap"},{"level":3,"title":"POX to the rescue?","slug":"pox-to-the-rescue"},{"level":3,"title":"And then there was JSON","slug":"and-then-there-was-json"},{"level":3,"title":"ServiceStack\u2019s new JSV Format","slug":"servicestack\u2019s-new-jsv-format"}],"relativePath":"web-services.md","lastUpdated":1634794934072}',i={},r=o('<p>A summary of ServiceStack&#39;s available and recommended Web Service end points.</p><h2 id="available-web-service-endpoints" tabindex="-1">Available web service endpoints <a class="header-anchor" href="#available-web-service-endpoints" aria-hidden="true">#</a></h2><p>As different endpoints have advantages in different scenarios, ServiceStack supports the following endpoints out of the box:</p><ul><li>JSON - More compact but slower than XML (Recommended)</li><li>XML - Faster than JSON. Most standards compliant and interoperable format</li><li>CSV - Fast, compact, highly interoperable dataset interchange with external systems and applications</li><li>JSV - Fast, compact, resilient serialization format (Recommended for .NET to .NET web services)</li><li>SOAP 1.1/1.2 - Utilizes WCF SOAP web services under the covers. (Recommended for corporate Intranet environments where maximum performance is not a priority or if you have a preference WSDL tooling support e.g. IDE integration and auto-generated client proxies, etc).</li></ul><p>If you&#39;re interested for a more background information on the history of the different formats and the advantages and disadvantages of each read on below...</p><h2 id="history-of-web-services" tabindex="-1">History of Web Services <a class="header-anchor" href="#history-of-web-services" aria-hidden="true">#</a></h2><p>The W3C defines a &quot;web service&quot; as &quot;a software system designed to support interoperable machine-to-machine interaction over a network.</p><p>The key parts of this definition are that it should be interoperable and that it facilitates communication over a network. Unfortunately over the years different companies have had different ideas on what the most ideal interoperable protocol should be, leaving a debt-load of legacy binary and proprietary protocols in its wake.</p><h3 id="http-the-defacto-web-services-transport-protocol" tabindex="-1">HTTP the defacto web services transport protocol <a class="header-anchor" href="#http-the-defacto-web-services-transport-protocol" aria-hidden="true">#</a></h3><p>HTTP the Internet&#39;s protocol is the undisputed champ and will be for the foreseeable future. It&#39;s universally accepted, can be proxied and is pretty much the only protocol allowed through most firewalls which is the reason why ServiceStack (and most other Web Service frameworks) support it. Note: the future roadmap will also support the more optimized HTML5 &#39;Web Sockets&#39; standard.</p><h3 id="xml-the-winning-serialization-format" tabindex="-1">XML the winning serialization format? <a class="header-anchor" href="#xml-the-winning-serialization-format" aria-hidden="true">#</a></h3><p>Out of the ashes another winning format looking to follow in HTTP\u2019s success, is the XML text serialization format. Some of the many reasons why it has reigned supreme include:</p><ul><li>Simple, Open, self-describing text-based format</li><li>Human and Computer readable and writeable</li><li>Verifiable</li><li>Provides a rich set of common data types</li><li>Can define higher-level custom types XML doesn&#39;t come without its disadvantages which currently are centred around it being verbose and being slow to parse resulting wasted CPU cycles.</li></ul><h3 id="rest-vs-soap" tabindex="-1">REST vs SOAP <a class="header-anchor" href="#rest-vs-soap" aria-hidden="true">#</a></h3><p>Despite the win, all is not well in XML camp. It seems that two teams are at odds looking to branch the way XML is used in web services. On one side, I&#39;ll label the REST camp (despite REST being more than just XML) approach to developing web services is centred around resources and prefers to err on simplicity and convention choosing to re-use the other existing HTTP metaphors where they\u2019re semantically correct. E.g. calling GET on the URL <code>http://host/customers</code> will most likely return a list of customers, whilst PUT&#39;ing a &#39;Customer&#39; against the same url will, if supported append the &#39;Customer&#39; to the existing list of customers.</p><p>The URL\u2019s used in REST-ful web services also form a core part of the API, it is normally logically formed and clearly describes the type of data that is expected, e.g. viewing a particular customers order would look something like:</p><ul><li>GET <code>http://location/customers/mythz/orders/1001</code> - would return details about order &#39;1001&#39; which was placed by the customer &#39;mythz&#39;. The benefit of using a logical URL scheme is that other parts of your web services API can be inferred, e.g.</li><li>GET <code>http://location/customers/mythz/orders</code> - would return all of &#39;mythz&#39; orders</li><li>GET <code>http://location/customers/mythz</code> - would return details about the customer &#39;mythz&#39;</li><li>GET <code>http://location/customers</code> - would return a list of all customers If supported, you may have access to different operations on the same resources via the other HTTP methods: POST, PUT and DELETE. One of the limitations of having a REST-ful web services API is that although the API may be conventional and inferable by humans, it isn&#39;t friendly to computers and likely requires another unstructured document accompanying the web services API identifying the list, schema and capabilities of each service. This makes it a hard API to provide rich tooling support for or to be able to generate a programmatic API against.</li></ul><p>NOTE: If you\u2019re interested in learning more about REST one of the articles I highly recommend is <a href="http://tomayko.com/writings/rest-to-my-wife" target="_blank" rel="noopener noreferrer">http://tomayko.com/writings/rest-to-my-wife</a></p><h3 id="enter-soap" tabindex="-1">Enter SOAP <a class="header-anchor" href="#enter-soap" aria-hidden="true">#</a></h3><p>SOAP school discards this HTTP/URL nonsense and teaches that there is only one true METHOD - the HTTP &#39;POST&#39; and there is only one url / end point you need to worry about - which depending on the technology chosen would look something like <code>http://location/CustomerService.svc</code>. Importantly nothing is left to the human imagination, everything is structured and explicitly defined by the web services WSDL which could be also obtained via a url e.g. <code>http://location/CustomerService.svc?wsdl</code>. Now the WSDL is an intimately detailed beast listing everything you would ever want to know about the definition of your web services. Unfortunately it&#39;s detailed to the point of being unnecessarily complex where you have layers of artificial constructs named messages, bindings, ports, parts, input and output operations, etc. most of which remains un-utilized which a lot of REST folk would say is too much info that can be achieved with a simple GET request \u{1F603}</p><p>What it does give you however, is a structured list of all the operations available, including the schema of all the custom types each operation accepts. From this document tools can generate a client proxy into your preferred programming language providing a nice strongly-typed API to code against. SOAP is generally favoured by a lot of enterprises for internal web services as in a lot of cases if the code compiles then there&#39;s a good chance it will just work.</p><p>Ultimately on the wire, SOAP services are simply HTTP POSTs to the same endpoint where each payload (usually of the same as the SOAP-Action) is wrapped inside the body of a &#39;SOAP&#39; envelope. This layer stops a lot of people from accessing the XML payload directly and have to resort to using a SOAP client library just to access the core data.</p><p>This complexity is not stopping the Microsoft&#39;s and IBM&#39;s behind the SOAP specification any-time soon. Nope they&#39;re hard at work finishing their latest creations that are adding additional layers on top of SOAP (i.e. WS-Security, WS-Reliability, WS-Transaction, WS-Addressing) which is commonly referred to as the <code>WS-*</code> standards. Interestingly the <code>WS-*</code> stack happens to be complex enough that they happen to be the only companies able to supply the complying software and tooling to support it, which funnily enough works seamlessly with their expensive servers.</p><p>It does seem that Microsoft, being the fashionable technology company they are don&#39;t have all their eggs in the <code>WS-*</code> bucket. Realizing the current criticisms on their current technology stack, they have explored a range of other web service technologies namely WCF Data Services, WCF RIA Services and now their current favourite OData. The last of which I expect to see all their previous resource efforts in <code>WS-*</code> to be transferred into promoting this new Moniker. On the surface OData seems to be a very good \u2018enabling technology\u2019 that is doing a good job incorporating every good technology BUZZ-word it can (i.e. REST, ATOM, JSON). It is also being promoted as &#39;clickbox driven development&#39; technology (which I&#39;ll be eagerly awaiting to see the sticker for \u{1F603}.</p><p>Catering for drag n\u2019 drop developers and being able to create web services with a checkbox is a double-edged sword which I believe encourages web service development anti-patterns that run contra to SOA-style (which I will cover in a separate post). Just so everyone knows the latest push behind OData technology is to give you more reasons to use Azure (Microsoft\u2019s cloud computing effort).</p><h3 id="pox-to-the-rescue" tabindex="-1">POX to the rescue? <a class="header-anchor" href="#pox-to-the-rescue" aria-hidden="true">#</a></h3><p>For the pragmatic programmer it&#39;s becoming a hard task to follow the <code>WS-*</code> stack and still be able to get any work done. For what appears to be a growing trend, a lot of developers have taken the best bits from SOAP and WSDL and combined them in what is commonly referred to as POX or REST+POX. Basically this is Plain Old Xml over HTTP and REST-like urls. In this case a lot of the cruft inside a WSDL can be reduced to a simple XSD and a url. The interesting part about POX is that although there seems to be no formal spec published, a lot of accomplished web service developers have ultimately ended up at the same solution. The advantages this has over SOAP are numerous many of which are the same reasons that have made HTTP+XML ubiquitous. It is a lot simpler, smaller and faster at both development and runtime performance - while at the same time retaining a strongly-typed API (which is one of the major benefits of SOAP). Even though it&#39;s lacking a formal API, it can be argued that POX is still more interoperable than SOAP as clients no longer require a SOAP client to consume the web service and can access it simply with a standard Web Client and XML parser present in most programming environments, even most browsers.</p><h3 id="and-then-there-was-json" tabindex="-1">And then there was JSON <a class="header-anchor" href="#and-then-there-was-json" aria-hidden="true">#</a></h3><p>One of the major complaints of XML is that it&#39;s too verbose, which given a large enough dataset consumes a lot of bandwidth. It is also a lot stricter than a lot of people would like and given the potential for an XML document to be composed from many different namespaces and for a type to have both elements and attributes - it is not an ideal fit for most programming models. As a result of this, parsing XML can be quite cumbersome especially inside of a browser. A popular format which is seeking to overcome both of these problems and is now the preferred serialization format for AJAX applications is JSON. It is very simple to parse and maps perfectly to a Java Script object, it is also safe format which is the reason why it&#39;s chosen over pure Java Script. It&#39;s also a more &#39;dynamic&#39; and resilient format than XML meaning that adding new or renaming existing elements or their types will not break the de-serialization routine as there is no formal spec to adhere to which is both and advantage and disadvantage. Unfortunately even though it&#39;s a smaller, more simple format it is actually deceptively slower to de/serialize than XML using the available .NET libraries based on the available benchmarks. This performance gap is more likely due to the amount of effort Microsoft has put into their XML DataContractSerializer than a deficiency of the format itself as my effort of developing a JSON-like serialization format is both smaller than JSON and faster than XML - the best of both worlds.</p><h3 id="servicestack\u2019s-new-jsv-format" tabindex="-1">ServiceStack\u2019s new JSV Format <a class="header-anchor" href="#servicestack\u2019s-new-jsv-format" aria-hidden="true">#</a></h3><p>The latest endpoint to be added to ServiceStack, is JSV the serialization format of ServiceStack&#39;s POCO TypeSerializer. It\u2019s a JSON inspired format that uses CSV-style escaping for the least overhead and optimal performance.</p><p>With the interest of creating high-performance web services and not satisfied with the performance or size of existing XML and JSON serialization formats, TypeSerializer was created with a core goal to create the most compact and fastest text-serializer for .NET. In this mission, it has succeeded as it is now both 5.3x quicker than the leading .NET JSON serializer whilst being 2.6x smaller than the equivalent XML format.</p><p>TypeSerializer was developed from experience taking the best features of serialization formats it looks to replace. It has many other features that sets it apart from existing formats which makes it the best choice for serializing any .NET POCO object.</p><ul><li>Fastest and most compact text-serializer for .NET</li><li>Human readable and writeable, self-describing text format</li><li>Non-invasive and configuration-free</li><li>Resilient to schema changes (focused on deserializing as much as possible without error)</li><li>Serializes / De-serializes any .NET data type (by convention) <ul><li>Supports custom, compact serialization of structs by overriding <code>ToString()</code> and <code>static T Parse(string)</code> methods</li><li>Can serialize inherited, interface or &#39;late-bound objects&#39; data types</li><li>Respects opt-in <code>DataMember</code> custom serialization for <code>DataContract</code> DTO types.</li></ul></li></ul><p>For these reasons it is the preferred choice to transparently store complex POCO types for OrmLite (in text blobs), POCO objects with <a href="https://github.com/mythz/ServiceStack.Redis" target="_blank" rel="noopener noreferrer">ServiceStack&#39;s C# Redis Client</a> or the optimal serialization format in .NET to .NET web services.</p>',35),s=[r];function n(l,h,c,d,p,m){return a(),t("div",null,s)}var b=e(i,[["render",n]]);export{f as __pageData,b as default};
