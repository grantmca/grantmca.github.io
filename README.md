# My Personal Blog

## About

Welcome to my personal blog! Powered by the LightSpeed theme, this website is a space where I share my thoughts, experiences, and passions. LightSpeed's fast, simple, and privacy-respecting Jekyll theme is perfect for delivering a seamless reading experience. With post support, dynamic categories, and a layout designed to highlight my content, this site is my corner of the internet to explore ideas and connect with readers.

Originally built as a landing page / personal website template, LightSpeed has been customized to serve as the foundation for my blogging journey.

## Requirements

Ensure these gems are included in your Gemfile to get the most out of the LightSpeed theme:

```
gem "jekyll"
gem "jekyll-feed"
gem "jekyll-seo-tag"
gem "jekyll-paginate-v2"
```

After adding, execute `bundle install` to install them. You can omit `jekyll-seo-tag` if SEO isn't a priority, without affecting the website's main functionalities.

## Features

- **Blog Posts:** Share and manage your articles easily.
- **Pagination and Dynamic Categories:** Navigate through content with ease.
- **RSS Feed and SEO:** Keep your readers updated and make your site more discoverable.
- **Mobile Optimization:** Ensure a smooth experience across devices.
- **Syntax Highlighting:** Make your code snippets eye-catching with `prism.js`.

## JavaScript Requirements

### Syntax Highlighting

Customize syntax highlighting through `prism.js` or opt for a CDN for more flexibility. Instructions available [here](https://prismjs.com/index.html#basic-usage-cdn).

### Analytics

I use Plausible Analytics for privacy-friendly visitor insights. Configure it in the `_config.yml` like so:

```yaml
analytics:
  plausible:
    enabled: true
    site_fqdn: 'myblog.example.com'
    script_source: 'https://plausible.io/js/script.js'
```

- `enabled`: Turn page-view analytics on or off.
- `site_fqdn`: Your website's FQDN for Plausible reporting.
- `script_source`: URLs to Plausible script. Adjustable for self-hosted instances.

I'm open to integrating more privacy-respecting analytics tools. Feel free to suggest!

## Acknowledgements

A shoutout to Jeremy Thomas for the initial CSS styles from 'Web Design in 4 Minutes'. Also, immense gratitude to my support system for the encouragement and feedback on theme adjustments.
