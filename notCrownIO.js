const fs = require('fs')

// var getMime=(callback)=>{
// 	fs.readFile('mime.json',(err,data)=>{
// 		callback(data);
// 	})
// }

// getMime((result)=>{
// 	console.log(result);
// })

const event = require('events')

// // console.log(event);

// var EventEmitter = new event.EventEmitter();

// EventEmitter.on('to_mime', (data) => {
//     // console.log('接受到了这个广播！');
//     // 
//     console.log(data);
// })



// //广播和监听广播
// //
// EventEmitter.on('to_parent', (data) => {
//     // console.log('接受到了这个广播！');
//     // 
//     console.log(data);
//     EventEmitter.emit('to_mime','给mime发送数据！')
// })
// setTimeout(() => {
// 	console.log('开始广播...');
// 	//广播to_parent事件 
//     EventEmitter.emit('to_parent', '发送的数据')
// }, 2000)
// 
// 
var EventEmitter = new event.EventEmitter();

function getMime(callback) {
    fs.readFile('mime.json', (err, data) => {

        EventEmitter.emit('data', data);
    })
}

getMime();

EventEmitter.on('data', (mime) => {

    console.log(mime);
})