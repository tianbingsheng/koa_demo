
let Koa = require('koa');
let app = new Koa();

//es6新的语法
//async标记的方法就是异步的方法,如果调用异步的方法,我们可以使用await标记,就是同步调用异步的方法
//如果方法提里面使用了await,则所在的方法必须使用async进行标记;

app.use(async (ctx,next)=>{
    console.log(`${ctx.method} ${ctx.path} ${ctx.url}`);  //ctx.path ctx.url的区别
    await next();

});
//异步中间件
app.use(async (ctx,next)=>{
   // if (ctx.path == "/login")
   ctx.body = "hello";
});
app.listen(3000);
