<script>
    import { fade, fly } from 'svelte/transition';
    export let show = false;
  </script>
  
  {#if show}
    <div class="overlay" transition:fade={{duration: 300}}>
      <div class="loader" transition:fly={{y: 50, duration: 300}}>
        <div class="spinner"></div>
        <p>Analyzing sentiment...</p>
      </div>
    </div>
  {/if}
  
  <style>
    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }
  
    .loader {
      background-color: white;
      padding: 2rem;
      border-radius: 8px;
      text-align: center;
    }
  
    .spinner {
      border: 4px solid #f3f3f3;
      border-top: 4px solid #3498db;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      animation: spin 1s linear infinite;
      margin: 0 auto 1rem;
    }
  
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  </style>