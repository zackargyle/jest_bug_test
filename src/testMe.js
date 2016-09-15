let t = require('./testModule');
let etcd = t.makeEtcd();

etcd.get("test", function callback(err, res) {
  console.log("Error: ", err);
  console.log("Return: ", res);
});


