<script>
  export let sentiment;
</script>

{#if sentiment}
  <div class="result">
    <h2>Analysis Result</h2>
    <p>Sentiment: <strong>{sentiment.sentiment}</strong></p>
    <p>Score: <strong>{sentiment.score.toFixed(2)}</strong></p>
  </div>
{/if}

<style>
  .result {
    background-color: #f0f0f0;
    padding: 15px;
    border-radius: 4px;
    margin-bottom: 20px;
  }
  h2 {
    margin-top: 0;
  }
</style>
