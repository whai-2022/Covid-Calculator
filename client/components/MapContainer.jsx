import React from 'react'
import { Map, Marker } from 'react-map-gl'
import mapboxgl from 'mapbox-gl'
import * as turf from '@turf/turf'

import 'mapbox-gl/dist/mapbox-gl.css'

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN

function MapContainer({ location }) {
  const mapRef = React.useRef()

  const [viewState, setViewState] = React.useState({
    longitude: location[0],
    latitude: location[1],
    zoom: 14,
  })

  const GEOFENCE = turf.circle(location, 2, {
    units: 'kilometres',
  })

  const checkIfPositionInViewport = (lng, lat) => {
    const bounds = mapRef.current.getMap().getBounds()
    return (
      lat >= bounds._sw.lat &&
      lat <= bounds._ne.lat &&
      lng >= bounds._sw.lng &&
      lng <= bounds._ne.lng
    )
  }

  const onMapLoad = React.useCallback(() => {
    // console.log(checkIfPositionInViewport(-36.860181, 174.738057))
  }, [])

  const onMapMove = React.useCallback(({ viewState }) => {
    const newCenter = [viewState.longitude, viewState.latitude]

    if (turf.booleanPointInPolygon(newCenter, GEOFENCE)) {
      setViewState({
        latitude: newCenter[1],
        longitude: newCenter[0],
      })
    }
  }, [])

  return (
    <div aria-label="map">
      <Map
        {...viewState}
        style={{ width: 600, height: 400 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        ref={mapRef}
        onLoad={onMapLoad}
        onMove={onMapMove}
      >
        <Marker
          longitude={174.738057}
          latitude={-36.860181}
          anchor="bottom"
        ></Marker>
      </Map>
    </div>
  )
}

export default MapContainer
