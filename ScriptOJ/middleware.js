const app = {
  fns: [],
  callback(ctx) {
    console.log(ctx)
  },
  use(fn) {
    this.fns.push(fn)
  },
  go(ctx) {
    let index = 0
    const next = () => {
      index++
    }
    this.fns.forEach((fn, i) => {
      if (index === i) fn(ctx, next)
    })
    index === this.fns.length && this.callback(ctx)
  }
}

app.use((ctx, next) => {
  ctx.name = 'Lucy'
  next()
})

app.use((ctx, next) => {
  ctx.age = 12
  next()
})

app.use((ctx, next) => {
  console.log(`${ctx.name} is ${ctx.age} years old.`) // => Lucy is 12 years old.
  next()
})

app.go({})
