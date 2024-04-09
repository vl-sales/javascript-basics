const arr = [1, 2, 3, 4, 5]

for (const value of arr)  {
  if (value % 2 == 0) {
    continue
  }
  console.log(value)
}

let i = 0
while (true) {
  console.log(i)
  if (i > 10) {
    break
  }
  i++
}