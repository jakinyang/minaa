import React from "react"
import { Marker } from "react-native-maps"

export default function TestMapMarkers (data) {
  return (
    data.map((item, i) => {
      return (
        <Marker
          coordinate={item.coords}
          key={item.id}
        >
        </Marker>
      )
    })
  )
}
