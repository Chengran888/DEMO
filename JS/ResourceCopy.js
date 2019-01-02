var fs = require('fs');
var join = require('path').join;

//需要替换的图片
var valuePath = '';

//工程目录
var targetPath = '';

//拷贝
function copy(src,dst) {
    readable = fs.createReadStream( src );
    writable = fs.createWriteStream( dst ); 
    readable.pipe( writable );
}

//获取所有文件
function readFileList(path, filesList) {
    var files = fs.readdirSync(path);
    files.forEach(function (itm, index) {
        let itemPath = join(path,itm);
        let stat = fs.statSync(itemPath);

        if (stat.isDirectory()) {
            readFileList(itemPath, filesList);
        } else {    
            var obj = {};
            obj.path = join(path,itm);
            obj.filename = itm
            filesList.push(obj);
        }

    });
}

//替换
function exchange(path,element) {
    var files = fs.readdirSync(path);

    for (const key in files) {
        const item = files[key];
        let itemPath = join(path,item);
        let stat = fs.statSync(itemPath);   
            
        if (stat.isDirectory()) {
            exchange(itemPath,element);
        } else {    
            if (item === element.filename) {
                console.log('\n')
                console.log('找到咯! 原文件路径: '+ itemPath + '\n' + '替换路径: ' + element.path);
                copy(element.path,itemPath);
                break;
            } 
        }
    }
}


var action = {
    getFileList: function (path) {
        var filesList = [];
        readFileList(path, filesList);
        return filesList;
    },
    doExchange: function (path,arr) {
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            exchange(path,element);
        }
    } 
};


console.log('开始');
action.doExchange(targetPath,action.getFileList(valuePath));
console.log('完成');








