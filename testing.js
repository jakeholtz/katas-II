var tests = [
  {actualParams: ["jake", "ekaj"], expected: true},
  {actualParams: ["jak", "akj"], expected: true},
  {actualParams: ["tom", "mut"], expected: false},
  {actualParams: ["joe", "tm"], expected: false},
]

for (var i = 0; i < tests.length; i++) {
  var t0 = performance.now();
  var params = JSON.stringify(tests[i].actualParams);
  var actual = JSON.stringify(func(...tests[i].actualParams));
  var t1 = performance.now();
  var time = (t1 - t0).toFixed(5)
  var expected = JSON.stringify(tests[i].expected)
  var result = (actual === expected ? '✅' : '❌');
  console.log(result + 'PARAMS: ' + params + ' – EXPECTED: ' + expected + ' – ACTUAL: ' + actual + (" (Process took " + time +" ms)"));
}