//python -m http.server

//Use the D3 library to read in `samples.json`.
d3.json("samples.json").then((data) => {
    console.log(data)
    //---------------------------------------
    //Grab values from the samples.json file
    //---------------------------------------

    //Grab id numbers from the names array
    var SubjectIDNo = data.names

    //Grab id numbers from the names array
    var samplesAll = new Array()
    for (var i = 0; i < data.samples.length; i++) {
        samplesAll[data.samples[i]["id"]] = data.samples[i];
    }

    //Grab sample_values from the samples array 
    var sampleValues = new Array()
    for (var i = 0; i < data.samples.length; i++) {
        sampleValues[data.samples[i]["id"]] = data.samples[i].sample_values;
    }
    //Grab otu_ids from the samples array 
    var otuIds = new Array()
    for (var i = 0; i < data.samples.length; i++) {
        otuIds[data.samples[i]["id"]] = data.samples[i].otu_ids;
    }
    //Grab otu_labels from the samples array 
    var otuLabels = new Array()
    for (var i = 0; i < data.samples.length; i++) {
        otuLabels[data.samples[i]["id"]] = data.samples[i].otu_labels;
    }

    //Grab demographic info from the metadata array 
    //Age
    var mdAll = new Array()
    for (var i = 0; i < data.metadata.length; i++) {
        mdAll[data.metadata[i]["id"]] = data.metadata[i];
    }

    //Grab demographic info from the metadata array 
    //Age
    var mdAge = new Array()
    for (var i = 0; i < data.metadata.length; i++) {
        mdAge[data.metadata[i]["id"]] = data.metadata[i].age;
    }

    //bbtype
    var mdBbtype = new Array()
    for (var i = 0; i < data.metadata.length; i++) {
        mdBbtype[data.metadata[i]["id"]] = data.metadata[i].bbtype;
    }
    //ethnicity
    var mdEthnic = new Array()
    for (var i = 0; i < data.metadata.length; i++) {
        mdEthnic[data.metadata[i]["id"]] = data.metadata[i].ethnicity;
    }
    //gender
    var mdGender = new Array()
    for (var i = 0; i < data.metadata.length; i++) {
        mdGender[data.metadata[i]["id"]] = data.metadata[i].gender;
    }
    //id
    var mdId = new Array()
    for (var i = 0; i < data.metadata.length; i++) {
        mdId[data.metadata[i]["id"]] = data.metadata[i].id;
    }
    //location
    var mdLocate = new Array()
    for (var i = 0; i < data.metadata.length; i++) {
        mdLocate[data.metadata[i]["id"]] = data.metadata[i].location;
    }
    //wfreq
    var mdFreq = new Array()
    for (var i = 0; i < data.metadata.length; i++) {
        mdFreq[data.metadata[i]["id"]] = data.metadata[i].wfreq;
    }

    // //console.logs to test value grabs   
    // console.log(SubjectIDNo)
    // console.log(samplesAll)
    // console.log(sampleValues)
    // console.log(otuIds)
    // console.log(otuLabels)
    // console.log(mdAll)
    // console.log(mdAge)
    // console.log(mdBbtype)
    // console.log(mdEthnic)
    // console.log(mdGender)
    // console.log(mdId)
    // console.log(mdLocate)
    // console.log(mdFreq)  

    //--------------------------------------------
    //Assign ID number list to ID dropdown 
    //--------------------------------------------

    var dropdownMenu = d3.selectAll("#selDataset")
    var idSelect = []

    SubjectIDNo.forEach(id => {
        idSelect.push(id)
        dropdownMenu.append("option").text(id).property("value", id)
    })

    //----------------------------------------------------
    //Create Event Handler & Selected Value to a Variable
    //----------------------------------------------------

    //Use D3 to create an event handler
    d3.selectAll("body").on("change", updatePage);

    function updatePage() {

        //Assign the value of the dropdown menu to a variable
        var dataID = dropdownMenu.property("value")

        //----------------------------------------------------
        //Create Variable for Charts and Table
        //----------------------------------------------------

        //Sample Set Variables
        var sample = samplesAll[dataID]         //samples
        var sampleSet = sampleValues[dataID]    //sample_values       
        var otuIdSet = otuIds[dataID]           //otu_ids     
        var otuLabelSet = otuLabels[dataID]     //otu_labels
        var allDi = mdAll[dataID]               //metada
        var ageDi = mdAge[dataID]               //age
        var bbtypeDi = mdBbtype[dataID]         //bbtype
        var ethnicityDi = mdEthnic[dataID]      //ethnicity
        var genderDi = mdGender[dataID]         //gender
        var idDi = mdId[dataID]                 //id
        var locationDi = mdLocate[dataID]       //location
        var wfreqDi = mdFreq[dataID]            //wfreq


        //console.logs to test value grabs
        console.log(dataID)
        console.log(sample)
        console.log(sampleSet)
        console.log(otuIdSet)
        console.log(otuLabelSet)
        console.log(allDi)
        console.log(ageDi)
        console.log(bbtypeDi)
        console.log(ethnicityDi)
        console.log(genderDi)
        console.log(idDi)
        console.log(locationDi)
        console.log(wfreqDi)

        //----------------------------------------------------
        //Create a horizontal bar chart to display the top 10
        //OTUs found in that individual.
        // * Use `sample_values` as the values for the bar chart.
        // * Use `otu_ids` as the labels for the bar chart.
        // * Use `otu_labels` as the hovertext for the chart.
        //----------------------------------------------------

        // //Sort data by sample values                                !!!!!!!!!!
        // sortedSamples = sample.sort((a, b) => b.sample_values - a.sample_values)
        // // console.log(sortedSamples)

        // // slice the first 10 objects for plotting                  !!!!!!!!!!
        // slicedSamples = sortedSamples.slice(0,10)
        // // console.log(slicedSamples)

        // // reverse the array                                        !!!!!!!!!!!
        // reversedSamples = slicedSamples.reverse()
        // // console.log(reversedSamples)

        // //Create trace for chart
        // var trace1 = {
        //  x: reversedSamples.map(sample => sample.sample_values),
        //  y: reversedSamples.map(id => id.otu_ids),
        //  text: reversedSamples.map(label => label.otu_labels),
        //  name:"Samples",
        //  type:"bar",
        //  orientation:"h" 
        // }

        // // Create data for Chart
        // var data = [trace1]

        // // Create Layout for Chart
        // var layout = {
        //     title: "Top Ten OTUs"        
        // }

        // //Render the plot to the div tag
        // Plotly.newPlot("bar", data, layout)

        //----------------------------------------------------
        //Create a bubble chart that displays each sample.
        // * Use `otu_ids` for the x values.
        // * Use `sample_values` for the y values.
        // * Use `sample_values` for the marker size.
        // * Use `otu_ids` for the marker colors.
        // * Use `otu_labels` for the text values.
        //----------------------------------------------------

        var trace1 = {
            x: otuIdSet,
            y: sampleSet,
            text: otuLabelSet,
            mode: 'markers',
            marker: {
                size: sampleSet,
                color: otuIdSet,
            }
        };

        var data = [trace1];

        var layout = {
            title: 'Samples',
            showlegend: false,
            height: 500,
            width: 750
        };

        Plotly.newPlot('bubble', data, layout);

        //----------------------------------------------------
        // Display the sample metadata, i.e., an individual's 
        // demographic information.
        //----------------------------------------------------        

        var node = document.createElement("LI")
        var textnode = document.createTextNode(`id: ${idDi}`)
        node.appendChild(textnode)
        document.getElementById("mdList").appendChild(node)

        var node = document.createElement("LI")
        var textnode = document.createTextNode(`ethnicity: ${ethnicityDi}`)
        node.appendChild(textnode)
        document.getElementById("mdList").appendChild(node)

        var node = document.createElement("LI")
        var textnode = document.createTextNode(`gender: ${genderDi}`)
        node.appendChild(textnode)
        document.getElementById("mdList").appendChild(node)

        var node = document.createElement("LI")
        var textnode = document.createTextNode(`age: ${ageDi}`)
        node.appendChild(textnode)
        document.getElementById("mdList").appendChild(node)

        var node = document.createElement("LI")
        var textnode = document.createTextNode(`location: ${locationDi}`)
        node.appendChild(textnode)
        document.getElementById("mdList").appendChild(node)

        var node = document.createElement("LI")
        var textnode = document.createTextNode(`bbtype: ${bbtypeDi}`)
        node.appendChild(textnode)
        document.getElementById("mdList").appendChild(node)

        var node = document.createElement("LI")
        var textnode = document.createTextNode(`wfreq: ${wfreqDi}`)
        node.appendChild(textnode)
        document.getElementById("mdList").appendChild(node)

        //----------------------------------------------------
        //Creat Gauge Chart to plot the weekly washing frequency 
        // of the individual.
        //----------------------------------------------------
        var data = [
            {
              domain: { x: [0, 1], y: [0, 1] },
              value: wfreqDi,
              title: { text: "Belly Button Washing Frequency" },
              type: "indicator",
              mode: "gauge+number",              
              gauge: {
                axis: { range: [null, 9] },
                steps: [
                  { range: [0, 1], color: '#636EFA' },
                  { range: [1, 2], color: '#EF553B'},
                  { range: [2, 3], color: '#00CC96' },
                  { range: [3, 4], color: '#AB63FA' },
                  { range: [4, 5], color: '#FFA15A' },
                  { range: [5, 6], color: '#19D3F3' },
                  { range: [6, 7], color: '#FF6692' },
                  { range: [7, 8], color: '#B6E880' },
                  { range: [8, 9], color: '#FF97FF' }
                ],
                threshold: {
                  line: { color: "red", width: 4 },
                  thickness: 0.75,
                  value: wfreqDi
                }
              }
            }
          ];
          
          var layout = { width: 600, height: 450, margin: { t: 0, b: 0 } };
          Plotly.newPlot('gauge', data, layout);










        //----------------------------------------------------
    }  // end function updatePage(){
    //----------------------------------------------------
})  // end d3.json("samples.json").then((data) => {}
//----------------------------------------------------





// 5. Display each key-value pair from the metadata JSON object somewhere on the page.



