# Brown Bear Mutual Marketing Site
Codebase for the marketing site of Brown Bear Mutual, a provider of renter's insurance quotes

# Getting Started
First, you will want to install all of the packages needed to work on this site. From the command-line, run:
```
npm install
```

### Project Directory Structure
```
├── dist            : 'distribution', all build tasks output to hear
└── src             : 'source' contains all of the working files and assets
    ├── content     : All of the content files written in markdown
    └── templates   : Templates used to create the page layouts
```

### Working on the files
While editing, you can watch your changes by starting the development server. In the command line, run:
```
npm start
```
This will open your browser to [`localhost:3000`](localhost:3000). The page should reload whenever you make a change to a file.

## TODO
- [ ] Create landing page mockup
- [x] Pick a static site generator (for NodeJS?)
- [ ] Look into CORS/Ajax request on GitHub pages
- [ ] Travis CI for site deployement
- [ ] AdWords and `<meta>` tags for renters insurance?
- [ ] Create Google Analytics account
- [ ] Look for free stock images
