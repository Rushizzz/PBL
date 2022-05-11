

console.log("script is in");

import { temperature , Time } from "../index.js";

const labels = Time;
console.log(temperature);

const data ={
    labels: labels,
    datasets: [{
      label: 'Temperature',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(234, 94, 130)',
      data: temperature,
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
  