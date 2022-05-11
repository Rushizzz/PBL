
import { ppm , Time } from "../index.js";

const labels = Time;
console.log(ppm);

const data ={
    labels: labels,
    datasets: [{
      label: 'Co2',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(234, 94, 130)',
      data: ppm,
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
  