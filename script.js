function handle() {
    const el = document.querySelectorAll(".inputs-container input");
    const inputValues = [];
    el.forEach(function(item) {
        inputValues.push(item.value);
    });
    var ctx = document.getElementById("myChart").getContext('2d');
    var chart = new Chart (ctx, {
        type: 'polarArea',
        data: {
            labels: ["Boston", "Worcester", "Springfield","Lowell", "Cambridge", "New Bedford"],
            datasets: [{
                label: "My First datasets",
                backgroundColor: [
                'rgba(255, 0, 0, 0.9)',
                'rgba(106, 131, 38, 0.9)',
                'rgba(100, 0, 155, 0.9)',
                'rgba(255, 100, 0, 0.9)',
                'rgba(0, 178, 190, 0.9)',
                'rgba(223, 33, 95, 0.9)'
                ],
                borderColor: [
                'rgba(255, 0, 0, 1)',
                'rgba(106, 131, 38, 1)',
                'rgba(100, 0, 155, 1)',
                'rgba(255, 100, 0, 1)',
                'rgba(0, 178, 190, 1)',
                'rgba(223, 33, 95, 1)'
                ],
                borderWidth: 1,
                hoverBorderColor: [
                'rgba(255, 0, 0, 1)',
                'rgba(106, 131, 38, 1)',
                'rgba(100, 0, 155, 1)',
                'rgba(255, 100, 0, 1)',
                'rgba(0, 178, 190, 1)',
                'rgba(223, 33, 95, 1)'
                ],
                hoverBorderWidth: 2,
                data: inputValues,
            }]
        },
        options: {
          title: {
            display: true,
            text: 'My First datasets',
            fontSize: 30,
            fontColor: 'brown',
            fontWeight: 'bold',
            textAlign: 'center'
        },
        legend: {
            display: true,
            position: 'top',
            labels: {
                fontColor: 'brown'
            }
        },
        layout: {
            padding: {
                left: 50,
                right: 50,
                bottom: 0,
                top: 0
            }
        },
        tooltips: {
            enabled: true
        }
    }
});
}
