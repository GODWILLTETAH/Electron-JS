//system tray icon menu//

const electron = require ('electron')  // imports electron
const path = require ('path') // imports path module
const {app, Menu, Tray} = electron // imports menu and tray modules
const BrowserWindow = electron.BrowserWindow //enables UI


let mainWindow;
let tray
app.on('ready', _ => {
    tray = new Tray (path.join ('src', 'Tray.PNG' ) ) // sets tray icon image
    const contextMenu = Menu.buildFromTemplate([   // define menu items
        {
            label: 'Help',
            click: () => console.log ('Help')
        },
        {
            label: 'System',
            click: () => console.log ('System')
        }
    ])
    tray.setContextMenu(contextMenu)
    
    mainWindow = new BrowserWindow({ // sets browser window dimensions
        height : 600,
        width : 600,
    })

})