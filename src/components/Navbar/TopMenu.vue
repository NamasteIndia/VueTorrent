<template>
  <TopActions v-if="$vuetify.breakpoint.smAndUp" />
  <div v-else>
    <v-tooltip bottom open-delay="400">
      <template #activator="{ on }">
        <v-btn text small fab color="grey--text" class="mr-16 ml-0 mb-1" :aria-label="$t('navbar.topActions.addTorrent')" v-on="on" @click="createModal('AddModal')">
          <v-icon color="grey">
            {{ mdiPlus }}
          </v-icon>
        </v-btn>
      </template>
      <span>{{ $t('navbar.topActions.addTorrent') | titleCase }}</span>
    </v-tooltip>
    <v-speed-dial v-model="fab" transition="slide-y-transition" direction="bottom" style="position: absolute; top: 0.3em; right: 1em">
      <template #activator>
        <v-btn v-model="fab" color="grey" text small fab>
          <v-icon>
            {{ fab ? mdiClose : mdiDotsVertical }}
          </v-icon>
        </v-btn>
      </template>
      <TopActions mobile />
    </v-speed-dial>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { General } from '@/mixins'
import TopActions from './TopActions.vue'
import { mdiClose, mdiDotsVertical, mdiPlus } from '@mdi/js'

export default defineComponent({
  name: 'TopMenu',
  components: { TopActions },
  mixins: [General],
  data() {
    return {
      fab: false,
      mdiDotsVertical,
      mdiClose,
      mdiPlus
    }
  }
})
</script>
