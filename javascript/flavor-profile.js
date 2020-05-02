// flavor-properties and corresponding angles for coordinate-calculation
// "Fresh" : 0°, "Sour" : 24°, "Bitter" : 48°, "Dry" : 72°, "Harsh" : 96°, "Sweet" : 120°, "Roasty" : 144°, "Smoky" : 168°, "Grassy" : 192°, "Earthy" : 216°, "Woody" : 240°, "Spicy" : 264°, "Fruity" : 288°, "Oily" : 312°, "Umami" : 336°
// var flavorProperties = [0, 24, 48, 72, 96, 120, 144, 168, 192, 216, 240, 264, 288, 312, 336];

// intensity-ranking
var flavorPropertyRanking = [0, 25, 50, 75, 100, 125, 150];

var teaFlavorProfiles = {
    "tra-viet-lotus-green": [2, 1, 1, 5, 4, 0, 0, 0, 2, 0, 4, 1, 0, 0, 0]
};

// converting degrees into calculateable format; radians
function convertAngleToRadians(propertyAngle) {
    var mathPi = Math.PI;
    return propertyAngle * (mathPi / 180);
}

// calucate a singe x-coordinate
function calculatePropertyCoordinateX(propertyAngle, propertyRankingRadius, coordinateXOrigin) {
    var propertyRadians = convertAngleToRadians(propertyAngle);
    
    var coordinateX = propertyRankingRadius * Math.cos(propertyRadians) + coordinateXOrigin;

    return coordinateX.toFixed(2);
}

// calucate a singe y-coordinate
function calculatePropertyCoordinateY(propertyAngle, propertyRankingRadius, coordinateYOrigin) {
    var propertyRadians = convertAngleToRadians(propertyAngle);
    
    var coordinateY = propertyRankingRadius * Math.sin(propertyRadians) + coordinateYOrigin;

    return coordinateY.toFixed(2);
}

// calculate full coordinate-string for svg-polyline-function
function calculatePolarChart(teaFlavorProfile) {
    var coordinateString = '';

    for (var x = 0; x <= 14; x = x + 1) {
        var currentFlavorPropertyAngle = 24 * x;
        // console.log("currentFlavorPropertyAngle[x]: " + currentFlavorPropertyAngle)
        var currentPropertyRankingRadius = flavorPropertyRanking[teaFlavorProfile[x]];
        // console.log("currentPropertyRankingRadius: " + currentPropertyRankingRadius);

        var currentCoordinateX = calculatePropertyCoordinateX(currentFlavorPropertyAngle, currentPropertyRankingRadius, 160);
        var currentCoordinateY = calculatePropertyCoordinateY(currentFlavorPropertyAngle, currentPropertyRankingRadius, 160);

        coordinateString = coordinateString + currentCoordinateX + "," + currentCoordinateY + " ";
        // console.log("coordinate-pair[" + x + "]: " + currentCoordinateX + "," + currentCoordinateY);
    }
    // console.log(coordinateString)
    document.querySelector('#flavor-profile').setAttribute('points', coordinateString);
}

calculatePolarChart(teaFlavorProfiles['tra-viet-lotus-green']);

function calculateBarChart(teaFlavorProfile) {
    var flavorProfileBar = document.querySelectorAll('.chart-bar line');

    for (var x = 0; x <= 14; x = x + 1) {
        var currentPropertyRankingLength = flavorPropertyRanking[teaFlavorProfile[x]];

        var currentCoordinateY = 160 - currentPropertyRankingLength;

        flavorProfileBar[x].setAttribute('y2', currentCoordinateY);
    }
}

calculateBarChart(teaFlavorProfiles['tra-viet-lotus-green']);

// changing between chart-types
/* var buttonChartOption = document.querySelectorAll('.chart-option');

var chartsBar = document.querySelectorAll('.chart-bar');
var chartsPolar = document.querySelectorAll('.chart-polar');

function hideAllCharts() {
    for (var x = 0; x <= chartsBar.length; x = x + 1) {
        chartsBar[x].classList = "chart-bar hide";
        chartsPolar[x].classList = "chart-polar hide";
    }

    for (var x = 0; x < buttonChartOption.length; x = x + 1) {
        buttonChartOption[x].classList.remove('chart-option-chosen');
    }
}

for (var x = 0; x <= buttonChartOption.length; x = x + 1) {
    buttonChartOption[x].addEventListener('click', function(e) {
        console.log('click');
        e.preventDefault();
        
        var currentEvaluation = document.querySelector('svg[data-evaluation="' + this.dataset.evaluation + '"');
        var currentChart =  currentEvaluation.querySelector('g[data-chart="' + this.dataset.chart + '"');

        hideAllCharts();
        currentChart.classList.remove('hide');
        this.classList.add('chart-option-chosen');
        
    });
} */