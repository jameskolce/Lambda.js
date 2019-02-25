import { ff, f } from './'

export default `
  Functional Forms

  |- ${ff.pipe([
    x => x + 1,
    x => x * x,
    x => x + 10
  ])(1) === 14} Pipe.

  |- ${f.tuple.equal(ff.mapFromLast([1, 2, 3, 4, 5], (c, l) => c + l), [1, 3, 6, 10, 15])} MapFromLast.

`
