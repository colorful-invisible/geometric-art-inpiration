import p5 from "p5";

new p5((sk) => {
  const colors = ["white", "red", "black"];

  function randomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  sk.setup = () => {
    sk.createCanvas(sk.windowWidth, sk.windowHeight);
    sk.rectMode(sk.CENTER);
    sk.strokeCap(sk.SQUARE);
    sk.background("white");
    sk.frameRate(2);
  };

  sk.draw = () => {
    sk.push();
    sk.translate(sk.width / 2, sk.height / 2);
    sk.fill(randomColor());
    sk.noStroke();
    sk.rect(0, 0, 800, 600);
    sk.pop();

    sk.translate(sk.width / 2 - 400, sk.height / 2 - 300);
    // sk.push();
    // sk.stroke("blue");
    // sk.strokeWeight(4);
    // sk.line(400, 0, 400, 600);
    // sk.line(200, 0, 200, 600);
    // sk.line(600, 0, 600, 600);
    // sk.pop();

    sk.push();
    sk.stroke(randomColor());
    sk.strokeWeight(32);

    // HORIZONTAL LINES
    sk.line(32, 48, 432, 48);
    sk.line(96, 552, 200, 552);
    sk.line(600, 48, 768, 48);
    sk.line(600, 132, 768, 132);
    sk.line(600, 216, 768, 216);
    sk.line(600, 300, 768, 300);
    sk.line(424, 408, 600, 408);
    sk.line(572, 500, 768, 500);

    // VERTICAL LINES
    sk.line(96, 280, 96, 568);
    sk.line(200, 48, 200, 568);
    sk.line(320, 32, 320, 568);
    sk.line(432, 32, 432, 568);
    sk.line(600, 32, 600, 424);
    sk.line(752, 48, 752, 500);
    sk.pop();

    sk.push();
    sk.noStroke();
    sk.fill(randomColor());
    sk.quad(96, 62, 162, 200, 96, 324, 32, 200);
    sk.quad(580, 568, 448, 500, 580, 440, 712, 500);
    sk.pop();

    sk.push();
    sk.stroke(randomColor());
    sk.strokeWeight(32);
    sk.line(96, 128 + 8, 96, 256 - 8);
    sk.line(524, 500, 636, 500);
    sk.pop();
  };
});
