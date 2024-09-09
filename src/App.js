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
      <h1>TODO petit texte d'explication</h1>
      <div
        style={{
          display: "grid",
          "grid-template-columns":
            "min-content min-content min-content min-content",
          gap: "15px",
        }}
      >
        <MySlider
          name="Détails"
          address="duplicata"
          min={0}
          max={3}
          default_value={1}
          step={0.000001}
        />
        <MySlider
          name="Stries"
          address="distortion"
          min={0}
          max={6}
          default_value={0}
          step={0.000001}
        />
        <MySlider
          name="Zoom"
          address="zoom"
          min={0.0001}
          max={5}
          default_value={1}
          step={0.000001}
        />
        <MySlider
          name="Kaleidoscope"
          address="black_hole"
          min={-4}
          max={8}
          default_value={1}
          step={0.00000001}
        />
        <MySlider
          name="Rotation"
          address="rotation_speed"
          min={0}
          max={0.5}
          default_value={0}
          step={0.000001}
        />
        <MySlider
          name="Disco"
          address="disco"
          min={0}
          max={3}
          default_value={0.1}
          step={0.000001}
        />
        <MySlider
          name="Glitch"
          address="glitch"
          min={0}
          max={20}
          default_value={0}
          step={0.000001}
        />
      </div>
    </div>,
    <div style={{ position: "fixed", bottom: 0, right: 0 }}>
      TODO: QR Code Coollab
    </div>,
    // TODO button to randomize all values, and they tween to the new value over 1 or 2 sec
  ]
}

export default App
