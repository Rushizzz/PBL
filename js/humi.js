
import { humidity , Time } from "../index.js";

const labels = Time;
console.log(humidity);

const data ={
    labels: labels,
    datasets: [{
      label: 'Humidity',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(234, 94, 130)',
      data: humidity,
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
  