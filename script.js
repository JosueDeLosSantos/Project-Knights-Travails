import * as helper from "./help.js";

console.log(helper.board);

function knightMoves(sSquare, eSquare) {
  if (sSquare[0] == 0 || sSquare[1] == 0) sSquare = [0, 0];
  if (eSquare[0] == 0 || eSquare[1] == 0) eSquare = [0, 0];
  if (JSON.stringify(sSquare) == JSON.stringify(eSquare))
    console.log("You made no moves");
  if (JSON.stringify(sSquare) != JSON.stringify(eSquare)) {
    if (JSON.stringify(sSquare) == "[0,0]") {
      sSquare = [1, 2];
      if (JSON.stringify(sSquare) == JSON.stringify(eSquare)) {
        console.log("Here are your moves:");
        console.log(JSON.stringify([0, 0]));
        console.log(JSON.stringify(sSquare));
      } else {
        helper.path(helper.knight(sSquare), helper.knight(eSquare));
      }
    }

    if (JSON.stringify(eSquare) == "[0,0]") {
      eSquare = [1, 2];
      if (JSON.stringify(sSquare) == JSON.stringify(eSquare)) {
        console.log("Here are your moves:");
        console.log(JSON.stringify(eSquare));
        console.log(JSON.stringify([0, 0]));
      } else {
        helper.path(helper.knight(sSquare), helper.knight(eSquare));
      }
    }

    helper.path(helper.knight(sSquare), helper.knight(eSquare));
  }
}
knightMoves([1, 2], [4, 4]);

/* console.log(helper.knight([1, 2]));

const josue = 0;
console.log(josue?.user?.name); */
