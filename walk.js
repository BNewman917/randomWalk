// The area object defines the div in which the balls will be created
const area = {
  element: document.getElementById('area'),
  width: 600,
  height: 400,
};

// The initialize function creates the area div on the Html page
function initialize() {
area.element.style.width = area.width + 'px';
area.element.style.height = area.height + 'px';
document.body.appendChild(area.element);
}

// The moveTo function moves a given ball to a set x and y coordinates on the page
function moveTo(ball, x, y) {
ball.element.style.left = x + 'px';
ball.element.style.top = y + 'px';
}

// The changeDirectionIfNecessary function reverses the ball direction when it hits the area borders
function changeDirectionIfNecessary(ball, x, y) {
if (x < 0 || x > area.width - ball.width) {
  ball.dx = -ball.dx;
}
if (y < 0 || y > area.height - ball.height) {
  ball.dy = -ball.dy;
}
}

// The create function makes the div and settings for a new ball.
function create(color, dx, dy) {
  let newBall = Object.create(this);
  newBall.dx = dx;
  newBall.dy = dy;
  newBall.width = 25;
  newBall.height = 25; 
  newBall.element = document.createElement('div');
  newBall.element.style.backgroundColor = color;
  newBall.element.style.width = `${newBall.width}px`;
  newBall.element.style.height = `${newBall.height}px`;
  newBall.element.className += 'ball';
  area.element.appendChild(newBall.element);
  return newBall;
}

// The update function sets the balls into motion.
function update(ball, x, y) {
  moveTo(ball, x, y);
  setTimeout(function() {
    changeDirectionIfNecessary(ball, x, y);
    update(ball, x + ball.dx, y + ball.dy);
  }, 1000 / 60);
}

initialize();
const ball1 = create('blue', 4, 3);
const ball2 = create('red', 1, 5);
const ball3 = create('green', 2, 2);
const ball4 = create('purple', 6, 4);
moveTo(ball1, 1, 1);
moveTo(ball2, 10, 10);
moveTo(ball3, 20, 20);
moveTo(ball4, 30, 30);


update(ball1, 70, 0);
update(ball2, 20, 200);
update(ball3, 300, 330);
update(ball4, 150, 225);

if (typeof module !== 'undefined') {
module.exports = { update, create, changeDirectionIfNecessary, moveTo, area };
}

