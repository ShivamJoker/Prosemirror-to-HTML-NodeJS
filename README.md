# Prosemirror JSON to HTML in NodeJS

Code to convert [Prosemirror](https://prosemirror.net/) output document with
tables and list items into HTML using [Happy-DOM](https://github.com/capricorn86/happy-dom) in NodeJS.

## Usecase

1. Save the Prosemirror JSON in your server instead of HTML
2. Convert the Prosemirror JSON into HTML when rendering the content

## Advantages of not saving HTML in server

- Easy to validate the data
- JSON can be natively stored in NoSQL DBs
- Custom styling and attributes for specific elements
- Can be used in native apps to render native elements
