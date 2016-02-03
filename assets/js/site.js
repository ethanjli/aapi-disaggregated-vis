var datasets = [{
  "name": "Aggregate immigration by numbers",
  "source": "Figure 2.3 of https://cdn.americanprogress.org/wp-content/uploads/2014/04/AAPI-Immigration1.pdf",
  "rows": [
    ["continent of birth", "Family-sponsored", "Employment-based", "Immediate relatives of U.S. citizens", "Diversity", "Refugees and asylees", "Other"],
    ["Asia", 86, 90.3, 150.5, 12.9, 81.7, 4.3],
    ["North America", 91.84, 16.4, 177.12, 0, 32.8, 9.84],
    ["Africa", 7.49, 4.28, 49.22, 18.19, 26.75, 0],
    ["South America", 11.85, 11.06, 50.56, 0.79, 3.95, 0.79],
    ["Europe", 4.1, 18.04, 46.74, 7.38, 4.1, 0.82],
    ["Oceania", 0.376, 1.034, 2.726, 0.470, 0.094, 0]
  ]
}, {
  "name": "Aggregate immigration by percentage",
  "source": "Figure 2.3 of https://cdn.americanprogress.org/wp-content/uploads/2014/04/AAPI-Immigration1.pdf",
  "rows": [
    ["continent of birth", "Family-sponsored", "Employment-based", "Immediate relatives of U.S. citizens", "Diversity", "Refugees and asylees", "Other"],
    ["Asia", 20, 21, 35, 3, 19, 2],
    ["North America", 28, 5, 54, 0, 10, 3],
    ["Africa", 7, 5, 46, 17, 25, 0],
    ["South America", 15, 14, 64, 1, 5, 1],
    ["Europe", 5, 22, 57, 9, 5, 2],
    ["Oceania", 8, 22, 58, 10, 2, 0],
    ["Total", 20, 14, 46, 4, 15, 1]
  ]
}, {
  "name": "Aggregate household income",
  "source": "Figure 1 of https://www.census.gov/content/dam/Census/library/publications/2015/demo/p60-252.pdf",
  "rows": [
    ["race", "Median household income"],
    ["Asian", 74.297],
    ["White, not Hispanic", 60.256],
    ["Hispanic (any race)", 42.491],
    ["Black", 35.398],
    ["Total", 60.256]
  ]
}, {
  "name": "Aggregate per capita income",
  "source": "Pages 20-21 of http://www.advancingjustice.org/sites/default/files/Communities_of_Contrast_California_2013_0.pdf",
  "rows": [
    ["race", "Per capita income"],
    ["Asian", 29.841],
    ["White, not Hispanic", 42.052],
    ["Hispanic (any race)", 15.670],
    ["Black", 22.002],
    ["Total", 29.188]
  ]
}, {
  "name": "Disaggregated AAPI data",
  "source": "pp. 20-21 of http://www.advancingjustice.org/sites/default/files/Communities_of_Contrast_California_2013_0.pdf",
  "rows": [
    ["ethnicity", "Per capita income", "Low-income (above poverty) rate", "Poverty rate", "Limited English proficient rate", "Uninsured rate", "High school degree but no Bachelor's degree over age 25 rate", "No high school degree over age 25 rate", "Percentage of 2012 immigrants employer-sponsored", "Percentage of 2012 immigrants refugees or asylees"],
    ["Nepalese", 23.249, 22, 14, 43, null, 33, 11, 8, 53],
    ["Bangladeshi", 24.878, 32, 12, 43, null, 31, 12, 4, 1],
    ["Pakistani", 26.582, 18, 13, 27, 16, 34, 13, 15, 5],
    ["Sri Lankan", 32.847, 14, 9, 24, null, 43, 7, 24, 23],
    ["Indian", 40.303, 10, 6, 23, 10, 22, 10, 50, 1],

    ["Hmong", 9.848, 32, 34, 46, 16, 43, 42, 3, 22],
    ["Cambodian", 14.429, 28, 25, 44, 21, 56, 30, 1, 3],
    ["Laotian", 14.485, 29, 17, 42, 18, 49, 39, 3, 22],
    ["Vietnamese", 23.073, 19, 15, 52, 16, 44, 27, 1, 2],
    ["Thai", 23.374, 14, 14, 41, 22, 42, 14, 4, 52],
    ["Burmese", 26.291, 16, 13, 52, null, 33, 16, 0, 91],

    ["Indonesian", 26.376, 15, 10, 31, 19, 48, 6, 20, 14],
    ["Filipino", 26.971, 11, 6, 19, 11, 47, 7, 16, 0],
    ["Malaysian", 39.685, 11, 7, 24, null, 40, 7, 23, 40],

    ["Mongolian", 14.336, 21, 37, 44, null, 37, 3, 15, 22],
    ["Korean", 29.267, 15, 13, 48, 27, 38, 7, 58, 0],
    ["Chinese (except Taiwanese)", 32.782, 14, 11, 43, 12, 31, 18, 24, 22],
    ["Japanese", 35.846, 9, 8, 18, 8, 46, 5, 35, 0],
    ["Taiwanese", 38.090, 10, 10, 47, 13, 25, 5, 35, 0],

    ["Tongan", 12.506, 27, 20, 20, 25, 67, 18, null, null],
    ["Samoan", 15.898, 21, 14, 13, 18, 75, 14, null, 0],
    ["Fijian", 22.379, 13, 5, 23, 14, 66, 22, null, 8],
    ["Guamanian or Chamorro", 23.815, 12, 11, 6, 12, 69, 12, null, null],
    ["Native Hawaiian", 25.387, 14, 10, 2, 13, 67, 9, null, null],

    ["Latino", 15.670, 29, 20, 38, 29, 47, 43, null, null],
    ["Native American or Alaskan Native(s)", 21.449, 19, 18, 9, 20, 63, 20, null, null],
    ["Native Hawaiian or other Pacific Islander(s)", 21.472, 16, 12, 11, 15, 67, 14, null, null],
    ["Black or African American", 22.002, 20, 20, 2, 15, 65, 13, null, null],
    ["Asian American", 29.841, 14, 10, 34, 14, 38, 14, null, null],
    ["White", 42.052, 12, 8, 3, 10, 54, 7, null, null],
    ["Total Population", 29.188, 19, 14, 20, 18, 51, 19, null, null]
  ]
}];
var groupings = [{
  "name": "Immigration categories",
  "groups": [
    ["Family-sponsored", "Employment-based", "Immediate relatives of U.S. citizens", "Diversity", "Refugees and asylees", "Other"]
  ]
}, {
  "name": "Disaggregated categories",
  "groups": [
    ["Low-income (above poverty) rate", "Poverty rate"],
    ["High school degree but no Bachelor's degree over age 25 rate", "No high school degree over age 25 rate"],
    ["Percentage of 2012 immigrants employer-sponsored", "Percentage of 2012 immigrants refugees or asylees"]
  ]
}];

// Charts
var charts = [{
  "x": "continent of birth",
  "rows": datasets[0].rows,
  "type": "bar",
  "selection": {
    "enabled": true
  },
  "groups": groupings[0].groups,
  "order": "null"
}, {
  "x": "continent of birth",
  "rows": datasets[1].rows,
  "type": "bar",
  "selection": {
    "enabled": true
  },
  "groups": groupings[0].groups,
  "order": "null"
}, {
  "x": "race",
  "rows": datasets[2].rows,
  "type": "bar",
  "selection": {
    "enabled": true
  },
  "unload": true
}, {
  "x": "race",
  "rows": datasets[3].rows,
  "type": "bar",
  "selection": {
    "enabled": true
  }
}, {
  "x": "ethnicity",
  "rows": datasets[4].rows,
  "type": "bar",
  "selection": {
    "enabled": true
  },
  "groups": groupings[1].groups
}];

var axes = [{
  "x": {
    "type": "category",
    "label": {
      "text": "Continent of Birth",
      "position": "outer-center"
    },
    "tick": {
      "rotate": -30,
      "multiline": false
    },
    "height": 80
  },
  "y": {
    "show": true,
    "label": {
      "text": "Thousands of People",
      "position": "outer-middle"
    }
  }
}, {
  "x": {
    "type": "category",
    "label": {
      "text": "Race",
      "position": "outer-center"
    },
    "tick": {
      "rotate": -30,
      "multiline": false
    },
    "height": 80
  },
  "y": {
    "show": true,
    "label": {
      "text": "Median Income",
      "position": "outer-middle"
    },
    "tick": {
      "format": function(value) {
        return "$" + value + "k";
      }
    }
  }
}, {
  "x": {
    "type": "category",
    "label": {
      "text": "Ethnicity",
      "position": "outer-center"
    },
    "tick": {
      "rotate": -30,
      "multiline": false
    },
    "height": 130,
    "min": -5
  },
  "y": {
    "show": true,
    "label": {
      "text": "Median Income",
      "position": "outer-middle"
    },
    "tick": {
      "format": function(value) {
        return "$" + value + "k";
      }
    },
    "max": 55
  }
}, {
  "x": {
    "type": "category",
    "label": {
      "text": "Ethnicity",
      "position": "outer-center"
    },
    "tick": {
      "rotate": -30,
      "multiline": false
    },
    "height": 130,
    "min": -5
  },
  "y": {
    "show": true,
    "label": {
      "text": "Percentage of Ethnic Group",
      "position": "outer-middle"
    },
    "tick": {
      "format": function(value) {
        return value + "%";
      }
    },
    "max": 40
  }
}];

var tooltips = [{
  "format": {
    "value": function(value, ratio, id) {
      return value + "k people";
    }
  }
}, {
  "format": {
    "value": function(value, ratio, id) {
      return value + "%";
    }
  }
}, {
  "format": {
    "value": function(value, ratio, id) {
      return "$" + value + "k";
    }
  }
}, {
  "format": {
    "value": function(value, ratio, id) {
      if (id == "Per capita income") return "$" + value + "k";
      else return value + "%";
    }
  }
}];

var regions = [
  [{
    "axis": "x",
    "start": -0.5,
    "end": 4.5
  }, {
    "axis": "x",
    "start": 10.5,
    "end": 13.5
  }, {
    "axis": "x",
    "start": 18.5,
    "end": 23.5
  }]
];

var geographicalRegionGrid = {
  "lines": [{
    "value": 4.5,
    "text": "South Asian"
  }, {
    "value": 10.5,
    "text": "Mainland Southeast Asian"
  }, {
    "value": 13.5,
    "text": "Maritime Southeast Asian"
  }, {
    "value": 18.5,
    "text": "East Asian"
  }, {
    "value": 23.5,
    "text": "Pacific Islander"
  }, {
    "value": 30.4,
    "text": "Aggregated Ethnic Groups"
  }]
};

var grids = [{
  "x": geographicalRegionGrid,
  "y": {
    "lines": [{
      "value": 42.052,
      "text": "White",
      "position": "start"
    }, {
      "value": 29.841,
      "text": "Asian American",
      "position": "start"
    }, {
      "value": 22.002,
      "text": "African American",
      "position": "start"
    }, {
      "value": 15.670,
      "text": "Latino",
      "position": "start"
    }]
  }
}, {
  "x": geographicalRegionGrid,
  "y": {
    "lines": [{
      "value": 20,
      "text": "White",
      "position": "start"
    }, {
      "value": 24,
      "text": "Asian American",
      "position": "start"
    }, {
      "value": 28,
      "text": "Pacific Islander",
      "position": "start"
    }, {
      "value": 37,
      "text": "Native American",
      "position": "start"
    }, {
      "value": 40,
      "text": "African American",
      "position": "start"
    }, {
      "value": 49,
      "text": "Latino",
      "position": "start"
    }]
  }
}, {
  "x": geographicalRegionGrid,
  "y": {
    "lines": [{
      "value": 8,
      "text": "White",
      "position": "start"
    }, {
      "value": 10,
      "text": "Asian American",
      "position": "start"
    }, {
      "value": 12,
      "text": "Pacific Islander",
      "position": "start"
    }, {
      "value": 18,
      "text": "Native American",
      "position": "start"
    }, {
      "value": 20,
      "text": "Latino, African American",
      "position": "start"
    }]
  }
}, {
  "x": geographicalRegionGrid,
  "y": {
    "lines": [{
      "value": 7,
      "text": "White",
      "position": "start"
    }, {
      "value": 14,
      "text": "Asian American",
      "position": "start"
    }, {
      "value": 20,
      "text": "Native American",
      "position": "start"
    }, {
      "value": 13,
      "text": "African American",
      "position": "start"
    }, {
      "value": 43,
      "text": "Latino",
      "position": "start"
    }]
  }
}, {
  "x": geographicalRegionGrid,
  "y": {
    "lines": [{
      "value": 52,
      "text": "Asian American",
      "position": "start"
    }, {
      "value": 61,
      "text": "White",
      "position": "start"
    }, {
      "value": 78,
      "text": "African American",
      "position": "start"
    }, {
      "value": 83,
      "text": "Native American",
      "position": "start"
    }, {
      "value": 90,
      "text": "Latino",
      "position": "start"
    }]
  }
}];

var chartHeights = [{
	"name": "short",
  "height": 500,
  "adjustments": {
  	"much shorter": -200,
    "shorter": -100,
    "default": 0,
    "taller": 100,
    "much taller": 300
  }
}, {
	"name": "tall",
  "height": 500,
  "adjustments": {
  	"much shorter": -200,
    "shorter": -100,
    "default": 0,
    "taller": 300,
    "much taller": 500
  }
}];
function calculateHeight(heightClass, adjustmentClass) {
	return chartHeights[heightClass].height + chartHeights[heightClass].adjustments[adjustmentClass];
}

var defaultMessage = document.getElementById("chart-message").innerHTML,
  manualDuration = 500,
  autoDurationSlow = 12000, autoDurationMedium = 6000, autoDurationFast = 1000,
  timer, autoDuration = autoDurationMedium,
  chartHeightClass = 0,
	chartHeightAdjustmentClass = "default",
  chart;

var currentIndex = 0,
  slides = [
    function() { // 0
      setTitle("Aggregated Immigration");
      chartHeightClass = 0;
      chart = c3.generate({
        "data": charts[0],
        "axis": axes[0],
        "size": {
        	"height": calculateHeight(chartHeightClass, chartHeightAdjustmentClass)
        }
      });
      setMessage("To contextualize AAPI socioeconomic metrics, let's first examine US immigration patterns recorded in 2012.");
      setReference('U.S. Department of Homeland Security, <a href="https://www.dhs.gov/yearbook-immigration-statistics-2012-legal-permanent-residents">"Yearbook of Immigration Statistics: 2012"</a>. Data here was presented in Figure 2.3 of the Center for American Progress\'s <a href="https://www.americanprogress.org/issues/race/report/2014/04/23/87520/state-of-asian-americans-and-pacific-islanders-series/">"State of Asian Americans and Pacific Islanders Series"</a> report by Karthick Ramakrishnan and Farah Z. Ahmad.');
      return true;
    },

    function() { // 1
      chart.regions([{
        "start": -0.5,
        "end": 0.5,
        "class": "continent-asia"
      }]);
      setMessage("Immigrants born in Asia constitute the largest population that obtains " + makeNote("legal permanent resident status", "An immigrant who holds a green card and is not a US citizen.") + " in the US...");
      return true;
    },

    function() { // 2
      chart.focus("Employment-based");
      setMessage("...and the largest population of immigrants who attain this status through " + makeNote("employer sponsorship", "Immigrant visas with employer sponsorship favor immigrants with high levels of expertise or ability within their field, immigrants with advanced degrees, professionals, skilled workers, and investors. These are the elites of their countries of origin.") + ".");
      return true;
    },

    function() { // 3
      chart.revert();
      chart.focus("Refugees and asylees");
      setMessage("Asians also make up the largest share of refugee and asylum cases in the US.");
      return true;
    },

    function() { // 4
      chart.revert();
      setTitle("Aggregated Immigration: Percentages");
      chart.load(charts[1]);
      chart.axis.labels({
        "y": "Percentage"
      });
      chart = c3.generate({
        "tooltip": tooltips[1]
      });
      setMessage("Let's look at the proportions of the groups from each continent of birth.");
      return true;
    },

    function() { // 5
      chart.focus("Employment-based");
      chart.regions.add([{
        "axis": "x",
        "start": 3.5,
        "end": 5.5,
        "class": "continent-comparison"
      }]);
      setMessage("Asia is comparable to Europe and Oceania in the percentage of immigrants born there who become permanent US residents through employer sponsorship...");
      return true;
    },

    function() { // 6
      chart.regions.remove({
        "classes": ["continent-comparison"]
      });
      chart.revert();
      return false;
    },

    function() { // 7
      chart.regions.add([{
        "axis": "x",
        "start": 1.5,
        "end": 2.5,
        "class": "continent-comparison"
      }]);
      chart.focus("Refugees and asylees");
      setMessage("...and the percentage of Asian immigrants who are refugees is just behind that of African immigrants.");
      return true;
    },

    function() { // 8
      setTitle("Aggregated Income");
      chartHeightClass = 0;
      chart = c3.generate({
        "data": charts[2],
        "axis": axes[1],
        "tooltip": tooltips[2],
        "size": {
        	"height": calculateHeight(chartHeightClass, chartHeightAdjustmentClass)
        }
      });
      setMessage("Now that we have a sense of what kinds of AAPI people are selected for by U.S. immigration policy relative to other groups, let's compare median income by race.");
      setReference('U.S. Census Bureau, <a href="https://www.census.gov/hhes/www/poverty/data/#cps">"Income and Poverty in the United States: 2014"</a> report by Carmen DeNavas-Walt and Bernadette D. Proctor, based on information collected from the Current Population Survey Annual Social and Economic Supplement.');
      return true;
    },

    function() { // 9
      chart.select(["Median household income"], [0]);
      setMessage("At first glance, Asian Americans appear to be doing better than any other racial group.");
      return true;
    },

    function() { // 10
      chart.unselect();
      setTitle("Aggregated Income: Per capita");
      chart.load(charts[3]);
      chart.focus("Per capita income");
      setMessage("But if we account for the fact that AAPI households tend to be larger and have more workers...");
      setReference('U.S. Census Bureau, 2006-2010 American Community Survey 5-Year Estimates, Table B19301. Data here was presented on p. 20 of Asian Americans Advancing Justice, <a href="http://www.advancingjustice.org/publication/community-contrasts-asian-americans-native-hawaiians-and-pacific-islanders-california">"A Community of Contrasts: Asian Americans, Native Hawaiians and Pacific Islanders in California, 2013"</a> report.');
      return true;
    },

    function() { // 11
      chart.ygrids.add([{
        "value": 42.052,
        "text": "Per capita income for non-Hispanic Whites",
        "position": "middle"
      }]);
      return false;
    },

    function() { // 12
      chart.select(["Per capita income"], [0]);
      setMessage("...then Asian Americans earn less than whites.");
      return true;
    },

    function() { // 13
      setTitle("Disaggregated Income");
      chartHeightClass = 1;
      chart = c3.generate({
        "data": charts[4],
        "axis": axes[2],
        "tooltip": tooltips[3],
        "regions": regions[0],
        "grid": grids[0],
        "zoom": {
          "enabled": true
        },
        "size": {
        	"height": calculateHeight(chartHeightClass, chartHeightAdjustmentClass)
        }
      });
      chart.hide(["Low-income (above poverty) rate", "Poverty rate", "Limited English proficient rate", "Uninsured rate", "High school degree but no Bachelor's degree over age 25 rate", "No high school degree over age 25 rate", "Percentage of 2012 immigrants employer-sponsored", "Percentage of 2012 immigrants refugees or asylees"], {
        "withLegend": true
      });
      setMessage("Let's look at the AAPI subgroups to see how their per capita incomes compare to each other and to other ethnic groups in California.");
      setReference('U.S. Census Bureau, 2006-2010 American Community Survey 5-Year Estimates, Tables B19301. Data here was presented on p. 20 of Asian Americans Advancing Justice, <a href="http://www.advancingjustice.org/publication/community-contrasts-asian-americans-native-hawaiians-and-pacific-islanders-california">"A Community of Contrasts: Asian Americans, Native Hawaiians and Pacific Islanders in California, 2013"</a> report.');
      return true;
    },

    function() { // 14
      chart.select(["Per capita income"], [5, 6, 7, 14, 19, 20]);
      setMessage("6 of the 24 displayed AAPI ethnic groups have median incomes at least as low as the approximate aggregate median income of Latinos.");
      return true;
    },

    function() { // 15
      chart.unselect();
      chart.select(["Per capita income"], [0, 1, 2, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 19, 20, 21, 22, 23]);
      setMessage("18 of the 24 displayed AAPI ethnic groups, including all Pacific Islander and Mainland Southeast Asian groups, have median incomes lower than Asian Americans in aggregate.");
      return true;
    },

    function() { // 16
      chart.unselect();
      chart.select(["Per capita income"], [3, 4, 8, 9, 10, 13, 15, 16, 17, 18, 21, 22, 23]);
      setMessage("From each region of origin, some AAPI ethnic groups earn relatively much more than other ethnic groups from the same region. Thus, aggregating data by region of origin hides valuable information.");
      return true;
    },

    function() { // 17
      chart.unselect();
      chart.select(["Per capita income"], [4, 5, 24, 29]);
      setMessage("The highest median income of any displayed AAPI ethnic group is over 4 times that of the lowest median income. For comparison, the median income of whites is 2.8 times the median income of Latinos.");
      return true;
    },

    function() { // 18
      setTitle("Poverty and Education");
      chartHeightClass = 1;
      chart = c3.generate({
        "data": charts[4],
        "axis": axes[3],
        "tooltip": tooltips[3],
        "regions": regions[0],
        "grid": grids[2],
        "zoom": {
          "enabled": true
        },
        "size": {
        	"height": calculateHeight(chartHeightClass, chartHeightAdjustmentClass)
        }
      });
      chart.hide(["Per capita income", "Low-income (above poverty) rate", "Limited English proficient rate", "Uninsured rate", "High school degree but no Bachelor's degree over age 25 rate", "No high school degree over age 25 rate", "Percentage of 2012 immigrants employer-sponsored", "Percentage of 2012 immigrants refugees or asylees"], {
        "withLegend": true
      });
      setMessage("Now let's examine another socioeconomic metric, the proportion of each ethnicity that earns less than the " + makeNote("federal poverty line", "The federal poverty line does not adjust for the high cost of living in California, especially in certain areas where AAPI individuals tend to live. Thus, these rates may not capture the full extent of poverty.") + ".");
      setReference('U.S. Census Bureau, 2006-2010 American Community Survey 5-Year Estimates, Tables B17001, and C17002. Data here was presented on p. 21 of Asian Americans Advancing Justice, <a href="http://www.advancingjustice.org/publication/community-contrasts-asian-americans-native-hawaiians-and-pacific-islanders-california">"A Community of Contrasts: Asian Americans, Native Hawaiians and Pacific Islanders in California, 2013"</a> report.');
      return true;
    },

    function() { // 19
      chart.unselect();
      chart.select(["Poverty rate"], [5, 6, 14]);
      setMessage("Over a quarter of all Hmong, Cambodian, and Mongolian Americans earn less than the federal poverty line.");
      return true;
    },

    function() { // 20
      chart.unselect();
      chart.focus(["Poverty rate"]);
      chart.select(["Poverty rate"], [0, 1, 2, 3, 7, 8, 9, 10, 11, 15, 16, 17, 18, 19, 20, 22, 23]);
      setMessage("AAPI ethnic groups are spread across the range of rates covered by the aggregate racial groups...");
      return true;
    },


    function() { // 21
      chart.unselect();
      chart.select(["Poverty rate"], [4, 5, 6, 12, 13, 14, 21]);
      setMessage("...and beyond it, with very large differences between the highest rates and the lowest rates.");
      return true;
    },


    function() { // 22
      chart.unselect();
      chart.select(["Poverty rate"], [0, 4, 5, 10, 14, 17, 19, 21]);
      setMessage("Large disparities exist within each geographical region of origin: in most regions, the highest and lowest rates differ by a factor of at least 2.");
      return true;
    },

    function() { // 23
      chart.unselect();
      setTitle("Poverty and Education: Secondary Education");
      chart.axis.range({
        "max": {
          "y": 40
        }
      });
      chart.show(["No high school degree over age 25 rate"], {
        "withLegend": true
      });
      chart.ygrids(grids[3].y.lines);
      setMessage("Among individuals 25 years and older, the likelihood that members of AAPI ethnic groups lack high school degrees roughly corresponds to the poverty rates of the various groups, but there are exceptions.");
      setReference('U.S. Census Bureau, 2006-2010 American Community Survey 5-Year Estimates, Tables B17001, C17002, and B15002. Data here was presented on pp. 18-21 of Asian Americans Advancing Justice, <a href="http://www.advancingjustice.org/publication/community-contrasts-asian-americans-native-hawaiians-and-pacific-islanders-california">"A Community of Contrasts: Asian Americans, Native Hawaiians and Pacific Islanders in California, 2013"</a> report.');
      return true;
    },

    function() { // 24
      chart.unselect();
      chart.axis.range({
        "min": {
          "x": 5
        },
        "max": {
          "x": 13.1
        }
      });
      setMessage("Let's take a closer look at Southeast Asian Americans.");
      return true;
    },

    function() { // 25
      chart.unselect();
      chart.select(["No high school degree over age 25 rate"], [5, 6, 7, 8]);
      setMessage("These 4 groups have very high rates of high school non-completion among individuals born before 1990. Not coincidentally, these were groups displaced as refugees following the Vietnam War.");
      return true;
    },

    function() { // 26
      chart.unselect();
      chart.select(["Poverty rate"], [5, 6, 7, 8]);
      setMessage("Despite such a similarity, these groups have very different poverty rates: the rate for Hmong Americans is more than twice that for Vietnamese Americans.");
      return true;
    },

    function() { // 27
      chart.unselect();
      chart.axis.range({
        "min": {
          "x": 5
        },
        "max": {
          "x": 13.1
        }
      });
      setMessage("Southeast Asian Americans from different ethnic groups face different disparities and have needs that must be addressed specifically.");
      return true;
    },

    function() { // 28
      chart.unselect();
      chart.axis.range({
        "min": {
          "x": 14
        },
        "max": {
          "x": 18.1
        }
      });
      setMessage("All displayed East Asian ethnic groups have cultures with Confucian influences, but they do not finish high school at similar rates.");
      return true;
    },

    function() { // 29
      chart.unselect();
      chart.select(["No high school degree over age 25 rate"], [16, 18]);
      setMessage("Chinese and Taiwanese Americans have many shared cultural characteristics, yet Chinese Americans are 3 times as likely to lack a high school degree.");
      return true;
    },

    function() { // 30
      chart.unselect();
      chart.show(["Percentage of 2012 immigrants employer-sponsored", "Percentage of 2012 immigrants refugees or asylees"], {
        "withLegend": true
      });
      return false;
    },

    function() { // 31
      chart.focus(["Percentage of 2012 immigrants employer-sponsored", "Percentage of 2012 immigrants refugees or asylees", "No high school degree over age 25 rate"]);
      chart.select(["Percentage of 2012 immigrants employer-sponsored", "Percentage of 2012 immigrants refugees or asylees"], [16, 18]);
      setMessage("We might explain this difference by noting that many recent Chinese immigrants are refugees or asylees, while no Taiwanese immigrants are refugees or asylees &ndash; immigration patterns shape socioeconomic outcomes.");
      setReference('U.S. Department of Homeland Security, <a href="http://www.dhs.gov/publication/yearbook-immigration-statistics-2012-legal-permanent-residents">Yearbook of Immigration Statistics: 2012 Legal Permanent Residents</a>, Table 10.');
      return true;
    },

    function() { // 32
      chart.unselect();
      chart.focus(["Percentage of 2012 immigrants refugees or asylees", "Poverty rate"]);
      chart.select(["Percentage of 2012 immigrants employer-sponsored", "Percentage of 2012 immigrants refugees or asylees"], [14]);
      setMessage("We also see that many Mongolian Americans who obtained their green cards in 2012 entered as refugees or asylees, which may explain their high poverty rate.");
      return true;
    },

    function() { // 33
      chart.unselect();
      chart.show(["High school degree but no Bachelor's degree over age 25 rate", "No high school degree over age 25 rate"], {
        "withLegend": true
      });
      chart.hide(["Percentage of 2012 immigrants employer-sponsored", "Percentage of 2012 immigrants refugees or asylees", "Poverty rate", "Low-income (above poverty) rate"], {
        "withLegend": true
      });
      setReference('U.S. Census Bureau, 2006-2010 American Community Survey 5-Year Estimates, Tables B17001, C17002, and B15002. Data here was presented on pp. 18-21 of Asian Americans Advancing Justice, <a href="http://www.advancingjustice.org/publication/community-contrasts-asian-americans-native-hawaiians-and-pacific-islanders-california">"A Community of Contrasts: Asian Americans, Native Hawaiians and Pacific Islanders in California, 2013"</a> report.');
      return false;
    },

    function() { // 34
      setTitle("Poverty and Education: Higher Education");
      chart.axis.range({
        "min": {
          "x": 0
        },
        "max": {
          "x": 30,
          "y": 90
        }
      });
      chart.focus(["No high school degree over age 25 rate", "High school degree but no Bachelor's degree over age 25 rate"]);
      chart.ygrids(grids[4].y.lines);
      setMessage("Now let's examine disparities in access to undergraduate education.");
      return true;
    },

    function() { // 35
      chart.unselect();
      chart.select(["No high school degree over age 25 rate", "High school degree but no Bachelor's degree over age 25 rate"], [19, 20, 21, 22, 23, 28]);
      setMessage("While Pacific Islanders lack high school degrees at rates comparable to the aggregate rate for Asian Americans, they lack Bachelor's degrees at disproportionately high rates.");
      return true;
    },

    function() { // 36
      chart.select(["No high school degree over age 25 rate", "High school degree but no Bachelor's degree over age 25 rate"], [4, 5, 6, 7, 18, 19, 20, 21, 22, 23]);
      setMessage("The proportion of Hmong Americans, Cambodian Americans, Laotian Americans, and all Pacific Islanders without Bachelor's degrees is almost three times the proportion of Indian Americans and Taiwanese Americans without Bachelor's degrees &ndash; a huge disparity.");
      return true;
    },

    function() { // 37
      chart.unselect();
      chart.show(["Per capita income", "Poverty rate", "Low-income (above poverty) rate", "Limited English proficient rate", "Uninsured rate", "Percentage of 2012 immigrants employer-sponsored", "Percentage of 2012 immigrants refugees or asylees"], {
        "withLegend": true
      });
      chart.hide(["Per capita income", "Poverty rate", "Low-income (above poverty) rate", "Limited English proficient rate", "Uninsured rate", "Percentage of 2012 immigrants employer-sponsored", "Percentage of 2012 immigrants refugees or asylees"], {
        "withLegend": false
      });
    },

    function() { // 38
      chart.unselect();
      setTitle("Poverty and Education: Conclusion");
      setMessage('We saw that immigration policy selects for highly skilled and educated immigrants from Asia &ndash; those with attributes that fit (and promote) the model minority stereotype. We then explored several ways in which aggregate data on AAPI outcomes masks extreme disparities between AAPI ethnic groups and misrepresents the differing needs of Asian American and Pacific Islander communities. Further collection and analysis of disaggregated AAPI data, such as in higher education, deportation, and criminalization, is an important step in changing policies and redistributing resources to meet the needs of the most disenfranchised subgroups within the AAPI category. But these achievements <a href="http://reappropriate.co/2015/10/ca-gov-jerry-brown-vetoes-aapi-data-disaggregation-bill/">won\'t happen on their own</a>. Rather, we must organize within our communities to build a more equitable society for all indigenous peoples and people of color, including Pacific Islanders and Asian Americans.');
      setReference('U.S. Census Bureau, 2006-2010 American Community Survey 5-Year Estimates. Data here was presented in Asian Americans Advancing Justice, <a href="http://www.advancingjustice.org/publication/community-contrasts-asian-americans-native-hawaiians-and-pacific-islanders-california">"A Community of Contrasts: Asian Americans, Native Hawaiians and Pacific Islanders in California, 2013"</a> report.');
      document.getElementById("next-btn").innerHTML = "Restart";
      return true;
    }
  ];

function makeNote(text, note) {
  return '<a href="#" data-toggle="tooltip" data-placement="top" title="' + note + '">' + text + "</a>";
}

function setTitle(title) {
  document.getElementById("chart-title").innerHTML = title + ' <span class="caret"></span>';
}

function setMessage(message) {
  document.getElementById("chart-message").innerHTML = message;
}

function setReference(reference) {
  document.getElementById("reference").innerHTML = "Source: " + reference;
}

function initialInteractions() {
  document.getElementById("chart-message").classList.remove("hidden");
  document.getElementById("height-dropdown").classList.remove("hidden");
  document.getElementById("next-btn").innerHTML = "Next";
}

d3.select("#next-btn").on("click", function() {
  if (this.innerHTML == "Start") initialInteractions();
  document.getElementById("next-btn").classList.add("disabled");
  document.getElementById("next-btn").disabled = "disabled";
  document.getElementById("autoplay-btn").classList.add("disabled");
  document.getElementById("autoplay-btn").disabled = "disabled";
  document.getElementById("next-btn").innerHTML = "Next";
  timer = setInterval(function() {
    if (currentIndex == slides.length) currentIndex = 0;
    if (slides[currentIndex++]()) pauseDemo();
  }, manualDuration);
});

function startAutoplay() {
  var autoplayBtn = document.getElementById("autoplay-btn");
  if (autoplayBtn.innerHTML == "Start Autoplay") initialInteractions();
  if (autoplayBtn.innerHTML == "Pause Autoplay") {
    pauseDemo();
    autoplayBtn.innerHTML = "Resume Autoplay";
    return;
  }
  autoplayBtn.innerHTML = "Pause Autoplay";
  document.getElementById("next-btn").classList.add("disabled");
  document.getElementById("next-btn").disabled = "disabled";
  timer = makeAutoplayTimer();
}

d3.select("#autoplay-btn").on("click", startAutoplay);

// Menu for autoplay speeds
function setAutoplaySpeed(newDuration) {
  autoDuration = newDuration;
  if (document.getElementById("autoplay-btn").innerHTML == "Pause Autoplay") {
    pauseDemo();
    document.getElementById("next-btn").classList.add("disabled");
    document.getElementById("next-btn").disabled = "disabled";
    document.getElementById("autoplay-btn").innerHTML = "Pause Autoplay";
    timer = makeAutoplayTimer();
  } else {
    startAutoplay();
  }
}
d3.select("#autoplay-speed-slow").on("click", function() {
  setAutoplaySpeed(autoDurationSlow);
});
d3.select("#autoplay-speed-medium").on("click", function() {
  setAutoplaySpeed(autoDurationMedium);
});
d3.select("#autoplay-speed-fast").on("click", function() {
  setAutoplaySpeed(autoDurationFast);
});

// Menu for jumping between sections
d3.select("#jump-aggregated-immigration").on("click", function() {
  if (document.getElementById("next-btn").innerHTML == "Start") initialInteractions();
  if (document.getElementById("autoplay-btn").innerHTML == "Pause Autoplay") pauseDemo();
  document.getElementById("next-btn").innerHTML = "Next";
  timer = makeJumpTimer(0);
});
d3.select("#jump-aggregated-income").on("click", function() {
  if (document.getElementById("next-btn").innerHTML == "Start") initialInteractions();
  if (document.getElementById("autoplay-btn").innerHTML == "Pause Autoplay") pauseDemo();
  document.getElementById("next-btn").innerHTML = "Next";
  timer = makeJumpTimer(8);
});
d3.select("#jump-disaggregated-income").on("click", function() {
  if (document.getElementById("next-btn").innerHTML == "Start") initialInteractions();
  if (document.getElementById("autoplay-btn").innerHTML == "Pause Autoplay") pauseDemo();
  document.getElementById("next-btn").innerHTML = "Next";
  timer = makeJumpTimer(13);
});
d3.select("#jump-disaggregated-poverty-rates").on("click", function() {
  if (document.getElementById("next-btn").innerHTML == "Start") initialInteractions();
  if (document.getElementById("autoplay-btn").innerHTML == "Pause Autoplay") pauseDemo();
  document.getElementById("next-btn").innerHTML = "Next";
  timer = makeJumpTimer(18);
});

function makeJumpTimer(targetIndex) {
  return setInterval(function() {
    currentIndex = targetIndex;
    if (slides[currentIndex++]()) pauseDemo();
  }, manualDuration);
}

function makeAutoplayTimer() {
  return setInterval(function() {
    if (currentIndex == slides.length) currentIndex = 0;
    slides[currentIndex++]();
    document.getElementById("next-btn").innerHTML = "Next";
  }, autoDuration);
}

function pauseDemo() {
  clearInterval(timer);
  document.getElementById("next-btn").classList.remove("disabled");
  document.getElementById("next-btn").disabled = "";
  document.getElementById("autoplay-btn").classList.remove("disabled");
  document.getElementById("autoplay-btn").disabled = "";
  var autoplayButton = document.getElementById("autoplay-btn");
  if (autoplayButton.innerHTML == "Pause Autoplay") autoplayButton.innerHTML = "Resume Autoplay";
}

// Menu for chart height
function setChartHeight(adjustmentClass) {
  chartHeightAdjustmentClass = adjustmentClass;
  chart.resize({"height": calculateHeight(chartHeightClass, chartHeightAdjustmentClass)});
}
d3.select("#chart-height-very-short").on("click", function() {
  setChartHeight("much shorter");
});
d3.select("#chart-height-short").on("click", function() {
  setChartHeight("shorter");
});
d3.select("#chart-height-default").on("click", function() {
  setChartHeight("default");
});
d3.select("#chart-height-tall").on("click", function() {
  setChartHeight("taller");
});
d3.select("#chart-height-very-tall").on("click", function() {
  setChartHeight("much taller");
});

// Enable tooltips
$("#chart-title").tooltip({
  trigger: 'hover'
});
$("#next-btn").tooltip({
  trigger: 'hover'
});
$("#autoplay-btn").tooltip({
  trigger: 'hover'
});
$("#height-dropdown").tooltip({
  trigger: 'hover'
});
$("#autoplay-speed-menu").tooltip({
  trigger: 'hover'
});
$("body").tooltip({
  selector: '[data-toggle="tooltip"]'
});

