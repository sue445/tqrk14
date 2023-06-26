importScripts("https://cdn.jsdelivr.net/npm/xterm-pty@0.9.4/workerTools.js");
importScripts("./browser_wasi_shim/index.js");
importScripts("./browser_wasi_shim/wasi_defs.js");
importScripts("./wasi_util.js");

onmessage = (msg) => {
  startWasi(new TtyClient(msg.data), 4, '../wasm/irbicure-');
};
