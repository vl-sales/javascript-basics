// Semelhante ao weakMap. Só armazena objetos e se a variável que armazena o objeto que está
// no weakSet, esta será removida do set

const siteVisitors = new WeakSet()
let user1 = { name: 'xxxxx', email: 'xxxxxxx'  }
let user2 = { name: 'yyyyy', email: 'yyyyyyy'  }
let user3 = { name: 'zzzzz', email: 'zzzzzzz'  }

siteVisitors.add(user1)
siteVisitors.add(user3)

console.log(siteVisitors.has(user1))
console.log(siteVisitors.has(user2))

user1 = null

console.log(siteVisitors.has(user1))