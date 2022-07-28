import colors from './colors.json';

const getRandomColor = () => {
  const randomNum = Math.floor(Math.random() * colors.length);

  return colors[randomNum];
};

export default getRandomColor;
