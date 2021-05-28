<script>
  import Page from "../layouts/Page.svelte";
  import Hydrate from "5sg/Hydrate";
  import Count from "../components/Count.svelte";
  export const name = "world";
  export let siteMeta = {};

  const metadata = { title: "Home", description: "Home page" };
</script>

<Page {metadata} {siteMeta}>
  <section>
    <div>
      <h1>Hello, World! 👋</h1>
      <p>There's not much here, but you can play with this counter</p>
      <Hydrate component={Count} props={{ name: "counter" }} />
    </div>
  </section>
</Page>

<style>
  section {
    height: 80vh;
    display: grid;
    justify-content: center;
    align-items: center;
  }
  h1 {
    font-size: 2.5rem;
    line-height: 1;
    margin-bottom: 16px;
  }
</style>
