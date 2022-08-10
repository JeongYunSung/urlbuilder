const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('settings', {
  local: async () => {
    const file = await ipcRenderer.invoke('settings:openFile');
    return file.local;
  },
});