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
      "170": 5,
      "250": 7,
      "300": 7.8,
      "350": 8
    },
    type: {
      Art: 1,
      Map: 2,
      Card: 3,
      Sticker: 4
    },
    bindingType: {
      No: 1,
      Kapda: 2,
      Sadhi: 3,
      Pad: 4,
      Register: 5
    },
    ruffPaper: {
      No: 1,
      Duplicate: 2,
      Triplicate: 3
    }
  };
  
  // Function to update prices based on form input and redirect
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
    prices.paperGsm["350"] = parseFloat(document.getElementById("350").value);
  
    // Update paper type prices
    prices.type.Art = parseFloat(document.getElementById("Art").value);
    prices.type.Map = parseFloat(document.getElementById("Map").value);
    prices.type.Card = parseFloat(document.getElementById("Card").value);
    prices.type.Sticker = parseFloat(document.getElementById("Sticker").value);
  
    // Update binding type prices
    prices.bindingType.No = parseFloat(document.getElementById("No").value);
    prices.bindingType.Kapda = parseFloat(document.getElementById("Kapda").value);
    prices.bindingType.Sadhi = parseFloat(document.getElementById("Sadhi").value);
    prices.bindingType.Pad = parseFloat(document.getElementById("Pad").value);
    prices.bindingType.Register = parseFloat(document.getElementById("Register").value);
  
    // Update ruff paper prices
    prices.ruffPaper.No = parseFloat(document.getElementById("No").value);
    prices.ruffPaper.Duplicate = parseFloat(document.getElementById("Duplicate").value);
    prices.ruffPaper.Triplicate = parseFloat(document.getElementById("Triplicate").value);
  
    alert("Prices updated successfully!"); // Display success message
  
    // Redirect to calculator.html
    window.location.href = "index.html";
  }
  