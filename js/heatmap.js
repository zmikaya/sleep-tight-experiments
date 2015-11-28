/*
The calendar heatmap is initialized with the desired settings.
Calendar Heatmap Source: https://github.com/wa0x6e/cal-heatmap
*/

var cal = new CalHeatMap();
cal.init({
    data: "data/data.json",
    // start: new Date(1990, 12),
    domain: "week",
    domainLabelFormat: "",
    range: 2,
    // colLimit: 14, // In order to match the mockup, a colMin may need to be implemented
    // rowLimit: 1,
    cellSize: 38, // The cell size needs to be dynamically changed according to device, etc.
    verticalOrientation: true,
    // tooltip: true
});



function getScreenWidth(){
    // This function will need to get the device screen width
    return screenWidth;
}

function createBlocks(){
    
}
