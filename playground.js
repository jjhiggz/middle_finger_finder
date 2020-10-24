let fs = require('fs')
let data = []


const callback =  (err, jsonString) => {
    if (err) {
        console.log("File read failed:", err)
        return
    }
    data.push( JSON.parse(jsonString) )    
}

fs.readFile('./middle_finger_pictures.json', callback)
fs.readFile('./middle_finger_pictures1.json', callback)
fs.readFile('./middle_finger_pictures2.json', callback)


setTimeout( () => {
    console.log(data[0].length, data[1].length, data[2].length)
}, 5000 )




