var fs = require('fs')
// fs.writeFile("abc.txt","THis is file",(err,data)=>{
//     if(err) console.log("File not found - error");
//     console.log("FIle created successfully...."); 
// })
// fs.readFile("abc.txt","utf-8",(err,data)=>{
//     if(err) console.log("File not found - error");
//     console.log(data);
// })
fs.unlink("abc.txt",()=>{
    console.log('File deleted...');
})

// File operation
// 1)create a file
// 1)Write a file
// 1)read a file
// 1)delete a file



//Folder Operation

fs.mkdir("newFolder",(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Folder created successfully...")     
    }
})

// fs.rmdir("newFolder",(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("Folder deleted successfully...")     
//     }
// })

// fs.writeFile("newFolder/Hii.txt","hiii",(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("File inside folder created successfully...")     
//     }
// })
fs.rmdir("newFolder",(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Folder removed successfully...")     
    }
})

fs.rm("newFolder",{recursive:true},(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Folder delete with all files successfully...")     
    }
})