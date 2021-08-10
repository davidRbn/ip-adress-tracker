import React from 'react'
import GoogleMapReact from 'google-map-react';
import marker from '../assets/icon-location.svg'
import styled from 'styled-components';


const Map = ({dataLocalisation}) => {
    const AnyReactComponent = () => <img alt='marker' src={marker} />;

    const data = dataLocalisation.data[0]
    const loaded = dataLocalisation.loaded

    const defaultProps = {
        center: {
          lat: 43.300000,
          lng:5.400000
        },
        zoom: 11
      };

    return(

      
        <DivMap>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBIZqLYkTZywlCkLAjjU0SBCTyl-Ut_jNk" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          center={{lat:data.lat,lng:data.lng}}
        >
          <AnyReactComponent
            lat={loaded ? data.lat : null}
            lng={loaded ? data.lng : null}
            
          />
        </GoogleMapReact>
      </DivMap>
      
    )}

    const DivMap = styled.div`
    position: relative;
     height: 70vh;
    width: 100%;
   @media only screen and (max-width: 500px) {
            height: 70vh;
    } `



export default Map