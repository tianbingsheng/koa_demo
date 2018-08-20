
let Koa = require('koa');
let app = new Koa();

let Router = require('koa-router');
router = new Router();

//第一个参数是请求的路径,第二个就是执行的函数
router.get("/login",(ctx,next)=>{
   let param = ctx.request.querystring; //获取所有的请求参数,获取url里面的参数部分
    console.log(param);

    //获取请求参数,属性name的值
    let name = ctx.request.query.name;
    console.log(name);
    ctx.body = "欢迎登录";
});

//params不属于request的属性,直接通过ctx来获取;
router.get("/home/:id",(ctx,next)=>{
    let id = ctx.params.id ;
    console.log(id);
    ctx.body = "欢迎回来";
});

//将router注册到中间件当中去
app.use(router.routes());



app.listen(3000);
