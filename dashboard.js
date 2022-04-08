function myFunction() {
    let value = document.getElementById("select-menu").value;
        switch(value) {
        case "dashboard":
            document.location.href = 'file:///Users/garystroup/Documents/webDevelopment/lims/index.html';
            break;
        case "tissue-culture":
            document.location.href = 'file:///Users/garystroup/Documents/webDevelopment/lims/tissue-culture.html';
            break;
        case "stem-cells": 
            document.location.href = 'file:///Users/garystroup/Documents/webDevelopment/lims/stem-cells.html';
            break;
        case "fpq-log": 
            document.location.href = 'file:///Users/garystroup/Documents/webDevelopment/lims/fpq-log.html';
            break;
        default: 
        document.location.href = 'file:///Users/garystroup/Documents/webDevelopment/lims/index.html';
    }
    
}