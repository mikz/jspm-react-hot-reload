var spdy = require('spdy'),
    fs = require('fs'),
    serveStatic = require('serve-static'),
    finalhandler = require('finalhandler')


var options = {
  key: fs.readFileSync(__dirname + '/localhost.key'),
  cert: fs.readFileSync(__dirname + '/localhost.crt'),
  ca: fs.readFileSync(__dirname + '/localhost.crt'),

  spdy: {
    protocols: [ 'h2', 'spdy/3.1', 'http/1.1' ],
    plain: false,

    connection: {
      windowSize: 1024 * 1024, // Server's window size
    }
  }
};


// Serve up public/ftp folder
var serve = serveStatic(__dirname, {
  'index': ['index.html', 'index.htm'],
  'setHeaders': function(res, path, stat) {
    if (path.includes('/jspm_packages/')) {
      res.setHeader('Cache-Control', 'public, max-age=36000')
      res.setHeader('Expires',' Thu, 15 Apr 2020 20:00:00 GMT')
    } else {
      res.setHeader('Cache-Control', 'public, max-age=0')
    }

  }
})

var server = spdy.createServer(options, function(req, res) {
  var done = finalhandler(req, res)
  serve(req, res, done)
});

require('chokidar-socket-emitter')({app: server})

server.listen(3000);
