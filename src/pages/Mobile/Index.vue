<template>
  <q-page class="column justify-start items-center q-pt-md">
    <div class="headline full-width row no-wrap justify-center">
      <q-card flat bordered class="card">
        <q-card-section horizontal>
          <q-carousel
            animated
            v-model="slidePage"
            infinite
            autoplay
            transition-prev="slide-right"
            transition-next="slide-left"
            height="250px"
            class="full-width"
          >
            <q-carousel-slide 
              v-for="val in emergency"
              :key="val.id"
              :name="val.id" 
              class="column no-wrap flex-center q-pa-none"
            >
              <q-img 
                class="full-width"
                height="250px"
                :src="val.img"
              >
                <div class="absolute-center text-subtitle2 flex flex-center">
                  <p class="text-center q-mb-lg">{{val.name}}</p>
                  <q-btn 
                    class="btn-custom"
                    color="white" 
                    text-color="primary"
                    @click="scrollToId(slidePage)" 
                    label="Lihat" 
                  />
                </div>
              </q-img>
            </q-carousel-slide>
          </q-carousel>
          <!--<q-img 
            height="360px" 
            width="70%"
            src="~assets/mountains.jpg"
          >
            <div class="absolute-full text-subtitle2 flex flex-center">
              Kata-kata mutiara, tapi mutiara tidak berkata
            </div>
          </q-img>-->
        </q-card-section>
      </q-card>
    </div>
    <div class="div-about-parent q-my-md row no-wrap justify-center">
      <div class="div-about-container row wrap text-center text-body1 font-robo">
        {{webinfo.about}}
      </div>
    </div>
    <q-separator class="q-my-md" />
    <div class="content-parent q-mb-md full-width column items-center">
      <q-card 
        v-for="(val, index) in emergency"
        :key="val.id"
        :id="val.id"
        flat 
        bordered 
        class="card q-mb-md"
      >
        <q-card-section 
          v-if="index%2 != 0" 
          horizontal
        >
          <q-card-section class="big-content">
            <p 
              v-line-clamp="8"
            >
              {{ val.desc }}
            </p>
          </q-card-section>

          <q-img
            class="small-content cursor-pointer"
            :src="val.img"
            @click="$router.push({ name: 'view-by-id', params: {id: val.id} })"
          />
        </q-card-section>
        <q-card-section 
          v-else 
          horizontal
        >
          <q-img
            class="small-content cursor-pointer"
            :src="val.img"
            @click="$router.push({ name: 'view-by-id', params: {id: val.id} })"
          />
          <q-card-section class="big-content">
            <p 
              v-line-clamp="8"
            >
              {{ val.desc }}
            </p>
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import { isBlankNull } from 'boot/util'
import { scroll } from 'quasar'
const { getScrollTarget, setScrollPosition } = scroll

export default {
  name: 'PageIndex',
  meta () {
    return {
      title: this.webinfo.title + " | Home"
    }
  },
  data () {
    return {
      slidePage: 1
    }
  },
  computed: {
    ...mapState({
      webinfo: state => state['emergencyDb'].webinfo
    }),
    ...mapGetters({
      emergency: 'emergencyDb/getAll'
    })
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
