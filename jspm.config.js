SystemJS.config({
  packageConfigPaths: [
    "github:*/*.json",
    "npm:@*/*.json",
    "npm:*.json"
  ],
  globalEvaluationScope: false,
  transpiler: "plugin-babel",
  babelOptions: {
    "presets": [
      "babel-preset-react"
    ],
    "plugins": [
      [
        "react-transform",
        {
          "transforms": [
            {
              "transform": "react-transform-jspm-hmr",
              "imports": [
                "react"
              ]
            }
          ]
        }
      ]
    ]
  },

  map: {
    "babel-preset-react": "npm:babel-preset-react@6.3.13",
    "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
    "core-js": "npm:core-js@1.2.6",
    "events": "github:jspm/nodelibs-events@0.2.0-alpha",
    "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
    "net": "github:jspm/nodelibs-net@0.2.0-alpha",
    "path": "github:jspm/nodelibs-path@0.2.0-alpha",
    "plugin-babel": "npm:systemjs-plugin-babel@0.0.2",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "react": "npm:react@0.14.6",
    "react-dom": "npm:react-dom@0.14.6",
    "react-transform": "npm:babel-plugin-react-transform@2.0.0",
    "react-transform-jspm-hmr": "npm:react-transform-jspm-hmr@1.0.1",
    "stream": "github:jspm/nodelibs-stream@0.2.0-alpha",
    "systemjs-hot-reloader": "github:capaj/systemjs-hot-reloader@0.5.4",
    "tty": "github:jspm/nodelibs-tty@0.2.0-alpha",
    "util": "github:jspm/nodelibs-util@0.2.0-alpha"
  },

  packages: {
    "app": {
      "format": "esm"
    },
    "github:capaj/systemjs-hot-reloader@0.5.4": {
      "map": {
        "debug": "npm:debug@2.2.0",
        "socket.io-client": "github:socketio/socket.io-client@1.4.4",
        "weakee": "npm:weakee@0.9.1"
      }
    },
    "github:jspm/nodelibs-buffer@0.2.0-alpha": {
      "map": {
        "buffer-browserify": "npm:buffer@4.3.0"
      }
    },
    "github:jspm/nodelibs-stream@0.2.0-alpha": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:babel-code-frame@6.3.13": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.35",
        "chalk": "npm:chalk@1.1.1",
        "esutils": "npm:esutils@2.0.2",
        "js-tokens": "npm:js-tokens@1.0.2",
        "line-numbers": "npm:line-numbers@0.2.0",
        "repeating": "npm:repeating@1.1.3"
      }
    },
    "npm:babel-helper-builder-react-jsx@6.3.13": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.35",
        "babel-types": "npm:babel-types@6.4.5",
        "esutils": "npm:esutils@2.0.2",
        "lodash": "npm:lodash@3.10.1"
      }
    },
    "npm:babel-messages@6.3.18": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.35"
      }
    },
    "npm:babel-plugin-react-transform@2.0.0": {
      "map": {
        "array-find": "npm:array-find@1.0.0"
      }
    },
    "npm:babel-plugin-syntax-flow@6.3.13": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.35"
      }
    },
    "npm:babel-plugin-syntax-jsx@6.3.13": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.35"
      }
    },
    "npm:babel-plugin-transform-flow-strip-types@6.4.0": {
      "map": {
        "babel-plugin-syntax-flow": "npm:babel-plugin-syntax-flow@6.3.13",
        "babel-runtime": "npm:babel-runtime@5.8.35"
      }
    },
    "npm:babel-plugin-transform-react-display-name@6.4.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.35"
      }
    },
    "npm:babel-plugin-transform-react-jsx-source@6.3.13": {
      "map": {
        "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.3.13",
        "babel-runtime": "npm:babel-runtime@5.8.35"
      }
    },
    "npm:babel-plugin-transform-react-jsx@6.4.0": {
      "map": {
        "babel-helper-builder-react-jsx": "npm:babel-helper-builder-react-jsx@6.3.13",
        "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.3.13",
        "babel-runtime": "npm:babel-runtime@5.8.35"
      }
    },
    "npm:babel-preset-react@6.3.13": {
      "map": {
        "babel-plugin-syntax-flow": "npm:babel-plugin-syntax-flow@6.3.13",
        "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.3.13",
        "babel-plugin-transform-flow-strip-types": "npm:babel-plugin-transform-flow-strip-types@6.4.0",
        "babel-plugin-transform-react-display-name": "npm:babel-plugin-transform-react-display-name@6.4.0",
        "babel-plugin-transform-react-jsx": "npm:babel-plugin-transform-react-jsx@6.4.0",
        "babel-plugin-transform-react-jsx-source": "npm:babel-plugin-transform-react-jsx-source@6.3.13"
      }
    },
    "npm:babel-traverse@6.4.5": {
      "map": {
        "babel-code-frame": "npm:babel-code-frame@6.3.13",
        "babel-messages": "npm:babel-messages@6.3.18",
        "babel-runtime": "npm:babel-runtime@5.8.35",
        "babel-types": "npm:babel-types@6.4.5",
        "babylon": "npm:babylon@6.4.5",
        "debug": "npm:debug@2.2.0",
        "globals": "npm:globals@8.18.0",
        "invariant": "npm:invariant@2.2.0",
        "lodash": "npm:lodash@3.10.1",
        "repeating": "npm:repeating@1.1.3"
      }
    },
    "npm:babel-types@6.4.5": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.35",
        "babel-traverse": "npm:babel-traverse@6.4.5",
        "esutils": "npm:esutils@2.0.2",
        "lodash": "npm:lodash@3.10.1",
        "to-fast-properties": "npm:to-fast-properties@1.0.1"
      }
    },
    "npm:babylon@6.4.5": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.35"
      }
    },
    "npm:buffer@4.3.0": {
      "map": {
        "base64-js": "npm:base64-js@1.0.2",
        "ieee754": "npm:ieee754@1.1.6",
        "isarray": "npm:isarray@1.0.0"
      }
    },
    "npm:chalk@1.1.1": {
      "map": {
        "ansi-styles": "npm:ansi-styles@2.1.0",
        "escape-string-regexp": "npm:escape-string-regexp@1.0.4",
        "has-ansi": "npm:has-ansi@2.0.0",
        "strip-ansi": "npm:strip-ansi@3.0.0",
        "supports-color": "npm:supports-color@2.0.0"
      }
    },
    "npm:debug@2.2.0": {
      "map": {
        "ms": "npm:ms@0.7.1"
      }
    },
    "npm:global@4.3.0": {
      "map": {
        "min-document": "npm:min-document@2.18.0",
        "process": "npm:process@0.5.2"
      }
    },
    "npm:has-ansi@2.0.0": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.0.0"
      }
    },
    "npm:invariant@2.2.0": {
      "map": {
        "loose-envify": "npm:loose-envify@1.1.0"
      }
    },
    "npm:is-finite@1.0.1": {
      "map": {
        "number-is-nan": "npm:number-is-nan@1.0.0"
      }
    },
    "npm:line-numbers@0.2.0": {
      "map": {
        "left-pad": "npm:left-pad@0.0.3"
      }
    },
    "npm:loose-envify@1.1.0": {
      "map": {
        "js-tokens": "npm:js-tokens@1.0.2"
      }
    },
    "npm:min-document@2.18.0": {
      "map": {
        "dom-walk": "npm:dom-walk@0.1.1"
      }
    },
    "npm:react-proxy@1.1.2": {
      "map": {
        "lodash": "npm:lodash@3.10.1",
        "react-deep-force-update": "npm:react-deep-force-update@1.0.1"
      }
    },
    "npm:react-transform-jspm-hmr@1.0.1": {
      "map": {
        "global": "npm:global@4.3.0",
        "react-proxy": "npm:react-proxy@1.1.2"
      }
    },
    "npm:react@0.14.6": {
      "map": {
        "fbjs": "npm:fbjs@0.6.1"
      }
    },
    "npm:readable-stream@2.0.5": {
      "map": {
        "core-util-is": "npm:core-util-is@1.0.2",
        "inherits": "npm:inherits@2.0.1",
        "isarray": "npm:isarray@0.0.1",
        "process-nextick-args": "npm:process-nextick-args@1.0.6",
        "string_decoder": "npm:string_decoder@0.10.31",
        "util-deprecate": "npm:util-deprecate@1.0.2"
      }
    },
    "npm:repeating@1.1.3": {
      "map": {
        "is-finite": "npm:is-finite@1.0.1"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "readable-stream": "npm:readable-stream@2.0.5"
      }
    },
    "npm:strip-ansi@3.0.0": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.0.0"
      }
    }
  }
});
