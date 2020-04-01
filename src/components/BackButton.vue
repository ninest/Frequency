<template lang="pug">
  router-link(:to="to").back-button
    .chevron &#x2039;
    span
      slot back
</template>

<script>
export default {
  props: {
    to: {
      type: String, 
      default: '/'
    }
  }
}
</script>

<style lang="scss" scoped>
.back-button {
  display: inline-flex;
  align-items: center;

  color: unset;
  text-decoration: unset;

  font-size: 0.9em;

  padding: calc(1.5* var(--dense-padding)) var(--main-padding);
  border: var(--gray-border);
  // background-color: var(--gray-background-color);
  color: gray;

  border-radius: calc(50*var(--border-radius));

  &:hover, &:focus {
    border: var(--selected-border);
    color: var(--accent-color);
    // background-color: var(--selected-background-color);
  }

  .chevron {
    margin-right: var(--main-padding);
  }
}
</style>