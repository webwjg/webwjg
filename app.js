//app_server_00/app.js
//0:下载mysql express模块
//1:引入二个模块 mysql express
const mysql = require("mysql");
const express = require("express");
//1.1 引入模块 cors
const cors = require("cors");



//2:创建连接池 很大提高效率方法
var pool = mysql.createPool({
  host     : process.env.MYSQL_HOST,
  port     : process.env.MYSQL_PORT,
  user     : process.env.ACCESSKEY,
  password : process.env.SECRETKEY,
  database : 'app_' + process.env.APPNAME
});
//3:创建express对象
var server = express();
//3.1 配置允许访问列 脚手架8080
// server.use(cors({
//   origin:["http://127.0.0.1:8080",
//   "http://localhost:8080","http://127.0.0.1:8081/"],
//   credentials:true
// }));
//3.11:加载模块 express-session
//并且对其配置  顺序问题
const session = require("express-session");
server.use(session({
  secret:"128位随机字符串",
  resave:false,
  saveUninitialized:true,
  cookie:{
    maxAge:1000*60*60
  }
}))





//3.2 配置静态资源目录 public
server.use(express.static("public"));
//3.3：配置第三方中间件
const bodyParser = require("body-parser");
//3.4: 配置json是否是自动转换 
server.use(bodyParser.urlencoded({extended:false}))

//4:为express对象绑定监听端口 3000
server.listen(5050);


//首页轮博
server.get('/indexlunbo',(req,res)=>{
     var sql='select * from index_lunbo';
     pool.query(sql,(err,result)=>{
      //  if(err)throw err;
      if(err){
        console.log(err);
        res.send({code:-1,msg:err.message});
        return;
        }
      //  console.log(result);
       res.send(result);
     })
})

//首页二楼
server.get('/indextwofl',(req,res)=>{
  var sql='select * from index_twofl';
  pool.query(sql,(err,result)=>{
    // if(err)throw err;
    if(err){
      console.log(err);
      res.send({code:-1,msg:err.message});
      return;
      }
    // console.log(result);
    res.send(result);
  })
})
//首页三楼
server.get('/indexthreefl',(req,res)=>{
  var sql='select * from index_threefl';
  pool.query(sql,(err,result)=>{
    // if(err)throw err;
    if(err){
      console.log(err);
      res.send({code:-1,msg:err.message});
      return;
      }
    //  console.log(result);
    res.send(result);
  })
})
//首页四楼
server.get('/indexfourfl',(req,res)=>{
  var sql='select * from index_fourfl';
  pool.query(sql,(err,result)=>{
    if(err)throw err;
    // console.log(result);
    res.send(result);
  })
})
//分页1
server.get('/list',(req,res)=>{
   var pno=req.query.pno;
   var pageSize=req.query.pageSize;
   if(!pno){
     pno=1;
   }
   if(!pageSize){
      pageSize=18;
   }
   var sql='select * from onelist1 limit ?,?';
   var offset=(pno-1)*pageSize;
   pageSize=parseInt(pageSize);
   pool.query(sql,[offset,pageSize],(err,result)=>{
      if(err) throw err;
      res.send({code:1,data:result});
   })

})
server.get('/listpage2',(req,res)=>{
         var sql='select * from listpage2'
         pool.query(sql,(err,result)=>{
          if(err) throw err;
          res.send({code:1,data:result});
       })
})
//详情页数据
server.get('/detail',(req,res)=>{
 // console.log(req.query.did);
  var did=req.query.did;
  if(did!==1){
    did=1
  }
  //console.log(did);
      var sql='select * from detail where did=?'
      pool.query(sql,[did],(err,result)=>{
           if(err) throw err;
           res.send({code:1,data:result});
      })
})

//详情页评论数据
server.get('/comm',(req,res)=>{
  var sql='select * from commdata'
  pool.query(sql,(err,result)=>{
       if(err) throw err;
       res.send(result);
  })
})

//详情页添加关注
server.post('/addconcern',(req,res)=>{
  //console.log(req.body.author);
  var  chinesename=req.body.chinesename;
  var  material=req.body.material;
  var  author=req.body. author;
  var  type=req.body.type;
  var  size=req.body.size;
  var  creattime=req.body.creattime;
  var  positnews=req.body.positnews;
  var  exhibition=req.body.exhibition;
 
  var sql='insert into add_concern values(null,?,?,?,?,?,?,?,?)';
  pool.query(sql,[chinesename,material,author,type,size,creattime,positnews,exhibition],(err,result)=>{
     //console.log(result);
     if(result.affectedRows>0){
       res.send({code:1})
     }else{
      res.send({code:0})
     }
     
  })
  
})


  //我的关注页面
server.get('/follow',(req,res)=>{
    var sql='select * from add_concern';
    pool.query(sql,(err,result)=>{
      if(err)throw err;
      //console.log(result);
      res.send({code:1,data:result})

    })
})

//我的关注页面删除
server.get('/defollow',(req,res)=>{
    
    var cid=req.query.cid;
   // console.log(cid);
    var sql='delete from add_concern where cid=?'
    pool.query(sql,[cid],(err,result)=>{
      if(err)throw err;
      //console.log(result.length);
      if(result.affectedRows>0){
        res.send({code:1})
      }
    })
})



//接收评论数据
server.post('/subcomm',(req,res)=>{
 // console.log(req.body.img_url);
   var img_url=req.body.img_url;
   var nickname=req.body.nickname;
   var commcont=req.body.commcont;
   var sql='insert into commdata values(null,?,?,?)';
   pool.query(sql,[img_url,nickname,commcont],(err,result)=>{
          if(err)throw err;
         // console.log(result.affectedRows);
          var mid=result. insertId;
          if(result.affectedRows>0){
             res.send({code:1,data:mid});
          }
         
   })
})

//人物详情页
server.get('/person',(req,res)=>{
  //pno 页码    pageSize 页数据
  var pno=req.query.pno;  
  var pageSize=req.query.pageSize;
  if(!pno){pno=1}
  if(!pageSize)pageSize=4;


  var sql='select * from artlist limit ?,?';
  var offset=(pno-1)*pageSize;  //相应页的第一条数据的id
  pool.query(sql,[offset,pageSize],(err,result)=>{
   // console.log(result);
    if(err)throw err;
    if(result.length==0){
      res.send({code:0});
    }else{
      res.send({code:1,data:result});
    }
    
  })
})
//人物搜索功能
server.post('/search',(req,res)=>{
   // console.log(req.body.aname);
    var aname=req.body.aname
    var sql=`select * from artlist where aname like '%${aname}%' `
    pool.query(sql,(err,result)=>{
      //console.log(result.length);
      if(err)throw err;
      if(result.length==0){
        res.send({code:0})
      }else{
         res.send({code:1,data:result})
      }
     

    })
})
//获取展览信息  发现页
server.get('/exhnews',(req,res)=>{
 
  var sql='select * from exhnews'
  pool.query(sql,(err,result)=>{
    //console.log(result);
    res.send({code:1,data:result});
  })
})
//学术研究信息 发现页
server.get('/research',(req,res)=>{
 
  var sql='select * from research'
  pool.query(sql,(err,result)=>{
    //console.log(result);
    res.send({code:1,data:result});
  })
})
//学术研究详情页
server.get('/study',(req,res)=>{
  var tid=req.query.tid;
  //console.log(tid);
  var sql='select * from study where tid=?'
  pool.query(sql,[tid],(err,result)=>{
    //console.log(result);
    res.send({code:1,data:result});
  })
})

//注册
server.post('/reg',(req,res)=>{
  var upwd=req.body.upwd;
  var zh=req.body.zh;
  var uemail=req.uemail;
  //console.log(zh);
  //验证是否已有账号
  var sql='select * from usernews where zh=?';
  pool.query(sql,[zh],(err,result)=>{
      //console.log(result.length);
      if(result.length>0){
        res.send({code:0});
      }else{
        var sql='insert into usernews (zh,upwd,uemail) values(?,?,?)';
        pool.query(sql,[zh,upwd,uemail],(err,result)=>{
     // console.log(result);
            if(result.affectedRows>0){
                res.send({code:1});
            }
        })
      }
  })




})

//登录
server.post('/login',(req,res)=>{
  var upwd=req.body.upwd;
  var zh=req.body.zh;

  var sql='select * from usernews where zh=? and upwd=?';
  pool.query(sql,[zh,upwd],(err,result)=>{
     // console.log(result.length);
      if(result.length>0){
        res.send({code:1,data:result});
      }else{
        res.send({code:0})
      }
  })
});

//修改密码
server.post('/updatep',(req,res)=>{
  //console.log(req.body.xpwd);
  var zh=req.body.zh;
  var upwd=req.body.xpwd;
  var sql='update usernews set upwd=? where zh=?';
  pool.query(sql,[upwd,zh],(err,result)=>{
    //console.log(result);
    if(err)throw err;
    if(result.affectedRows>0){
      res.send({code:1});
    }
  })

})




//首页搜索功能
server.post('/insearch',(req,res)=>{
     // console.log(req.body.title);
      var dname=req.body.title;
      var sql=`select * from detail where concat(dname,author) like '%${dname}%'`;
      pool.query(sql,(err,result)=>{
        if(err)throw err;
         //console.log(result);
        if(result.length==0){
          res.send({code:0});
        }else{
          res.send({code:1,data:result});
        }
        
      })

});

