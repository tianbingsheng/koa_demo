
let fs = require('fs');
let Koa = require('koa');
let koa = new Koa();

//通过koa.use去注册中间件,所有的网络请求都会通过中间件
//请求的信息在ctx.request
//响应的信息在ctx.response去返回给客户端
//若中间件不调用next()的方法,则后面的中间件不会去执行


koa.use(function (ctx,next) {
    //响应体
    console.log(ctx.response.type);  //响应的类型

    //注意如果使用createreadStream返回给客户端需要设置响应的数据类型
    //文字默认的返回类型是text/plain

    ctx.response.type = "text/html";         //字符串默认的响应类型就是text/plain ;
    //返回给客户端一个网页数据
    ctx.response.body = fs.createReadStream("view/index.html");
    console.log(ctx.response.type);   //响应的类型

    //调用下一个中间件
    //next()       //调用next()后面的中间件才会去执行
});

koa.listen(3000);
