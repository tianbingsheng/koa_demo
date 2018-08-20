
let Koa = require('koa');
let app = new Koa();

let Router = require('koa-router');
router = new Router();

//第一个参数是请求的路径,第二个就是执行的函数
router.get("/login",(ctx,next)=>{
    ctx.body = "欢迎登录";
});

router.get("/register",(ctx,next)=>{
    ctx.body = "欢迎注册";
});

//将router注册到中间件当中去
app.use(router.routes());



app.listen(3000);
