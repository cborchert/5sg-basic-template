<script>
  import Page from "../layouts/Page.svelte";
  export let siteMeta = {};
  const metadata = {
    title: "Page not found",
    description: "Don't worry: it happens to the best of us.",
  };
</script>

<Page {metadata} {siteMeta}>
  <section>
    <div>
      <h1>Page not found</h1>
    </div>
  </section>
</Page>

<style>
  section {
    height: 80vh;
    display: grid;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  h1 {
    line-height: 1;
    margin-bottom: 16px;
    color: var(--tertiary);
  }
  h2 {
    font-style: italic;
  }
</style>
