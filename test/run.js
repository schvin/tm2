var cp = require('child_process');

cp.execFile('mocha',['-R','spec'],{}, function(error, stdout, stderr) {
   console.log(stdout);
   console.error(stderr);
   if (!error && process.platform !== "win32") {
       cp.execFile('./test/test-client.sh',[],{},function(error, stdout, stderr) {
           console.log(stdout);
           console.error(stderr);
       });
    }
});