<template>
  <v-flex xs6 sm2 md1>
    <div class="caption grey--text">
      {{ $t('torrent.properties.time_active') | titleCase }}
    </div>
    <div>{{ torrent.time_active }}</div>
  </v-flex>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { TorrentDashboardItem } from '@/mixins'

export default defineComponent({
  name: 'TimeActive',
  mixins: [TorrentDashboardItem]
})
</script>
