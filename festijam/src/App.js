// src/App.js
import React, { useState, useCallback } from "react"
import Slider from "@mui/material/Slider"
import Typography from "@mui/material/Typography"
import { debounce } from "lodash"
import axios from "axios"

function App() {
  const [sliderValue, setSliderValue] = useState(30)

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue)
    debouncedSendRequest(newValue)
  }

  const debouncedSendRequest = debounce((value) => {
    axios
      .get(
        `http://192.168.1.91:1234/osc?value=${value / 100}&address=slices_count`
      )
      .then((response) => {
        console.log("Response:", response.data)
      })
      .catch((error) => {
        console.error("There was an error making the request!", error)
      })
  }, 10) // 10ms delay

  return (
    <div style={{ width: 300, margin: "0 auto", textAlign: "center" }}>
      <Typography variant="h6">Slider Example</Typography>
      <Slider
        value={sliderValue}
        onChange={handleSliderChange}
        aria-labelledby="continuous-slider"
        min={0}
        max={100}
      />
      <Typography variant="body1">Value: {sliderValue}</Typography>
    </div>
  )
}

export default App
