const path = require("path")
const fs = require("fs")


fs.rename(path.join(__dirname,'/test','welcome.txt'),path.join(__dirname,'/test','gooodbye.txt'), function(err) {
    if(err) throw(err);

    console.log(data);
})

