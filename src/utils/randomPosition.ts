const DROP_HEIGHT = 25;

export const generateRandomPosition = () => {
  const randomX = Math.random() * (3 - -3) + -3; // Número aleatorio entre -7 y 7
  const randomZ = Math.random() * (4 - 2) + 2; // Número aleatorio entre 2 y 4
  return [randomX, DROP_HEIGHT, randomZ]; // Fijamos la posición en el eje Y en 10
};
