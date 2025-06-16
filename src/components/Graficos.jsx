import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Graficos = ({ equipamentos }) => {
  const metricsRef = useRef(null);
  const availRef = useRef(null);
  const metricsChart = useRef(null);
  const availChart = useRef(null);

  useEffect(() => {
    const total = equipamentos.length;
    const available = equipamentos.filter(e => e.status === 'Disponível').length;
    const maintenance = equipamentos.filter(e => e.status === 'Em Manutenção').length;

    if (!metricsChart.current) {
      metricsChart.current = new Chart(metricsRef.current, {
        type: 'bar',
        data: {
          labels: ['Total', 'Disponíveis', 'Em Manutenção'],
          datasets: [{
            label: 'Equipamentos',
            data: [total, available, maintenance],
            backgroundColor: ['#3498db', '#2ecc71', '#e74c3c'],
            borderColor: ['#2980b9', '#27ae60', '#c0392b'],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          plugins: { legend: { display: false } },
          scales: { y: { beginAtZero: true } }
        }
      });
    } else {
      metricsChart.current.data.datasets[0].data = [total, available, maintenance];
      metricsChart.current.update();
    }

    if (!availChart.current) {
      availChart.current = new Chart(availRef.current, {
        type: 'doughnut',
        data: {
          labels: ['Disponíveis', 'Em Manutenção'],
          datasets: [{
            label: 'Equipamentos',
            data: [available, maintenance],
            backgroundColor: ['#2ecc71', '#e74c3c'],
            borderColor: ['#27ae60', '#c0392b'],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          plugins: { legend: { position: 'bottom' } }
        }
      });
    } else {
      availChart.current.data.datasets[0].data = [available, maintenance];
      availChart.current.update();
    }
  }, [equipamentos]);

  return (
    <div className="charts_container">
      <div className="chart">
        <h3>Resumo Geral</h3>
        <canvas ref={metricsRef} id="metrics_chart"></canvas>
      </div>
      <div className="chart">
        <h3>Disponíveis vs. Em Manutenção</h3>
        <canvas ref={availRef} id="availability_chart"></canvas>
      </div>
    </div>
  );
};

export default Graficos;