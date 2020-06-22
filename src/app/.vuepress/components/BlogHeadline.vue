<template>
  <div>
    <p class="uk-text-small">
      <i>Published by <a class="author-link" :href="$page.frontmatter.author.profile" target="_blank">{{ $page.frontmatter.author.name }}</a></i>
      &nbsp;{{ date }}, tagged as&nbsp;<span v-for="tag in $page.frontmatter.tags" style="margin-right: 5px;">
      <span uk-icon="icon: tag"></span>{{ tag }}
      </span>
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    date () {
      const moment = require('moment')
      return moment(this.$page.frontmatter.date, "YYYYMMDD").fromNow()
    }
  }
}
</script>

<style>
  .author-link {
    color: #51459c !important;
  }
</style>