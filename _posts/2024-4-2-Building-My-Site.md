---
layout: post
author: Grant McAllister
title: Making My Website
tags: [blog, web]
---
Hello everyone, this is my first blog post. I wanted to start with a quick post on how I built my site, the requirements I had for it, and my thought process during each part of building it.

### Getting Started

The initial goal for my website was to create a platform where I could write blog posts about topics I found interesting. It was important to me that the process of writing posts was quick and effortless. This led me to choose markdown for formatting. Markdown is not only easy to format and readable both in the file and on the page, but it's also the format I use for all my notes, utilizing a tool called [zk](https://github.com/zk-org/zk). This made it convenient for me to transfer my ideas directly from my notes to my site.

### Why Jekyll?

After considering my options, I decided on Jekyll. Its popularity and the fact it's written in Ruby (a language I use daily at work) made it an appealing choice. Though Hugo was a tempting alternative, Jekyll seemed like the best option for me and was straightforward to set up.

### Choosing a Template

The next step was choosing a template. I wanted a decent starting point to minimize the need to write a lot of boilerplate HTML and CSS. After some research, I found the [light speed template](https://github.com/tajacks/lightspeed). It struck the perfect balance for me: not too flashy, yet customizable enough for future personalization. Plus, its mobile responsiveness was a significant bonus. 

I made a few customizations to tailor it to my needs. The first was eliminating categories, as they didn't add much value at this stage. Other modifications included updating my 'About' & 'Contact' pages to reflect more personal information and adding a resume page.

#### The Resume Page Concept

I had high expectations for the resume page. It was not just a component of my personal blog but also a dynamic way to update and share my resume. Traditional methods involving Word and multiple file versions were cumbersome, lacking good versioning and easy styling. 

With my resume now online, I can leverage git history for version control and use HTML and SCSS for styling—tools with which I'm more comfortable with and also tend to be much more flexible. I addressed potential concerns about format compatibility for job applications by utilizing `@media print` CSS. This special styling applies only when the page is printed, allowing me to easily generate a PDF of my resume as needed. Below is the SCSS code used to style the print version of my resume:

```scss
$font-size: 14px;
@media print {
  .hide-on-print { display: none !important; }
  a:link { text-decoration: none !important; }
  a[href]:after { content: none !important; }

  .link a { color: black; font-style: italic; text-decoration: none !important; }
  html, body {
    width: 210mm; max-width: 210mm;
    height: 297mm; max-height: 297mm;
    padding: 0; margin: 0;
    h2 { margin: 0; font: 25px Times; }
    h3, p, li { margin: 0; font: $font-size Times; }
    ul { list-style-type: disc; }
    hr { margin-top: 4px; margin-bottom: 4px; }
    .header { text-align: center; }
    .item, .title { padding-top: 3px; padding-bottom: 3px; }
  }
}
```

With the resume page complete, my site was ready for its first post! I'm excited to have a platform to share what I learn and build. I've enjoyed working with Jekyll so much that I'm considering using the same lightspeed template to host all my notes. Since they're already in Markdown, migration should be straightforward. Maybe that will be the subject of another post, along with a deep dive into my note-keeping tools (zk and neovim).
