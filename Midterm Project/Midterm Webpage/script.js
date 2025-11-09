// table control
const table = document.getElementById('table_class');

const btn_width_1000px = document.getElementById('ChangeTableWidth1000px');
if (btn_width_1000px) {
  btn_width_1000px.addEventListener('click', () => {
    if (table) {
        table.style.width = '1000px';
    }
  });
}

const btn_width_1200px = document.getElementById('ChangeTableWidth1200px');
if (btn_width_1200px) {
  btn_width_1200px.addEventListener('click', function() {
    if (table) {
        table.style.width = '1200px';
    }
  });
}

const btn_border_and_spacing_width_1px = document.getElementById('ChangeBorderAndSpacingWidth1px');
if (btn_border_and_spacing_width_1px) {
  btn_border_and_spacing_width_1px.addEventListener('click', () => {
    if (table) {
      table.style.border = '1px solid';
      table.style.borderSpacing = '1px';
    }
  });
}

const btn_border_and_spacing_width_10px = document.getElementById('ChangeBorderAndSpacingWidth10px');
if (btn_border_and_spacing_width_10px) {
  btn_border_and_spacing_width_10px.addEventListener('click', () => {
    if (table) {
      table.style.border = '10px solid';
      table.style.borderSpacing = '10px';
    }
  });
}

const btn_border_and_spacing_width_20px = document.getElementById('ChangeBorderAndSpacingWidth20px');
if (btn_border_and_spacing_width_20px) {
  btn_border_and_spacing_width_20px.addEventListener('click', function() {
    if (table) {
      table.style.border = '20px solid';
      table.style.borderSpacing = '20px';
    }
  });
}

const btn_color_green = document.getElementById("ChangeColorGreen");
if (btn_color_green) {
  btn_color_green.addEventListener('click', function() {
    if (table) {
      table.style.backgroundColor = 'rgb(156, 218, 166)';
    }
  });
}

const btn_color_blue = document.getElementById("ChangeColorBlue");
if (btn_color_blue) {
  btn_color_blue.addEventListener('click', function(){
    if (table) {
      table.style.backgroundColor = 'rgb(149, 250, 252)';
    }
  });
}

const btn_color_pink = document.getElementById("ChangeColorPink");
if (btn_color_pink) {
  btn_color_pink.addEventListener('click', function() {
    if (table) {
      table.style.backgroundColor = 'rgb(255, 208, 252)';
    }
  });
}

const btn_color_yellow = document.getElementById('ChangeColorYellow');
if (btn_color_yellow) {
  btn_color_yellow.addEventListener('click', function() {
    if (table) {
      table.style.backgroundColor = 'rgb(255, 230, 166)';
    }
  });
}



const btn_reset = document.getElementById('reset');
if (btn_reset) {
  btn_reset.addEventListener('click', function() {
    if (table) {
      table.style.width = '800px';
      table.style.borderSpacing = '5px';
      table.style.border = '2px solid';
      table.style.backgroundColor = 'white';
    }
  });
}

// Showcase - Polariod
const imageUrls = [
  'Shiba.jpeg',
  'maltese.jpeg',
  'pomeranian.jpeg',
  'poodle.jpeg',
  'samoyed.jpg'
];

let currentIndex = 0; // 用來記錄目前顯示的圖片索引

const mainImage = document.getElementById('Polariod_image');
const currentCountElement = document.getElementById('current-count');
const totalCountElement = document.getElementById('total-count');
const prevButton = document.getElementById('btn_prev');
const nextButton = document.getElementById('btn_next');

function showImage() {
    if (!mainImage || imageUrls.length === 0) { // === : imageUrls 這個陣列是不是空的
        return;
    }

    mainImage.src = imageUrls[currentIndex];

    if (currentCountElement) {
        currentCountElement.textContent = currentIndex + 1;
    }

    if (totalCountElement) {
        totalCountElement.textContent = imageUrls.length;
    }
}

function nextImage() {
    if (imageUrls.length === 0) {
        return;
    }

    currentIndex = (currentIndex + 1) % imageUrls.length;
    showImage();
}

function previousImage() {
    if (imageUrls.length === 0) {
        return;
    }

    currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;    // currentIndex = 0 時會得到 -1，index為負的會有索引錯誤
    showImage();
}

if (nextButton) {
    // nextButton.addEventListener('click', nextImage);
    nextButton.addEventListener('click', function() {
        nextImage();
    });
}

if (prevButton) {
    prevButton.addEventListener('click', previousImage);
}

// 頁面載入時初始化顯示
showImage();


/* About dogCafeCanvas */
var dogCafeCanvas = document.getElementById("dogCafeCanvas");
if (dogCafeCanvas) {
  var ctx = dogCafeCanvas.getContext("2d");
  var canvasWidth = dogCafeCanvas.width;
  var canvasHeight = dogCafeCanvas.height;

  var horizonY = canvasHeight * 0.55;

  // paint gradient sky up to the horizon
  var sunsetSky = ctx.createLinearGradient(0, 0, canvasWidth, horizonY);
  sunsetSky.addColorStop(0, "rgba(255, 244, 214, 1)");
  sunsetSky.addColorStop(0.35, "rgba(255, 183, 178, 1)");
  sunsetSky.addColorStop(0.7, "rgba(255, 126, 158, 1)");
  sunsetSky.addColorStop(1, "rgba(120, 93, 164, 1)");
  ctx.fillStyle = sunsetSky;
  ctx.fillRect(0, 0, canvasWidth, horizonY);

  // stars scattered across sky
  var stars = [
    { x: canvasWidth * 0.15, y: 40, radius: 2 },
    { x: canvasWidth * 0.3, y: 70, radius: 1.5 },
    { x: canvasWidth * 0.45, y: 30, radius: 2.5 },
    { x: canvasWidth * 0.6, y: 65, radius: 1.8 },
    { x: canvasWidth * 0.8, y: 20, radius: 1.6 },
    { x: canvasWidth * 0.9, y: 55, radius: 2 }
  ];
  ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
  stars.forEach(function(star) {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
    ctx.fill();
  });

  // sun glow
  var sunX = canvasWidth * 0.75;
  var sunY = canvasHeight * 0.35;
  var sunRadius = 40;
  var sunGradient = ctx.createRadialGradient(sunX, sunY, 10, sunX, sunY, sunRadius);
  sunGradient.addColorStop(0, "rgba(255, 255, 180, 1)");
  sunGradient.addColorStop(1, "rgba(255, 140, 0, 0)");
  ctx.fillStyle = sunGradient;
  ctx.beginPath();
  ctx.arc(sunX, sunY, sunRadius, 0, 2 * Math.PI);
  ctx.fill();

  // blended shoreline gradient from sea to sand
  var shorelineGradient = ctx.createLinearGradient(0, horizonY, 0, canvasHeight);
  shorelineGradient.addColorStop(0, "rgba(12, 112, 195, 0.95)");
  shorelineGradient.addColorStop(0.35, "rgba(62, 126, 195, 0.9)");
  shorelineGradient.addColorStop(0.6, "rgba(72, 122, 160, 0.85)");
  shorelineGradient.addColorStop(0.8, "rgba(223, 194, 150, 0.95)");
  shorelineGradient.addColorStop(1, "rgba(193, 145, 102, 1)");
  ctx.fillStyle = shorelineGradient;
  ctx.fillRect(0, horizonY, canvasWidth, canvasHeight - horizonY);

  // arc-based waves to blend sea and sand visually
  var waveBands = 3;
  var waveSpacing = 18;
  ctx.strokeStyle = "rgba(255, 255, 255, 0.65)";
  ctx.lineWidth = 1.5;
  for (var band = 0; band < waveBands; band++) {
    var waveY = horizonY + 20 + band * waveSpacing;
    var waveCount = 14;
    var waveWidth = canvasWidth / waveCount;
    for (var j = 0; j < waveCount; j++) {
      var centerX = j * waveWidth + waveWidth / 2;
      ctx.beginPath();
      ctx.arc(centerX, waveY, waveWidth / 2, 0, Math.PI, false);
      ctx.stroke();
    }
  }

  // highlight on water
  var reflectionGradient = ctx.createLinearGradient(0, horizonY, 0, horizonY + 60);
  reflectionGradient.addColorStop(0, "rgba(255, 204, 153, 0.7)");
  reflectionGradient.addColorStop(1, "rgba(255, 204, 153, 0)");
  ctx.fillStyle = reflectionGradient;
  ctx.fillRect(sunX - 40, horizonY, 80, 60);

  ctx.font = "18px Arial";
  ctx.fillStyle = "white";
  ctx.fillText("Sunset Beach with All Our Pups", 15, 30);

  var galleryDogs = [
    { src: "samoyed.jpg", name: "Samoyed" },
    { src: "Shiba.jpeg", name: "Shiba" },
    { src: "bichon.jpeg", name: "Bichon" },
    { src: "maltese.jpeg", name: "Maltese" },
    { src: "poodle.jpeg", name: "Poodle" },
    { src: "pomeranian.jpeg", name: "Pomeranian" }
  ];

  var loadDogImage = function (dog) {
    return new Promise(function (resolve) {
      var img = new Image();
      img.onload = function () {
        resolve({ success: true, dog: dog, img: img });
      };
      img.onerror = function () {
        resolve({ success: false, dog: dog });
      };
      img.src = dog.src;
    });
  };

  Promise.all(galleryDogs.map(loadDogImage)).then(function (results) {
    var loadedDogs = results.filter(function (result) {
      return result.success;
    });

    if (loadedDogs.length === 0) {
      return;
    }

    var dogWidth = 70;
    var dogHeight = 70;
    var gap = 15;
    var totalWidth = loadedDogs.length * dogWidth + (loadedDogs.length - 1) * gap;
    var startX = (canvasWidth - totalWidth) / 2;
    var baseY = canvasHeight - dogHeight - 10;

    loadedDogs.forEach(function (entry, index) {
      var x = startX + index * (dogWidth + gap);
      ctx.drawImage(entry.img, x, baseY, dogWidth, dogHeight);
      ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
      ctx.fillRect(x, baseY + dogHeight - 18, dogWidth, 18);
      ctx.fillStyle = "white";
      ctx.font = "12px Arial";
      ctx.textAlign = "center";
      ctx.fillText(entry.dog.name, x + dogWidth / 2, baseY + dogHeight - 5);
    });

    ctx.textAlign = "left";
  });
}
