/* Usando File System */

const fs = require('fs');

const userName = 'Dom';

// 'Nombre de usuario: ' + userName
// Alt + 96
// Template String

// fs.writeFile('test-data.txt', 'datos de prueba: ' + userName, (err)=>{
fs.writeFile('test-data.txt', `Nombre de Usuario: ${userName}`, (err)=>{
    if(err){
        console.log(err);
        return;
    } 
    console.log('archivo creado satisfactoriamente');
});
