const electron = require ('electron')

const app = electron.app 
const BrowserWindow = electron.BrowserWindow 
let mainWindow
app.on ('ready', _ => {
    mainWindow = new BrowserWindow({
        height : 400,
        width : 1000,
        movable : false,
        minimizable : false,
        maximizable : false,
        closable :false
    })



    mainWindow.loadFile('src/index.html')

    mainWindow.on ('closed', _ => { 
        console.log ('closed!')
        mainWindow = null
    })

})