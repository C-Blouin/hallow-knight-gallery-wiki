// Christopher Blouin

// Get the img element with ID map, and assign it to the abyssPhrase variable.
const mapPhrase = document.getElementById('map');
// Assign the initial toggle to true
let mapPhraseToggle = true;

mapPhrase.addEventListener('click', function () {
  mapPhraseToggle = !mapPhraseToggle;
  // IF toggle is true, text is equal to "Click Map". ELSE switch to phrase "An overview of the locations that reside within Hallownest".
  if (mapPhraseToggle) {
    document.getElementById('overview').innerHTML = 'Click Map';
  } else {
    document.getElementById('overview').innerHTML =
      'An overview of the locations that reside within Hallownest!';
  }
});

// Get the element with ID abyss-images, and assign it to the abyssImages variable.
const abyssImages = document.getElementById('abyss-images');
// Assign the initial toggle to true
let abyssToggle = true;
// When the abyss-image is clicked, toggle between two images.
abyssImages.addEventListener('click', function () {
  abyssToggle = !abyssToggle;
  // IF toggle is true, stay on image one. ELSE switch to image two.
  if (abyssToggle) {
    abyssImages.src = 'images\\abyss\\Abyss1.webp';
  } else {
    abyssImages.src = 'images\\abyss\\Abyss2.webp';
  }
});

// Get the element with ID abyss-images, and assign it to the abyssPhrase variable.
const abyssPhrase = document.getElementById('abyss-images');
// Assign the initial toggle to true
let abyssPhraseToggle = true;

// When the image with the ID abyss-images is clicked on, change the H3 element with ID of abyss.
abyssPhrase.addEventListener('click', function () {
  abyssPhraseToggle = !abyssPhraseToggle;
  // IF toggle is true, text is equal to "The Abyss". ELSE switch to phrase "The Abyss Lighthouse".
  if (abyssPhraseToggle) {
    document.getElementById('abyss').innerHTML = 'The Abyss, Depths';
  } else {
    document.getElementById('abyss').innerHTML = 'The Abyss, Lighthouse';
  }
});

const ancientImages = document.getElementById('ancient-images');
let ancientToggle = true;
ancientImages.addEventListener('click', function () {
  ancientToggle = !ancientToggle;

  if (ancientToggle) {
    ancientImages.src = 'images\\ancient-basin\\Ancient1.webp';
  } else {
    ancientImages.src = 'images\\ancient-basin\\Ancient2.webp';
  }
});

// Get the element with ID ancient-images, and assign it to the ancientPhrase variable.
const ancientPhrase = document.getElementById('ancient-images');
// Assign the initial toggle to true
let ancientPhraseToggle = true;

// When the image with the ID ancient-images is clicked on, change the H3 element with ID of ancient.
ancientPhrase.addEventListener('click', function () {
  ancientPhraseToggle = !ancientPhraseToggle;
  // IF toggle is true, text is equal to "The Acient Basin". ELSE switch to phrase "The Ancient Basin Depths".
  if (ancientPhraseToggle) {
    document.getElementById('ancient').innerHTML =
      'The Ancient Basin, Former White Palace';
  } else {
    document.getElementById('ancient').innerHTML =
      'Ancient Basin, Tram Station';
  }
});

const cityImages = document.getElementById('city-of-tears-images');
let cityToggle = true;
cityImages.addEventListener('click', function () {
  cityToggle = !cityToggle;

  if (cityToggle) {
    cityImages.src = 'images\\city-of-tears\\City1.webp';
  } else {
    cityImages.src = 'images\\city-of-tears\\City2.webp';
  }
});

// Get the element with ID city-of-tears-images, and assign it to the cityPhrase variable.
const cityPhrase = document.getElementById('city-of-tears-images');
// Assign the initial toggle to true
let cityPhraseToggle = true;

// When the image with the ID city-of-tears-images is clicked on, change the H3 element with ID of city.
cityPhrase.addEventListener('click', function () {
  cityPhraseToggle = !cityPhraseToggle;
  // IF toggle is true, text is equal to "City of Tears, Fountain". ELSE switch to phrase "City of Tears, Housing".
  if (cityPhraseToggle) {
    document.getElementById('city').innerHTML = 'City of Tears, Fountain';
  } else {
    document.getElementById('city').innerHTML = 'City of Tears, Housing';
  }
});

const colosseumImages = document.getElementById('colosseum-of-fools-images');
let colosseumToggle = true;
colosseumImages.addEventListener('click', function () {
  colosseumToggle = !colosseumToggle;

  if (colosseumToggle) {
    colosseumImages.src = 'images\\colosseum\\Colosseum1.webp';
  } else {
    colosseumImages.src = 'images\\colosseum\\Colosseum2.webp';
  }
});

// Get the element with ID colosseum-images, and assign it to the colosseumPhrase variable.
const colosseumPhrase = document.getElementById('colosseum-of-fools-images');
// Assign the initial toggle to true
let colosseumPhraseToggle = true;

// When the image with the ID colosseum-images is clicked on, change the H3 element with ID of colosseum.
colosseumPhrase.addEventListener('click', function () {
  colosseumPhraseToggle = !colosseumPhraseToggle;
  // IF toggle is true, text is equal to "Colosseum of Fools, Arena". ELSE switch to phrase "Colosseum of Fools, Entrance".
  if (colosseumPhraseToggle) {
    document.getElementById('colosseum').innerHTML =
      'Colosseum of Fools, Arena';
  } else {
    document.getElementById('colosseum').innerHTML =
      'Colosseum of Fools, Entrance';
  }
});

const crystalImages = document.getElementById('crystal-peak-images');
let crystalToggle = true;
crystalImages.addEventListener('click', function () {
  crystalToggle = !crystalToggle;

  if (crystalToggle) {
    crystalImages.src = 'images\\crystal-peak\\Crystal1.webp';
  } else {
    crystalImages.src = 'images\\crystal-peak\\Crystal2.webp';
  }
});

// Get the element with ID crystal-peak-images, and assign it to the crystalPhrase variable.
const crystalPhrase = document.getElementById('crystal-peak-images');
// Assign the initial toggle to true
let crystalPhraseToggle = true;

// When the image with the ID crystal-peak-images is clicked on, change the H3 element with ID of crystal.
crystalPhrase.addEventListener('click', function () {
  crystalPhraseToggle = !crystalPhraseToggle;
  // IF toggle is true, text is equal to "Crystal Peak, Entrance". ELSE switch to phrase "Crystal Peak, Inner Mines".
  if (crystalPhraseToggle) {
    document.getElementById('crystal').innerHTML = 'Crystal Peak, Entrance';
  } else {
    document.getElementById('crystal').innerHTML = 'Crystal Peak, Inner Mines';
  }
});

const deepnestImages = document.getElementById('deepnest-images');
let deepnestToggle = true;
deepnestImages.addEventListener('click', function () {
  deepnestToggle = !deepnestToggle;

  if (deepnestToggle) {
    deepnestImages.src = 'images\\deepnest\\Deepnest1.webp';
  } else {
    deepnestImages.src = 'images\\deepnest\\Deepnest2.webp';
  }
});

// Get the element with ID deepnest-images, and assign it to the deepnestPhrase variable.
const deepnestPhrase = document.getElementById('deepnest-images');
// Assign the initial toggle to true
let deepnestPhraseToggle = true;

// When the image with the ID deepnest-images is clicked on, change the H3 element with ID of deepnest.
deepnestPhrase.addEventListener('click', function () {
  deepnestPhraseToggle = !deepnestPhraseToggle;
  // IF toggle is true, text is equal to "Deepnest, Entrance". ELSE switch to phrase "Deepnest, Depths".
  if (deepnestPhraseToggle) {
    document.getElementById('deepnest').innerHTML = 'Deepnest, Entrance';
  } else {
    document.getElementById('deepnest').innerHTML = 'Deepnest, Depths';
  }
});

const dirtmouthImages = document.getElementById('dirtmouth-images');
let dirtmouthToggle = true;
dirtmouthImages.addEventListener('click', function () {
  dirtmouthToggle = !dirtmouthToggle;

  if (dirtmouthToggle) {
    dirtmouthImages.src = 'images\\dirtmouth\\Dirtmouth1.webp';
  } else {
    dirtmouthImages.src = 'images\\dirtmouth\\Dirtmouth2.webp';
  }
});

// Get the element with ID dirtmouth-images, and assign it to the dirtmouthPhrase variable.
const dirtmouthPhrase = document.getElementById('dirtmouth-images');
// Assign the initial toggle to true
let dirtmouthPhraseToggle = true;

// When the image with the ID dirtmouth-images is clicked on, change the H3 element with ID of dirtmouth.
dirtmouthPhrase.addEventListener('click', function () {
  dirtmouthPhraseToggle = !dirtmouthPhraseToggle;
  // IF toggle is true, text is equal to "Dirtmouth, Town". ELSE switch to phrase "Dirtmouth, Temple Entrance".
  if (dirtmouthPhraseToggle) {
    document.getElementById('dirtmouth').innerHTML = 'Dirtmouth, Town';
  } else {
    document.getElementById('dirtmouth').innerHTML =
      'Dirtmouth, Temple Entrance';
  }
});

const canyonImages = document.getElementById('fog-canyon-images');
let canyonToggle = true;
canyonImages.addEventListener('click', function () {
  canyonToggle = !canyonToggle;

  if (canyonToggle) {
    canyonImages.src = 'images\\fog-canyon\\Canyon1.webp';
  } else {
    canyonImages.src = 'images\\fog-canyon\\Canyon2.webp';
  }
});

// Get the element with ID fog-canyon-images, and assign it to the canyonPhrase variable.
const canyonPhrase = document.getElementById('fog-canyon-images');
// Assign the initial toggle to true
let canyonPhraseToggle = true;

// When the image with the ID fog-canyon-images is clicked on, change the H3 element with ID of canyon.
canyonPhrase.addEventListener('click', function () {
  canyonPhraseToggle = !canyonPhraseToggle;
  // IF toggle is true, text is equal to "Fog Canyon". ELSE switch to phrase "Fog Canyon, Temple".
  if (canyonPhraseToggle) {
    document.getElementById('canyon').innerHTML = 'Fog Canyon';
  } else {
    document.getElementById('canyon').innerHTML = 'Fog Canyon, Temple';
  }
});

const crossroadsImages = document.getElementById('forgotten-crossroads-images');
let crossroadsToggle = true;
crossroadsImages.addEventListener('click', function () {
  crossroadsToggle = !crossroadsToggle;

  if (crossroadsToggle) {
    crossroadsImages.src = 'images\\forgotten-crossroads\\Crossroads1.webp';
  } else {
    crossroadsImages.src = 'images\\forgotten-crossroads\\Crossroads2.webp';
  }
});

// Get the element with ID forgotten-crossroads-images, and assign it to the crossroadsPhrase variable.
const crossroadsPhrase = document.getElementById('forgotten-crossroads-images');
// Assign the initial toggle to true
let crossroadsPhraseToggle = true;

// When the image with the ID forgotten-crossroads-images is clicked on, change the H3 element with ID of crossroads.
crossroadsPhrase.addEventListener('click', function () {
  crossroadsPhraseToggle = !crossroadsPhraseToggle;
  // IF toggle is true, text is equal to "Forgotten Crossroads Entrance". ELSE switch to phrase "Forgotten Crossroads, Well".
  if (crossroadsPhraseToggle) {
    document.getElementById('crossroads').innerHTML =
      'Forgotten Crossroads, Entrance';
  } else {
    document.getElementById('crossroads').innerHTML =
      'Forgotten Crossroads, Well';
  }
});

const fungalImages = document.getElementById('fungal-wastes-images');
let fungalToggle = true;
fungalImages.addEventListener('click', function () {
  fungalToggle = !fungalToggle;

  if (fungalToggle) {
    fungalImages.src = 'images\\fungal-wastes\\Fungal1.webp';
  } else {
    fungalImages.src = 'images\\fungal-wastes\\Fungal2.webp';
  }
});

// Get the element with ID fungal-wastes-images, and assign it to the fungalPhrase variable.
const fungalPhrase = document.getElementById('fungal-wastes-images');
// Assign the initial toggle to true
let fungalPhraseToggle = true;

// When the image with the ID fungal-wastes-images is clicked on, change the H3 element with ID of fungal.
fungalPhrase.addEventListener('click', function () {
  fungalPhraseToggle = !fungalPhraseToggle;
  // IF toggle is true, text is equal to "Fungal Wastes, Entrance". ELSE switch to phrase "Fungal Wastes, Inner Wastes".
  if (fungalPhraseToggle) {
    document.getElementById('fungal').innerHTML = 'Fungal Wastes, Inner Wastes';
  } else {
    document.getElementById('fungal').innerHTML = 'Fungal Wastes, Entrance';
  }
});

const godhomeImages = document.getElementById('godhome-images');
let godhomeToggle = true;
godhomeImages.addEventListener('click', function () {
  godhomeToggle = !godhomeToggle;

  if (godhomeToggle) {
    godhomeImages.src = 'images\\godhome\\Godhome1.webp';
  } else {
    godhomeImages.src = 'images\\godhome\\Godhome2.webp';
  }
});

// Get the element with ID godhome-images, and assign it to the godhomePhrase variable.
const godhomePhrase = document.getElementById('godhome-images');
// Assign the initial toggle to true
let godhomePhraseToggle = true;

// When the image with the ID godhome-images is clicked on, change the H3 element with ID of godhome.
godhomePhrase.addEventListener('click', function () {
  godhomePhraseToggle = !godhomePhraseToggle;
  // IF toggle is true, text is equal to "Godhome, Entrance". ELSE switch to phrase "Godhome, Three Pantheons".
  if (godhomePhraseToggle) {
    document.getElementById('godhome').innerHTML = 'Godhome, Entrance';
  } else {
    document.getElementById('godhome').innerHTML = 'Godhome, Three Pantheons';
  }
});

const greenpathImages = document.getElementById('greenpath-images');
let greenpathToggle = true;
greenpathImages.addEventListener('click', function () {
  greenpathToggle = !greenpathToggle;

  if (greenpathToggle) {
    greenpathImages.src = 'images\\greenpath\\Greenpath1.webp';
  } else {
    greenpathImages.src = 'images\\greenpath\\Greenpath2.webp';
  }
});

// Get the element with ID greenpath-images, and assign it to the greenpathPhrase variable.
const greenpathPhrase = document.getElementById('greenpath-images');
// Assign the initial toggle to true
let greenpathPhraseToggle = true;

// When the image with the ID greenpath-images is clicked on, change the H3 element with ID of greenpath.
greenpathPhrase.addEventListener('click', function () {
  greenpathPhraseToggle = !greenpathPhraseToggle;
  // IF toggle is true, text is equal to "Greenpath, Acid Lake". ELSE switch to phrase "Greenpath, Lake of Unn Shrine".
  if (greenpathPhraseToggle) {
    document.getElementById('greenpath').innerHTML = 'Greenpath, Acid Lake';
  } else {
    document.getElementById('greenpath').innerHTML =
      'Greenpath, Lake of Unn Shrine';
  }
});

const hiveImages = document.getElementById('hive-images');
let hiveToggle = true;
hiveImages.addEventListener('click', function () {
  hiveToggle = !hiveToggle;

  if (hiveToggle) {
    hiveImages.src = 'images\\hive\\Hive1.webp';
  } else {
    hiveImages.src = 'images\\hive\\Hive2.webp';
  }
});

// Get the element with ID hive-images, and assign it to the hivePhrase variable.
const hivePhrase = document.getElementById('hive-images');
// Assign the initial toggle to true
let hivePhraseToggle = true;

// When the image with the ID hive-images is clicked on, change the H3 element with ID of hive.
hivePhrase.addEventListener('click', function () {
  hivePhraseToggle = !hivePhraseToggle;
  // IF toggle is true, text is equal to "Hive, Guardian Room". ELSE switch to phrase "Hive, Entrance".
  if (hivePhraseToggle) {
    document.getElementById('hive').innerHTML = 'Hive, Guardian Room';
  } else {
    document.getElementById('hive').innerHTML = 'Hive, Entrance';
  }
});

const howlingImages = document.getElementById('howling-cliffs-images');
let howlingToggle = true;
howlingImages.addEventListener('click', function () {
  howlingToggle = !howlingToggle;

  if (howlingToggle) {
    howlingImages.src = 'images\\howling-cliffs\\Howling1.webp';
  } else {
    howlingImages.src = 'images\\howling-cliffs\\Howling2.webp';
  }
});

// Get the element with ID howling-images, and assign it to the howlingPhrase variable.
const howlingPhrase = document.getElementById('howling-cliffs-images');
// Assign the initial toggle to true
let howlingPhraseToggle = true;

// When the image with the ID howling-images is clicked on, change the H3 element with ID of howling.
howlingPhrase.addEventListener('click', function () {
  howlingPhraseToggle = !howlingPhraseToggle;
  // IF toggle is true, text is equal to "Howling Cliffs, Wasteland". ELSE switch to phrase "Howling Cliffs, Passage".
  if (howlingPhraseToggle) {
    document.getElementById('howling').innerHTML = 'Howling Cliffs, Wasteland';
  } else {
    document.getElementById('howling').innerHTML = 'Howling Cliffs, Passage';
  }
});

const kingdomImages = document.getElementById('kingdoms-edge-images');
let kingdomToggle = true;
kingdomImages.addEventListener('click', function () {
  kingdomToggle = !kingdomToggle;

  if (kingdomToggle) {
    kingdomImages.src = 'images\\kingdoms-edge\\Kingdom1.webp';
  } else {
    kingdomImages.src = 'images\\kingdoms-edge\\Kingdom2.webp';
  }
});

// Get the element with ID kingdoms-edge-images, and assign it to the kingdomPhrase variable.
const kingdomPhrase = document.getElementById('kingdoms-edge-images');
// Assign the initial toggle to true
let kingdomPhraseToggle = true;

// When the image with the ID kingdoms-edge-images is clicked on, change the H3 element with ID of kingdom.
kingdomPhrase.addEventListener('click', function () {
  kingdomPhraseToggle = !kingdomPhraseToggle;
  // IF toggle is true, text is equal to "Kingdom's Edge, Wyrm's Shell". ELSE switch to phrase "Kingdom's Edge, Central Cliff".
  if (kingdomPhraseToggle) {
    document.getElementById('kingdom').innerHTML =
      "Kingdom's Edge, Wyrm's Shell";
  } else {
    document.getElementById('kingdom').innerHTML =
      "Kingdom's Edge, Central Cliff";
  }
});

const gardenImages = document.getElementById('queens-garden-images');
let gardenToggle = true;
gardenImages.addEventListener('click', function () {
  gardenToggle = !gardenToggle;

  if (gardenToggle) {
    gardenImages.src = 'images\\queens-garden\\Garden1.webp';
  } else {
    gardenImages.src = 'images\\queens-garden\\Garden2.webp';
  }
});

// Get the element with ID queens-garden-images, and assign it to the gardenPhrase variable.
const gardenPhrase = document.getElementById('queens-garden-images');
// Assign the initial toggle to true
let gardenPhraseToggle = true;

// When the image with the ID queens-garden-images is clicked on, change the H3 element with ID of garden.
gardenPhrase.addEventListener('click', function () {
  gardenPhraseToggle = !gardenPhraseToggle;
  // IF toggle is true, text is equal to "Queen's Gardens, Terrace". ELSE switch to phrase "Queen's Gardens, White Lady's Chamber".
  if (gardenPhraseToggle) {
    document.getElementById('garden').innerHTML = "Queen's Gardens, Terrace";
  } else {
    document.getElementById('garden').innerHTML =
      "Queen's Gardens, White Lady's Chamber";
  }
});

const restingImages = document.getElementById('resting-grounds-images');
let restingToggle = true;
restingImages.addEventListener('click', function () {
  restingToggle = !restingToggle;

  if (restingToggle) {
    restingImages.src = 'images\\resting-grounds\\Resting1.webp';
  } else {
    restingImages.src = 'images\\resting-grounds\\Resting2.webp';
  }
});

// Get the element with ID resting-grounds-images, and assign it to the restingPhrase variable.
const restingPhrase = document.getElementById('resting-grounds-images');
// Assign the initial toggle to true
let restingPhraseToggle = true;

// When the image with the ID resting-grounds-images is clicked on, change the H3 element with ID of resting.
restingPhrase.addEventListener('click', function () {
  restingPhraseToggle = !restingPhraseToggle;
  // IF toggle is true, text is equal to "Resting Grounds, Graveyard". ELSE switch to phrase "Resting Grounds, The Blue Lake".
  if (restingPhraseToggle) {
    document.getElementById('resting').innerHTML = 'Resting Grounds, Graveyard';
  } else {
    document.getElementById('resting').innerHTML =
      'Resting Grounds, The Blue Lake';
  }
});

const waterwayImages = document.getElementById('royal-waterways-images');
let waterwayToggle = true;
waterwayImages.addEventListener('click', function () {
  waterwayToggle = !waterwayToggle;

  if (waterwayToggle) {
    waterwayImages.src = 'images\\royal-waterways\\Royal1.webp';
  } else {
    waterwayImages.src = 'images\\royal-waterways\\Royal2.webp';
  }
});

// Get the element with ID royal-waterways-images, and assign it to the restingPhrase variable.
const waterwayPhrase = document.getElementById('royal-waterways-images');
// Assign the initial toggle to true
let waterwayPhraseToggle = true;

// When the image with the ID royal-waterways-images is clicked on, change the H3 element with ID of waterway.
waterwayPhrase.addEventListener('click', function () {
  waterwayPhraseToggle = !waterwayPhraseToggle;
  // IF toggle is true, text is equal to "Royal Waterways, Sewers". ELSE switch to phrase "Royal Waterways, Entrance".
  if (waterwayPhraseToggle) {
    document.getElementById('royal').innerHTML = 'Royal Waterways, Sewers';
  } else {
    document.getElementById('royal').innerHTML = 'Royal Waterways, Entrance';
  }
});

const palaceImages = document.getElementById('white-palace-images');
let palaceToggle = true;
palaceImages.addEventListener('click', function () {
  palaceToggle = !palaceToggle;

  if (palaceToggle) {
    palaceImages.src = 'images\\white-palace\\Palace1.webp';
  } else {
    palaceImages.src = 'images\\white-palace\\Palace2.webp';
  }
});

// Get the element with ID white-palace-images, and assign it to the restingPhrase variable.
const palacePhrase = document.getElementById('white-palace-images');
// Assign the initial toggle to true
let palacePhraseToggle = true;

// When the image with the ID white-palace-images is clicked on, change the H3 element with ID of palace.
palacePhrase.addEventListener('click', function () {
  palacePhraseToggle = !palacePhraseToggle;
  // IF toggle is true, text is equal to "White Palace, Exterior". ELSE switch to phrase "White Palace, Throne".
  if (palacePhraseToggle) {
    document.getElementById('palace').innerHTML = 'White Palace, Exterior';
  } else {
    document.getElementById('palace').innerHTML = 'White Palace, Throne';
  }
});

// Scroll to Top Function, when the onclick.scrollToTop function is called within index.html, scroll to the top of the viewport.
function scrollToTop() {
  window.scrollTo(0, 0);
}
