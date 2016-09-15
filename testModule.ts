declare let require: any;

let Etcd = require("node-etcd");

export function makeEtcd() {
 let etcd = new Etcd();
 return etcd;
}
