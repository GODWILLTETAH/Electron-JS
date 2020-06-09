//menu//

const electron = require ('electron')

const app = electron.app // electron module
const BrowserWindow = electron.BrowserWindow //enables UI
const Menu = electron.Menu // menu module

app.on('ready', _ => {
    new BrowserWindow()

    //const name = electron.app.getName()
    const template = [
        {
            label: 'Help',
            submenu: [{
                    label: `About US`,
                }, {
                    type: 'separator'
                },{
                    label: 'Quit',
                    role: 'quit'

                }]
        },
        {
            label: 'File',
            submenu: [{label:'New'},{label:'Open'},{label:'Save'}]

        },
        {
            label: 'Edit',

        },
        {
            label: 'View',

        },
        {
            label: 'Run',

        }
    ]
    const menu = Menu.buildFromTemplate (template)
    Menu.setApplicationMenu (menu)
})