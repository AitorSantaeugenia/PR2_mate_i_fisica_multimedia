



<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled is-u2f-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=1020">
    
    
    <title>building-a-2d-browser-game-with-physicsjs/main.js at master · FrontenderMagazine/building-a-2d-browser-game-with-physicsjs · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="FrontenderMagazine/building-a-2d-browser-game-with-physicsjs" name="twitter:title" /><meta content="building-a-2d-browser-game-with-physicsjs - Building a 2D Browser Game with PhysicsJS" name="twitter:description" /><meta content="https://avatars3.githubusercontent.com/u/3209344?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars3.githubusercontent.com/u/3209344?v=3&amp;s=400" property="og:image" /><meta content="FrontenderMagazine/building-a-2d-browser-game-with-physicsjs" property="og:title" /><meta content="https://github.com/FrontenderMagazine/building-a-2d-browser-game-with-physicsjs" property="og:url" /><meta content="building-a-2d-browser-game-with-physicsjs - Building a 2D Browser Game with PhysicsJS" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    
    <meta name="pjax-timeout" content="1000">
    

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="4F9A2DE6:62B7:193EA93:56920D51" name="octolytics-dimension-request_id" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />
<meta content="Rails, view, blob#show" data-pjax-transient="true" name="analytics-event" />


  <meta class="js-ga-set" name="dimension1" content="Logged Out">



        <meta name="hostname" content="github.com">
    <meta name="user-login" content="">

        <meta name="expected-hostname" content="github.com">

      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta content="afe4999766ad89f70254277f33f40132b140cb8c" name="form-nonce" />

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-2cd8e7b7c650541e94a142c9c10fb231b81455e1777c62510eb9b3402cc220b3.css" integrity="sha256-LNjnt8ZQVB6UoULJwQ+yMbgUVeF3fGJRDrmzQCzCILM=" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github2-ceee0e6040d1030b365b8e3d7b8253580a1b367dd5a04caac69de46b320ad095.css" integrity="sha256-zu4OYEDRAws2W449e4JTWAobNn3VoEyqxp3kazIK0JU=" media="all" rel="stylesheet" />
    
    


    <meta http-equiv="x-pjax-version" content="3fa31291a3392c21fe713562c40f1dcc">

      
  <meta name="description" content="building-a-2d-browser-game-with-physicsjs - Building a 2D Browser Game with PhysicsJS">
  <meta name="go-import" content="github.com/FrontenderMagazine/building-a-2d-browser-game-with-physicsjs git https://github.com/FrontenderMagazine/building-a-2d-browser-game-with-physicsjs.git">

  <meta content="3209344" name="octolytics-dimension-user_id" /><meta content="FrontenderMagazine" name="octolytics-dimension-user_login" /><meta content="15038900" name="octolytics-dimension-repository_id" /><meta content="FrontenderMagazine/building-a-2d-browser-game-with-physicsjs" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="15038900" name="octolytics-dimension-repository_network_root_id" /><meta content="FrontenderMagazine/building-a-2d-browser-game-with-physicsjs" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/FrontenderMagazine/building-a-2d-browser-game-with-physicsjs/commits/master.atom" rel="alternate" title="Recent Commits to building-a-2d-browser-game-with-physicsjs:master" type="application/atom+xml">

  </head>


  <body class="logged_out   env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



      
      <div class="header header-logged-out" role="banner">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
      <span aria-hidden="true" class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions" role="navigation">
        <a class="btn btn-primary" href="/join" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
      <a class="btn" href="/login?return_to=%2FFrontenderMagazine%2Fbuilding-a-2d-browser-game-with-physicsjs%2Fblob%2Fmaster%2Fexamples%2Fspaceship%2Fjs%2Fmain.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
    </div>

    <div class="site-search repo-scope js-site-search" role="search">
      <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/FrontenderMagazine/building-a-2d-browser-game-with-physicsjs/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/FrontenderMagazine/building-a-2d-browser-game-with-physicsjs/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <label class="js-chromeless-input-container form-control">
    <div class="scope-badge">This repository</div>
    <input type="text"
      class="js-site-search-focus js-site-search-field is-clearable chromeless-input"
      data-hotkey="s"
      name="q"
      placeholder="Search"
      aria-label="Search this repository"
      data-global-scope-placeholder="Search GitHub"
      data-repo-scope-placeholder="Search"
      tabindex="1"
      autocapitalize="off">
  </label>
</form>
    </div>

      <ul class="header-nav left" role="navigation">
          <li class="header-nav-item">
            <a class="header-nav-link" href="/explore" data-ga-click="(Logged out) Header, go to explore, text:explore">Explore</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/features" data-ga-click="(Logged out) Header, go to features, text:features">Features</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://enterprise.github.com/" data-ga-click="(Logged out) Header, go to enterprise, text:enterprise">Enterprise</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/pricing" data-ga-click="(Logged out) Header, go to pricing, text:pricing">Pricing</a>
          </li>
      </ul>

  </div>
</div>



    <div id="start-of-content" class="accessibility-aid"></div>

      <div id="js-flash-container">
</div>


    <div role="main" class="main-content">
        <div itemscope itemtype="http://schema.org/WebPage">
    <div id="js-repo-pjax-container" class="context-loader-container js-repo-nav-next" data-pjax-container>
      
<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">

    

<ul class="pagehead-actions">

  <li>
      <a href="/login?return_to=%2FFrontenderMagazine%2Fbuilding-a-2d-browser-game-with-physicsjs"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <span class="octicon octicon-eye"></span>
    Watch
  </a>
  <a class="social-count" href="/FrontenderMagazine/building-a-2d-browser-game-with-physicsjs/watchers">
    32
  </a>

  </li>

  <li>
      <a href="/login?return_to=%2FFrontenderMagazine%2Fbuilding-a-2d-browser-game-with-physicsjs"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <span aria-hidden="true" class="octicon octicon-star"></span>
    Star
  </a>

    <a class="social-count js-social-count" href="/FrontenderMagazine/building-a-2d-browser-game-with-physicsjs/stargazers">
      2
    </a>

  </li>

  <li>
      <a href="/login?return_to=%2FFrontenderMagazine%2Fbuilding-a-2d-browser-game-with-physicsjs"
        class="btn btn-sm btn-with-count tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span aria-hidden="true" class="octicon octicon-repo-forked"></span>
        Fork
      </a>

    <a href="/FrontenderMagazine/building-a-2d-browser-game-with-physicsjs/network" class="social-count">
      2
    </a>
  </li>
</ul>

    <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public ">
  <span aria-hidden="true" class="octicon octicon-repo"></span>
  <span class="author"><a href="/FrontenderMagazine" class="url fn" itemprop="url" rel="author"><span itemprop="title">FrontenderMagazine</span></a></span><!--
--><span class="path-divider">/</span><!--
--><strong><a href="/FrontenderMagazine/building-a-2d-browser-game-with-physicsjs" data-pjax="#js-repo-pjax-container">building-a-2d-browser-game-with-physicsjs</a></strong>

  <span class="page-context-loader">
    <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
  </span>

</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <a href="/FrontenderMagazine/building-a-2d-browser-game-with-physicsjs" aria-label="Code" aria-selected="true" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /FrontenderMagazine/building-a-2d-browser-game-with-physicsjs">
    <span aria-hidden="true" class="octicon octicon-code"></span>
    Code
</a>
    <a href="/FrontenderMagazine/building-a-2d-browser-game-with-physicsjs/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /FrontenderMagazine/building-a-2d-browser-game-with-physicsjs/issues">
      <span aria-hidden="true" class="octicon octicon-issue-opened"></span>
      Issues
      <span class="counter">1</span>
</a>
  <a href="/FrontenderMagazine/building-a-2d-browser-game-with-physicsjs/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /FrontenderMagazine/building-a-2d-browser-game-with-physicsjs/pulls">
    <span aria-hidden="true" class="octicon octicon-git-pull-request"></span>
    Pull requests
    <span class="counter">0</span>
</a>

  <a href="/FrontenderMagazine/building-a-2d-browser-game-with-physicsjs/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /FrontenderMagazine/building-a-2d-browser-game-with-physicsjs/pulse">
    <span aria-hidden="true" class="octicon octicon-pulse"></span>
    Pulse
</a>
  <a href="/FrontenderMagazine/building-a-2d-browser-game-with-physicsjs/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /FrontenderMagazine/building-a-2d-browser-game-with-physicsjs/graphs">
    <span aria-hidden="true" class="octicon octicon-graph"></span>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    

<a href="/FrontenderMagazine/building-a-2d-browser-game-with-physicsjs/blob/a8aa18fb62bbdb0525a4fdcb85632a6826335479/examples/spaceship/js/main.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:e7367d6571956106cf0dafc41b678677 -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu js-menu-container js-select-menu left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    title="master"
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span aria-label="Close" class="octicon octicon-x js-menu-close" role="button"></span>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/FrontenderMagazine/building-a-2d-browser-game-with-physicsjs/blob/master/examples/spaceship/js/main.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="btn-group right">
    <a href="/FrontenderMagazine/building-a-2d-browser-game-with-physicsjs/find/master"
          class="js-show-file-finder btn btn-sm"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/FrontenderMagazine/building-a-2d-browser-game-with-physicsjs" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">building-a-2d-browser-game-with-physicsjs</span></a></span></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/FrontenderMagazine/building-a-2d-browser-game-with-physicsjs/tree/master/examples" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">examples</span></a></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/FrontenderMagazine/building-a-2d-browser-game-with-physicsjs/tree/master/examples/spaceship" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">spaceship</span></a></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/FrontenderMagazine/building-a-2d-browser-game-with-physicsjs/tree/master/examples/spaceship/js" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">js</span></a></span><span class="separator">/</span><strong class="final-path">main.js</strong>
  </div>
</div>


  <div class="commit-tease">
      <span class="right">
        <a class="commit-tease-sha" href="/FrontenderMagazine/building-a-2d-browser-game-with-physicsjs/commit/150239b676e14f5c0e136523b4ad8eabd0bca969" data-pjax>
          150239b
        </a>
        <time datetime="2013-12-27T11:10:07Z" is="relative-time">Dec 27, 2013</time>
      </span>
      <div>
        <img alt="@SilentImp" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/217308?v=3&amp;s=40" width="20" />
        <a href="/SilentImp" class="user-mention" rel="contributor">SilentImp</a>
          <a href="/FrontenderMagazine/building-a-2d-browser-game-with-physicsjs/commit/150239b676e14f5c0e136523b4ad8eabd0bca969" class="message" data-pjax="true" title="example">example</a>
      </div>

    <div class="commit-tease-contributors">
      <a class="muted-link contributors-toggle" href="#blob_contributors_box" rel="facebox">
        <strong>1</strong>
         contributor
      </a>
      
    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@SilentImp" height="24" src="https://avatars1.githubusercontent.com/u/217308?v=3&amp;s=48" width="24" />
            <a href="/SilentImp">SilentImp</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="btn-group">
      <a href="/FrontenderMagazine/building-a-2d-browser-game-with-physicsjs/raw/master/examples/spaceship/js/main.js" class="btn btn-sm " id="raw-url">Raw</a>
        <a href="/FrontenderMagazine/building-a-2d-browser-game-with-physicsjs/blame/master/examples/spaceship/js/main.js" class="btn btn-sm js-update-url-with-hash">Blame</a>
      <a href="/FrontenderMagazine/building-a-2d-browser-game-with-physicsjs/commits/master/examples/spaceship/js/main.js" class="btn btn-sm " rel="nofollow">History</a>
    </div>

        <a class="octicon-btn tooltipped tooltipped-nw"
           href="https://windows.github.com"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <span aria-hidden="true" class="octicon octicon-device-desktop"></span>
        </a>

        <button type="button" class="octicon-btn disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <span aria-hidden="true" class="octicon octicon-pencil"></span>
        </button>
        <button type="button" class="octicon-btn octicon-btn-danger disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <span aria-hidden="true" class="octicon octicon-trashcan"></span>
        </button>
  </div>

  <div class="file-info">
      225 lines (198 sloc)
      <span class="file-info-divider"></span>
    6.7 KB
  </div>
</div>

  

  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">require</span>(</td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line">{</td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// use top level so we can access images</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line">    baseUrl<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>./<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line">    packages<span class="pl-k">:</span> [{</td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line">        name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>physicsjs<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line">        location<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>http://wellcaffeinated.net/PhysicsJS/assets/scripts/vendor/physicsjs-0.5.2/<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line">        main<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>physicsjs-0.5.2.min<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line">    }]</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line">},</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line">[</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>require<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>physicsjs<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// custom modules</span></td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>js/player<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>js/player-behavior<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>js/ufo<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// official modules</span></td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>physicsjs/renderers/canvas<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>physicsjs/bodies/circle<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>physicsjs/bodies/convex-polygon<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>physicsjs/behaviors/newtonian<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>physicsjs/behaviors/sweep-prune<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>physicsjs/behaviors/body-collision-detection<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>physicsjs/behaviors/body-impulse-response<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line">], <span class="pl-k">function</span>(</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">require</span>,</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">Physics</span></td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line">){</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// display start game message</span></td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">document</span>.<span class="pl-c1">body</span>.<span class="pl-c1">className</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>before-game<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> inGame <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">document</span>.<span class="pl-en">addEventListener</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>keydown<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span>( <span class="pl-smi">e</span> ){</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// if user presses spacebar inbetween games, we&#39;ll load a new game</span></td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">!</span>inGame <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">e</span>.<span class="pl-smi">keyCode</span> <span class="pl-k">===</span> <span class="pl-c1">90</span>){</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">document</span>.<span class="pl-c1">body</span>.<span class="pl-c1">className</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>in-game<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">            inGame <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">newGame</span>();</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// set up the renderer and point it to the viewport</span></td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> renderer <span class="pl-k">=</span> <span class="pl-smi">Physics</span>.<span class="pl-en">renderer</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>canvas<span class="pl-pds">&#39;</span></span>, {</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line">        el<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>viewport<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line">        width<span class="pl-k">:</span> <span class="pl-smi">window</span>.<span class="pl-c1">innerWidth</span>,</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line">        height<span class="pl-k">:</span> <span class="pl-smi">window</span>.<span class="pl-c1">innerHeight</span>,</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// meta: true,</span></td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// debug:true,</span></td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line">        styles<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&#39;</span>circle<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line">                strokeStyle<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>rgb(0, 30, 0)<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line">                lineWidth<span class="pl-k">:</span> <span class="pl-c1">1</span>,</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line">                fillStyle<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>rgb(100, 200, 50)<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">                angleIndicator<span class="pl-k">:</span> <span class="pl-c1">false</span></td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line">            },</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&#39;</span>convex-polygon<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line">                strokeStyle<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>rgb(60, 0, 0)<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line">                lineWidth<span class="pl-k">:</span> <span class="pl-c1">1</span>,</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line">                fillStyle<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>rgb(60, 16, 11)<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line">                angleIndicator<span class="pl-k">:</span> <span class="pl-c1">false</span></td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> <span class="pl-en">init</span> <span class="pl-k">=</span> <span class="pl-k">function</span> <span class="pl-en">init</span>( <span class="pl-smi">world</span>, <span class="pl-smi">Physics</span> ){</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// bodies</span></td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> ship <span class="pl-k">=</span> <span class="pl-smi">Physics</span>.<span class="pl-c1">body</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>player<span class="pl-pds">&#39;</span></span>, {</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line">            x<span class="pl-k">:</span> <span class="pl-c1">400</span>,</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line">            y<span class="pl-k">:</span> <span class="pl-c1">100</span>,</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line">            vx<span class="pl-k">:</span> <span class="pl-c1">0.08</span>,</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line">            radius<span class="pl-k">:</span> <span class="pl-c1">30</span></td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> playerBehavior <span class="pl-k">=</span> <span class="pl-smi">Physics</span>.<span class="pl-en">behavior</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>player-behavior<span class="pl-pds">&#39;</span></span>, { player<span class="pl-k">:</span> ship });</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line">        </td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> ufos <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">for</span> ( <span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>, l <span class="pl-k">=</span> <span class="pl-c1">30</span>; i <span class="pl-k">&lt;</span> l; <span class="pl-k">++</span>i ){</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> ang <span class="pl-k">=</span> <span class="pl-c1">4</span> <span class="pl-k">*</span> (<span class="pl-smi">Math</span>.<span class="pl-c1">random</span>() <span class="pl-k">-</span> <span class="pl-c1">0.5</span>) <span class="pl-k">*</span> <span class="pl-smi">Math</span>.<span class="pl-c1">PI</span>;</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> r <span class="pl-k">=</span> <span class="pl-c1">700</span> <span class="pl-k">+</span> <span class="pl-c1">100</span> <span class="pl-k">*</span> <span class="pl-smi">Math</span>.<span class="pl-c1">random</span>() <span class="pl-k">+</span> i <span class="pl-k">*</span> <span class="pl-c1">10</span>;</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">ufos</span>.<span class="pl-c1">push</span>( <span class="pl-smi">Physics</span>.<span class="pl-c1">body</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>ufo<span class="pl-pds">&#39;</span></span>, {</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line">                x<span class="pl-k">:</span> <span class="pl-c1">400</span> <span class="pl-k">+</span> <span class="pl-smi">Math</span>.<span class="pl-c1">cos</span>( ang ) <span class="pl-k">*</span> r,</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line">                y<span class="pl-k">:</span> <span class="pl-c1">300</span> <span class="pl-k">+</span> <span class="pl-smi">Math</span>.<span class="pl-c1">sin</span>( ang ) <span class="pl-k">*</span> r,</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line">                vx<span class="pl-k">:</span> <span class="pl-c1">0.03</span> <span class="pl-k">*</span> <span class="pl-smi">Math</span>.<span class="pl-c1">sin</span>( ang ),</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line">                vy<span class="pl-k">:</span> <span class="pl-k">-</span> <span class="pl-c1">0.03</span> <span class="pl-k">*</span> <span class="pl-smi">Math</span>.<span class="pl-c1">cos</span>( ang ),</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line">                angularVelocity<span class="pl-k">:</span> (<span class="pl-smi">Math</span>.<span class="pl-c1">random</span>() <span class="pl-k">-</span> <span class="pl-c1">0.5</span>) <span class="pl-k">*</span> <span class="pl-c1">0.001</span>,</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line">                radius<span class="pl-k">:</span> <span class="pl-c1">50</span>,</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line">                mass<span class="pl-k">:</span> <span class="pl-c1">30</span>,</td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line">                restitution<span class="pl-k">:</span> <span class="pl-c1">0.6</span></td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line">            }));</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> planet <span class="pl-k">=</span> <span class="pl-smi">Physics</span>.<span class="pl-c1">body</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>circle<span class="pl-pds">&#39;</span></span>, {</td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line">            <span class="pl-c">// fixed: true,</span></td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line">            <span class="pl-c">// hidden: true,</span></td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line">            mass<span class="pl-k">:</span> <span class="pl-c1">10000</span>,</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line">            radius<span class="pl-k">:</span> <span class="pl-c1">140</span>,</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line">            x<span class="pl-k">:</span> <span class="pl-c1">400</span>,</td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line">            y<span class="pl-k">:</span> <span class="pl-c1">300</span></td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">planet</span>.<span class="pl-smi">view</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Image</span>();</td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">planet</span>.<span class="pl-smi">view</span>.<span class="pl-smi">src</span> <span class="pl-k">=</span> <span class="pl-smi">require</span>.<span class="pl-en">toUrl</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>images/planet.png<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// render on every step</span></td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">world</span>.<span class="pl-en">subscribe</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>step<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line">            <span class="pl-c">// middle of canvas</span></td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> middle <span class="pl-k">=</span> { </td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code blob-code-inner js-file-line">                x<span class="pl-k">:</span> <span class="pl-c1">0.5</span> <span class="pl-k">*</span> <span class="pl-smi">window</span>.<span class="pl-c1">innerWidth</span>, </td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code blob-code-inner js-file-line">                y<span class="pl-k">:</span> <span class="pl-c1">0.5</span> <span class="pl-k">*</span> <span class="pl-smi">window</span>.<span class="pl-c1">innerHeight</span></td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code blob-code-inner js-file-line">            };</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code blob-code-inner js-file-line">            <span class="pl-c">// follow player</span></td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">renderer</span>.<span class="pl-c1">options</span>.<span class="pl-smi">offset</span>.<span class="pl-en">clone</span>( middle ).<span class="pl-en">vsub</span>( <span class="pl-smi">ship</span>.<span class="pl-smi">state</span>.<span class="pl-smi">pos</span> );</td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">world</span>.<span class="pl-en">render</span>();</td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code blob-code-inner js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// count number of ufos destroyed</span></td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> killCount <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">world</span>.<span class="pl-en">subscribe</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>blow-up<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span>( <span class="pl-smi">data</span> ){</td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code blob-code-inner js-file-line">            </td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code blob-code-inner js-file-line">            killCount<span class="pl-k">++</span>;</td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> ( killCount <span class="pl-k">===</span> <span class="pl-smi">ufos</span>.<span class="pl-c1">length</span> ){</td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">world</span>.<span class="pl-en">publish</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>win-game<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code blob-code-inner js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// blow up anything that touches a laser pulse</span></td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">world</span>.<span class="pl-en">subscribe</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>collisions:detected<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span>( <span class="pl-smi">data</span> ){</td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> collisions <span class="pl-k">=</span> <span class="pl-smi">data</span>.<span class="pl-smi">collisions</span></td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code blob-code-inner js-file-line">                ,col</td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code blob-code-inner js-file-line">                ;</td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">for</span> ( <span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>, l <span class="pl-k">=</span> <span class="pl-smi">collisions</span>.<span class="pl-c1">length</span>; i <span class="pl-k">&lt;</span> l; <span class="pl-k">++</span>i ){</td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code blob-code-inner js-file-line">                col <span class="pl-k">=</span> collisions[ i ];</td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> ( <span class="pl-smi">col</span>.<span class="pl-smi">bodyA</span>.<span class="pl-smi">gameType</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>laser<span class="pl-pds">&#39;</span></span> <span class="pl-k">||</span> <span class="pl-smi">col</span>.<span class="pl-smi">bodyB</span>.<span class="pl-smi">gameType</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>laser<span class="pl-pds">&#39;</span></span> ){</td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">if</span> ( <span class="pl-smi">col</span>.<span class="pl-smi">bodyA</span>.<span class="pl-smi">blowUp</span> ){</td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code blob-code-inner js-file-line">                        <span class="pl-smi">col</span>.<span class="pl-smi">bodyA</span>.<span class="pl-en">blowUp</span>();</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code blob-code-inner js-file-line">                    } <span class="pl-k">else</span> <span class="pl-k">if</span> ( <span class="pl-smi">col</span>.<span class="pl-smi">bodyB</span>.<span class="pl-smi">blowUp</span> ){</td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code blob-code-inner js-file-line">                        <span class="pl-smi">col</span>.<span class="pl-smi">bodyB</span>.<span class="pl-en">blowUp</span>();</td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code blob-code-inner js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// draw minimap</span></td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">world</span>.<span class="pl-en">subscribe</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>render<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span>( <span class="pl-smi">data</span> ){</td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code blob-code-inner js-file-line">            <span class="pl-c">// radius of minimap</span></td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> r <span class="pl-k">=</span> <span class="pl-c1">100</span>;</td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code blob-code-inner js-file-line">            <span class="pl-c">// padding</span></td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> shim <span class="pl-k">=</span> <span class="pl-c1">15</span>;</td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code blob-code-inner js-file-line">            <span class="pl-c">// x,y of center</span></td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> x <span class="pl-k">=</span> <span class="pl-smi">renderer</span>.<span class="pl-c1">options</span>.<span class="pl-c1">width</span> <span class="pl-k">-</span> r <span class="pl-k">-</span> shim;</td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> y <span class="pl-k">=</span> r <span class="pl-k">+</span> shim;</td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code blob-code-inner js-file-line">            <span class="pl-c">// the ever-useful scratchpad to speed up vector math</span></td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> scratch <span class="pl-k">=</span> <span class="pl-smi">Physics</span>.<span class="pl-en">scratchpad</span>();</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> d <span class="pl-k">=</span> <span class="pl-smi">scratch</span>.<span class="pl-en">vector</span>();</td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> lightness;</td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code blob-code-inner js-file-line">            <span class="pl-c">// draw the radar guides</span></td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">renderer</span>.<span class="pl-en">drawCircle</span>(x, y, r, { strokeStyle<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>#090<span class="pl-pds">&#39;</span></span>, fillStyle<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>#010<span class="pl-pds">&#39;</span></span> });</td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">renderer</span>.<span class="pl-en">drawCircle</span>(x, y, r <span class="pl-k">*</span> <span class="pl-c1">2</span> <span class="pl-k">/</span> <span class="pl-c1">3</span>, { strokeStyle<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>#090<span class="pl-pds">&#39;</span></span> });</td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">renderer</span>.<span class="pl-en">drawCircle</span>(x, y, r <span class="pl-k">/</span> <span class="pl-c1">3</span>, { strokeStyle<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>#090<span class="pl-pds">&#39;</span></span> });</td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>, l <span class="pl-k">=</span> <span class="pl-smi">data</span>.<span class="pl-smi">bodies</span>.<span class="pl-c1">length</span>, b <span class="pl-k">=</span> <span class="pl-smi">data</span>.<span class="pl-smi">bodies</span>[ i ]; b <span class="pl-k">=</span> <span class="pl-smi">data</span>.<span class="pl-smi">bodies</span>[ i ]; i<span class="pl-k">++</span>){</td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code blob-code-inner js-file-line">                <span class="pl-c">// get the displacement of the body from the ship and scale it</span></td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">d</span>.<span class="pl-en">clone</span>( <span class="pl-smi">ship</span>.<span class="pl-smi">state</span>.<span class="pl-smi">pos</span> ).<span class="pl-en">vsub</span>( <span class="pl-smi">b</span>.<span class="pl-smi">state</span>.<span class="pl-smi">pos</span> ).<span class="pl-en">mult</span>( <span class="pl-k">-</span><span class="pl-c1">0.05</span> );</td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code blob-code-inner js-file-line">                <span class="pl-c">// color the dot based on how massive the body is</span></td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code blob-code-inner js-file-line">                lightness <span class="pl-k">=</span> <span class="pl-smi">Math</span>.<span class="pl-c1">max</span>(<span class="pl-smi">Math</span>.<span class="pl-c1">min</span>(<span class="pl-smi">Math</span>.<span class="pl-c1">sqrt</span>(<span class="pl-smi">b</span>.<span class="pl-smi">mass</span><span class="pl-k">*</span><span class="pl-c1">10</span>)<span class="pl-k">|</span><span class="pl-c1">0</span>, <span class="pl-c1">100</span>), <span class="pl-c1">10</span>);</td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code blob-code-inner js-file-line">                <span class="pl-c">// if it&#39;s inside the minimap radius</span></td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (<span class="pl-smi">d</span>.<span class="pl-en">norm</span>() <span class="pl-k">&lt;</span> r){</td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code blob-code-inner js-file-line">                    <span class="pl-c">// draw the dot</span></td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">renderer</span>.<span class="pl-en">drawCircle</span>(x <span class="pl-k">+</span> <span class="pl-smi">d</span>.<span class="pl-en">get</span>(<span class="pl-c1">0</span>), y <span class="pl-k">+</span> <span class="pl-smi">d</span>.<span class="pl-en">get</span>(<span class="pl-c1">1</span>), <span class="pl-c1">1</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>hsl(60, 100%, <span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>lightness<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>%)<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">scratch</span>.<span class="pl-en">done</span>();</td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code blob-code-inner js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// add things to the world</span></td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">world</span>.<span class="pl-c1">add</span>([</td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code blob-code-inner js-file-line">            ship,</td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code blob-code-inner js-file-line">            playerBehavior,</td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code blob-code-inner js-file-line">            planet,</td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">Physics</span>.<span class="pl-en">behavior</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>newtonian<span class="pl-pds">&#39;</span></span>, { strength<span class="pl-k">:</span> <span class="pl-c1">1e-4</span> }),</td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">Physics</span>.<span class="pl-en">behavior</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>sweep-prune<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">Physics</span>.<span class="pl-en">behavior</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>body-collision-detection<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">Physics</span>.<span class="pl-en">behavior</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>body-impulse-response<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code blob-code-inner js-file-line">            renderer</td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code blob-code-inner js-file-line">        ]);</td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">world</span>.<span class="pl-c1">add</span>( ufos );</td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> world <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> <span class="pl-en">newGame</span> <span class="pl-k">=</span> <span class="pl-k">function</span> <span class="pl-en">newGame</span>(){</td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (world){</td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">world</span>.<span class="pl-en">destroy</span>();</td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code blob-code-inner js-file-line">        world <span class="pl-k">=</span> <span class="pl-en">Physics</span>( init );</td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">world</span>.<span class="pl-en">subscribe</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lose-game<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">document</span>.<span class="pl-c1">body</span>.<span class="pl-c1">className</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>lose-game<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code blob-code-inner js-file-line">            inGame <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code blob-code-inner js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">world</span>.<span class="pl-en">subscribe</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>win-game<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">world</span>.<span class="pl-en">pause</span>();</td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">document</span>.<span class="pl-c1">body</span>.<span class="pl-c1">className</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>win-game<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code blob-code-inner js-file-line">            inGame <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code blob-code-inner js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// subscribe to ticker and start looping</span></td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">Physics</span>.<span class="pl-smi">util</span>.<span class="pl-smi">ticker</span>.<span class="pl-en">subscribe</span>(<span class="pl-k">function</span>( <span class="pl-smi">time</span> ){</td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (world){</td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">world</span>.<span class="pl-en">step</span>( time ); </td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code blob-code-inner js-file-line">    }).<span class="pl-c1">start</span>();</td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code blob-code-inner js-file-line">});</td>
      </tr>
</table>

  </div>

</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

  </div>
  <div class="modal-backdrop"></div>
</div>

    </div>
  </div>

    </div>

        <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>
        <li><a href="https://github.com/pricing" data-ga-click="Footer, go to pricing, text:pricing">Pricing</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage">
      <span aria-hidden="true" class="mega-octicon octicon-mark-github" title="GitHub "></span>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2016 <span title="0.04213s from github-fe126-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    
    
    

    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <span class="octicon octicon-x"></span>
      </button>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" integrity="sha256-7460qJ7p88i3YTMH/liaj1cFgX987ie+xRzl6WMjSr8=" src="https://assets-cdn.github.com/assets/frameworks-ef8eb4a89ee9f3c8b7613307fe589a8f5705817f7cee27bec51ce5e963234abf.js"></script>
      <script async="async" crossorigin="anonymous" integrity="sha256-CXm9s4pSEWmhMcvB1kgYF4aOPzr9ntBNjTtYHu1zktE=" src="https://assets-cdn.github.com/assets/github-0979bdb38a521169a131cbc1d6481817868e3f3afd9ed04d8d3b581eed7392d1.js"></script>
      
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner hidden">
      <span class="octicon octicon-alert"></span>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
  </body>
</html>

