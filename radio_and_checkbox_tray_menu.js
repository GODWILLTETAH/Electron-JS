//system tray icon menu//

const electron = require ('electron')  // imports electron
const path = require ('path') // imports path module
const {app, Menu, Tray} = electron // imports menu and tray modules

let mainWindow;
let tray
app.on('ready', _ => {
    tray = new Tray (path.join ('src', 'Tray.PNG' ) ) // sets tray icon image
    const contextMenu = Menu.buildFromTemplate([   // define menu items
        {
            label: 'Help',
            type : "checkbox",    // type property which defines a checkbox
            click: () => console.log ('Help')  // click event handler
        },{
            label : 'Troubleshoot?',
            type:'radio',
            click: () => console.log ('troubleshooted')

        },
        {
            label: 'System',
            type : "radio", // type property which defines radio 
            click: () => console.log ('System')  // click event handler
        }
    ])
    tray.setContextMenu(contextMenu)

})