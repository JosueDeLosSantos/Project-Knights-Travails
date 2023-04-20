import * as helper from "./help.js";

function knightMoves(sSquare, eSquare) {
  let a = helper.knight(sSquare);
  let b = helper.knight(eSquare);
  if (a.data[0] == 0 || a.data[1] == 0) a = helper.knight([1, 2]);
  if (b.data[0] == 0 || b.data[1] == 0) b = helper.knight([1, 2]);
  console.log(a);
  console.log(b);
}

knightMoves([0, 8], [5, 0]);
