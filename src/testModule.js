let Etcd = require("node-etcd");

module.exports = function makeEtcd() {
 let etcd = new Etcd();
 return etcd;
}
