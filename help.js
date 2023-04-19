export const board = gameBoard();

function gameBoard() {
  let board = [];
  board[0] = [0, 0];
  for (let i = 1; i < 9; i++) {
    let list = [];
    list[0] = [0, 0];
    for (let j = 1; j < 9; j++) {
      list.push([i, j]);
    }
    board.push(list);
  }
  return board;
}

export function knight(position) {
  let move = movesFactory(position);
  const a = move.data[0];
  const b = move.data[1];

  if (a + 2 > 0 && b + 1 > 0) move.one = movesFactory(board[a + 2][b + 1]);
  if (a + 1 > 0 && b + 2 > 0) move.two = movesFactory(board[a + 1][b + 2]);
  if (a - 1 > 0 && b + 2 > 0) move.three = movesFactory(board[a - 1][b + 2]);
  if (a - 2 > 0 && b + 1 > 0) move.four = movesFactory(board[a - 2][b + 1]);
  if (a - 2 > 0 && b - 1 > 0) move.five = movesFactory(board[a - 2][b - 1]);
  if (a - 1 > 0 && b - 2 > 0) move.six = movesFactory(board[a - 1][b - 2]);
  if (a + 1 > 0 && b - 2 > 0) move.seven = movesFactory(board[a + 1][b - 2]);
  if (a + 2 > 0 && b - 1 > 0) move.eight = movesFactory(board[a + 2][b - 1]);

  return move;

  function movesFactory(
    data,
    one = null,
    two = null,
    three = null,
    four = null,
    five = null,
    six = null,
    seven = null,
    eight = null
  ) {
    return {
      data,
      one,
      two,
      three,
      four,
      five,
      six,
      seven,
      eight,
    };
  }
}
