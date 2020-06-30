<template>
  <q-page class="column justify-start items-center q-pt-md">
    <div class="headline full-width row no-wrap justify-center">
      <q-card flat bordered class="card">
        <q-card-section horizontal>
            <q-img 
                height="360px" 
                width="100%"
                :src="data.img"
            >
                <div 
                    class="
                        overlay-grad-2
                        absolute-center
                        text-subtitle2
                        column
                        justify-end
                        items-center
                        caption-parent
                    "
                >
                    <div class="text-body1 absolute-center text-center">
                        {{data.name}}
                    </div>
                    <q-btn 
                        class="btn-custom-2"
                        color="white" 
                        text-color="primary"
                        @click="scrollToId('0_Content')"
                        label="Lihat" 
                    />
                </div>
            </q-img>
        </q-card-section>
      </q-card>
    </div>  
    <div class="div-about-parent q-my-md row no-wrap justify-center">
      <div class="div-about-container row wrap text-body1 font-robo">
        {{data.desc}}
      </div>
    </div>
    
    <q-separator class="q-my-sm" />

    <div class="content-parent q-mb-md full-width column items-center">
      <q-card 
        v-for="(val, index) in data.contentList"
        :key="index+'_KK'"
        :id="index+'_Content'"
        flat 
        bordered 
        class="card q-mb-md"
      >
        <q-card-section 
          horizontal
        >
          <q-img 
                height="200px" 
                width="100%"
                :src="val.img"
            >
                <div 
                    class="
                        absolute-full
                        text-subtitle2
                        column
                        justify-center
                        items-center
                    "
                >
                    <div class="content-content text-body1 text-center">
                        {{val.content}}
                    </div>
                </div>
            </q-img>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import { isEmptyObject, isBlankNull } from 'boot/util'
import { scroll } from 'quasar'
const { getScrollTarget, setScrollPosition } = scroll

export default {
  name: 'PageViewById',
  meta () {
    return {
      title: this.webinfo.title + " | " + this.data.name
    }
  },
  data () {
    return {
        data: {}
    }
  },
  computed: {
    ...mapState({
      webinfo: state => state['emergencyDb'].webinfo
    }),
    ...mapGetters({
      emergency: 'emergencyDb/getById'
    })
  },
  beforeRouteUpdate (to, from, next) {
    this.data = this.emergency(to.params.id)
    if(isEmptyObject(this.data)){this.$router.push({name: 'home'})}
    next()
  },
  beforeMount(){
      this.data = this.emergency(this.$route.params.id)
      if(isEmptyObject(this.data)){this.$router.push({name: 'home'})}
  },
  methods: {
    scrollToId (id) {
      let ele = document.getElementById(id)
      if(isBlankNull(ele)){return}
      let target = getScrollTarget(ele),
          offset = ele.offsetTop - ele.scrollHeight,
          duration = 400

      setScrollPosition(target, offset, duration)
      return
    }
  }
}
</script>
