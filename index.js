var redbird = require('redbird')({
  port: 80
});

var hosts = process.env.ETCD_HOSTS.split(',');
if (hosts.length === 0) {
  console.log('no ETCD_HOSTS specified');
  process.exit();
}

var options = {
  hosts: hosts, // REQUIRED - you must define array of cluster hosts
  path: 'redbird', // OPTIONAL - path to etcd keys
};

require('redbird').etcd(redbird, options);