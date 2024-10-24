const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })
  
  // and load the index.html of the app.
  win.loadFile('index.html')

  // Open with DevTools.
 // win.webContents.openDevTools()
}

app.whenReady().then(() => {
  createWindow()
})