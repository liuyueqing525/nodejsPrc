const http=require('http');

const ejs = require('ejs');
const url = require('url');

http.createServer((req,res)=>{

	res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
	var pathname =url.parse(req.url).pathname;
	var data = '你好，我是后台的数据啊！';

	var list =['111','222','3333','4444'];
	if(pathname=='/login'){
		ejs.renderFile('views/node.ejs',{
			msg:data,
			list:list,
		},(err,data)=>{
			res.end(data);
		});
		
	} else{
		res.end('register')
	}
}).listen(8090)