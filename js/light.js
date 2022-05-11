
import { light , Time } from "../index.js";

const labels = Time;
console.log(light);

const data ={
    labels: labels,
    datasets: [{
      label: 'Light',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(234, 94, 130)',
      data: light,
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
  