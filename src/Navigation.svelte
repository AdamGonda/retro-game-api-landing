<script>
  export let options
  export let selected
  export let onSelect

  let isNavOpen = false

  function toggleNav() {
    isNavOpen = !isNavOpen
  }
</script>

<nav id="desktop-nav">
  <h2>How to use</h2>
  <ul>
    {#each options as option, idx}
      <li on:click={() => onSelect(idx)}>
        <p class:selected={selected == idx}>{option}</p>
      </li>
    {/each}
  </ul>
</nav>
<nav id="mobile-nav">
  <header>
    <h2>How to use</h2>
    <button
      on:click={toggleNav}
      class={isNavOpen ? 'close-image' : 'open-image'}
    />
  </header>
  <main class:menu-open={isNavOpen}>
    <ul>
      {#each options as option, idx}
        <li on:click={() => onSelect(idx)}>
          <p class:selected={selected == idx}>{option}</p>
        </li>
      {/each}
    </ul>
  </main>
</nav>

<style scoped lang="scss">
  #desktop-nav {
    display: grid;
    grid-template-columns: 0.2fr 0.8fr;
    align-items: center;

    h2 {
      font-size: 30px;
      position: relative;
      width: 156px;
      display: inline-block;
      margin: 0;
    }

    h2::after {
      position: absolute;
      content: '';
      height: 8px;
      background-color: #8522b3;
      left: 0;
      right: 0;
      bottom: -9px;
    }

    ul {
      display: flex;
      justify-content: right;
      list-style: none;
      margin: 0;
      padding: 0;

      li {
        font-weight: bold;
        cursor: pointer;

        p {
          font-size: 25px;
          padding: 8px 16px;
        }

        p:hover {
          text-decoration: underline;
        }
      }
    }
  }

  #mobile-nav {
    display: none;
    background-color: rgb(255, 255, 255);
    width: 100%;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 0;
      height: auto;

      h2 {
        font-size: 20px;
        position: relative;
        width: 156px;
        display: inline-block;
        margin-bottom: 16px;
      }

      h2::after {
        position: absolute;
        content: '';
        background-color: #8522b3;
        width: 105px;
        left: 0;
        height: 5px;
        bottom: -5px;
      }
    }

    main {
      padding-bottom: 8px;
      display: none;
    }

    .menu-open {
      display: block;
    }

    ul {
      list-style-type: none;
      padding: 0;

      li {
        cursor: pointer;
      }
    }

    button {
      border: none;
      font-size: 20px;
      display: block;
      cursor: pointer;
      background-size: 20px;
      padding: 15px;
      margin: 0;
    }
  }

  .open-image {
    background: url('../images/menu.png') no-repeat center;
  }

  .close-image {
    background: url('../images/close.png') no-repeat center;
  }

  .selected {
    text-decoration: underline;
  }

  @media screen and (max-width: 1100px) {
    #desktop-nav h2 {
      font-size: 20px;
      width: 110px;
    }

    #desktop-nav h2::after {
      height: 5px;
      bottom: -5px;
      width: 105px;
    }

    #desktop-nav ul li p {
      font-size: 15px;
    }
  }

  @media screen and (max-width: 750px) {
    #desktop-nav ul li p {
      padding: 4px 8px;
    }
  }

  @media screen and (max-width: 605px) {
    #desktop-nav {
      display: none;
    }
    #mobile-nav {
      display: block;
    }
  }
</style>
