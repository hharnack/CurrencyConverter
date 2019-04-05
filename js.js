"use strict";
    
    function convertCurrency(value) {

        let amount = 0;
        let source = document.getElementById("source");
        let sourceSelection = source[source.selectedIndex].value;
        let target = document.getElementById("target");
        let targetSelection = target[target.selectedIndex].value;

        let euroRates = {
            euro: 1,
            us: 1.13904,
            uk: 0.853560,
            jpy: 126.299,
            can: 1.49671
        }

        let usRates = {
            us: 1,
            euro: 0.878074,
            uk: 0.749292,
            jpy: 110.901,
            can: 1.31390
        }

        let ukRates = {
            uk: 1,
            us: 1.33462,
            euro: 1.17192,
            jpy: 147.978,
            can: 1.75330
        }

        let japanRates = {
            jpy: 1,
            us: 0.00901801,
            uk: 0.00675681,
            euro: 0.00792029,
            can: 0.0118455
        }

        let canRates = {
            can: 1,
            us: 0.761169,
            uk: 0.570453,
            jpy: 84.4204,
            euro: 0.668530

        }

        switch (sourceSelection) {
            case 'euro':
                amount = (euroRates[targetSelection]) * value;
                document.getElementById("result").innerHTML = (amount.toFixed(2)) + "<br>";
                document.getElementById("result").innerHTML += "(1 euro = " + (euroRates[targetSelection]) + " " + targetSelection + ")";
                break;
            case 'uk':
                amount = (ukRates[targetSelection]) * value;
                document.getElementById("result").innerHTML = (amount.toFixed(2)) + "<br>";
                document.getElementById("result").innerHTML += "(1 uk = " + (ukRates[targetSelection]) + " " + targetSelection + ")";
                break;
            case 'us':
                amount = (usRates[targetSelection]) * value;
                document.getElementById("result").innerHTML = (amount.toFixed(2)) + "<br>";
                document.getElementById("result").innerHTML += "(1 us = " + (usRates[targetSelection]) + " " + targetSelection + ")";
                break;
            case 'jpy':
                amount = (japanRates[targetSelection]) * value;
                document.getElementById("result").innerHTML = (amount.toFixed(2)) + "<br>";
                document.getElementById("result").innerHTML += "(1 jpy = " + (japanRates[targetSelection]) + " " + targetSelection + ")";
                break;
            case 'can':
                amount = (canRates[targetSelection]) * value;
                document.getElementById("result").innerHTML = (amount.toFixed(2)) + "<br>";
                document.getElementById("result").innerHTML += "(1 can = " + (canRates[targetSelection]) + " " + targetSelection + ")";
                break;
        }
    }