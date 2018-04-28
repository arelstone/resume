const WINNER = {
  ROCK: 'Rock wins!',
  PAPER: 'Paper wins!',
  SCISSORS: 'Scissors wins!',
  DRAW: 'Draw! Try again!'
}
export default {
  scissors_scissors: WINNER.DRAW,
  scissors_rock: WINNER.ROCK,
  scissors_paper: WINNER.SCISSORS,
  paper_paper: WINNER.DRAW,
  paper_rock: WINNER.PAPER,
  paper_scissors: WINNER.SCISSORS,
  rock_rock: WINNER.DRAW,
  rock_paper: WINNER.PAPER,
  rock_scissors: WINNER.ROCK
}
