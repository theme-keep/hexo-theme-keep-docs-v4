import{_ as t,D as l,o,c as p,k as e,a as s,I as r,R as i}from"./chunks/framework.pvNKA1rT.js";const c="/assets/img-4.e0IYaTx0.png",a="/assets/img-1.oUjYH6ya.png",h="/assets/img-2.fYc6G08t.png",d="/assets/img-3.iR604dHC.png",m="/assets/img-5.fk31oWV9.png",x=JSON.parse('{"title":"home","description":"","frontmatter":{},"headers":[],"relativePath":"basis/configuration-guide/home.md","filePath":"basis/configuration-guide/home.md","lastUpdated":1700811814000}'),g={name:"basis/configuration-guide/home.md"},k=i(`<h1 id="home" tabindex="-1">home <a class="header-anchor" href="#home" aria-label="Permalink to &quot;home&quot;">​</a></h1><p><code>home</code> 用于设置首页（Home）的文章块底部的标签和分类信息显示，以及在首页配置网站公告。</p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">home</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  category</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Option values: true | false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  tag</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">       # Option values: true | false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  announcement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><img src="`+c+'" alt="image"></p><h2 id="category" tabindex="-1">category <a class="header-anchor" href="#category" aria-label="Permalink to &quot;category&quot;">​</a></h2><ul><li><code>enable</code> 是否开启显示文章分类，可选值：<code>true</code> 或 <code>false</code>。 <ul><li><p><strong>不开启</strong>效果 <img src="'+a+'" alt="image"></p></li><li><p><strong>开启</strong>效果 <img src="'+h+'" alt="image"></p></li></ul></li></ul><h2 id="tag" tabindex="-1">tag <a class="header-anchor" href="#tag" aria-label="Permalink to &quot;tag&quot;">​</a></h2><ul><li><code>enable</code> 是否开启显示文章标签，可选值：<code>true</code> 或 <code>false</code>。 <ul><li><p>不开启效果 <img src="'+a+'" alt="image"></p></li><li><p>开启效果 <img src="'+d+'" alt="image"></p></li></ul></li></ul>',8),u={id:"announcement",tabindex:"-1"},_=e("a",{class:"header-anchor",href:"#announcement","aria-label":'Permalink to "announcement <Badge type="tip" text="v4.0.0" />"'},"​",-1),b=i(`<p><code>announcement</code> 是 Keep 主题 <code>v4.0.0</code>新增的配置项，用于在首页（Home）给博客网站配置公告信息。</p><blockquote><p>announcement 配置项不填则不显示网站公告</p></blockquote><p>使用示例：</p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">home</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  announcement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">这是 v4.0.0 新增的网站公告功能...</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>效果图：</p><p><img src="`+m+'" alt="image"></p>',6);function E(y,f,v,A,C,D){const n=l("Badge");return o(),p("div",null,[k,e("h2",u,[s("announcement "),r(n,{type:"tip",text:"v4.0.0"}),s(),_]),b])}const P=t(g,[["render",E]]);export{x as __pageData,P as default};
