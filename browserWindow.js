const electron = require ('electron')

const app = electron.app // electron module
const BrowserWindow = electron.BrowserWindow //enables UI
let mainWindow
app.on ('ready', _ => {
    mainWindow = new BrowserWindow({
        height : 400,
        width : 1000,
        backgroundColor: '#FFFF00' // background color
    })


    //mainWindow.loadURL (`file://${__dirname}/index.html`)

    mainWindow.loadFile('src/index.html')

    mainWindow.on ('closed', _ => { //detect when window is closed.
        console.log ('closed!')
        mainWindow = null
    })

})