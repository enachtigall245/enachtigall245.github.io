const canvas = document.getElementById("ripples");
const ctx = canvas.getContext("2d");

function setup() {
  // Set up the canvas
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Set up the wave properties
  const waveSpeed = 0.8; // adjust the speed of the wave here
  var wavelength = Math.min(canvas.width, canvas.height) / 15; // adjust the wavelength of the wave here
  const amplitude = Math.min(canvas.width, canvas.height) / 5; // adjust the amplitude of the wave here
  let time = 0;

  function animate() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the wave
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 3;
    ctx.beginPath();

    for (let x = 0; x < canvas.width; x++) {
      const scaler = x/canvas.width;
      const y =
        canvas.height / 2 +
        amplitude *
          Math.sin(((2 * Math.PI) / (wavelength/scaler)) * (x - waveSpeed * time));
      ctx.lineTo(x, y);
    }

    ctx.stroke();

    // Update the time for the next frame
    time += 1;

    // Request the next animation frame
    requestAnimationFrame(animate);
  }

  // Start the animation
  animate();

  // Update the canvas size and wave properties when the window is resized
  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    wavelength = Math.min(canvas.width, canvas.height) / 4;
    amplitude = Math.min(canvas.width, canvas.height) / 10;
  });
}

// Set up the canvas and wave properties
setup();
