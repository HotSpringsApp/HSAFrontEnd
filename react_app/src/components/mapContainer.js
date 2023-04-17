import React from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import dataHelper from '../services/data';
import spatialHelper from '../services/spatial';
import * as turf from '@turf/turf';

export default class MapContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      lng: -7.0284,
      lat: 40.4861,
      zoom: 4.52,
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });

    map.on('load', async () => {
      const data = this.props.data;
      console.log('data', data);
      const dataWithinBounds = spatialHelper.dataWithinBounds(map, data);
      this.props.setBoundedData(dataWithinBounds);

      map.addSource('hotsprings-data', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: data,
        },
      });

      map.addLayer({
        id: 'hotsprings-data-layer',
        type: 'circle',
        source: 'hotsprings-data',
        paint: {
          'circle-radius': 5,
          'circle-color': 'blue',
        },
      });
    });

    map.on('click', 'hotsprings-data-layer', (e) => {
      let coordinates = e.features[0].geometry.coordinates.slice();
      let properties = e.features[0].properties;

      new mapboxgl.Popup()
        .setLngLat(coordinates)
        .setHTML('<h3>' + properties.name + '</h3><p>' + properties.description + '</p>')
        .addTo(map);
    });

    map.on('mouseenter', 'my-data-layer', () => {
      map.getCanvas().style.cursor = 'pointer';
    });

    map.on('mouseleave', 'my-data-layer', () => {
      map.getCanvas().style.cursor = '';
    });

    map.on('moveend', () => {
      const data = this.props.data;
      console.log('in moveend', data);
      const dataWithinBounds = spatialHelper.dataWithinBounds(map, data);
      this.props.setBoundedData(dataWithinBounds);
    });
  }

  render() {
    const { lng, lat, zoom } = this.state;

    return (
      <div>
        <div className="sidebarStyle">
          <div>
            Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
          </div>
        </div>
        <div ref={(el) => (this.mapContainer = el)} className="mapContainer" />
      </div>
    );
  }
}
