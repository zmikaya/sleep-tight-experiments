/*
The calendar heatmap is initialized with the desired settings.
Calendar Heatmap Source: https://github.com/wa0x6e/cal-heatmap
*/

// var cal = new CalHeatMap();
// cal.init({
//     data: "data/data.json",
//     domain: "month",
//     domainLabelFormat: "",
//     range: 2,
//     colLimit: 10, // In order to match the mockup, a colMin may need to be implemented
//     cellSize: 34, // The cell size needs to be dynamically changed according to device, etc.
//     verticalOrientation: true
// });

var cal = new CalHeatMap();
cal.init({
    data: "data/data.json",
    domain: "hour",
    domainLabelFormat: "",
    range: 1,
    colLimit: 14, // In order to match the mockup, a colMin may need to be implemented
    cellSize: 38, // The cell size needs to be dynamically changed according to device, etc.
    verticalOrientation: true
});



function getScreenWidth(){
    // This function will need to get the device screen width
    return screenWidth;
}

function createBlocks(){
    
}
