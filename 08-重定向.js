
let Koa = require('koa');
let app = new Koa();

let Router = require('koa-router');
router = new Router();

//第一个参数是请求的路径,第二个就是执行的函数
router.get("/login",(ctx,next)=>{
    //ctx.body = "欢迎登录";
    //重定向操作
    ctx.response.redirect("/home");
});

router.get("/home",(ctx,next)=>{
    /*
    * 逻辑处理完以后自动跳转到首页
    *
    * */
    ctx.body = "欢迎回来";
});

//将router注册到中间件当中去
app.use(router.routes());



app.listen(3000);
