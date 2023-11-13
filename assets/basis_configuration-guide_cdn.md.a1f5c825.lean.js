import{_ as e,a as s,S as a,z as n}from"./chunks/framework.6db2b512.js";const o="/assets/img-1.d108ab6c.png",l="/assets/img-2.3871d3ca.png",t="/assets/img-3.26c54416.png",r="/assets/img-4.50208cd8.png",_=JSON.parse('{"title":"cdn","description":"","frontmatter":{},"headers":[],"relativePath":"basis/configuration-guide/cdn.md","filePath":"basis/configuration-guide/cdn.md","lastUpdated":1699862558000}'),p={name:"basis/configuration-guide/cdn.md"},i=n(`<h1 id="cdn" tabindex="-1">cdn <a class="header-anchor" href="#cdn" aria-label="Permalink to &quot;cdn&quot;">​</a></h1><p><code>cdn</code> 用于开启 Keep 主题源文件资源（JS 文件、CSS 文件和字体文件）的 CDN 加速功能。</p><div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">cdn</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">enable</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#BABED8;">       </span><span style="color:#676E95;font-style:italic;"># Option values: true | false</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">provider</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">jsdelivr</span><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;"># Option values: jsdelivr | unpkg</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="info custom-block"><p class="custom-block-title">CDN 原理</p><p>Keep 主题源码的 CDN 加速原理是打开页面时使用 jsDelivr 或 UNPKG 来加速托管在 NPM 上的 <a href="https://www.npmjs.com/package/hexo-theme-keep" target="_blank" rel="noreferrer">hexo-theme-keep</a> 源文件资源。</p></div><h2 id="enable" tabindex="-1">enable <a class="header-anchor" href="#enable" aria-label="Permalink to &quot;enable&quot;">​</a></h2><p><code>enable</code> 设置是否开启 CDN 加速功能，可选值：<code>true</code> 或 <code>false</code>。</p><h2 id="provider" tabindex="-1">provider <a class="header-anchor" href="#provider" aria-label="Permalink to &quot;provider&quot;">​</a></h2><p><code>provider</code> 设置 CDN 加速功能的提供商，可选值：<code>jsdelivr</code> 或 <code>unpkg</code>。</p><h2 id="建议启用-cdn-的场景" tabindex="-1">建议启用 CDN 的场景 <a class="header-anchor" href="#建议启用-cdn-的场景" aria-label="Permalink to &quot;建议启用 CDN 的场景&quot;">​</a></h2><p>如果你是中国大陆地区用户，而你的 Keep 主题博客网站部署在国外服务器上，例如：<strong>GitHub Pages</strong>、<strong>Vercel</strong> 等，那么<strong>建议</strong>你开启 CDN 加速功能，打开页面会有较快的资源加载速度。</p><ul><li><p><strong>jsDelivr</strong></p><ul><li><p>JS 资源 CDN <img src="`+o+'" alt="image"></p></li><li><p>字体文件 CDN <img src="'+l+'" alt="image"></p></li></ul></li><li><p><strong>UNPKG</strong></p><ul><li><p>JS 资源 CDN <img src="'+t+'" alt="image"></p></li><li><p>字体文件 CDN <img src="'+r+'" alt="image"></p></li></ul></li></ul><h2 id="不建议启用-cdn-的场景" tabindex="-1">不建议启用 CDN 的场景 <a class="header-anchor" href="#不建议启用-cdn-的场景" aria-label="Permalink to &quot;不建议启用 CDN 的场景&quot;">​</a></h2><p>如果你的 Keep 主题博客网站部署在国内服务器，例如：Gitee Pages、阿里云、腾讯云、百度云等，在国内访问已经拥有较好的资源加载速度，则<strong>不建议</strong>开启 CDN 加速功能。</p>',13),c=[i];function d(g,m,u,h,b,D){return s(),a("div",null,c)}const y=e(p,[["render",d]]);export{_ as __pageData,y as default};
