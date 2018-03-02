const [node, script, ...args] = process.argv;

if (args.length > 0 && args[0] === 'server') {
  const Server = require('./server').Server;
  Server.run();
} else {
  console.log('run client');
}
