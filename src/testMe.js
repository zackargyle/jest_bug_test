let makeEtcd = require('./testModule');
let etcd = makeEtcd();

etcd.get("test", function callback(err, res) {
  console.log("Error: ", err);
  console.log("Return: ", res);
});


