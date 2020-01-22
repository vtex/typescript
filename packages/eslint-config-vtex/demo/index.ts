const arr = [1, 2, 3, 4]
const obj = { foo: 1 }

let foo = 10

let a = 1
let b = 0
;[a, b] = [b, a]
;({ foo } = obj)
