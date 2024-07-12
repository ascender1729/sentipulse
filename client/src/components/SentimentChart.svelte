<script>
  import { onMount, afterUpdate } from 'svelte';
  import Chart from 'chart.js/auto';

  export let recentAnalyses = [];
  let chart;

  function updateChart() {
    if (chart) {
      const positive = recentAnalyses.filter(a => a.sentiment === 'POSITIVE').length;
      const negative = recentAnalyses.filter(a => a.sentiment === 'NEGATIVE').length;
      const neutral = recentAnalyses.filter(a => a.sentiment === 'NEUTRAL').length;

      chart.data.datasets[0].data = [positive, negative, neutral];
      chart.update();
    }
  }

  onMount(() => {
    const ctx = document.getElementById('sentimentChart').getContext('2d');
    chart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Positive', 'Negative', 'Neutral'],
        datasets: [{
          data: [0, 0, 0],
          backgroundColor: ['#4CAF50', '#F44336', '#FFC107']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  });

  afterUpdate(updateChart);
</script>

<div class="chart-container">
  <canvas id="sentimentChart"></canvas>
</div>

<style>
  .chart-container {
    height: 300px;
    margin: 20px 0;
  }
</style>
