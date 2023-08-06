//functiopn to search for empty squares
  export const searchFreeSquare = (board) => {
    var freeSquares = [];
    for (let index = 0; index < board.length; index++) {
      if (board[index] === null) {
        freeSquares.push(index);
      }
    }
    const randomIndex = Math.floor(Math.random() * freeSquares.length);
    return freeSquares[randomIndex];
  }
  