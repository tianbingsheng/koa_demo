
let Koa = require('koa');
let app = new Koa();


/*
新语法
* (ctx,next)=>{

}
*
* 等同于
* function(ctx,next){
* }
*
*
* */
app.use((ctx,next)=>{
    console.log(">>one");
    next();
    console.log("<<one")
});
app.use((ctx,next)=>{
    console.log(">>two");
    next();
    console.log("<<two")
});
app.use((ctx,next)=>{
    console.log(">>three");
    next();
    console.log("<<three")
});
app.use((ctx,next)=>{
    ctx.body = "中间件";
});

app.listen(3000);

























