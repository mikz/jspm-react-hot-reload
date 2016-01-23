# JSPM + React + SystemJS Hot Reload = :heart:

```shell
npm install
jspm install
make
npm start
```

Open `https://localhost:3000`. 
Edit `src/index.js` and watch the browser change.

It probably does not work right now, because of a patch needed for plugin-babel.

## How it works?

* [jspm 0.17 beta](https://github.com/jspm/jspm-cli/tree/0.17)
* [plugin-babel](https://github.com/systemjs/plugin-babel) # [with a patch](https://github.com/systemjs/plugin-babel/pull/11)
* [systemjs-hot-reloader](https://github.com/capaj/systemjs-hot-reloader)
* [react-transform-jspm-hmr](https://github.com/tyscorp/react-transform-jspm-hmr)
* [chokidar-socket-emitter](https://github.com/capaj/chokidar-socket-emitter)
* [node-spdy](https://github.com/indutny/node-spdy)

