//python -m http.server

//Use the D3 library to read in `samples.json`.
d3.json("samples.json").then((data) => {
    console.log(data)
    //---------------------------------------
    //Grab values from the samples.json file
    //---------------------------------------

    //Grab id numbers from the names array
    var SubjectIDNo = data.names

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
    // console.log(sampleValues)
    // console.log(otuIds)
    // console.log(otuLabels)
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
        var sampleSet = sampleValues[dataID]    //sample_values       
        var otuIdSet = otuIds[dataID]           //otu_ids     
        var otuLabelSet = otuLabels[dataID]     //otu_labels
        var ageDi = mdAge[dataID]               //age
        var bbtypeDi = mdBbtype[dataID]         //bbtype
        var ethnicityDi = mdEthnic[dataID]      //ethnicity
        var genderDi = mdGender[dataID]         //gender
        var idDi = mdId[dataID]                 //id
        var locationDi = mdLocate[dataID]       //location
        var wfreqDi = mdFreq[dataID]            //wfreq

        //console.logs to test value grabs
        console.log(dataID)
        console.log(sampleSet)
        console.log(otuIdSet)
        console.log(otuLabelSet)
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
        //----------------------------------------------------
        

    //----------------------------------------------------
    }  // end function updatePage(){
//----------------------------------------------------
})  // end d3.json("samples.json").then((data) => {}
//----------------------------------------------------



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
