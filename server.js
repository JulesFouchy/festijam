const express = require("express")
const osc = require("osc")
const app = express()
const port = 3000

const cors = require("cors")
app.use(cors())

// // Create an OSC UDP Port
// const udpPort = new osc.UDPPort({
//   localAddress: "0.0.0.0", // Local address to bind to
//   localPort: 57121, // Local port to bind to
//   remoteAddress: "127.0.0.1", // Remote address to send messages to
//   remotePort: 57120, // Remote port to send messages to
// })

// // Open the UDP port
// udpPort.open()

// Serve the static HTML file
app.use(express.static("public"))

// API endpoint to send OSC message
app.get("/send-osc", (req, res) => {
  console.log(Date.now())
  //   udpPort.send({
  //     address: "/test/address",
  //     args: [
  //       {
  //         type: "f",
  //         value: 400.0,
  //       },
  //     ],
  //   })
})
app.get("/slices_count", (req, res) => {
  //   console.log("yo")
  console.log(req.query["value"] / 100)
  //   udpPort.send({
  //     address: "/slices_count",
  //     args: [
  //       {
  //         type: "f",
  //         value: req.query["value"] / 100,
  //       },
  //     ],
  //   })
})

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
