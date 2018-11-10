// exports.getMine = function(extname) {
//     switch (extname) {
//         case '.html':
//             return 'text/html';
//         case '.css':
//             return 'text/css';
//         case '.js':
//             return 'text/javascript';
//         default:
//             return 'text/html';
//     }
// }
// 
// 
exports.getMine=function(fs,extname){
    // 
    // 异步执行的方法，需要改成同步使用
    // 
    // fs.readFile('./mime.json',(err,data)=>{
    //     if(err){
    //         console.log('文件不存在！');
    //     }
    //     console.log(data);

    //     var mime=JSON.parse(data.toString());

    //     return mime[extname]||'text/html';
    // })

    var data=fs.readFileSync('./mime.json');
    //buffer数据转换成字符串
    var mime=JSON.parse(data.toString());
    return mime[extname]||'text/html'
}