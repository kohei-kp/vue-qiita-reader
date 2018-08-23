import api from '@/common/api'

export default {
  name: 'QiitaReaderPage',

  created () {
    api.getQiitaPost()
      .then(res => {
        this.qiitaPostList = res
      })
      .catch(err => {
        alert(err)
      })
  },

  data () {
    return {
      qiitaPostList: [],
      selectedPostId: ''
    }
  },

  computed: {
    selectedContent () {
      return this.qiitaPostList.find(post => {
        return post.id === this.selectedPostId
      })
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
    }
  }
}
