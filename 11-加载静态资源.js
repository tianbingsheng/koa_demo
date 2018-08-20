
let Koa = require('koa');
let app = new Koa();

let Router = require('koa-router');
router = new Router();

let fs = require('fs');
let static = require('koa-static');
let path = require('path');


//第一个参数是请求的路径,第二个就是执行的函数
router.get("/login",(ctx,next)=>{
    //响应的返回类型
    ctx.response.type = "text/html" ;
    ctx.body = fs.createReadStream("./view/index.html");
});

//将router注册到中间件当中去
app.use(router.routes());
//注册静态资源,注册到中间件当中
//静态资源的路径以注册的路径为根目录取访问
app.use(static(path.join(__dirname,"static")));
app.listen(3000);



