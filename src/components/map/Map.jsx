import React from 'react'
import "./Map.scss"
// import { GoogleMapLoader, GoogleMap, DirectionsRenderer } from "react-google-maps";
// import MapView from 'react-native-maps';

function Map() {
	let map;
	const google = window.google;

	async function initMap() {
		// The location of Uluru
		const position = { lat: -25.344, lng: 131.031 };
		// Request needed libraries.
		//@ts-ignore
		const { Map } = await google.maps.importLibrary("maps");
		const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

		// The map, centered at Uluru
		map = new Map(document.getElementById("map"), {
			zoom: 4,
			center: position,
			mapId: "DEMO_MAP_ID",
		});

		// The marker, positioned at Uluru
		const marker = new AdvancedMarkerElement({
			map: map,
			position: position,
			title: "Uluru",
		});
	}

	initMap();
	return (
		<div className='map' id='map'>

		</div>
	)
}

export default Map