//system tray icon menu//

const electron = require ('electron')  // imports electron
const {app} = electron // imports menu and tray modules
const BrowserWindow = electron.BrowserWindow // calls brower window for use


let mainWindow;
app.on('ready', _ => {
    
    mainWindow = new BrowserWindow({ // create browser window and set browser window dimensions
        height : 600,
        width : 600,
        icon: 'src/Tray.ico'     // sets tray icon
    })

})