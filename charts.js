function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("samples.json").then((data) => {
    var sampleNames = data.names;

    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    var firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Initialize the dashboard
init();

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
  
}

// Demographics Panel 
function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    // Filter the data for the object with the desired sample number
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    // Use d3 to select the panel with id of `#sample-metadata`
    var PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });

  });
}

// 1. Create the buildCharts function - build bar and bubble charts.
function buildCharts(sample) {
  // 2. Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {
    // 3. Create a variable that holds the samples array. 
    let sampleArray = data.samples;
  
    // 4. Create a variable that filters the samples for the object with the desired sample number.
    let sampleFilter = sampleArray.filter(sampleObj => sampleObj.id == sample);

    //  5. Create a variable that holds the first sample in the array.
    let fSample = sampleFilter[0];
  
    // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
    let otuIds = fSample.otu_ids;
    let otuLabels = fSample.otu_labels;
    let otuValues= fSample.sample_values;
    //console.log(otuIds);
    //console.log(otuLabels);
    //console.log(otuValues);

    // Create variables with top 10 and reversed order
    let otuIdsTop10 = otuIds.slice(0,10).reverse();
    let otuLabelsTop10 = otuLabels.slice(0,10).reverse();
    let otuValuesTop10 = otuValues.slice(0,10).reverse();
    //console.log(otuIdsTop10);
    //console.log(otuLabelsTop10);
    //console.log(otuValuesTop10);

    // 7. Create the yticks for the bar chart.
    // Hint: Get the the top 10 otu_ids and map them in descending order  
    //  so the otu_ids with the most bacteria are last. 
    let yticks = otuIdsTop10.map(x => `OTU ${x}`);

    // 8. Create the trace for the bar chart. 
    var barData = [{
        x: otuValuesTop10,
        y: yticks,
        text: otuLabelsTop10,
        type: "bar",
        barThickness: 150,
        orientation: "h",
    }];

    // 9. Create the layout for the bar chart. 
    var barLayout = {
        title: "Top 10 Bacteria Cultures Found",
     };
    // 10. Use Plotly to plot the data with the layout. 
    Plotly.newPlot("bar",barData, barLayout);

    // 1. Create the trace for the bubble chart.
    var bubbleData = [{
      x: otuIds,
      y: otuValues,
      text: otuLabels,
      mode: "markers",
      text: otuLabels,
      marker: {
        color: otuIds,
        colorscale: "Rainbow",
        size:otuValues
      }, 
    }];

    // 2. Create the layout for the bubble chart.
    var bubbleLayout = {
      title: 'Bacteria Cultures Per Sample',
      xaxis: {
        title: { 
        text:"OTU ID"}, 
        }
    };

    // 3. Use Plotly to plot the data with the layout.
    Plotly.newPlot("bubble", bubbleData, bubbleLayout); 

    // 1. Create a variable that filters the metadata array for the object with the desired sample number.
    let metaArray = data.metadata;

    // 2. Create a variable that holds the first sample in the metadata array.
    let fMeta = metaArray.filter(sampleObj => sampleObj.id == sample)[0];

      // 3. Create a variable that holds the washing frequency.
    let freq = parseFloat(fMeta.wfreq);
    
    // 4. Create the trace for the gauge chart.
    let gaugeData = [{
      value: freq,
      title: {text: "Scrubs per Week"},
      type: "indicator",
      mode: "gauge+number",
      gauge:  {
        bar: { color: "black" },
        axis: { range: [0, 10] },
        steps: [
          { range: [0, 2], color: "red" },
          { range: [2, 4], color: "orange"},
          { range: [4, 6], color: "yellow" },
          { range: [6, 8], color: "limegreen" },
          { range: [8, 10], color: "darkgreen"}
        ]
      }
    }];
    
    // 5. Create the layout for the gauge chart.
    let gaugeLayout = { 
    //  another way just below to add title above the scrubs per week... but this way still in chart - using HTML puts outside chart (what I did)
    //  title: { text: "Belly Button Washing Frequency", font: { size: 24 }},
    //  changed the height from 500 to 300 so it looks a little better with different background color
        width: 500, height: 300, margin: { t: 0, b: 0 }
      };

    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot("gauge", gaugeData, gaugeLayout);
  });
}

