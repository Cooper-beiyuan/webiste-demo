# test-demo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### This demo is used to explain how to modify dynamic content through a JS script.
Example: You can visit http://localhost:8080/ and http://localhost:8080/town, you see different title.
But their code is almost the same. The title and subtitle is from a js script we named page data.
You can see how it work in public/index.html.
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="icon" href="<%= BASE_URL %>favicon.ico">
    <link href="https://cdn-dev.xiongmaoboshi.com/website/page/<%= htmlWebpackPlugin.options.data %>/data.js" rel=preload as=script>;
    <title><%= htmlWebpackPlugin.options.title %></title>
  </head>
  <body>
    <noscript>
      <strong>We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <script src="https://cdn-dev.xiongmaoboshi.com/website/page/<%= htmlWebpackPlugin.options.data %>/data.js"></script>;
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
</html>
```

There is one page data, you can see. Can help you understand more easily.
<br>
https://cdn-dev.xiongmaoboshi.com/website/page/games/dr-panda-trucks/data.js