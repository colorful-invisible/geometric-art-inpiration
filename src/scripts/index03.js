import p5 from "p5";

new p5((sk) => {
  const colors = ["#E8DC47", "#E5D8D3", "#39373A", "#5FC6EF"];
  let chosenColors = [];

  let startColor, endColor;
  let lerpFactor = 0;
  const lerpSpeed = 0.01;

  function randomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  function assignRandomColors() {
    chosenColors = [randomColor(), randomColor(), randomColor()];
  }

  sk.setup = () => {
    sk.createCanvas(sk.windowWidth, sk.windowHeight);
    sk.rectMode(sk.CENTER);
    sk.strokeCap(sk.SQUARE);
    sk.background("white");

    assignRandomColors();
    startColor = sk.color(randomColor());
    endColor = sk.color(randomColor());
  };

  sk.draw = () => {
    sk.push();
    sk.translate(sk.width / 2, sk.height / 2);
    sk.fill(chosenColors[0]);
    sk.noStroke();
    sk.rect(0, 0, 800, 600);
    sk.pop();

    sk.translate(sk.width / 2 - 400, sk.height / 2 - 300);

    sk.push();
    sk.stroke(chosenColors[1]);
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
    sk.fill(chosenColors[2]);
    sk.quad(96, 62, 162, 200, 96, 324, 32, 200);
    sk.quad(580, 568, 448, 500, 580, 440, 712, 500);
    sk.pop();

    sk.push();
    let interpolatedColor = sk.lerpColor(startColor, endColor, lerpFactor);
    sk.stroke(interpolatedColor);
    sk.strokeWeight(32);
    sk.line(96, 128 + 8, 96, 256 - 8);
    sk.line(524, 500, 636, 500);
    sk.pop();

    if (lerpFactor < 1) {
      lerpFactor += lerpSpeed;
    }

    if (lerpFactor >= 1) {
      startColor = endColor;
      endColor = sk.color(randomColor());
      lerpFactor = 0;
    }
  };
});
