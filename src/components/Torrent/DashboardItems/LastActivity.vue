<template>
  <v-flex xs6 sm1>
    <div class="caption grey--text">
      {{ $t('torrent.properties.last_activity') | titleCase }}
    </div>
    <div>{{ torrent.last_activity }}</div>
  </v-flex>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { TorrentDashboardItem } from '@/mixins'

export default defineComponent({
  name: 'LastActivity',
  mixins: [TorrentDashboardItem]
})
</script>
