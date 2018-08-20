
let Koa = require('koa');
let app = new Koa();

let Router = require('koa-router');
router = new Router();
let views = require('koa-views');
let path = require('path');
//第一个参数是请求的路径,第二个就是执行的函数
router.get("/login",async (ctx,next)=>{

    //等待页面加载完成以后
  await ctx.render("/login.ejs",{
      title:"我来登录了",
      address : "北京是海淀区"
  })
});

//将router注册到中间件当中去
app.use(router.routes());

//将views注册到中间件
//views的作用就是配合ejs模板引擎使用,配置模板引擎的路径,需要指定模板引擎的后缀,如ejs;
app.use(views(path.join(__dirname,"view"),{extension:"ejs",map:{html:"ejs"}}));

app.listen(3000);
