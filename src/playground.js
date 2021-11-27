export const materialColors = [
  {
    redPrimary: '#ef5350',
    redSecondary: '#ec407a',
    purplePrimary: '#ab47bc',
    purpleSecondary: '#7e57c2',
    purpleAlt: '#5c6bc0',
    bluePrimary: '#42a5f5',
    blueSecondary: '#29b6f6',
    greenPrimary: '#26c6da',
    greenSecondary: '#26a69a',
    greenAlt: '#66bb6a',
    green: '#9ccc65',
    darkYellow: '#d4e157',
    lightYellow: '#ffee58',
    lightOrange: '#ffca28',
    darkOrange: '#ffa726',
    deepOrange: '#ff7043',
    greyAlt: '#bcaaa4',
    lightGrey: '#bdbdbd',
    primaryGrey: '#90a4ae',
  },
];

const pickRandomColor = (arr) => {
  const getRandomColor = (colors) => {
    const color = Object.keys(colors);
    return colors[color[(color.length * Math.random()) << 0]];
  };
  return !arr ? getRandomColor(materialColors[0]) : getRandomColor(arr);
};

console.log(pickRandomColor(materialColors[0]));
console.log(pickRandomColor());
