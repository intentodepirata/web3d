const AUMENTING_AMOUNT = 0;

export const calculateAumentedDimensions = (geometry: {
  computeBoundingBox: () => void;
  boundingBox: any;
}) => {
  geometry.computeBoundingBox();
  const boundingBox = geometry.boundingBox;
  const dimensions = boundingBox.max.clone().sub(boundingBox.min);

  return [
    dimensions.x + AUMENTING_AMOUNT,
    dimensions.y + AUMENTING_AMOUNT,
    dimensions.z + AUMENTING_AMOUNT,
  ];
};
