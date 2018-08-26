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

  data () {
    return {
      selectedPostId: ''
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
      this.selectedPostId = id
      this.$emit('send-selected-post-id', id)
    },

    /**
     * 更新ボタンのクリック
     *
     * @param {object} e
     */
    handleClickRefresh (e) {
      this.$emit('refresh-post-list')
    }
  }
}
