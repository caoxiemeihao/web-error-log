const vm = new Vue({
  data: function() {
    return {
      
    }
  },
  methods: {
    async insertLog() {
      // { type, title, content, access_url, params, add_time = Date.now() }
      const data = {
        type: 'type1',
        title: 'title1',
        content: 'content1',
        access_url: window.location.href,
        params: 'params1',
      }
      const res = await window.fetch('http://localhost:4000/api/setLog', {
        method: 'post',
        headers: { 'Content-Type': 'application/json;charset=UTF-8' },
        body: JSON.stringify(data),
      }).then(_ => _.json())
      
      console.log(res)
    }
  }
}).$mount('#app')