
let Koa = require('koa');
let koa = new Koa();


//通过koa.use去注册中间件,所有的网络请求都会通过中间件
//请求的信息在ctx.request
//响应的信息在ctx.response去返回给客户端
//若中间件不调用next()的方法,则后面的中间件不会去执行


//旧的方式
koa.use(function (ctx,next) {
    //响应体
    ctx.response.body = "hello node.js";
    console.log(ctx.response.type);
    //调用下一个中间件
    next()       //调用next()后面的中间件才会去执行
});

//新的方式
koa.use(ctx=>{
    ctx.body = "haha";   //ctx.body  简写代表的就是是response的Body
    //获取请求路径
    console.log(ctx.request.url);  //比如ctx.url   它是request的请求路径 也是可以简写
});
koa.listen(3000);
