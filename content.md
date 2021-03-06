
<img class="nodejs-logo" src="../res/node.svg"></img>

# Conquer the World with Node.js

Introduction to Node.js Concepts

<small>&mdash; https://gochomugo.github.io/presentation-nodejs-concepts/</small>



<center>
  <h1>Gocho Mugo</h1>
  <p>Backend Developer at Forfuture, LLC</p>
  <p>
    <a href="https://github.com/GochoMugo">gh/GochoMugo</a> &middot;
    <a href="https://twitter.com/GochoMugo">tw/@GochoMugo</a>
  </p>
  <small>http://forfuture.co.ke</small>
</center>



> Node.js &reg; is a **JavaScript** runtime built on Chrome's **V8 JavaScript engine**. Node.js uses an **event-driven**,
> **non-blocking I/O** model that makes it **lightweight** and **efficient**. Node.js' **package ecosystem**, npm, is
> the largest ecosystem of **open source** libraries in the world.
>
> &mdash; https://nodejs.org/en/


## toc:

* JavaScript <!-- .element: class="fragment" data-fragment-index="1" -->
* V8 Javascript engine <!-- .element: class="fragment" data-fragment-index="2" -->
* Event-driven <!-- .element: class="fragment" data-fragment-index="3" -->
* Non-blocking I/O <!-- .element: class="fragment" data-fragment-index="4" -->
* Lightweight <!-- .element: class="fragment" data-fragment-index="5" -->
* Efficient <!-- .element: class="fragment" data-fragment-index="6" -->
* Package ecosystem <!-- .element: class="fragment" data-fragment-index="7" -->
* Open source <!-- .element: class="fragment" data-fragment-index="8" -->


## wait!

<center>Where is the coding?</center>

Well, this presentation is **not** on coding in Node.js! We shall be dealing with Node.js concepts.
You can pretty much find tutorials on Node.js anywhere on the internet. Just DuckDuckGo (it's
google but privacy considered) it!



## JavaScript

It is relatively simple

<pre><code class="codeblock language-javascript" data-source="../code/javascript/intro.js"></code></pre>


You have to understand callbacks

<pre><code class="codeblock language-javascript" data-source="../code/javascript/callbacks.js"></code></pre>



<center><img src="../res/v8_logo.png"></img></center>

## V8 JavaScript Engine

<small>&mdash; https://code.google.com/p/v8/</small>

* Open-source and written by Google
* Used in Google chrome
* Written in C++
* Standalone or Embedded into a C++ application



## Event-driven

* Thread-based vs Event-based


### Thread-based system

<img class="illustration" src="../res/illustrations/thread-based.png"></img>


Scaling in a thread-based system

<img class="illustration" src="../res/illustrations/scaling-thread-based.png"></img>


### Event-based system

<img class="illustration" src="../res/illustrations/event-based.png">


Scaling in a event-based system

* The most viable option is replicating your process, behind a load balancer e.g. Nginx
* Using the `cluster` module (Node.js specific)


How to compare event-based to thread-based?

* synchronous requests
* memory consumption
* access to shared resources
* code simplicity


WTF!

Node.js is **single-threaded**!


Some useful links:

* [Understanding Event-Driven Programming](http://code.danyork.com/2011/01/25/node-js-doctors-offices-and-fast-food-restaurants-understanding-event-driven-programming/)



## Non-blocking I/O

I/O in **disk** and **network** operations


The Cost

<img src="../res/io_cost.png"></img>

<small>Attribute: <a href="http://blog.mixu.net/2011/02/01/understanding-the-node-js-event-loop/">Mixu's Blog</a>


* Disk calls can be asynchronous (preferred) or synchronous
* Network calls are **only** asynchronous!



## Lightweight and Efficient

This is rather opinionated. Through experience, a developer can assess a runtime/platform/framework.
It is usually relative to past experiences and war stories.


We need **not** argue on opinions.

<img src="../res/real_programmers.png"></img>

&mdash; https://xkcd.com/378/



## Package ecosystem

<center>
  <a href="https://npmjs.com">
    <img src="../res/npm_logo.png" style="height: 128px;"></img>
  </a>
  <p><small>https://npmjs.com/<small></p>
</center>

* ships with Node.js

<pre><code class="language-bash make-big">$ npm install &lt;package&gt;
</code></pre>


Some links:

* [Installing Dependencies in Node.js](http://blog.forfuture.co.ke/installing-node-js-dependencies/)



## Open-source, Open-governance

* No proprietary bullshit
* Node.js on Github: https://github.com/nodejs/node
* Goodbye Joyent! Long live Node.js Foundation!



## tips:

* http://blog.forfuture.co.ke/tag/node-js: Blog posts on Node.js
* http://nodeschool.io/: Open source workshops
* http://devdocs.io: Offline documentation


## misc:

* Forfuture, LLC is looking for Node.js developers in Kenya



## comments:

<!-- Disqus thread -->
<div id="disqus_thread"></div>
<noscript>Please enable JavaScript to view the
  <a href="https://disqus.com/?ref_noscript" rel="nofollow">comments powered by Disqus.</a>
</noscript>



<img class="nodejs-logo" src="../res/node.svg"></img>

# Conquer the World with Node.js

Introduction to Node.js Concepts

<small>&mdash; https://gochomugo.github.io/presentation-nodejs-concepts/</small>

