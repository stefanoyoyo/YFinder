// YFinder.ts

function main() {
    const givenX = 3;
    const points = [
      {x: 1, y: 2},
      {x: 3, y: 12},
      {x: 10, y: 110}
    ];
    const y =  lagrangeInterpolatingPolynomial(givenX, points);
    console.log('y: ' + y);
}
main();

//#region code

/**Funzione che esegue l'algoritmo di langrange per 
l'ottenimento dell'equazione alla retta che 
descrive i punti passati come parametro */
function lagrangeInterpolatingPolynomial(givenX, points) {
  let result = 0;
  points.forEach((item, jIndex) => { 
        const multiply = multiplier(givenX, points, jIndex);;
        result+= item.y * multiply;
  });
  return result;
}

function multiplier(givenX, points, j) {
  let result = 1;
  points.forEach((element, index) => {
    // xi = element.x 
    // xj = points[j].x 
    if (index != j) {
      const num = givenX - element.x;
      const den = points[j].x - element.x;
      result*= num / den;
    }
  });
  return result;
}

//#endregion code
