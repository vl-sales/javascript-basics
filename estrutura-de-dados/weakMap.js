// no weakMap a chave deve ser um objeto
// A principal diferença é que se o objeto que está como chave for alterado
// O valor não será mantido em memoria

const wm = new WeakMap()
let key = { js: '123' }

wm.set(key, '...')
console.log(wm.get(key))

key = null

console.log(wm.get(key))