<template>
    <div id="navigation-header">
        <span class="navigation-link">Home</span> | <span class="navigation-link">About</span>
    </div>
</template>

<script>
export default {
  name: 'NavigationHeader',
  props: {
    msg: String
  }
}
</script>

<style>

.navigation-header {
  height: 200pt;
}

.navigation-link {
    font-weight: bold;
    margin-left: 5pt;
    margin-right: 5pt;
    font-size: 16pt;
}

a {
    text-decoration: none;
}

</style>