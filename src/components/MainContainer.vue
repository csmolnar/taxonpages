<script>
// import MyButton from './MyButton.vue';
import NavigationButton from './NavigationButton.vue';

export default {
  name: 'MainContainer',
  components: {
    NavigationButton
  }
}
</script>

<template>
    <NavigationButton title="LINK!!!"/>
    <NavigationButton title="LINK2!!!"/>
    <NavigationButton title="LINK3!!!"/>
</template>