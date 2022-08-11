const path = require('path');
const storage = require('electron-json-storage');
const { app, BrowserWindow, ipcMain } = require('electron');

(async () => {
    return await new Promise((resolve, reject) => { storage.setDataPath(path.join(__dirname, '../'));
        storage.has('settings.json', (error, hasKey) => {
            if(error) {
                console.log(error);
                reject(error);
            }
            if(!hasKey) {
                storage.set('settings.json', {
                    'local': {
                        'host': '127.0.0.1',
                        'port': 8080
                    }
                })
            }
            resolve();
        });
    });
})();

async function handleFileOpen() {
    return await new Promise((resolve, reject) => {
        storage.get('settings.json', (error, data) => {
            if(error) {
                console.log(error);
                reject(error);
            }
            resolve({ ...data }); 
        })
    })
}

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.resolve(__dirname, 'preload.js')
        }
    });

    win.loadFile(path.join(__dirname, '../', 'dist', 'index.html'));
}

app.whenReady().then(() => {
    ipcMain.handle('settings:openFile', handleFileOpen);

    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});