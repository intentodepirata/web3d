const DROP_HEIGHT = 15;

export const generateRandomPosition = () => {
  const randomX = Math.random() * (3 - -3) + -3; // Número aleatorio entre -7 y 7
  const randomZ = Math.random() * (4 - 2) + 2; // Número aleatorio entre 2 y 4

  // Generar un ángulo aleatorio en radianes para la rotación en Y
  const randomRotation = Math.random() * (Math.PI / 2) - Math.PI / 4; // Entre -22.5 grados y 22.5 grados

  return {
    position: [randomX, DROP_HEIGHT, randomZ],
    rotation: [0, 0, randomRotation],
  };
};
