export const convertToCoordinates = (signCoordinates, input) => {

    let letterCordinates = [];
    for (var i in input) {
        letterCordinates.push(signCoordinates.get(input.charAt(i)));
      }

  return letterCordinates;

}

export const initiateSignsMap = () => {
  let signs = new Map();
   
  signs.set('a',[0,0]);
  signs.set('b',[150,0]);
  signs.set('c',[300,0]);
  signs.set('d',[450,0]);
  signs.set('e',[600,0]);
  signs.set('f',[750,0]);
  signs.set('g',[900,0]);
  signs.set('h',[1050,0]);
  signs.set('i',[0,150]);
  signs.set('j',[150,150]);
  signs.set('k',[300,150]);
  signs.set('l',[450,150]);
  signs.set('m',[600,150]);
  signs.set('n',[750,150]);
  signs.set('o',[900,150]);
  signs.set('p',[1050,150]);
  signs.set('q',[0,300]);
  signs.set('r',[150,300]);
  signs.set('s',[300,300]);
  signs.set('t',[450,300]);
  signs.set('u',[600,300]);
  signs.set('v',[750,300]);
  signs.set('w',[900,300]);
  signs.set('x',[1050,300]);
  signs.set('y',[0,450]);
  signs.set('z',[150,450]);
  signs.set(' ',[300,450]);
  signs.set('.',[300,450]);
  signs.set(',',[300,450]);

  return signs;
}