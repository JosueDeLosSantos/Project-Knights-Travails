export const board = gameBoard();

function gameBoard() {
  let board = [[0, 0]];

  for (let i = 1; i < 9; i++) {
    board[0][i] = [0, 0];
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

  if (a + 2 > 0 && b + 1 > 0) {
    if (a + 2 < 9 && b + 1 < 9) {
      move.one = movesFactory(board[a + 2][b + 1]);
    }
  }
  if (a + 1 > 0 && b + 2 > 0) {
    if (a + 1 < 9 && b + 2 < 9) {
      move.two = movesFactory(board[a + 1][b + 2]);
    }
  }
  if (a - 1 > 0 && b + 2 > 0) {
    if (a - 1 < 9 && b + 2 < 9) {
      move.three = movesFactory(board[a - 1][b + 2]);
    }
  }
  if (a - 2 > 0 && b + 1 > 0) {
    if (a - 2 < 9 && b + 1 < 9) {
      move.four = movesFactory(board[a - 2][b + 1]);
    }
  }
  if (a - 2 > 0 && b - 1 > 0) {
    if (a - 2 < 9 && b - 1 < 9) {
      move.five = movesFactory(board[a - 2][b - 1]);
    }
  }
  if (a - 1 > 0 && b - 2 > 0) {
    if (a - 1 < 9 && b - 2 < 9) {
      move.six = movesFactory(board[a - 1][b - 2]);
    }
  }
  if (a + 1 > 0 && b - 2 > 0) {
    if (a + 1 < 9 && b - 2 < 9) {
      move.seven = movesFactory(board[a + 1][b - 2]);
    }
  }
  if (a + 2 > 0 && b - 1 > 0) {
    if (a + 2 < 9 && b - 1 < 9) {
      move.eight = movesFactory(board[a + 2][b - 1]);
    }
  }

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

// This function should search the path using BFS

export function path(sSquare, eSquare) {
  if (JSON.stringify(sSquare.data) == JSON.stringify(eSquare.data)) {
    console.log("yes");
  } else {
    console.log("no");
  }

  let queue = [];
  let result = [];
  queue.push(sSquare);
  result.push(sSquare);
  PathResponse(queue[0]);
  return result;
  function PathResponse(q) {
    if (q.one != null) {
      if (JSON.stringify(q.one.data) == JSON.stringify(eSquare.data)) {
        console.log(q);
        return;
      } else {
        console.log(queue);
        q.one = knight(q.one.data);
        queue.push(q.one);
      }
    }

    if (q.two != null) {
      if (JSON.stringify(q.two.data) == JSON.stringify(eSquare.data)) {
        console.log(q);
        return;
      } else {
        q.two = knight(q.two.data);
        queue.push(q.two);
      }
    }

    if (q.three != null) {
      if (JSON.stringify(q.three.data) == JSON.stringify(eSquare.data)) {
        console.log(q);
        return;
      } else {
        q.three = knight(q.three.data);
        queue.push(q.three);
      }
    }

    if (q.four != null) {
      if (JSON.stringify(q.four.data) == JSON.stringify(eSquare.data)) {
        console.log(q);
        return;
      } else {
        q.four = knight(q.four.data);
        queue.push(q.four);
      }
    }

    if (q.five != null) {
      if (JSON.stringify(q.five.data) == JSON.stringify(eSquare.data)) {
        console.log(q);
        return;
      } else {
        q.five = knight(q.five.data);
        queue.push(q.five);
      }
    }

    if (q.six != null) {
      if (JSON.stringify(q.six.data) == JSON.stringify(eSquare.data)) {
        console.log(q);
        return;
      } else {
        q.six = knight(q.six.data);
        queue.push(q);
      }
    }

    if (q.seven != null) {
      if (JSON.stringify(q.seven.data) == JSON.stringify(eSquare.data)) {
        console.log(q);
        return;
      } else {
        q.seven = knight(q.seven.data);
        queue.push(q.seven);
      }
    }

    if (q.eight != null) {
      if (JSON.stringify(q.eight.data) == JSON.stringify(eSquare.data)) {
        console.log(q);
        return;
      } else {
        q.eight = knight(q.eight.data);
        queue.push(q.eight);
      }
    }

    queue.shift();
    PathResponse(queue[0]);
  }
}

/* Once the eSquare be found another function should return all the parents of 
that node wich will also be the path*/
