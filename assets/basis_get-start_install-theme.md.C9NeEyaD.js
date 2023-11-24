import{_ as e,o as s,c as a,R as i}from"./chunks/framework.pvNKA1rT.js";const m=JSON.parse('{"title":"安装主题","description":"","frontmatter":{},"headers":[],"relativePath":"basis/get-start/install-theme.md","filePath":"basis/get-start/install-theme.md","lastUpdated":1700811814000}'),n={name:"basis/get-start/install-theme.md"},l=i(`<h1 id="安装主题" tabindex="-1">安装主题 <a class="header-anchor" href="#安装主题" aria-label="Permalink to &quot;安装主题&quot;">​</a></h1><p>使用 Keep 主题之前，如果你对 Hexo 框架搭建个人博客没有任何经验，那么建议你先阅读以下两个网站的内容，能够帮助你快速入门 Hexo 博客框架。</p><ul><li><p><a href="https://easyhexo.com/" target="_blank" rel="noreferrer">Easy Hexo</a></p></li><li><p><a href="https://hexo.io/zh-cn/" target="_blank" rel="noreferrer">Hexo 官网</a></p></li></ul><h2 id="安装-keep-主题" tabindex="-1">安装 Keep 主题 <a class="header-anchor" href="#安装-keep-主题" aria-label="Permalink to &quot;安装 Keep 主题&quot;">​</a></h2><ul><li><p>如果你使用 Hexo 5.0 或更高版本，最简单的安装方式是通过 NPM <strong>（强烈推荐）</strong></p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> your-hexo</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hexo-theme-keep</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li><li><p>或者使用 Git 克隆整个 Keep 主题仓库</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> your-hexo</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/XPoet/hexo-theme-keep</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> themes/keep</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li></ul><h2 id="使用-keep-主题" tabindex="-1">使用 Keep 主题 <a class="header-anchor" href="#使用-keep-主题" aria-label="Permalink to &quot;使用 Keep 主题&quot;">​</a></h2><p>Keep 主题安装完成后，在 Hexo 配置文件 <code>_config.yml</code> 中将 <code>theme</code> 设置为 <code>keep</code>。</p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># your-hexo/_config.yml</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">theme</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">keep</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="更新-keep-主题" tabindex="-1">更新 Keep 主题 <a class="header-anchor" href="#更新-keep-主题" aria-label="Permalink to &quot;更新 Keep 主题&quot;">​</a></h2><p>Keep 主题不定期发布新版本，你可以通过如下命令更新。</p><ul><li><p>通过 NPM 安装最新版本 <strong>（强烈推荐）</strong></p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> your-hexo</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hexo-theme-keep@latest</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li><li><p>通过 Git 更新到最新的 master 分支</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> your-hexo/themes/keep</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pull</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li></ul><h2 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h2><ul><li><p>使用 Keep 主题必须确保你的 <strong>Node.js 版本 &gt;= 14.0</strong>，当你的 Hexo 项目运行时报错或发出警告，请注意升级你的 Node.js 版本。</p></li><li><p>使用手册中的 <code>your-hexo</code> 代表你的 Hexo 博客项目根目录名称，请不要在终端工具直接输入 <code>your-hexo</code>。</p></li><li><p>通过 Git 更新 Keep 主题的前提是 —— 你也是使用 Git 安装的 Keep 主题，否则无效。</p></li><li><p>作者强烈建议使用 NPM 来安装和更新 Keep 主题。</p></li><li><p>如果你使用 NPM 更新 Keep 主题，但 <code>your-hexo/themes/</code> 目录下又包含 <code>keep</code>，你需要删除 <code>your-hexo/themes/keep</code>，否则无法使用通过 NPM 更新的 Keep 主题，因为 <code>your-hexo/themes/keep</code> 优先级最高，这两种方式不要混用。</p></li><li><p>如果你刚接触 Hexo 和 Keep 主题，也就是说你对 Hexo 框架和 Keep 主题都不熟悉的情况下，那么推荐你直接使用 <a href="/basis/get-start/starter-template.html">Keep 快速启动模板</a> 来搭建 Hexo 博客。</p></li></ul>`,13),p=[l];function t(h,r,o,d,c,k){return s(),a("div",null,p)}const g=e(n,[["render",t]]);export{m as __pageData,g as default};
