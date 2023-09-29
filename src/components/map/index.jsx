import 'mapbox-gl/dist/mapbox-gl.css'
import React, { useState, useEffect, startTransition, useDeferredValue } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
// Data
import CHB_markers from './Data/Chahar_mahal_marker.json'
import Talagh from './Data/Talagh.json'
// svg pin
import Pin from "./Pin"
// components
import Search from './Search'
import Modal from './Modal'
// CSS
import './CSS/map.css'







export default function Map() {
    const [viewport, setViewport] = useState({ latitude: 32.328239, longitude: 50.876854, zoom: 8 })
    const [selectPlace, setSelectPlace] = useState([])
    const [allData, setAllData] = useState([])
    const [EmptyValueSearchBox, setEmptyValueSearchBox] = useState()
    const AllDeferentData = useDeferredValue(allData)
    const AllDeferentPlace = useDeferredValue(selectPlace)
    const [openModal, setOpenModal] = useState(false)
    const [detectedProvence, setDetectedProvence] = useState()
    
    
    useEffect(() => {
        window.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                setSelectPlace([])
                setOpenModal(false)
            }
        })
    }, [])

    // When click on Pin and select a place
    const clickHandler = (location) => {
        startTransition(() => {
            setSelectPlace([location])
        })
    }

    // Get Filtered Data from Search component
    const getResultFilteredSearch = (result) => {
        startTransition(() => {
            setSelectPlace(result)
        })
    }

    // When click on close button Popup
    const getAllData = (result) => {
        startTransition(() => {
            setAllData(result)
        })
    }
    const EmptyedSearchVal = (changeToUndefinde) => {
        setEmptyValueSearchBox(changeToUndefinde)
    }

    const IsModal = (status) => {
        setOpenModal(status)
    }

    // Select Popup when click on Pin or search
    function clickPopup() {
        document.querySelector('.mapboxgl-popup-content')?.addEventListener('click', function () {
            setOpenModal(true)
        }, { capture: true })
    }

    useEffect(() => {
        clickPopup()
    }, [EmptyedSearchVal])

    // Send info provence selected For Chart
    useEffect(() => {
        const Detected = Talagh?.filter(item => item.district === selectPlace?.find(item => item)?.name)
        setDetectedProvence(Detected)
    }, [selectPlace])








    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <Search
                data={CHB_markers}
                getFilteredSearch={getResultFilteredSearch}
                getAllData={getAllData}
                EmptyValueSearchBox={EmptyValueSearchBox}
                EmptyedSearchVal={EmptyedSearchVal}
            />


            {openModal && <Modal availableModal={openModal} IsModal={IsModal} detectedProvence={detectedProvence} />}


            <ReactMapGL
                initialViewState={viewport}
                mapboxAccessToken='pk.eyJ1IjoicmV6YWExMyIsImEiOiJjbGx6MWpmbDkwd2o0M2tzNmtjNTZiMGRxIn0.YSpvVRzoOyxn56XSY6EcOw'
                width="100%"
                height="100%"
                mapStyle='mapbox://styles/rezaa13/cllzagh0600nt01qx0kwh9hfj'
                onViewPortChange={viewport => { setViewport(viewport) }}
            >
                {selectPlace?.length === 0 ?
                    AllDeferentData?.map((item) => (
                        <Marker
                            key={item.id}
                            latitude={item.geometry[0]}
                            longitude={item.geometry[1]}
                        >
                            <Pin size={30} clicked={() => clickHandler(item)} />
                        </Marker>
                    )) :
                    AllDeferentPlace?.map((item) => (
                        <Marker
                            key={item.id}
                            latitude={item.geometry[0]}
                            longitude={item.geometry[1]}
                        >
                            <Pin size={30} clicked={() => clickHandler(item)} />
                        </Marker>
                    ))
                }

                {selectPlace?.length !== 0 ?
                    AllDeferentPlace?.map(item => (
                        <Popup
                            key={item.id}
                            latitude={item.geometry[0]}
                            longitude={item.geometry[1]}
                            closeOnClick={false}
                            closeButton={true}
                            onClose={() => {
                                setOpenModal(false)
                                setEmptyValueSearchBox(null)
                                setSelectPlace([])
                            }}
                            onOpen={() => {
                                clickPopup()
                            }}
                        >
                            {item.name}
                        </Popup>
                    ))
                    : null}
            </ReactMapGL>
        </div>
    )
}