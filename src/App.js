// src/App.js
import React, { useState } from "react"
import Slider from "@mui/material/Slider"
import Typography from "@mui/material/Typography"
import { debounce } from "lodash"
import axios from "axios"
import { Button } from "@mui/material"

const MySlider = ({ name, address, min, max, default_value, step }) => {
  const [sliderValue, setSliderValue] = useState(default_value)

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue)
    debouncedSendRequest(newValue)
  }

  const debouncedSendRequest = debounce((value) => {
    axios
      .get(`http://192.168.1.91:1234/osc?value=${value}&address=${address}`)
      .then((response) => {
        console.log("Response:", response.data)
      })
      .catch((error) => {
        console.error("There was an error making the request!", error)
      })
  }, 10) // 10ms delay

  return (
    // <div
    //   style={
    //     {
    //       /*  display: "grid", gridColumn: 2 */
    //     }
    //   }
    // >
    [
      <Typography variant="h6">{name}</Typography>,
      <Slider
        value={sliderValue}
        onChange={handleSliderChange}
        aria-labelledby="continuous-slider"
        min={min}
        max={max}
        step={step}
        style={{ width: 300 }}
        size="large"
        // scale={(value) => 10 ** value}
      />,
      <Button onClick={() => handleSliderChange(null, default_value)}>
        Reset
      </Button>,
      <Typography variant="body1" style={{ width: "50px" }}>
        {Math.round(sliderValue * 100) / 100}
      </Typography>,
      // </div>
    ]
  )
}

function App() {
  return [
    <div
      style={{
        margin: 0,
        display: "flex",
        "align-items": "center",
        "justify-content": "center",
        flexDirection: "column",
      }}
    >
      <h1>Coollab</h1>
      <div
        style={{
          display: "grid",
          "grid-template-columns":
            "min-content min-content min-content min-content",
          gap: "15px",
        }}
      >
        <MySlider
          name="Slices"
          address="slices_count"
          min={0}
          max={10}
          default_value={1}
          step={1}
        />
        <MySlider
          name="Duplicata"
          address="duplicata"
          min={0}
          max={3}
          default_value={1}
          step={0.000001}
        />
        <MySlider
          name="Distortion"
          address="distortion"
          min={0}
          max={6}
          default_value={0}
          step={0.000001}
        />
        <MySlider
          name="Saturation"
          address="saturation"
          min={-1}
          max={1}
          default_value={0}
          step={0.000001}
        />
        <MySlider
          name="Zoom"
          address="zoom"
          min={0.0001}
          max={1}
          default_value={1}
          step={0.000001}
        />
        <MySlider
          name="Glow"
          address="glow"
          min={0}
          max={10}
          default_value={5}
          step={0.000001}
        />
        <MySlider
          name="Glow"
          address="glow"
          min={0}
          max={10}
          default_value={5}
          step={0.000001}
        />
        <MySlider
          name="Glow"
          address="glow"
          min={0}
          max={10}
          default_value={5}
          step={0.000001}
        />
        <MySlider
          name="Glowdwjfdksjh"
          address="glow"
          min={0}
          max={10}
          default_value={5}
          step={0.000001}
        />
        <MySlider
          name="Glow"
          address="glow"
          min={0}
          max={10}
          default_value={5}
          step={0.000001}
        />
      </div>
    </div>,
    <div style={{ position: "fixed", bottom: 0, right: 0 }}>
      TODO: QR Code Coollab
    </div>,
  ]
}

export default App
