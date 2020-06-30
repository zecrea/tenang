<template>
  <q-layout view="hhh LpR fff">
    <q-header 
      :reveal-offset="99999"
      reveal
      class="smooth-transition bg-custom-purple-2"
    >
      <q-toolbar v-show="onTop" class="justify-start bg-custom-purple-2">
        <q-btn 
          flat 
          round 
          dense 
          icon="las la-medkit"
          @click="$router.push({ name: 'home'})"
        />
        <q-space />
        <q-btn flat round @click="rdrawer = true" icon="las la-bars"/>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="rdrawer"
      side="right"
      overlay
      bordered
      content-class="bg-grey-3 overflow-hidden"
    >
      <div class="row no-wrap justify-start full-width">
        <q-btn flat round @click="rdrawer = false" icon="las la-arrow-right"/>
      </div>
      <q-separator/>
      <q-scroll-area class="fit">
        <q-list 
          v-for="(val, index) in emergency" 
          :key="val.id"
        >
          <q-separator spaced v-if="val.separator" />

          <q-item-label 
            header
            v-if="index == 0 || val.separator"
          >{{capitalizeFirstLetter(val.category)}}</q-item-label>

          <q-item @click="$router.push({ name: 'view-by-id', params: {id: val.id} })" clickable v-ripple>
            <q-item-section>
              <q-item-label>{{val.name}}</q-item-label>
              <q-item-label caption v-line-clamp=2>
                {{val.desc}}
              </q-item-label>
            </q-item-section>
          </q-item>

        </q-list>
      </q-scroll-area>
    </q-drawer>

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
import { capitalizeFirstLetter } from 'boot/util'

export default {
  name: 'DesktopLayout',

  data () {
    return {
      rdrawer: false,
      onTop: false,
      catBefore: "kesehatan"
    }
  },
  methods: {
    onScroll (info) {
      this.onTop = info.position <= 30 ? true:false
    },
    capitalizeFirstLetter: (val) => capitalizeFirstLetter(val)
  },
  computed: {
    ...mapGetters({
      emergency: 'emergencyDb/getAll'
    })
  }
}
</script>
