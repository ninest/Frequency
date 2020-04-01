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
@import '@/assets/styles/button.scss';

.back-button {
  @include button;
  display: inline-flex;
  align-items: center;

  padding: calc(1.5* var(--dense-padding)) var(--main-padding);

  color: unset;
  text-decoration: unset;

  font-size: 0.9em;

  // border: var(--gray-border);
  background-color: var(--background-color);
  color: gray;

  border-radius: calc(50*var(--border-radius));

  &:hover, &:focus {
    color: var(--accent-color);
  }

  .chevron {
    margin-right: var(--main-padding);
  }
}
</style>