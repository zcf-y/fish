(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
const fs = require('fs');

// 从指定文件夹中获取所有图片文件的路径
function getImages(folderPath) {
	
  var images = []; // 存储图片路径的数组
  var files = fs.readdirSync(folderPath); // 读取文件夹中的所有文件
  for (var i = 0; i < files.length; i++) { // 遍历文件夹中的所有文件
    var file = files[i]; // 获取当前文件的文件名
    if (file.endsWith(".jpg") || file.endsWith(".png") || file.endsWith(".gif")) { // 判断当前文件是否为图片文件
      images.push(folderPath + "/" + file); // 将图片文件的路径添加到数组中
    }
  }
  return images; // 返回存储图片路径的数组npm install browserify
}
console.log(getImages("../img"))
},{"fs":1}]},{},[2]);
