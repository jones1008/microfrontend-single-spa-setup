<template>
  <div>
    <h4>Sidebar</h4>
    <img src="@/assets/logo.svg" alt="vue logo">
    <nav>
      <ul>
        <li>
          <a href="/">home</a>
        </li>
        <li>
          <a href="/app1">app 1</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  a {
    color: red !important;
  }
</style>