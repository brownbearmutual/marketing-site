# _Brown Bear Mutual_ Marketing Site
Codebase for the marketing site of _Brown Bear Mutual_, a insurance solution provider.

# Getting Started
First, run `npm install` to install all of the dependencies needed to work on this site.

### Working on the Site
While editing, you can use `npm start` to run the development server. This will open the website in your browser and automatically reload the page whenever a change is made.

### Directory Structure
```
├── dist           :  Where the final build of the website, ready for 'distribution', is outputted
└── src            : 'Source' contains all of the working files and assets
    ├── assets     : Assets such as
    │   └── img    : Images used in the website
    ├── content    : All of the content files that become the website's pages
    ├── styles     : Stylesheets used to style the site (using Sass preprocessor)
    └── templates  : Templates used to create the page layouts
```

### Writing content
All files stored in the `content` folder become the web pages of the site. They should be written in [Markdown](https://guides.github.com/features/mastering-markdown/#GitHub-flavored-markdown) with a block of [YAML](http://yaml.org) front matter and **must** contain a valid `template` name.

#### Example of a Content Page
```yaml
---
title: Example
template: example.pug
keywords: A, comma, seperated, list, of, SEO, search, terms
description: A description that will appear in search results
---

# Example Header
A paragraph of example text.
```

#### Front Matter Variables
* `title`: The page title at it appear in the browser tab.
* `template`: Template to be used. See the list of available [templates](#templates).
* `keywords`: Keywords to use for search engine optimization.
* `description`: A description about the page that appears on search page results.

### Templates
`landing.pug`: Template for the landing page.

### TODO
- [ ] Create landing page mockup
- [ ] Document NPM scripts
- [ ] Look into CORS/Ajax request on GitHub pages
- [ ] Travis CI for site deployement
- [x] Add `<meta>` tags to templates for SEO
- [ ] Create _Google Analytics_ account
- [ ] Look for free stock images
- [x] Pick a static site generator (for NodeJS?)
