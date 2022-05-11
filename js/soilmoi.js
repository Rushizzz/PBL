
import { soilmoisture , Time } from "../index.js";

const labels = Time;
console.log(soilmoisture);

const data ={
    labels: labels,
    datasets: [{
      label: 'Soil Moisture',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(234, 94, 130)',
      data: soilmoisture,
  }]
  }
  
  const config = {
    type: 'line',
    data: data,
    options: {}
  };
  
  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
  