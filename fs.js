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
console.log(getImages("img"))