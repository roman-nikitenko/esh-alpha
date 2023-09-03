import React, { useEffect } from 'react';
import L from 'leaflet';

export const MapLeaflet = () => {
  const coordinates = [40.7279785,-73.9758589];

  useEffect(() => {
    const map = L.map('map').setView(coordinates, 18);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker(coordinates)
      .addTo(map)
      .bindPopup('780 E 15th Floor, Z Tower.<br> New York, USA.')
      .openPopup();

    return () => {
      map.remove();
    }
  });

  return <>
    <div id="map"></div>
  </>
};
