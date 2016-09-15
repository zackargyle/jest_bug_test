declare let require: any;

test('test1', () => {
  let t = require('../src/testModule');
  let etcd = t.makeEtcd();
  etcd.get("test", function callback(err, res) {
  console.log("Error: ", err);
  console.log("Return: ", res);
  expect(err).toBeTruthy();
});
});
