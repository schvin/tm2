var cp = require('child_process');

cp.execFile('node',['./node_modules/mocha/bin/_mocha','-R','spec'],{}, function(error, stdout, stderr) {
   console.log(stdout);
   console.error(stderr);
   process.exit(0);
   /*if (!error && process.platform !== "win32") {
       cp.execFile('./test/test-client.sh',[],{},function(error, stdout, stderr) {
           console.log(stdout);
           console.error(stderr);
       });
    }
    */
});