/*global chrome*/

console.log("hello from extenstion")

var port = chrome.runtime.connectNative('com.schultztechnology.fetchit')
port.onMessage.addListener((msg) => {
  console.log("Received" + msg)
})
port.onDisconnect.addListener(() => {
  console.log("Disconnected")
})
port.postMessage({ text: "Hello, my name is david :)" })