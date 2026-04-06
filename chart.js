function drawChart(pos,neg){

const ctx=document.getElementById("chart");

new Chart(ctx,{

type:'pie',

data:{

labels:['Positive','Negative'],

datasets:[{

data:[pos,neg]

}]

}

});

}
