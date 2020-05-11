// flavor-properties and corresponding angles for coordinate-calculation
// "Fresh" : 0°, "Sour" : 24°, "Bitter" : 48°, "Dry" : 72°, "Harsh" : 96°, "Sweet" : 120°, "Roasty" : 144°, "Smoky" : 168°, "Grassy" : 192°, "Earthy" : 216°, "Woody" : 240°, "Spicy" : 264°, "Fruity" : 288°, "Oily" : 312°, "Umami" : 336°
// var flavorProperties = [0, 24, 48, 72, 96, 120, 144, 168, 192, 216, 240, 264, 288, 312, 336];

// intensity-ranking
var flavorPropertyRanking = [0, 25, 50, 75, 100, 125, 150];

var teaFlavorProfiles = {
    "tra-viet-lotus-green": [2, 1, 1, 5, 4, 0, 0, 0, 2, 0, 4, 1, 0, 0, 0],
    "teegschwender-natur-stoffwechsel": [3, 3, 3, 3, 4, 0, 0, 0, 4, 2, 3, 2, 4, 1, 0],
    "lupicia-queens-muscat-oolong": [4, 3, 2, 1, 3, 3, 0, 1, 2, 0, 0, 4, 6, 1, 0],
    "madaspice-milky-oolong": [3, 0, 1, 1, 0, 3, 0,0, 3, 0, 0, 0, 1, 0, 0],
    "earl-grey-darjeeling": [0, 5, 7, 2, 4, 1, 0, 1, 1, 2, 4, 0, 5, 0, 0]
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

// .calculatePolarChart(teaFlavorProfiles['tra-viet-lotus-green']);

function calculateBarChart(teaFlavorProfile) {
    var flavorProfileBar = document.querySelectorAll('.chart-bar line');

    for (var x = 0; x <= 14; x = x + 1) {
        var currentPropertyRankingLength = flavorPropertyRanking[teaFlavorProfile[x]];

        var currentCoordinateY = 160 - currentPropertyRankingLength;

        flavorProfileBar[x].setAttribute('y2', currentCoordinateY);
    }
}

// .calculateBarChart(teaFlavorProfiles['tra-viet-lotus-green']);

// navigation:blog-entry-content
function resetBlogEntryNavigation(blogEntryCurrent) {
    var blogEntryContent = document.querySelectorAll('.blog-entry[data-topic="' + blogEntryCurrent + '"] .blog-entry-content > section');
    var blogEntryContentNavigationTarget = document.querySelectorAll('.blog-entry[data-topic="' + blogEntryCurrent + '"] .navigation-blog-entry-content li');

    for(var x = 0; x < blogEntryContent.length; x = x + 1) {
        blogEntryContent[x].classList.remove('show');
    }

    for(var x = 0; x < blogEntryContentNavigationTarget.length; x = x + 1) {
        blogEntryContentNavigationTarget[x].classList.remove('blog-entry-content-current');
    }
}

var navigationBlogEntryContentTarget = document.querySelectorAll('.navigation-blog-entry-content li');
var blogEntryCurrent;

for (var x = 0; x < navigationBlogEntryContentTarget.length; x = x + 1) {
    navigationBlogEntryContentTarget[x].addEventListener('click', function(e) {
        e.preventDefault();

        blogEntryCurrent = this.closest('.blog-entry').dataset.topic;
        console.log(this.dataset.section);
        var blogEntryContentNew = document.querySelector('.blog-entry[data-topic="' + blogEntryCurrent + '"] section[data-section="' + this.dataset.section + '"]');

        resetBlogEntryNavigation(blogEntryCurrent);
        
        this.classList.add('blog-entry-content-current');
        blogEntryContentNew.classList.add('show');

        // calculate flavor-profile for current topic
        var flavorProfileCurrent = teaFlavorProfiles[blogEntryCurrent];
    
        if (flavorProfileCurrent != undefined || flavorProfileCurrent != null) {
            calculateBarChart(flavorProfileCurrent);
            calculatePolarChart(flavorProfileCurrent);
        }
    });
}

var navigationChartTypeTarget = document.querySelectorAll('.navigation-chart-type li');

for (var x = 0; x < navigationChartTypeTarget.length; x = x + 1) {
    navigationChartTypeTarget[x].addEventListener('click', function(e) {
        e.preventDefault();

        var chartNew = this.dataset.chart;
        var currentChartTargets = document.querySelectorAll('.blog-entry[data-topic="' + blogEntryCurrent + '"] .navigation-chart-type li')
        var targetCharts = document.querySelectorAll('.blog-entry[data-topic="' + blogEntryCurrent + '"] .flavor-profile-values g');
        var targetChart = document.querySelector('.blog-entry[data-topic="' + blogEntryCurrent + '"] .flavor-profile-values g[data-chart="' + chartNew + '"');
            
        for (var x = 0; x < targetCharts.length; x = x + 1) {
            targetCharts[x].classList.remove('show');
        }

        for (var x = 0; x < currentChartTargets.length; x = x + 1) {
            currentChartTargets[x].classList.remove('chart-type-current');
        }

        this.classList.add('chart-type-current');
        targetChart.classList.add('show');

    });
}

