// var vlSpec = {
//   "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
//   "background": backgroundColorHex,
//   "width": 150,
//   "height": 250,
//   "data": {
//       "values": [
//           {
//           "Total Men": 1505,
//           "Total Women": 1566,
//           "Male Bettors": 354,
//           "Female Bettors": 181,
//           "Status": "Lost More Than Win",
//           "Male": 31,
//           "Female": 27,
//           },
//           {
//           "Total Men": 1505,
//           "Total Women": 1566,
//           "Male Bettors": 354,
//           "Female Bettors": 181,
//           "Status": "Break Even",
//           "Male": 29,
//           "Female": 39,
//           },
//           {
//           "Total Men": 1505,
//           "Total Women": 1566,
//           "Male Bettors": 354,
//           "Female Bettors": 181,
//           "Status": "Won More Than Lost",
//           "Male": 39,
//           "Female": 30,
//           },
          
//       ]
//   },
//   "repeat": {"layer": ["Male", "Female"]},
//   "spec": {
//       "mark": {
//         "type": "bar",
//         "clip": true,
//       },
      
//       "encoding": {
//           "x": {"field": "Status", "type": "nominal", "title": null},
//           "y": {"field": {"repeat": "layer"}, "type": "quantitative", "title": "% of Bettors", "scale": {"domain": [20,47]}},
//           "color": {
//             "datum": {"repeat": "layer"}, 
//             "title": "Gender", 
//             "scale": {"domain": ["Male", "Female"], "range": ["#4D7EA8", "#ED6A5A"]}
//           },
//           "xOffset": {"datum": {"repeat": "layer"}},
//       }
//   },
//   "config": {
//     "mark": {"invalid": null},
//     "axis": {
//       "labelColor": "#FFFFFF",
//       "titleColor": "#FFFFFF",
//       "domainWidth": 3,
//       "gridWidth": 0.5,
//       "tickWidth": 3
//     },
//     "legend": {
//       "labelColor": "#FFFFFF",
//       "titleColor": "#FFFFFF"
//     },
//     "title": {
//       "color": "#FFFFFF"
//     }
//   }
// };
// vegaEmbed("#vis-1", vlSpec).catch(console.error);

var vlSpec = {
            "$schema": "https://vega.github.io/schema/vega/v5.json",
            "description": "A basic grouped bar chart example.",
            "width": 300,
            "height": 240,
            "padding": 5,

            "data": [
                {
                "name": "table",
                "values": [
                    {"category":"Break Even", "position":0, "value":31},
                    {"category":"Break Even", "position":1, "value":27},
                    {"category":"Win More", "position":0, "value":29},
                    {"category":"Win More", "position":1, "value":39},
                    {"category":"Lose More", "position":0, "value":39},
                    {"category":"Lose More", "position":1, "value":30}
                ]
                }
            ],

        "scales": [
        {
        "name": "yscale",
        "type": "band",
        "domain": {"data": "table", "field": "category"},
        "range": "height",
        "padding": 0.2
        },
        {
        "name": "xscale",
        "type": "linear",
        "domain": {"data": "table", "field": "value"},
        "range": "width",
        "round": true,
        "zero": true,
        "nice": true
        },
        {
        "name": "color",
        "type": "ordinal",
        "domain": {"data": "table", "field": "position"},
        "range": {"scheme": "category20"}
        }
        ],

        "axes": [
        {"orient": "left", "scale": "yscale", "tickSize": 0, "labelPadding": 4, "zindex": 1},
        {"orient": "bottom", "scale": "xscale"}
        ],

        "marks": [
        {
        "type": "group",

        "from": {
        "facet": {
        "data": "table",
        "name": "facet",
        "groupby": "category"
        }
        },

        "encode": {
        "enter": {
        "y": {"scale": "yscale", "field": "category"}
        }
        },

        "signals": [
        {"name": "height", "update": "bandwidth('yscale')"}
        ],

        "scales": [
        {
        "name": "pos",
        "type": "band",
        "range": "height",
        "domain": {"data": "facet", "field": "position"}
        }
        ],

        "marks": [
        {
        "name": "bars",
        "from": {"data": "facet"},
        "type": "rect",
        "encode": {
            "enter": {
            "y": {"scale": "pos", "field": "position"},
            "height": {"scale": "pos", "band": 1},
            "x": {"scale": "xscale", "field": "value"},
            "x2": {"scale": "xscale", "value": 0},
            "fill": {"scale": "color", "field": "position"}
            }
        }
        },
        {
        "type": "text",
        "from": {"data": "bars"},
        "encode": {
            "enter": {
            "x": {"field": "x2", "offset": -5},
            "y": {"field": "y", "offset": {"field": "height", "mult": 0.5}},
            "fill": [
                {"test": "contrast('white', datum.fill) > contrast('black', datum.fill)", "value": "white"},
                {"value": "black"}
            ],
            "align": {"value": "right"},
            "baseline": {"value": "middle"},
            "text": {"field": "datum.value"}
            }
        }
        }
        ]
        }
    ]
}
vegaEmbed("#vis-1", vlSpec).catch(console.error);

var vlSpec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "background": backgroundColorHex,
  "data": {
    "values": [
      {"Amount Won": "No More Than $50", "value": 20, "order": 1},
      {"Amount Won": "$50-$99.99", "value": 18, "order": 2},
      {"Amount Won": "$100-$199.99", "value": 20, "order": 3},
      {"Amount Won": "$200-$499.99", "value": 21, "order": 4},
      {"Amount Won": "$500-$999.99", "value": 12, "order": 5},
      {"Amount Won": "$1000+", "value": 8, "order": 6},
      {"Amount Won": "Don't Know or Refused", "value": 1, "order": 7}
    ]
  },
  "transform": [
    {"calculate": "datum.value + '%'", "as": "formatted_value"}
  ],
  "encoding": {
    "theta": {"field": "value", "type": "quantitative", "stack": true},
    "color": {
      "field": "Amount Won", 
      "type": "nominal", 
      "sort": {"field": "order", "order": "ascending"},
      "scale": {
        "range": ["#3F4B3B", "#44633F", "#5A9367", "#D7B29D", "#E8D2AE", "#DDE8B9", "#FCEFEF"]
      }
    },
    "order": {"field": "order"},
    "tooltip": [
      {"field": "Amount Won", "type": "nominal", "title": "Amount Won"},
      {"field": "formatted_value", "type": "nominal", "title": "Percentage"}
    ]
  },
  "mark": {"type": "arc"},
  "config": {
    "legend": {
      "labelColor": "#FFFFFF",
      "titleColor": "#FFFFFF"
    },
    "title": {
      "color": "#FFFFFF"
    }
  }
};
vegaEmbed("#vis-2", vlSpec).catch(console.error);

if (mapData && data) {
  console.log('Map Data:', mapData);
  console.log('Betting Data:', data);

  var vlSpec = {
      "$schema": "https://vega.github.io/schema/vega/v5.json",
      "background": backgroundColorHex,
      "padding": 5,
      "width": window.innerWidth / 1.75,
      "height": 575,
      "style": "view",
      "signals": [
          {
              "name": "tooltip",
              "value": {},
              "on": [
                  {"events": "symbol:mouseover", "update": "datum"},
                  {"events": "symbol:mouseout", "update": "{}"}
              ]
          },
          {
              "name": "tooltipX",
              "update": "tooltip.layer_1_x ? tooltip.layer_1_x + 10 : 0"
          },
          {
              "name": "tooltipY",
              "update": "tooltip.layer_1_y ? tooltip.layer_1_y - 10 : 0"
          },
          {
              "name": "tooltipWidth",
              "value": 155
          },
          {
              "name": "tooltipHeight",
              "value": 55
          },
          {
              // Adjust X position if tooltip would go off right edge
              "name": "adjustedTooltipX",
              "update": "tooltipX + tooltipWidth > width ? tooltipX - tooltipWidth - 20 : tooltipX"
          },
          {
              // Adjust Y position if tooltip would go off top edge
              "name": "adjustedTooltipY",
              "update": "tooltipY < tooltipHeight ? tooltipY + 20 : tooltipY"
          }
      ],
      "data": [
          {
              "name": "source_0",
              "values": mapData,
              "format": {"type": "topojson", "feature": "states"}
          },
          {
              "name": "source_1",
              "values": data,
              "format": {"type": "json"},
              "transform": [
                  {
                      "type": "geojson",
                      "fields": ["longitude", "latitude"],
                      "signal": "layer_1_geojson_0"
                  },
                  {
                      "type": "geopoint",
                      "projection": "projection",
                      "fields": ["longitude", "latitude"],
                      "as": ["layer_1_x", "layer_1_y"]
                  }
              ]
          }
      ],
      "scales": [
          {
              "name": "sizeScale",
              "type": "linear",
              "domain": {"data": "source_1", "field": "bet"},
              "range": [10, 1000]
          }
      ],
      "projections": [
          {
              "name": "projection",
              "size": {"signal": "[width, height]"},
              "fit": {"signal": "[data('source_0'), layer_1_geojson_0]"},
              "type": "albersUsa"
          }
      ],
      "marks": [
          {
              "name": "layer_0_marks",
              "type": "shape",
              "style": ["geoshape"],
              "from": {"data": "source_0"},
              "encode": {
                  "update": {
                      "fill": {"value": "lightgray"},
                      "stroke": {"value": "white"},
                      "ariaRoleDescription": {"value": "geoshape"}
                  }
              },
              "transform": [{"type": "geoshape", "projection": "projection"}]
          },
          {
              "name": "layer_1_marks",
              "type": "symbol",
              "style": ["circle"],
              "from": {"data": "source_1"},
              "encode": {
                  "update": {
                      "opacity": {"value": 0.7},
                      "fill": {"value": "steelblue"},
                      "ariaRoleDescription": {"value": "circle"},
                      "x": {"field": "layer_1_x"},
                      "y": {"field": "layer_1_y"},
                      "size": {"scale": "sizeScale", "field": "bet"},
                      "shape": {"value": "circle"}
                  }
              }
          },
          {
              "type": "group",
              "encode": {
                  "update": {
                      "x": {"signal": "adjustedTooltipX"},
                      "y": {"signal": "adjustedTooltipY"},
                      "width": {"signal": "tooltipWidth"},
                      "height": {"signal": "tooltipHeight"},
                      "fill": {"value": "white"},
                      "fillOpacity": {"value": 0.95},
                      "stroke": {"value": "black"},
                      "strokeWidth": {"value": 1},
                      "cornerRadius": {"value": 5},
                      "opacity": [
                          {
                              "test": "datum && tooltip.team && tooltip.city && tooltip.state && tooltip.stadium && tooltip.bet",
                              "value": 1
                          },
                          {"value": 0}
                      ],
                      "zindex": {"value": 1000}
                  }
              },
              "marks": [
                  {
                      "type": "text",
                      "encode": {
                          "update": {
                              "x": {"value": 5},
                              "y": {"value": 15},
                              "text": {"signal": "tooltip.team ? '🏈 ' + tooltip.team : ''"},
                              "fill": {"value": "black"},
                              "fontSize": {"value": 11}
                          }
                      }
                  },
                  {
                      "type": "text",
                      "encode": {
                          "update": {
                              "x": {"value": 5},
                              "y": {"value": 37},
                              "text": {"signal": "tooltip.city && tooltip.state ? '📍' + tooltip.city + ', ' + tooltip.state : ''"},
                              "fill": {"value": "black"},
                              "fontSize": {"value": 8}
                          }
                      }
                  },
                  {
                      "type": "text",
                      "encode": {
                          "update": {
                              "x": {"value": 5},
                              "y": {"value": 26},
                              "text": {"signal": "tooltip.stadium ? '🏟️ ' + tooltip.stadium : ''"},
                              "fill": {"value": "black"},
                              "fontSize": {"value": 8}
                          }
                      }
                  },
                  {
                      "type": "text",
                      "encode": {
                          "update": {
                              "x": {"value": 5},
                              "y": {"value": 48},
                              "text": {"signal": "tooltip.bet ? 'Avg Spend per Season: $' + tooltip.bet : ''"},
                              "fill": {"value": "black"},
                              "fontSize": {"value": 9}
                          }
                      }
                  }
              ]
          }
      ]
  };

    vegaEmbed("#vis-4", vlSpec, {
      // Add this render option to ensure tooltips can overflow
      renderer: "svg",
      actions: false
    })
} else {
    console.error('Failed to load map data or additional data.');
}