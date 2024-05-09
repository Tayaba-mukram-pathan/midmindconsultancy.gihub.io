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

  // Function to update prices based on form input and redirect
  function updatePrices() {
    // Update size prices
    prices.size.fullsheet = parseFloat(document.getElementById("fullsheetPrice").value);
    prices.size.A2 = parseFloat(document.getElementById("A2Price").value);
    // Update other prices similarly

    alert("Prices updated successfully!"); // Display success message

    // Redirect to calculator.html
    window.location.href = "calculator.html";
  }