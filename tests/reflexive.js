const setRelation = require('./../setrelation.js');

const set = [1,2,3,4];

const rel1 = [
  {
    a: 1,
    b: 1
  },
  {
    a: 2,
    b: 2
  },
  {
    a: 3,
    b: 3
  },
  {
    a: 4,
    b: 4
  }
];

var sr1 = new setRelation(set, rel1);
if (! sr1.reflexive() ) {
  console.error("FAIL: Set relation test one should be reflexive.");
  process.exit(1);
}
console.log("PASS: Set relation test one is reflexive.");

const rel2 = [
  {
    a: 1,
    b: 1
  }
];

var sr2 = new setRelation(set, rel2);
if ( sr2.reflexive() ) {
  console.error("FAIL: Set relation test two should not be reflexive.");
  process.exit(1);
}
console.log("PASS: Set relation test two is not reflexive.");
console.log(sr2.getError());

const rel3 = [
  {
    a: 1,
    b: 1
  },
  {
    a: 2,
    b: 2
  },
  {
    a: 3,
    b: 3
  },
  {
    a: 4,
    b: 1
  }
];

var sr3 = new setRelation(set, rel3);
if ( sr3.reflexive() ) {
  console.error("FAIL: Set relation test three should not be reflexive.");
  process.exit(1);
}
console.log("PASS: Set relation test three is not reflexive.");
console.log(sr3.getError());
