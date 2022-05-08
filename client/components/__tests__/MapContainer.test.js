import React from 'react'
import { screen, render } from '@testing-library/react'

import MapContainer from '../MapContainer'
import 'mapbox-gl/dist/mapbox-gl.css'

jest.mock('mapbox-gl/dist/mapbox-gl.css', () => ({
  GeolocateControl: jest.fn(),
  Map: jest.fn(() => ({
    addControl: jest.fn(),
    on: jest.fn(),
    remove: jest.fn(),
  })),
  NavigationControl: jest.fn(),
}))

describe('<MapContainer />', () => {
  it('renders the map container', async () => {
    jest.spyOn(console, 'error').mockImplementation()
    await render(<MapContainer w="100%" location={[0, 0]} />)
    expect(screen.getByLabelText('map')).toBeInTheDocument()
  })

  it('should log an error', () => {
    // assert the expected warning
    expect(console.error).toHaveBeenCalledWith(
      new Error('Map is not supported by this browser')
    )
  })
})
