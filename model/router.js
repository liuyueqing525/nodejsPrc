const path=require('fs');
const http=require('http');
const url=require('url');

http.createServer((req, res,staticpath) => {
    var pathname = url.parse(req.url).pathname; 

    if (pathname === '/') {
        pathname = '/index.html'
    }
    //获取文件的后缀名字
    var extname=path.extname(pathname)


    if (pathname != '/favicon.ico') {
        console.log(pathname);
        fs.readFile(staticpath+'/' + pathname, (err, data) => {
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