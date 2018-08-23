export default {
  name: 'PostList',

  props: {
    qiitaPostList: {
      types: Array,
      default () {
        return []
      }
    }
  },

  methods: {
    /**
     * 記事タイトルのクリック
     *
     * @param {string} id
     * @param {object} e
     */
    handleClickPost (id, e) {
      this.$emit('send-selected-post-id', id)
    }
  }
}
