import React from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import dataHelper from "../services/data";

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
      style: "mapbox://styles/mapbox/streets-v11",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });

    map.on("move", () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2),
      });
    });

    map.on("load", async () => {
      const data = await dataHelper.getAll();
      const geojson = dataHelper.convertToGeoJSON(data);
      console.log(geojson);

      map.addSource("my-data", {
        type: "geojson",
        data: geojson,
      });

      map.addLayer({
        id: "my-data-layer",
        type: "circle",
        source: "my-data",
        paint: {
          "circle-radius": 5,
          "circle-color": "blue",
        },
      });
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
