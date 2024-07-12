<script>
  export let recentAnalyses = [];
</script>

<div class="recent-analyses">
  <h2>Recent Analyses</h2>
  <ul>
    {#each recentAnalyses as analysis}
      <li>
        <span class="text">{analysis.text}</span>
        <span class="sentiment {analysis.sentiment.toLowerCase()}">{analysis.sentiment}</span>
      </li>
    {/each}
  </ul>
</div>

<style>
  .recent-analyses {
    margin-top: 20px;
    max-height: 300px;
    overflow-y: auto;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    padding: 10px;
    background-color: #f0f0f0;
    border-radius: 4px;
  }
  .text {
    flex: 1;
    margin-right: 10px;
  }
  .sentiment {
    padding: 5px 10px;
    border-radius: 4px;
    font-weight: bold;
  }
  .positive { background-color: #4CAF50; color: white; }
  .negative { background-color: #F44336; color: white; }
  .neutral { background-color: #FFC107; }
</style>
