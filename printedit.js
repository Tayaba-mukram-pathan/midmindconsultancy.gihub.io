// Price configuration
let prices = {
  size: {
    fullsheet: 2,
    A2: 3,
    A4: 4,
    A5: 8,
    A8: 6,
    A16: 7
  },
  sheet: {
    "12*18": 1,
    "23*36": 4,
    "18*23": 2.5,
    "17*27": 3,
    "20*30": 4,
    "19*25": 5
  },
  paperGsm: {
    Non: 0,
    GVG: 1,
    "60": 3,
    "70": 2,
    "80": 3.5,
    "90": 4,
    "100": 4.5,
    "130": 5,
    "140": 5,
    "250": 7,
    "300": 7.8,
    "350": 8
  },
  type: {
    Art: 1,
    map: 2,
    carel: 3,
    sticker: 4,
    Nt: 5,
    transparent: 6
  },
  color: {
    single: 1,
    fourcolor: 2
  },
  printingSide: {
    single: 1,
    frontback: 2
  }
};

// Function to update prices based on form input
function updatePrices() {
// Update size prices
prices.size.fullsheet = parseFloat(document.getElementById("fullsheetPrice").value);
prices.size.A2 = parseFloat(document.getElementById("A2Price").value);
prices.size.A4 = parseFloat(document.getElementById("A4Price").value);
prices.size.A5 = parseFloat(document.getElementById("A5Price").value);
prices.size.A8 = parseFloat(document.getElementById("A8Price").value);
prices.size.A16 = parseFloat(document.getElementById("A16Price").value);

// Update sheet prices
prices.sheet["12*18"] = parseFloat(document.getElementById("12*18").value);
prices.sheet["23*36"] = parseFloat(document.getElementById("23*36").value);
prices.sheet["18*23"] = parseFloat(document.getElementById("18*23e").value);
prices.sheet["20*30"] = parseFloat(document.getElementById("20*30").value);
prices.sheet["17*27"] = parseFloat(document.getElementById("17*27").value);
prices.sheet["19*25"] = parseFloat(document.getElementById("19*25").value);

// Update paper GSM prices
prices.paperGsm.Non = parseFloat(document.getElementById("Non").value);
prices.paperGsm.GVG = parseFloat(document.getElementById("GVG").value);
prices.paperGsm["60"] = parseFloat(document.getElementById("60").value);
prices.paperGsm["70"] = parseFloat(document.getElementById("70").value);
prices.paperGsm["80"] = parseFloat(document.getElementById("80").value);
prices.paperGsm["90"] = parseFloat(document.getElementById("90").value);
prices.paperGsm["100"] = parseFloat(document.getElementById("100").value);
prices.paperGsm["130"] = parseFloat(document.getElementById("130").value);
prices.paperGsm["170"] = parseFloat(document.getElementById("170").value);
prices.paperGsm["250"] = parseFloat(document.getElementById("250").value);
prices.paperGsm["300"] = parseFloat(document.getElementById("300").value);

// Update type prices
prices.type.Art = parseFloat(document.getElementById("Art").value);
prices.type.map = parseFloat(document.getElementById("Map").value);
prices.type.carel = parseFloat(document.getElementById("Card").value);
prices.type.sticker = parseFloat(document.getElementById("Sticker").value);

// Update color prices
prices.color.single = parseFloat(document.getElementById("Single Color").value);
prices.color.fourcolor = parseFloat(document.getElementById("Four Color").value);

// Update printing side prices
prices.printingSide.single = parseFloat(document.getElementById("Single Side").value);
prices.printingSide.frontback = parseFloat(document.getElementById("Front Back").value);

alert("Prices updated successfully!"); // Display success message

window.location.href = "index.html";
}
