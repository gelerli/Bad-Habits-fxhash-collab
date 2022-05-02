// 20 Different Illustrations
// 10 Different Banners
// 8 Different Layouts
// 2 Different Layout Styles : Sketchy, Blocks
// 5 Background Colors : eggshell, cheap pink, cheap craft, Zancan, B&W
// 4 Overall Styles : Tough Luck, Pink Dreams, The Zancan, Black & White 

// coded by evil

//-------------------------------------------------------------------------------------------------------------------------------------------------//

p5.disableFriendlyErrors = true;

let f = fxrand()

console.log("fxhash: " + fxhash);
console.log("fxrand: " + f);

const seed = Math.floor(f * 7777777);
console.log("seed:" + seed);

let features = window.$fxhashFeatures = {}

let txture, w,h, size,a, layout;
let layouts;

let images = new Array(20);
let banners = new Array(9);
let commons = new Array(10);
let uncommons = new Array(6);
let rares = new Array(3);
let smallimages = new Array(4);

let small1Idx, small2Idx, small3Idx, small4Idx, largeIdx, bannerIdx;

let idxF1 = fxrand();
let idxF2 = fxrand();
let idxF3 = fxrand();
let idxF4 = fxrand();
let idxF5 = fxrand();
let idxF6 = fxrand();

if (idxF1 < 0.1) {
  small1Idx = Math. floor(fxrand() * rares.length);
} else if (idxF2 < 0.5) {
  small1Idx = Math. floor(fxrand() * uncommons.length);
} else {
  small1Idx = Math. floor(fxrand() * commons.length);
}

if (idxF3 < 0.4) {
  small2Idx = Math. floor(fxrand() * uncommons.length);
} else {
  small2Idx = Math. floor(fxrand() * commons.length);
}

if (idxF4 < 0.3) {
  small3Idx = Math. floor(fxrand() * uncommons.length);
} else {
  small3Idx = Math. floor(fxrand() * commons.length);
}

if (idxF5 < 0.2) {
  largeIdx = Math. floor(fxrand() * rares.length);
} else if (idxF6 < 0.4) {
  largeIdx = Math. floor(fxrand() * uncommons.length);
} else {
  largeIdx = Math. floor(fxrand() * commons.length);
}

bannerIdx = Math. floor(fxrand() * banners.length);

let small1,small2,small3,small4,large,banner;
let imageLayouts;
let gradientBG;

// check if it's all ducked up 
let allDuckedUp = false;  
fxrand() < 0.07 ? allDuckedUp = true : allDuckedUp = false;
allDuckedUp ? features["Ducked Up"] = "True" : features["Ducked Up"] = "False";

// check if there will be an overall style
let isBandW = false , isMonochromeGreen = false, isMonochromePink = false, isNaked = false, isGradientBG = true ;
let style = fxrand(); 

if (style < 0.02) {
  isBandW = true;
  isNaked = true;
  isGradientBG = false ;

} else if (style < 0.1) {
  if(fxrand() < 0.4 ) {isMonochromeGreen = true;  isNaked = true; isGradientBG = false ;} else {isMonochromePink = true; isNaked = true; isGradientBG = false ;} ;
}

// set frame style
if (f < 0.2) {features["Frame Style"] = "Sketchy";} else {features["Frame Style"] = "Blocks"; }

// select and set bg squared paper colors
// bg color palette [ [bgMainKolor, bgLineKolor], [bgMainKolor, bgLineKolor],... ]
let bgKolorPalettes = [
  [ [55, 65, 89, 100, "#f5f2d1"], [202, 47, 15, 70, "#142b38"] ],   // eggshell
  [ [0, 89, 84, 100, "#fbb6b6"], [218, 52, 24, 70, "#1d355d"] ],    // cheap pink
  [ [33, 71, 79, 100, "#f0cfa6"], [350, 41, 29, 70, "#682c36"] ],   // cheap craft
  [ [133, 30, 67, 100, "#93c59e"], [91, 61, 31, 100, "#4d7f1f"] ],  // zancan ;)
  [ [0, 0, 94, 100, "#f0f0f0"], [0, 0, 24, 100, "#3f3f3f"] ]        // B&W
];

let bgMainKolor, bgLineKolor;

if (isBandW) {
  bgMainKolor = bgKolorPalettes[4][0];
  bgLineKolor = bgKolorPalettes[4][1];
  features["Background"] = "Black & White";

} else if (isMonochromeGreen) {
  isBandW = true;
  bgMainKolor = bgKolorPalettes[3][0];
  bgLineKolor = bgKolorPalettes[3][1];
  features["Background"] = "Zancan ;)";

} else if (isMonochromePink) {
  isBandW = true;
  bgMainKolor = bgKolorPalettes[1][0];
  bgLineKolor = bgKolorPalettes[1][1];
  features["Background"] = "cheap pink";

} else {

  if (f < 0.4) {
    bgMainKolor = bgKolorPalettes[0][0]; 
    bgLineKolor = bgKolorPalettes[0][1];
    features["Background"] = "egshell";
  } else if  (f < 0.65)  {
    bgMainKolor = bgKolorPalettes[1][0];
    bgLineKolor = bgKolorPalettes[1][1];
    features["Background"] = "cheap pink";
  }  else if (f < 0.9) {
    bgMainKolor = bgKolorPalettes[2][0];
    bgLineKolor = bgKolorPalettes[2][1];
    features["Background"] = "cheap craft";
  } else {
    bgMainKolor = bgKolorPalettes[3][0];
    bgLineKolor = bgKolorPalettes[3][1];
    features["Background"] = "Zancan ;)";
  }
}

features["Style"] = isMonochromePink ? "Pink Dreams" : isMonochromeGreen ? "The Zancan" : isBandW ? "Black & White" : "Tough Luck"

window.document.body.style = "background-color: "+ bgMainKolor[4];

// handle bg square size
let fcorrected;
f < 0.2 ? fcorrected = f + 0.5 : fcorrected = f;
let bgsquaresize = Math.floor(fcorrected *10) * 10 ;

// select layout 
let layoutIndex = Math.min(Math.floor(fxrand()*8), 7); //super complex math :)
console.log("layout index : " + layoutIndex);

let layoutNames = ["A1", "A2", "A3", "A4", "B1", "B2", "B3", "B4"];
features["Layout"] = layoutNames[layoutIndex];
//console.log("layoutIndex: " + layoutIndex);

let frameBgColors = ['#4c3cbd','#e65e3e','#68cdcf','#58d593','#ea8d9b','#ffd567','#2e579c'];
shuffleArray(frameBgColors);

//-------------------------------------------------------------------------------------------------------------------------------------------------//
// preloading images (unfortunately)
function preload() {
  vinyl = loadImage('imgs/001_vinyl_720p.png');
  skull1 = loadImage('imgs/002_skull1_720p.png');
  skull2 = loadImage('imgs/003_skull2_720p.png');
  skull3 = loadImage('imgs/004_skull3_720p.png');
  shroom = loadImage('imgs/005_shroom_720p.png');
  pepe1 = loadImage('imgs/006_pepe1_720p.png');
  pepe2 = loadImage('imgs/007_pepe2_720p.png');
  cocktail1 = loadImage('imgs/008_cocktail1_720p.png');
  cocktail2 = loadImage('imgs/009_cocktail2_720p.png');
  bomb = loadImage('imgs/010_bomb_720p.png');
  coin = loadImage('imgs/011_coin_720p.png');
  pills = loadImage('imgs/012_pills_720p.png');
  extz1 = loadImage('imgs/013_ex1_720p.png');
  extz2 = loadImage('imgs/014_ex2_720p.png');
  heart1 = loadImage('imgs/015_heart1_720p.png');
  heart2 = loadImage('imgs/016_heart2_720p.png');
  duckedup = loadImage('imgs/017_bdsmduck_720p.png');
  piggybank = loadImage('imgs/018_piggybank_720p.png');
  molotov = loadImage('imgs/019_molotov_720p.png');
  radio = loadImage('imgs/020_radio_720p.png');
  badhabits2b_ = loadImage('imgs/banners_02_badhabits_B_720p.png');
  letsgo_ = loadImage('imgs/banners_02_letsgo_720p.png');
  duckedup_ = loadImage('imgs/banners_03_duckedup_03_720p.png');
  booom_ = loadImage("imgs/banners_04_booom_02_720p.png");
  hilife_ = loadImage("imgs/banners_05_hilife_720p.png");
  yasss_ = loadImage("imgs/banners_06_yasss_04_720p.png");
  bbhmm_ = loadImage("imgs/banners_07_bbhmm_720p.png");
  vibin_ = loadImage("imgs/banners_08_vibin_720p.png");
  gameover_ = loadImage("imgs/banners_09_gameover_720p.png");
  burn_ = loadImage("imgs/banners_10_burn_720p.png");
}
//-------------------------------------------------------------------------------------------------------------------------------------------------//
function setup() {

    randomSeed(seed);

    w = windowWidth;
    h = windowHeight;
    createCanvas(w, h);

    colorMode(HSL, 360, 100, 100, 100);
    blendMode(BLEND);
    angleMode(DEGREES);

  // create texture 
    txture = createGraphics(w*2, h*2);
    txture.colorMode(HSL, 360, 100, 100, 100);
    txture.angleMode(DEGREES);
    for (let i = 0; i < (w * h) / 100; i++) {
      if (fxrand() > 0.5) {
        txture.stroke(0, 0, 100, 1);
      } else {
        txture.stroke(0, 0, 0, 1);
      }
      let x = random(w);
      let y = random(h);
      let angle = random(360);
      txture.line(
        x + cos(angle) * w,
        y + sin(angle) * h,
        x + cos(angle + 180) * w,
        y + sin(angle + 180) * h
      );
    }

  // create gradient frame bg -> https://p5js.org/reference/#/p5/createImage
    gradientBG = createImage(100, 100);
    gradientBG.loadPixels();
    for (let x = 0; x < gradientBG.width; x++) {
      for (let y = 0; y < gradientBG.height; y++) {
        let a = map(y, 0, gradientBG.height, 255, 0);
        gradientBG.set(x, y, [249, 66, 123, a]);
      }
    }
    gradientBG.updatePixels();

  // select images
  images = [vinyl, skull1, skull2, skull3, shroom, pepe1, pepe2, cocktail1, cocktail2, bomb, coin, pills, extz1, extz2, heart1, heart2, duckedup, piggybank, molotov, radio];

  commons = [vinyl, skull1, skull2, cocktail1, cocktail2, coin, pills, extz1, heart1, molotov];
  uncommons = [skull3, bomb, extz2, heart2, shroom, radio];
  rares = [pepe1, pepe2, piggybank];
  banners = [badhabits2b_, letsgo_, booom_, hilife_, yasss_, bbhmm_, vibin_, gameover_, burn_];

  if (idxF1 < 0.1) {
    small1 = rares[small1Idx];
  } else if (idxF2 < 0.5) {
    small1 = uncommons[small1Idx];
  } else {
    small1 = commons[small1Idx];
  }

  if (idxF3 < 0.4) {
    small2 = uncommons[small2Idx];
  } else {
    small2 = commons[small2Idx];
  }

  if (idxF4 < 0.3) {
    small3 = uncommons[small3Idx];
  } else {
    small3 = commons[small3Idx];
  }
  
  switch (layoutIndex) {
    case 0 : 
    small4 = small3;
    break;
    case 1 : 
    small4 = small1;
    break;
    case 2 : 
    small4 = small1;
    break;
    case 3 : 
    small4 = small1;
    break;
    default: 
    small4 = images[Math.floor(fxrand() * images.length)];
  }
  smallimages = [small1, small2, small3, small4];

  if (allDuckedUp) { 
    large = duckedup;
    banner = duckedup_;
  } else if (idxF5 < 0.2) {
    large = rares[largeIdx];
    banner = banners[bannerIdx];
  } else if (idxF6 < 0.4) {
    large = uncommons[largeIdx];
    banner = banners[bannerIdx];
  } else {
    large = commons[largeIdx];
    banner = banners[bannerIdx];
  }


  //convert to B & W
  if (isBandW) {
    for (img of smallimages) {imagetoBW(img)}
    imagetoBW(large);
    imagetoBW(banner);
  }

}
//-------------------------------------------------------------------------------------------------------------------------------------------------//
function draw() {
    background(bgMainKolor[0], bgMainKolor[1], bgMainKolor[2], bgMainKolor[3]);
    
 //draw bg squares 
    noFill();
    stroke(bgLineKolor[0], bgLineKolor[1], bgLineKolor[2], bgLineKolor[3]);
    strokeWeight(0.5);
    push();
    translate(w/2,h/2);
    f < 0.4 ? rotate(fcorrected) : rotate(-fcorrected);
    for (let i = 0; i <= w/2 + bgsquaresize; i += bgsquaresize) {
      line(0 + i  + bgsquaresize, -height/2 -50, 0 + i + bgsquaresize, height + 50);
      line(0 - i, -height/2 - 50, 0 - i, height +50);
    }
    for (let i = 0; i <= h/2 + bgsquaresize; i += bgsquaresize) {
      line(-width/2 - 50, 0 + i  + bgsquaresize, width + 50, 0 + i + bgsquaresize);
      line(-width/2 - 50, 0 - i, width + 50, 0 - i);
    }
    pop();

 // this handles window resize surprisingly well
    size = min(w,h);
    a = size /100;
    //console.log("a :" +a);

 // layout coordinate calculations for translation to window center
 // layouts [ [small1, small2..., large, banner], [layoutB...], [layoutC...] etc. ] <- the order is very important!
 //       i.e. small1 = [layoutA.[0].x, layoutA.[0].y, layoutA.[0].w, layoutA.[0].h]
    layouts = [
      [ [-46*a, -46*a, 24*a, 24*a], [-46*a, -14*a, 24*a, 24*a], [-14*a, -46*a, 56*a, 56*a], [-46*a, 18*a, 88*a, 24*a] ],                              // layout A1
      [ [-46*a, -14*a, 24*a, 24*a], [-46*a, 18*a, 24*a, 24*a], [-14*a, -14*a, 56*a, 56*a], [-46*a, -46*a, 88*a, 24*a] ],                              // layout A2
      [ [18*a, -14*a, 24*a, 24*a], [18*a, 18*a, 24*a, 24*a], [-46*a, -14*a, 56*a, 56*a], [-46*a, -46*a, 88*a, 24*a] ],                                // layout A3
      [ [18*a, -46*a, 24*a, 24*a], [18*a, -14*a, 24*a, 24*a], [-46*a, -46*a, 56*a, 56*a], [-46*a, 18*a, 88*a, 24*a] ],                                // layout A4
      [ [-46*a, -46*a, 24*a, 24*a], [-46*a, -14*a, 24*a, 24*a], [-46*a, 18*a, 24*a, 24*a], [-14*a, -14*a, 56*a, 56*a], [-14*a, -46*a, 56*a, 24*a] ],  // layout B1
      [ [-46*a, -46*a, 24*a, 24*a], [-46*a, -14*a, 24*a, 24*a], [-46*a, 18*a, 24*a, 24*a], [-14*a, -46*a, 56*a, 56*a], [-14*a, 18*a, 56*a, 24*a] ],   // layout B2
      [ [18*a, -46*a, 24*a, 24*a], [18*a, -14*a, 24*a, 24*a], [18*a, 18*a, 24*a, 24*a], [-46*a, -14*a, 56*a, 56*a], [-46*a, -46*a, 56*a, 24*a] ],     // layout B3
      [ [18*a, -46*a, 24*a, 24*a], [18*a, -14*a, 24*a, 24*a], [18*a, 18*a, 24*a, 24*a], [-46*a, -46*a, 56*a, 56*a], [-46*a, 18*a, 56*a, 24*a] ]       // layout B4
    ];

 // image coordinate calculations for translation to window center, unfortunately image layout is not exactly the same as frame layout :(
 // layouts [ [small1, small2..., large, banner], [layoutB...], [layoutC...] etc. ] 
 //       i.e. small1 = [layoutA.[0].x, layoutA.[0].y, layoutA.[0].w, layoutA.[0].h]
    imageLayouts = [
      [ [-46*a, -46*a, 24*a, 24*a], [-46*a, -14*a, 24*a, 24*a], [-46*a, 18*a, 24*a, 24*a], [18*a, 18*a, 24*a, 24*a], [-14*a, -46*a, 56*a, 56*a], [-26*a, 20*a, 48*a, 20*a] ],    // layout A1
      [ [-46*a, -46*a, 24*a, 24*a], [-46*a, -14*a, 24*a, 24*a], [-46*a, 18*a, 24*a, 24*a], [18*a, -46*a, 24*a, 24*a], [-14*a, -14*a, 56*a, 56*a], [-26*a, -44*a, 48*a, 20*a] ],  // layout A2
      [ [-46*a, -46*a, 24*a, 24*a], [18*a, -14*a, 24*a, 24*a], [18*a, 18*a, 24*a, 24*a], [18*a, -46*a, 24*a, 24*a], [-46*a, -14*a, 56*a, 56*a], [-26*a, -44*a, 48*a, 20*a] ],    // layout A3
      [ [-46*a, 18*a, 24*a, 24*a], [18*a, -46*a, 24*a, 24*a], [18*a, -14*a, 24*a, 24*a], [18*a, 18*a, 24*a, 24*a], [-46*a, -46*a, 56*a, 56*a], [-26*a, 20*a, 48*a, 20*a] ],      // layout A4
      [ [-46*a, -46*a, 24*a, 24*a], [-46*a, -14*a, 24*a, 24*a], [-46*a, 18*a, 24*a, 24*a], [-14*a, -14*a, 56*a, 56*a], [-14*a, -46*a, 56*a, 24*a] ],                             // layout B1
      [ [-46*a, -46*a, 24*a, 24*a], [-46*a, -14*a, 24*a, 24*a], [-46*a, 18*a, 24*a, 24*a], [-14*a, -46*a, 56*a, 56*a], [-14*a, 18*a, 56*a, 24*a] ],                              // layout B2
      [ [18*a, -46*a, 24*a, 24*a], [18*a, -14*a, 24*a, 24*a], [18*a, 18*a, 24*a, 24*a], [-46*a, -14*a, 56*a, 56*a], [-46*a, -46*a, 56*a, 24*a] ],                                // layout B3
      [ [18*a, -46*a, 24*a, 24*a], [18*a, -14*a, 24*a, 24*a], [18*a, 18*a, 24*a, 24*a], [-46*a, -46*a, 56*a, 56*a], [-46*a, 18*a, 56*a, 24*a] ]                                  // layout B4
    ];
// set layout
  layout = layouts[layoutIndex];
  imageLayout = imageLayouts[layoutIndex];
  

 //draw layout and place illustrations
    push();
    translate(w/2,h/2);
    //draw layout
    for (let l=0; l < layout.length; l++) {
      
      if (f < 0.2) {
        //draw frame shadows in sketch style
        stroke(10);
        strokeWeight(a/4);
        hacthVertical(layout[l][0] +4*a, layout[l][1] +4*a, layout[l][2], layout[l][3],a/1.5);
        
        //draw frames in sketch style
        strokeWeight(a/2);
        isNaked ? fill(bgMainKolor[0], bgMainKolor[1], bgMainKolor[2], bgMainKolor[3]) : fill(frameBgColors[l]);
        rect(layout[l][0], layout[l][1], layout[l][2], layout[l][3]);

        
      } else {
        //draw frame shadows in block style
        fill(10);
        rect(layout[l][0] +4*a, layout[l][1] +4*a, layout[l][2], layout[l][3]);

        //draw frames in block style
        strokeWeight(a);
        stroke(10);
        isNaked ? fill(bgMainKolor[0], bgMainKolor[1], bgMainKolor[2], bgMainKolor[3]): fill(frameBgColors[l]);
        rect(layout[l][0], layout[l][1], layout[l][2], layout[l][3]);
        
        // create gradientBG
          if (isGradientBG) {
            
            image( gradientBG, layout[l][0], layout[l][1], layout[l][2], layout[l][3] );
            noFill();
            rect(layout[l][0], layout[l][1], layout[l][2], layout[l][3]);

          }
        
        
      }
      
    }

    //place illustrations
    for (let i=0; i<imageLayout.length-2; i++) {
      image(smallimages[i], imageLayout[i][0], imageLayout[i][1], imageLayout[i][2], imageLayout[i][3]);
    }
    image(large, imageLayout[imageLayout.length-2][0], imageLayout[imageLayout.length-2][1], imageLayout[imageLayout.length-2][2], imageLayout[imageLayout.length-2][3]);

    image(banner, imageLayout[imageLayout.length-1][0], imageLayout[imageLayout.length-1][1], imageLayout[imageLayout.length-1][2], imageLayout[imageLayout.length-1][3]);

    pop();

 //show texture
    image(txture, 0,0);

    if (isMonochromeGreen) {
      tint(133,80,85); // green tint
    }
    if (isMonochromePink) {
      tint(0,90,85); // pink tint
    }

    // if noLoop, then everything breaks!
}
//-------------------------------------------------------------------------------------------------------------------------------------------------//
function windowResized() {
    w = windowWidth
    h = windowHeight
    createCanvas(w, h);
  }
//-------------------------------------------------------------------------------------------------------------------------------------------------//
function hacthVertical(x1,y1,x2,y2,step) {
  for (let x = x1 ; x <= x1 + x2; x += step ) {
  line(x, y1, x, y1 + y2 )
  }
}
//-------------------------------------------------------------------------------------------------------------------------------------------------//
// I have seen this on a "The Coding Train" video , by Daniel Shiffman -> https://www.youtube.com/c/TheCodingTrain/
function imagetoBW(img) {
  
  img.loadPixels();
  for (let i = 0; i < img.width; i++) {
    for (let j = 0; j < img.height; j++) {
      const pixelIndex = (i + j*img.width) *4;
      const r = img.pixels[pixelIndex +0];
      const g = img.pixels[pixelIndex +1];
      const b = img.pixels[pixelIndex +2];
      
      let avg = r * 0.45 + g * 0.22 + b * 0.33;
      
      img.pixels[pixelIndex +0] = avg;
      img.pixels[pixelIndex +1] = avg;
      img.pixels[pixelIndex +2] = avg;
    }
  }
  img.updatePixels();
}

//-------------------------------------------------------------------------------------------------------------------------------------------------//
// shuffle array function -> https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(fxrand() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}
//-------------------------------------------------------------------------------------------------------------------------------------------------//
// save as png
function keyPressed() {
  if (key == 's') {
    save("Bad_Habits_" + seed + ".png");
  }
}
//-------------------------------------------------------------------------------------------------------------------------------------------------//
console.log("features : " + JSON.stringify(features));