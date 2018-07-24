const Koa = require('koa')
const app = new Koa()
const router = require('koa-router')()

router.get('/api',(ctx)=> {
  const data = {
    name: 'fjj',
    age: 19
  }
  const call = ctx.query.jsonpcallback;
  if(call) {
    ctx.body = call + '('+ JSON.stringify(data) +')'
  }else {
    ctx.body = data
  }
})


app.use(router.routes())
app.listen(3000)