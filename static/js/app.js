//python -m http.server

// 1. Use the D3 library to read in `samples.json`.
d3.json("samples.json").then((data) => {
    console.log(data)

    //Grab values from the samples.json file
    //Grab id numbers from the names array
    var SubjectIDNo = data.names
    

    //Grab sample_values from the samples array 
    var sampleValues = new Array()
    for (var i = 0; i < data.samples.length; i++) {
        sampleValues[data.samples[i]["id"]] = data.samples[i].sample_values;
    }    

    
    //console.logs to test value grabs
    console.log(sampleValues)
    console.log(SubjectIDNo)
    
       

    //Use D3 to create an event handler
    d3.selectAll("body").on("change", updatePage);

    function updatePage() {
        //use D3 to select the dropdown menu
        var dropdownMenu = d3.selectAll("#selDataset")
        //Assign the vaue of the dropdown menu to a variable
        var dataID = dropdownMenu.property("value")
        console.log(dataID)

        var sampleSet = sampleValues[dataID]
        console.log(sampleSet)

        // 2. Create a horizontal bar chart to 
        //      display the top 10 OTUs found in that individual.
        // var idSampleValues = data.forEach(sampleValue => sampleValue.samples == dataID)
        // console.log(idSampleValues)


    }  // end function updatePage(){
})  // end d3.json("samples.json").then((data) => {}



// * Use `sample_values` as the values for the bar chart.

// * Use `otu_ids` as the labels for the bar chart.

// * Use `otu_labels` as the hovertext for the chart.

// 2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

// * Use `sample_values` as the values for the bar chart.

// * Use `otu_ids` as the labels for the bar chart.

// * Use `otu_labels` as the hovertext for the chart.

// 3. Create a bubble chart that displays each sample.

// * Use `otu_ids` for the x values.

// * Use `sample_values` for the y values.

// * Use `sample_values` for the marker size.

// * Use `otu_ids` for the marker colors.

// * Use `otu_labels` for the text values.


// 4. Display the sample metadata, i.e., an individual's demographic information.

// 5. Display each key-value pair from the metadata JSON object somewhere on the page.


// 6. Update all of the plots any time that a new sample is selected.
