import * as helper from "./help.js";

function knightMoves(sSquare, eSquare) {
  let result = null;
  if (sSquare[0] == 0 || sSquare[1] == 0) sSquare = [0, 0];
  if (eSquare[0] == 0 || eSquare[1] == 0) eSquare = [0, 0];
  if (JSON.stringify(sSquare) == JSON.stringify(eSquare))
    console.log("Here's your path:");
  if (JSON.stringify(sSquare) != JSON.stringify(eSquare)) {
    if (JSON.stringify(sSquare) == "[0,0]") {
      sSquare = [1, 2];
      if (JSON.stringify(sSquare) == JSON.stringify(eSquare)) {
        console.log("Here's your path:");
        console.log(JSON.stringify([0, 0]));
        console.log(JSON.stringify(sSquare));
        return;
      } else {
        result = helper.path(helper.knight(sSquare), helper.knight(eSquare));
        console.log(`you made it in ${result.length} moves! Here's your path:`);
        result.forEach((element) => {
          console.log(element);
        });
        return;
      }
    }

    if (JSON.stringify(eSquare) == "[0,0]") {
      eSquare = [1, 2];
      if (JSON.stringify(sSquare) == JSON.stringify(eSquare)) {
        console.log("Here's your path:");
        console.log(JSON.stringify(eSquare));
        console.log(JSON.stringify([0, 0]));
        return;
      } else {
        result = helper.path(helper.knight(sSquare), helper.knight(eSquare));
        console.log(`you made it in ${result.length} moves! Here's your path:`);
        result.forEach((element) => {
          console.log(element);
        });
        return;
      }
    }

    result = helper.path(helper.knight(sSquare), helper.knight(eSquare));
    console.log(`you made it in ${result.length} moves! Here's your path:`);
    result.forEach((element) => {
      console.log(element);
    });
    return;
  }
}

knightMoves([1, 5], [6, 2]);
