<script>


export default {
  name: 'NavigationButton',
  props: {
    title: String
  }
}
</script>

<template>
    <span class="navigation-link"><a> {{ title }} </a></span>
</template>