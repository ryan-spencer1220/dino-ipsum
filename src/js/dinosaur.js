export default class Dinosaur {
  static getWord() {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://dinoipsum.com/api/?format=json&paragraphs=1&words=1`;
      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }

  splitDinosaur(dinoName) {
    let dinoArray = dinoName.split("");
    dinoArray.pop();
    return dinoArray;
  }

  checkDinosaur(dinosaurNameArray, guessedLetter) {
    let dinosaurName = [C, r, a, t, e, r, o, s, a, u, r, u, s];
    let instancePositions = [],
      i;
    // search through the dinosaur name array
    // if userLetter is in array, get index positions of all instances
    // take instances and push those instances w/userLetter to correctLetterArray
    for (let i = 0; i < dinosaurName.length; i++) {
      if (dinosaurNameArray[i] === guessedLetter) {
        instancePositions.push(i);
      }
    }
    return instancePositions;
    // Output: [2, 8] :)
  }
}
