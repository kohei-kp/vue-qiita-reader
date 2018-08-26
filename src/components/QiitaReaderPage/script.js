import api from '@/common/api'
import PostList from './PostList'
import PostContent from './PostContent'

export default {
  name: 'QiitaReaderPage',

  components: {
    PostList,
    PostContent
  },

  created () {
    this.setQiitaPostList()
  },

  data () {
    return {
      qiitaPostList: [{}],
      selectedPostId: ''
    }
  },

  computed: {
    selectedContent () {
      return this.qiitaPostList.find(post => post.id === this.selectedPostId) || {}
    }
  },

  methods: {
    setSelectedPostId (id) {
      this.selectedPostId = id
    },

    setQiitaPostList () {
      api.getQiitaPost()
        .then(res => {
          this.qiitaPostList = res
        })
        .catch(err => {
          alert(err)
        })
    }
  }
}
