window.onload = function () {
  var canvas = document.getElementById("canvas");
  if (!canvas) return;
  var ctx = canvas.getContext("2d");

  // Kotak merah
  ctx.fillStyle = "red";
  ctx.fillRect(20, 20, 100, 80);

  // Kotak biru border putih
  ctx.strokeStyle = "white";
  ctx.lineWidth = 3;
  ctx.strokeRect(140, 20, 100, 80);
  ctx.fillStyle = "rgba(0, 0, 255, 0.5)";
  ctx.fillRect(140, 20, 100, 80);

  // Lingkaran kuning
  ctx.beginPath();
  ctx.arc(80, 180, 50, 0, 2 * Math.PI);
  ctx.fillStyle = "yellow";
  ctx.fill();
  ctx.strokeStyle = "green";
  ctx.lineWidth = 4;
  ctx.stroke();

  // Segitiga hijau
  ctx.beginPath();
  ctx.moveTo(250, 130);
  ctx.lineTo(200, 230);
  ctx.lineTo(300, 230);
  ctx.closePath();
  ctx.fillStyle = "lime";
  ctx.fill();
  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;
  ctx.stroke();

  // Teks
  ctx.fillStyle = "white";
  ctx.font = "18px Arial";
  ctx.fillText("HTML5 Canvas", 20, 290);

  // Garis diagonal
  ctx.beginPath();
  ctx.moveTo(20, 320);
  ctx.lineTo(380, 380);
  ctx.strokeStyle = "orange";
  ctx.lineWidth = 3;
  ctx.stroke();

  // Gradien
  var grad = ctx.createLinearGradient(0, 340, 400, 400);
  grad.addColorStop(0, "magenta");
  grad.addColorStop(1, "cyan");
  ctx.fillStyle = grad;
  ctx.fillRect(20, 340, 360, 40);
};
