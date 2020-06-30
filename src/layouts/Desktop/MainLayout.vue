<template>
  <q-layout view="hhh LpR fff">
    <q-header 
      :reveal-offset="99999"
      reveal
      class="smooth-transition bg-custom-purple-2"
    >
      <q-slide-transition>
        <div v-show="onTop">
          <q-toolbar v-show="onTop" class="justify-center bg-custom-purple-2">
            <q-btn 
              flat 
              round 
              dense 
              icon="las la-medkit"
              @click="$router.push({ name: 'home'})"
            />
          </q-toolbar>
        </div>
      </q-slide-transition>
      <q-toolbar inset class="bg-custom-purple-2">

        <div class="row no-wrap">
          <marquee-text>
            <q-chip 
              v-for="(val, index) in emergency"
              :key="val.id+index"
              clickable 
              @click="$router.push({ name: 'view-by-id', params: {id: val.id} })" 
            >
              <q-avatar 
                icon="lab la-readme" 
                color="red" 
                text-color="white" 
                size="sm"
              />
              {{val.name}}
            </q-chip>
          </marquee-text>
        </div>

        <!--<div>Quasar v{{ $q.version }}</div>-->
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-scroll-observer @scroll="onScroll" />
      <router-view />
    </q-page-container>

    <q-footer bordered class="bg-white text-custom-gray-1">
      <q-toolbar class="justify-center">
        <div class="row justify-center items-center q-mb-md">
          <div 
            @click="$router.push({name:'github'})" 
            class="row text-center items-center cursor-pointer">
            <q-icon size="sm" name="la la-github" />
            Github
          </div>
          <!--<div class="row text-center q-mx-sm">
            - 
          </div>
          <div class="row text-center custom-chip items-center">
            <q-icon size="sm" :name="laInfoSolid" />
            About
          </div>-->
        </div>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'DesktopLayout',

  data () {
    return {
      onTop: false
    }
  },
  methods: {
    onScroll (info) {
      this.onTop = info.position <= 30 ? true:false
    }
  },
  computed: {
    ...mapGetters({
      emergency: 'emergencyDb/getAll'
    })
  }
}
</script>
