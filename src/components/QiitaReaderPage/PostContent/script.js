export default {
  name: 'PostContent',

  props: {
    selectedContent: {
      types: Object,
      default () {
        return {}
      }
    }
  },

  computed: {
    postTitle () {
      return this.selectedContent.hasOwnProperty('title')
        ? this.selectedContent.title
        : ''
    },

    tags () {
      return this.selectedContent.hasOwnProperty('tags')
        ? this.selectedContent.tags
        : []
    },

    userData () {
      return this.selectedContent.hasOwnProperty('user')
        ? this.selectedContent.user
        : { name: '', profile_image_url: '' }
    }
  }
}
