<script>
  import { file_format } from "./constant_store.svelte";
</script>

<h2>Welcome to your front-end test!</h2>
<div>
  1. Onclick event
  <h3>
    <!-- EX1: ADD YOUR CODE HERE    -->
    <!-- HINT: use the <button> element -->
    <!-- ------------------ END -->
  </h3>

  2. Fix the bug<br />
  <h5>
    A 'file_format' object is being imported from `./constant_store.svelte`, but
    is not displaying "name" property values properly. Find out why/fix it
  </h5>

  <h3>
    <!-- EX2:  FIX THE CODE BELOW     -->
    {#each file_format as file}
      <div>{file.name}</div>
    {/each}
    <!-- ------------------ END -->
  </h3>

  3. Create and Populate a table

  <!--EX3: HINT: use a simple HTML table structure; 
        a table style has already been provided at the bottom of this file
        
        <table>
          ...
        </table>
      ------------------ END -->
</div>

<style>
  table,
  th,
  td {
    max-width: 60rem;
    border: 1px solid;
    border-collapse: collapse;
    margin-bottom: 10px;
    align-content: center;
  }
</style>
