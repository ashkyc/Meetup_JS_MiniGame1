let boxImage1 = document.getElementById("box1");
let boxImage2 = document.getElementById("box2");
let boxImage3 = document.getElementById("box3");

let dog = "https://image.flaticon.com/icons/svg/194/194177.svg";
let cat = "https://image.flaticon.com/icons/svg/194/194179.svg";
let frog = "https://image.flaticon.com/icons/svg/194/194190.svg";
let untouchedBox = "https://image.flaticon.com/icons/png/512/1049/1049370.png";

let numberOfBoxes = 3;
let openBox1 = "";
let openBox2 = "";
let openBox3 = "";

let restartButton = document.getElementById("start");

let currentlyPlaying = true;

const randomBoxesGenerator = () => {
  const puppyBox = Math.floor(Math.random() * numberOfBoxes);
  if (puppyBox === 0) {
    openBox1 = dog;
    openBox2 = cat;
    openBox3 = frog;
  } else if (puppyBox === 1) {
    openBox1 = frog;
    openBox2 = dog;
    openBox3 = cat;
  } else {
    openBox1 = cat;
    openBox2 = frog;
    openBox3 = dog;
  }
};

randomBoxesGenerator();

const isPuppy = box => {
  if (box.src === dog) {
    return true;
  } else {
    return false;
  }
};

const isClicked = box => {
  if (box.src === untouchedBox) {
    return false;
  } else {
    return true;
  }
};

const playBox = box => {
  if (isPuppy(box)) {
    gameOver("win");
  } else {
    gameOver();
  }
};

box1.onclick = () => {
  if (!isClicked(boxImage1) && currentlyPlaying) {
    boxImage1.src = openBox1;
    playBox(box1);
  }
};
box2.onclick = () => {
  if (!isClicked(boxImage2) && currentlyPlaying) {
    boxImage2.src = openBox2;
    playBox(box2);
  }
};
box3.onclick = () => {
  if (!isClicked(boxImage3) && currentlyPlaying) {
    boxImage3.src = openBox3;
    playBox(box3);
  }
};

restartButton.onclick = () => {
  if (!currentlyPlaying) startRound();
};

const startRound = () => {
  numberOfBoxes = 3;
  boxImage1.src = untouchedBox;
  boxImage2.src = untouchedBox;
  boxImage3.src = untouchedBox;
  restartButton.innerHTML = "Good Luck!";
  currentlyPlaying = true;
  randomBoxesGenerator();
};

const gameOver = status => {
  if (status === "win") {
    restartButton.innerHTML = "You win! Click to Play again!";
  } else {
    restartButton.innerHTML = "Game over! Click to Play again!";
  }
  currentlyPlaying = false;
};
