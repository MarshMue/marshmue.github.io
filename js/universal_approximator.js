// initial number of layers
var layer_count = 0;

// onLoad function
function onLoad(){
    addLayer()
    drawGraph()
}

function drawGraph(){
    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function addLayer(){
    var li = document.createElement("li");
    layer_count++
    li.innerText = `Layer ${layer_count}`
    li.className = "layer"

    // create node number input
    var inputBox = document.createElement("input")
    inputBox.type = "number"
    inputBox.step = 1
    inputBox.placeholder = "# of Nodes"
    inputBox.min = 1

    // add input box to list
    li.appendChild(inputBox);
  
    // add layer to list
    document.getElementById("myModel").appendChild(li);
}

function fitModel(){
    // Define a model for linear regression.
    
    // get layers and parameters
    var layerList = document.getElementsByClassName("layer")

    const model = tf.sequential();
    for (i = 0; i < layerList.length; i++) {
        // get number of units from input 
        num_units = Number(layerList[i].childNodes[1].value)

        // add layer to model
        model.add(tf.layers.dense({inputShape: [1], units: num_units, activation: 'sigmoid', kernelInitializer: 'glorotUniform'}));
    }
    model.add(tf.layers.dense({units: 1, activation: 'linear', useBias: false}))

    model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

    console.log(model.summary())

    // Generate some synthetic data for training.
    const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
    const ys = tf.tensor2d([1, 4, 9, 16], [4, 1]);

    // Train the model using the data.
    model.fit(xs, ys, {epochs: 50}).then(() => {
    // Use the model to do inference on a data point the model hasn't seen before:
    model.predict(tf.tensor2d([1,2,3,4, 5], [5,1])).print();
    // Open the browser devtools to see the output
    });

}



