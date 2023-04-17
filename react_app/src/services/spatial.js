import * as turf from '@turf/turf';

function dataWithinBounds(map, data) {
  console.log('data inside dataWithinBounds ----->', data);
  const mapBounds = map.getBounds();
  const bboxPolygon = turf.bboxPolygon([mapBounds.getWest(), mapBounds.getSouth(), mapBounds.getEast(), mapBounds.getNorth()]);
  const dataWithinBounds = data.filter((feature) => {
    console.log('feature ----->', feature);
    return turf.booleanPointInPolygon(turf.point([feature.geometry.coordinates[0], feature.geometry.coordinates[1]]), bboxPolygon);
  });
  return dataWithinBounds;
}

export default { dataWithinBounds };
