<script>
  import { createEventDispatcher } from 'svelte';

  let text = '';
  const dispatch = createEventDispatcher();

  function handleSubmit() {
    dispatch('analyze', { text });
    text = '';
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <textarea bind:value={text} placeholder="Enter text to analyze..."></textarea>
  <button type="submit">Analyze Sentiment</button>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  textarea {
    height: 100px;
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  button {
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  button:hover {
    background-color: #45a049;
  }
</style>
