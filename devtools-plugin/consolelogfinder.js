'use strict';
const fs = require('fs');
module.exports = function (gameServer, args) {
var walkSync = function(dir, filelist) {

  if( dir[dir.length-1] != '/') dir=dir.concat('/')

  var fs = fs || require('fs'),
      files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(dir + file).isDirectory()) {
      filelist = walkSync(dir + file + '/', filelist);
    }
    else {
      filelist.push(dir+file);
    }
  });
  return filelist;
};
var result = [];
var files = walkSync(__dirname + "/../../../");
for (var i in files) {
  if (files[i].indexOf("/plugins/") != -1) continue;
  var file = fs.readFileSync(files[i],"utf8");
  while (1==1) {
  
var start_pos = file.indexOf('console.log(') + 12;
var end_pos = test_str.indexOf(')',start_pos);
var res = test_str.substring(start_pos,end_pos);
result.push(res);
file = file.substring(0,end_pos + 1);
if (!file) break;
}
  
}
for (var i in result) {
  console.log(result[i]);
}

}