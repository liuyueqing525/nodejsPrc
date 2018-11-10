const fs = require('fs');

// fs.stat('html',function(err,stats){
// 	if(err){
// 		console.log(err);
// 		return false;
// 	}
// 	console.log('文件:'+stats.isFile());

// 	console.log('目录:'+stats.isDirectory());

// 	console.log(stats);
// })
// //path 目录路径
// fs.mkdir('css',(err,)=>{
// 	if(err){
// 		console.log(err);
// 		return false;
// 	};
// 	console.log('创建目录成功！');
// })

// fs.writeFile('t.txt','你好nodejs',()=>{
// 	console.log('写入文件成功了！')
// })
// // 
// fs.appendFile('t1.txt','这是写入的内容！！！！！\n',(err)=>{
// 	if(err){
// 		console.log(err)
// 		return false;
// 	}
// 	console.log('写入成功!');
// })
// 


// fs.readFile('t1.txt',(err,data)=>{
// 	console.log(data.toString());
// })
// 
// 


// fs.readdir('html',(err,dir)=>{ 
// 	i=0;
// 	while(i<dir.length){
// 		console.log(dir[i]);
// 		i++;
// 	}
// })
// 
// 
// // 剪切文件
// fs.rename('html','html1',()=>{
// 	console.log('修改名字成功！');
// })
// 
// 



// fs.stat('upload',(error,stats)=>{
// 	if(error){
// 		fs.mkdir('upload',(err)=>{
// 			if(err){
// 				console.log(err);
// 				return false;
// 			}
// 			console.log('创建成功！');
// 		})
// 		console.log(error);
// 		return false;
// 	}else{
// 		console.log(stats.isDirectory());
// 		console.log('目录已经存在')
// 	}

// })
// var filesArr = [];
// fs.readdir('html', (err, files) => {
//     if (err) {
//         console.log(err);
//     } else {
//         (function getFile(i) {
//             if (i == files.length) {
//                 console.log('目录：')
//                 console.log(filesArr)
//                 return false;
//             }
//             fs.stat('html/' + files[i], (err, stats) => {
//                 if (stats.isDirectory()) {
//                     filesArr.push(files[i]);
//                 }
//                 getFile(i + 1);
//             });
//         })(0)

//     }
// })
// 
// 
//  

// var readStream = fs.createReadStream('input.txt');
// var str = '';
// var count = 0;
// readStream.on('data', (chunk) => {
//     str += chunk;
//     count++;
// })
// readStream.on('end', (chunk) => {


//     console.log(str);
//     console.log(count);
// })

// readStream.on('error', (error) => {
//     console.log(error)
// })
// 
// 

// var data = "我是一串字符串";

// var writeStream = fs.createWriteStream('output.txt');
// for (var i = 0; i < 10; i++) {

//     writeStream.write(data, 'utf8');
// }

// writeStream.end();

// writeStream.on('finish', () => {
//     console.log('写入文件完成！')
// })
// writeStream.on('error', () => {
//     console.log('写入文件失败了！')
// })
// 
const http = require('http');
const path=require('path');//nodejs自带的模块
var mimeModel= require('./getmine.js');
 
http.createServer((req, res) => {
    var pathname = req.url; 

    if (pathname === '/') {
        pathname = '/index.html'
    }
    //获取文件的后缀名字
    var extname=path.extname(pathname)
    if (pathname != '/favicon.ico') {
        console.log(pathname);
        fs.readFile('./' + pathname, (err, data) => {
            if (err) {
                //没有找到这个文件
                console.log('404 NOT FOUND!');

                return;
            } else {

            	var mime=mimeModel.getMine(fs,extname);
                res.writeHead(200, { "Content-Type": ""+mime+";charset=utf8" }) 
                res.write(data);
                res.end()
            }
        })
    }

}).listen(8009)



