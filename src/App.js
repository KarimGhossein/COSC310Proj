import logo from "./logo.svg";
import "./App.css";
import { Widget, addResponseMessage } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import axios from "axios";
import { useEffect, useState, useCallback } from "react";

import { GoogleMap, LoadScript, Autocomplete, Marker, StreetViewPanorama } from '@react-google-maps/api';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure
} from "@chakra-ui/react"

const containerStyle = {
  width: '500px',
  height: '500px'
};
const center = {
  lat: 49,
  lng: -119
};
const lib = ["places"]

function App() {
  const id = Math.random();
  //initalize sentiment
  const kelowna = {
    lat: 49,
    lng: -119
  };
  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])
  const [map, setMap] = useState(null)
  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  const [showMap, setShowMap] = useState(false);
  const [showStreet, setShowStreet] = useState(false);


  useEffect(() => {
    addResponseMessage("Welcome!");
  }, []);

  //inject sentiment score to twilio using axios
  const handleNewUserMessage2 = (message) => {
    console.log(message);
    if(message == "Please show map"){
      setShowMap(true);
      setShowStreet(false);
    }
    if(message == "Please show street view"){
      setShowMap(false);
      setShowStreet(true);
    }
    axios
      .post("https://chatbot-service-9775.twil.io/chat", {
        message,
        id,
      })
      .then((response) => {
        response.data.response.says.forEach((say) => {
          addResponseMessage(say.text);

        });
      });
  }; //

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div className="App">
      <header className="App-header">
        <Widget
          handleNewUserMessage={handleNewUserMessage2}
          title="Booking Chat Bot"
          subtitle="Ask this bot questions about travel destinations."
        />

        {
          showMap ? (
            <>
               <LoadScript googleMapsApiKey="AIzaSyD9hX7xbjZQnhUY2m0wkOMtwuNhCucyz6E" libraries={lib}>
                      <>
                        
                      <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                      
                        zoom={10}
                        onLoad={onLoad}
                        onUnmount={onUnmount}
                      >
                        <Marker position={kelowna} />


                        <Autocomplete >
                        <input
                        type="text"
                        placeholder="Customized your placeholder"
                        style={{
                          boxSizing: `border-box`,
                          border: `1px solid transparent`,
                          width: `240px`,
                          height: `32px`,
                          padding: `0 12px`,
                          borderRadius: `3px`,
                          boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                          fontSize: `14px`,
                          outline: `none`,
                          textOverflow: `ellipses`,
                          position: "absolute",
                          left: "50%",
                          marginLeft: "-120px"
                        }}
                      />
                        </Autocomplete>
                        <></>
                      </GoogleMap>

                      </>

               </LoadScript>
            </>

          ):
          (
            <>

            </>
          )
        }

{
          showStreet ? (
            <>
               <LoadScript googleMapsApiKey="AIzaSyCAkObyNX_TmVta_gTfTsLzs--hE3KATTg" libraries={lib}>
                      <>
                        
                      <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                      
                        zoom={10}
                        onLoad={onLoad}
                        onUnmount={onUnmount}
                      >
                          <StreetViewPanorama
                            position={center}
                            visible={true}
                          />
                        <></>
                      </GoogleMap>
                      </>
               </LoadScript>
            </>

          ):
          (
            <>

            </>
          )
        }
</header>
    </div>
  );
}

export default App;
