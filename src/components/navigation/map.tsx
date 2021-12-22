import styled from "styled-components"
import styles from "utils/styles/google-map"
import GoogleMapReact, { Coords } from "google-map-react"
import React, { FC, ReactElement, ReactNode } from "react"

interface IProps {
  zoom: number,
  center: Coords,
  open?: boolean,
  children?: ReactNode,
}

const MapWrapper = styled.div`
  &.open {
    width: 100%;
    height: 100%;
  }

  &.closed {
    display: none;
  }

`


const Map:FC<IProps> = ({ open, zoom, center, children }): ReactElement => (
  <MapWrapper className={open ? "open" : "closed"}>
    <GoogleMapReact
      zoom={zoom}
      center={center}
      defaultZoom={zoom}
      options={{ styles }}
      defaultCenter={center}
      bootstrapURLKeys={
        {
          key: "AIzaSyAmRSlPxzbN8jB50oU1WB7eGHb0D8gKb3Y",
        }
      }
    >
      { children }
    </GoogleMapReact>
  </MapWrapper>
)


export default Map
