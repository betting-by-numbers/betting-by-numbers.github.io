/**
 * demographic_specs.js
 * 
 * This file contains the refactored vega-lite graph visualizations for
 * demographic information.
 */

// Shared States
const legendSymbolSize = 70;
const symbolSize = 50;
const backgroundColorHex = "#0b1121";

const demographicVizTitle = {
    "font": "Arial",
    "fontSize": 16,
    "color": "#FFFFFF",
    "anchor": "start"
};

/* Gender Data Visualization */
const genderData = () => {
  const data = { values: [] };
  const maleCount = 65;
  const femaleCount = 35;

  for (let i = 1; i <= maleCount; i++) {
      data.values.push({ id: i, sex: "male" });
  }

  for (let i = maleCount + 1; i <= maleCount + femaleCount; i++) {
      data.values.push({ id: i, sex: "female" });
  }

  return data;
};

const genderSpec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "background": backgroundColorHex,
  "description": "Gender Distribution",
  "config": {
    "axis": {
      "labelFont": "Arial",
      "titleFont": "Arial"
    },
      "legend": {
          "orient": "top",
          "title": null,
          "labelFont": "Arial",
          "symbolType": "circle",
          "symbolSize": legendSymbolSize,
          "labelColor": "#FFFFFF",
          "padding": 10,
          "cornerRadius": 5
      },
      "view": {
        "fill": backgroundColorHex,
        "stroke": backgroundColorHex,
      },
      "title": demographicVizTitle
  },
  "width": 400,
  "height": 300,
  "data": genderData(),
  "transform": [
      {"calculate": "ceil (datum.id/10)", "as": "col"},
      {"calculate": "datum.id - datum.col*10", "as": "row"}
  ],
  "mark": {"type": "point", "filled": true},
  "encoding": {
      "x": {"field": "col", "type": "ordinal", "axis": null},
      "y": {"field": "row", "type": "ordinal", "axis": null},
      "shape": {
          "value": "M1.7 -1.7h-0.8c0.3 -0.2 0.6 -0.5 0.6 -0.9c0 -0.6 -0.4 -1 -1 -1c-0.6 0 -1 0.4 -1 1c0 0.4 0.2 0.7 0.6 0.9h-0.8c-0.4 0 -0.7 0.3 -0.7 0.6v1.9c0 0.3 0.3 0.6 0.6 0.6h0.2c0 0 0 0.1 0 0.1v1.9c0 0.3 0.2 0.6 0.3 0.6h1.3c0.2 0 0.3 -0.3 0.3 -0.6v-1.8c0 0 0 -0.1 0 -0.1h0.2c0.3 0 0.6 -0.3 0.6 -0.6v-2c0.2 -0.3 -0.1 -0.6 -0.4 -0.6z"
      },
      "color": {"field": "sex", "type": "nominal",
        "scale": {
            "domain": ["male", "female"],
            "range": ["#4D7EA8", "#ED6A5A"] // softer colors
        },
        "legend": {
          "title": "Gender",
          "titleColor": "#FFFFFF",
        }  // Add a legend title
      },
      "size": {"value": symbolSize} // Slightly smaller points
  },
  "title": {
      "text": null, // Chart title
      "fontSize": 24,
      "anchor": "middle",
      "color": "#FFFFFF"
  },
  "params": [{"name": "highlight", "select": "interval"}]
};


/* Racial Data Visualization */
const raceData = () => {
  const data = { values: [] };
  const whiteCount = 50;
  const blackCount = 18;
  const latinoCount = 24; 
  const asianCount = 5; 
  const otherCount = 3;
  let id = 1;

  for (let i = 0; i < whiteCount; i++) {
      data.values.push({ id: id++, race: "white" });
  }   
  for (let i = 0; i < blackCount; i++) {
      data.values.push({ id: id++, race: "black" });
  }   
  for (let i = 0; i < latinoCount; i++) {
      data.values.push({ id: id++, race: "latino" });
  }   
  for (let i = 0; i < asianCount; i++) {
      data.values.push({ id: id++, race: "asian" });
  }
  for (let i = 0; i < otherCount; i++) {
      data.values.push({ id: id++, race: "other" });
  }  
  return data;
};

const raceSpec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "background":"#0b1121",
  "description": "Race Distribution",
  "config": {
    "axis": {
      "labelFont": "Arial",
      "titleFont": "Arial"
    },
      "legend": {
          "orient": "top",
          "title": null,
          "labelFont": "Arial",
          "symbolType": "circle",
          "symbolSize": legendSymbolSize,
          "labelColor": "#FFFFFF",
          "padding": 10,
          "cornerRadius": 5
      },
      "view": {
        "fill": backgroundColorHex,
        "stroke": backgroundColorHex,
      },
      "title": demographicVizTitle,
  },
  "width": 400,
  "height": 300,
  "data":  raceData(),
  "transform": [
      {"calculate": "ceil (datum.id/10)", "as": "col"},
      {"calculate": "datum.id - datum.col*10", "as": "row"}
  ],
  "mark": {"type": "point", "filled": true},
  "encoding": {
      "x": {"field": "col", "type": "ordinal", "axis": null},
      "y": {"field": "row", "type": "ordinal", "axis": null},
      "shape": {
          "value": "M1.7 -1.7h-0.8c0.3 -0.2 0.6 -0.5 0.6 -0.9c0 -0.6 -0.4 -1 -1 -1c-0.6 0 -1 0.4 -1 1c0 0.4 0.2 0.7 0.6 0.9h-0.8c-0.4 0 -0.7 0.3 -0.7 0.6v1.9c0 0.3 0.3 0.6 0.6 0.6h0.2c0 0 0 0.1 0 0.1v1.9c0 0.3 0.2 0.6 0.3 0.6h1.3c0.2 0 0.3 -0.3 0.3 -0.6v-1.8c0 0 0 -0.1 0 -0.1h0.2c0.3 0 0.6 -0.3 0.6 -0.6v-2c0.2 -0.3 -0.1 -0.6 -0.4 -0.6z"
      },
      "color": {"field": "race", "type": "nominal",
          "scale": {
              "domain": ["white", "black", "latino", "asian", 'other'],
              "range": ["#4D7EA8", "#ED6A5A", "#70A9A1", "#EEB902", "#4D5359"] // Softer purples
          },
          "legend": {
            "title": "Race",
            "titleColor": "#FFFFFF",
          } // Add a legend title
      },
      "size": {"value": symbolSize}
  },
    "title": {
      "text": null, // Chart title
      "fontSize": 24,
      "anchor": "middle",
      "color": "#FFFFFF"
  },
  "params": [{"name": "highlight", "select": "interval"}]
};


/* Age Data Visualization */
const ageData = () => {
  const data = { values: [] };
  const youngCount = 46;
  const midyoungCount = 38;
  const midoldCount = 11; 
  const oldCount = 5; 
  let id = 1;

  for (let i = 1; i <= youngCount; i++) {
      data.values.push({ id: id, age: "18-34" });
      id++;
  }
  for (let i = youngCount + 1; i <= youngCount + midyoungCount; i++) {
      data.values.push({ id: id, age: "35-49" });
      id++;
  }
  for (let i = youngCount + midyoungCount + 1; i <= youngCount + midyoungCount + midoldCount; i++) {
      data.values.push({ id: id, age: "50-64" });
      id++;
  }
  for (let i = youngCount + midyoungCount + midoldCount + 1; i <= youngCount + midyoungCount + midoldCount + oldCount; i++) {
      data.values.push({ id: id, age: "65+" });
      id++;
  }
  return data;
};

const ageSpec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "background": backgroundColorHex,
  "description": "Age Group Distribution",
  "config": {
    "axis": {
      "labelFont": "Arial",
      "titleFont": "Arial"
    },
      "legend": {
          "orient": "top",
          "title": null,
          "labelFont": "Arial",
          "symbolType": "circle",
          "symbolSize": legendSymbolSize,
          "labelColor": "#FFFFFF",
          "padding": 10,
          "cornerRadius": 5
      },
      "view": {
        "fill": backgroundColorHex,
        "stroke": backgroundColorHex,
      },
      "title": demographicVizTitle
  },
  "width": 400,
  "height": 300,
  "data": ageData(),
  "transform": [
      {"calculate": "ceil (datum.id/10)", "as": "col"},
      {"calculate": "datum.id - datum.col*10", "as": "row"}
  ],
  "mark": {"type": "point", "filled": true},
  "encoding": {
      "x": {"field": "col", "type": "ordinal", "axis": null},
      "y": {"field": "row", "type": "ordinal", "axis": null},
      "shape": {
          "value": "M1.7 -1.7h-0.8c0.3 -0.2 0.6 -0.5 0.6 -0.9c0 -0.6 -0.4 -1 -1 -1c-0.6 0 -1 0.4 -1 1c0 0.4 0.2 0.7 0.6 0.9h-0.8c-0.4 0 -0.7 0.3 -0.7 0.6v1.9c0 0.3 0.3 0.6 0.6 0.6h0.2c0 0 0 0.1 0 0.1v1.9c0 0.3 0.2 0.6 0.3 0.6h1.3c0.2 0 0.3 -0.3 0.3 -0.6v-1.8c0 0 0 -0.1 0 -0.1h0.2c0.3 0 0.6 -0.3 0.6 -0.6v-2c0.2 -0.3 -0.1 -0.6 -0.4 -0.6z"
      },
      "color": {"field": "age", "type": "nominal",
          "scale": {
              "domain": ["18-34", "35-49", "50-64", "65+"],
              "range": ["#C9F0FF", "#95A78D", "#788AA3", "#BD897E"] // Different shades of green
          },
          "legend": {
            "title": "Age Group",
            "titleColor": "#FFFFFF",
          } // Add a legend title
      },
      "size": {"value": symbolSize}
  },
    "title": {
      "text": null, // Chart title
      "fontSize": 24,
      "anchor": "middle",
      "color": "#FFFFFF"
  },
  "params": [{"name": "highlight", "select": "interval"}]
};

/* Region Data Visualization */
const regionData =  () => {
  const data = { values: [] };
  const northeastCount = 25;
  const southCount = 33;    
  const westCount = 22;
  const midwestCount = 20;
  for (let i = 1; i <= northeastCount; i++) {
      data.values.push({ id: i, region: "North" });
  } 
  for (let i = northeastCount + 1; i <= northeastCount + southCount; i++) {
      data.values.push({ id: i, region: "South" });
  }
  for (let i = northeastCount + southCount + 1; i <= northeastCount + southCount + westCount; i++) {
      data.values.push({ id: i, region: "West" });
  }
  for (let i = northeastCount + southCount + westCount + 1; i <= northeastCount + southCount + westCount + midwestCount; i++) {
      data.values.push({ id: i, region: "Midwest" });
  }
  return data;
};    
const regionChartData = regionData();

const regionSpec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "background": backgroundColorHex,
    "description": "Regional Distribution",
    "config": {
      "axis": {
        "labelFont": "Arial",
        "titleFont": "Arial"
      },
        "legend": {
            "orient": "top",
            "title": null,
            "labelFont": "Arial",
            "symbolType": "circle",
            "symbolSize": legendSymbolSize,
            "labelColor": "#FFFFFF",
            "padding": 10,
            "cornerRadius": 5
        },
        "view": {
          "fill": backgroundColorHex,
          "stroke": backgroundColorHex,
        },
        "title": demographicVizTitle
    },
    "width": 400,
    "height": 300,
    "data": regionChartData,
    "transform": [
        {"calculate": "ceil (datum.id/10)", "as": "col"},
        {"calculate": "datum.id - datum.col*10", "as": "row"}
    ],
    "mark": {"type": "point", "filled": true},
    "encoding": {
        "x": {"field": "col", "type": "ordinal", "axis": null},
        "y": {"field": "row", "type": "ordinal", "axis": null},
        "shape": {
            "value": "M1.7 -1.7h-0.8c0.3 -0.2 0.6 -0.5 0.6 -0.9c0 -0.6 -0.4 -1 -1 -1c-0.6 0 -1 0.4 -1 1c0 0.4 0.2 0.7 0.6 0.9h-0.8c-0.4 0 -0.7 0.3 -0.7 0.6v1.9c0 0.3 0.3 0.6 0.6 0.6h0.2c0 0 0 0.1 0 0.1v1.9c0 0.3 0.2 0.6 0.3 0.6h1.3c0.2 0 0.3 -0.3 0.3 -0.6v-1.8c0 0 0 -0.1 0 -0.1h0.2c0.3 0 0.6 -0.3 0.6 -0.6v-2c0.2 -0.3 -0.1 -0.6 -0.4 -0.6z"
        },
        "color": {"field": "region", "type": "nominal",
            "scale": {
                "domain": ["North", "South", "West", "Midwest"],
                "range": ["#a1dab4", "#41b6c4", "#225ea8", "#756bb1"] // Different shades of green
            },
            "legend": {
              "title": "Region",
              "titleColor": "#FFFFFF",
            } // Add a legend title
        },
        "size": {"value": symbolSize}
    },
      "title": {
        "text": null, // Chart title
        "fontSize": 24,
        "anchor": "middle",
        "color": "#FFFFFF"
    },
    "params": [{"name": "highlight", "select": "interval"}]
};

/* Education Data Visualization */
const educationData =  () => {
  const data = { values: [] };
  const nodegreeCount = 64;
  const bachelorsplusCount = 36;
  for (let i = 1; i <= nodegreeCount; i++) {
      data.values.push({ id: i, education: "No Degree" });
  }
  for (let i = nodegreeCount + 1; i <= nodegreeCount + bachelorsplusCount; i++) {
      data.values.push({ id: i, education: "Bachelor's Degree or Higher" });
  }
  return data;
};

const educationSpec = {
      "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
      "background": backgroundColorHex,
      "description": "Education Distribution",
      "config": {
        "axis": {
          "labelFont": "Arial",
          "titleFont": "Arial"
        },
          "legend": {
              "orient": "top",
              "title": null,
              "labelFont": "Arial",
              "symbolType": "circle",
              "symbolSize": legendSymbolSize,
              "labelColor": "#FFFFFF",
              "padding": 10,
              "cornerRadius": 5
          },
          "view": {
            "fill": backgroundColorHex,
            "stroke": backgroundColorHex,
          },
          "title": demographicVizTitle
      },
      "width": 400,
      "height": 300,
      "data": educationData(),
      "transform": [
          {"calculate": "ceil (datum.id/10)", "as": "col"},
          {"calculate": "datum.id - datum.col*10", "as": "row"}
      ],
      "mark": {"type": "point", "filled": true},
      "encoding": {
          "x": {"field": "col", "type": "ordinal", "axis": null},
          "y": {"field": "row", "type": "ordinal", "axis": null},
          "shape": {
              "value": "M1.7 -1.7h-0.8c0.3 -0.2 0.6 -0.5 0.6 -0.9c0 -0.6 -0.4 -1 -1 -1c-0.6 0 -1 0.4 -1 1c0 0.4 0.2 0.7 0.6 0.9h-0.8c-0.4 0 -0.7 0.3 -0.7 0.6v1.9c0 0.3 0.3 0.6 0.6 0.6h0.2c0 0 0 0.1 0 0.1v1.9c0 0.3 0.2 0.6 0.3 0.6h1.3c0.2 0 0.3 -0.3 0.3 -0.6v-1.8c0 0 0 -0.1 0 -0.1h0.2c0.3 0 0.6 -0.3 0.6 -0.6v-2c0.2 -0.3 -0.1 -0.6 -0.4 -0.6z"
          },
          "color": {"field": "education", "type": "nominal",
              "scale": {
                  "domain": ["No Degree", "Bachelor's Degree or Higher"],
                  "range": ["#4D7EA8", "#ED6A5A"] // softer colors
              },
               "legend": {
                "title": "Education Level",
                "titleColor": "#FFFFFF",
              }  // Add a legend title
          },
          "size": {"value": symbolSize} // Slightly smaller points
      },
      "title": {
          "text": null, // Chart title
          "fontSize": 24,
          "anchor": "middle",
          "color": "#FFFFFF"
      },
      "params": [{"name": "highlight", "select": "interval"}]
  };

function embedChart(spec) {
  vegaEmbed("#vis", spec, { actions: false });
}

// Initial chart load (Gender)
embedChart(genderSpec);

// Event listener for dropdown change
document.getElementById('chartType').addEventListener('change', function() {
  const selectedChart = this.value;
  const popup = document.getElementById('chartInfo');
  const popupTitle = document.getElementById('titleChartInfo');
  let popupText = '';
  let titleText = '';
  if (selectedChart === 'gender') {
      embedChart(genderSpec);
      titleText = "Gender Distribution"
      popupText = "The gender distribution of sports bettors is:<br> 65% male and 35% female.";
  } else if (selectedChart === 'race') {
      embedChart(raceSpec);
      titleText = "Race Distribution"
      popupText = "The racial distribution of sports bettors is:<br> 50% White<br> 18% Black<br> 24% Latino<br> 5% Asian<br> 3% Other<br>";
  } else if (selectedChart === 'age') {
      embedChart(ageSpec);
      titleText = "Grouped Age Distribution"
      popupText = "The age range distribution of sports bettors are:<br> 46% ages 18-34<br> 38% ages 35-49<br> 11% ages 50-64<br> 5% ages 65+";  
  } else if (selectedChart === 'region') {
      embedChart(regionSpec);
      titleText = "Regional Distribution"
      popupText = "The regional distribution of sports bettors is:<br> 25% Northeastern<br> 33% Southern<br> 22% Western<br> 20% Midwestern<br>";
  } else if (selectedChart === 'education') {
      embedChart(educationSpec);
      titleText = "Educational Level Distribution"
      popupText = "64% of sports bettors have no college degree, while 36% have a bachelor's degree or higher.";
  }
  popup.innerHTML = popupText;
  popupTitle.innerText = titleText;
});