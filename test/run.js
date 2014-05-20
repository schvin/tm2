var cp = require('child_process');

cp.exec('mocha -R spec',function(error, stdout, stderr) {
   if (error) {
     console.log(error.stack);
     console.log('Error code: '+error.code);
     console.log('Signal received: '+error.signal);
     process.exit(1);
   }
   console.log(stdout);
   console.error(stderr);
   if (process.platform !== "win32") {
       cp.exec('.test/test-client.sh',function(error, stdout, stderr) {
           if (error) {
             console.log(error.stack);
             console.log('Error code: '+error.code);
             console.log('Signal received: '+error.signal);
             process.exit(1);
           }
           console.log(stdout);
           console.error(stderr);
       });    
   }
});