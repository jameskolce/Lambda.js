// ·············································································
// Functional Forms

export const ff = {
  pipe: (fns: Array<any>): any => (x: any) =>
    fns.reduce((v, f) => f(v), x),

  pipeAsync: (fns: Array<any>): any => (x: any) =>
    fns.reduce((v, f) => v.then(f), Promise.resolve(x)),

  mapFromLast: (xs: Array<any>, f: (current: any, previous: any) => any, seed: any = false): Array<any> => {
    if (!xs[0]) return []

    const application = f(xs[0], seed)

    return [ application ].concat(ff.mapFromLast(xs.slice(1), f, application))
  }
}

// ·············································································
//  Functions

export const f = {
  tuple: {
    equal: (xs: Array<any>, ys: Array<any>): boolean =>
      xs.every((x, xi) => x === ys[xi])
  }
}

// ·············································································
// Impure functions

export const sef = {
  log: (input: any): any => {
    console.log(input)
    return input
  }
}
