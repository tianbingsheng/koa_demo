
let Koa = require('koa');
let app = new Koa();

let Router = require('koa-router');
router = new Router();

let koaBody = require('koa-body');

router.post("/login",(ctx,next)=>{
    let name = ctx.request.body.username ;
    console.log(name);
    ctx.body = "欢迎登录";
});

app.use(router.routes());
//注册koa-Body
app.use(koaBody());


app.listen(3000);
