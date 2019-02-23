// ·············································································
// Functional Forms

export const ff = { }

// ·············································································
//  Functions

export const f = {
  pipe: (fns: Array<any>): any => (x: any) =>
    fns.reduce((v, f) => f(v), x),

  pipeAsync: (fns: Array<any>): any => (x: any) =>
    fns.reduce((v, f) => v.then(f), Promise.resolve(x))
}

// ·············································································
// Impure functions

export const sef = {
  log: (input: any): any => {
    console.log(input)
    return input
  }
}
