<template>
    <div id="navigation-footer">
        <span class="navigation-link"><a href="mailto:somebody@example.com">Contact</a></span> | 
        <span class="navigation-link"><a href="https://github.com/csmolnar/taxonpages">GitHub</a></span> |
        <span class="navigation-link">TaxonWorks</span> 
    </div>
</template>

<script>
export default {
  name: 'NavigationFooter'
}
</script>

<style>
.navigation-link {
    font-weight: bold;
    margin-left: 5pt;
    margin-right: 5pt;
}

a {
    text-decoration: none;
}
</style>