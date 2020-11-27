const convertToCoordinates = (signCoordinates, input) => {

  let letterCordinates = [];

  for (var i in input) {
    letterCordinates.push(signCoordinates.get(input.charAt(i)));
  }
  
  return letterCordinates;
}

const initiateSignsMap = () => {

  const signs = new Map().set('a', [0, 0]).set('b', [150, 0]).set('c', [300, 0])
    .set('d', [450, 0]).set('e', [600, 0]).set('f', [750, 0]).set('g', [900, 0])
    .set('h', [1050, 0]).set('i', [0, 150]).set('j', [150, 150]).set('k', [300, 150])
    .set('l', [450, 150]).set('m', [600, 150]).set('n', [750, 150]).set('o', [900, 150])
    .set('p', [1050, 150]).set('q', [0, 300]).set('r', [150, 300]).set('s', [300, 300])
    .set('t', [450, 300]).set('u', [600, 300]).set('v', [750, 300]).set('w', [900, 300])
    .set('x', [1050, 300]).set('y', [0, 450]).set('z', [150, 450]).set(' ', [300, 450])
    .set('.', [300, 450]).set(',', [300, 450]);

  return signs;
}

export {initiateSignsMap, convertToCoordinates};