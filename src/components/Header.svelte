<header>
  <nav>
    <ul>
      <!-- We can reference the file name -->
      <li><a href="index.svelte">home</a></li>
      <!-- ... or the published file name -->
      <li><a href="example.html">example page</a></li>
    </ul>
  </nav>
</header>

<style>
  header {
    width: 100%;
    display: flex;
    flex-direction: row;
    position: sticky;
    top: 0;
    background: var(--bg);
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    z-index: 1;
  }
  header > * {
    flex: 0;
    padding: 16px 0;
  }

  header > nav {
    flex-grow: 1;
  }
  nav ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  nav ul li {
    list-style: none;
    padding: 0 10px;
  }
</style>
