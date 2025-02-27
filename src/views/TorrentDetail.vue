<template>
  <div class="px-1 px-sm-5 background noselect">
    <v-row no-gutters class="grey--text" align="center" justify="center">
      <v-col>
        <h1 style="font-size: 1.6em !important" class="subtitle-1 ml-2">
          {{ $t('modals.detail.title') | titleCase }}
        </h1>
      </v-col>
      <v-col class="align-center justify-center">
        <v-card-actions class="justify-end">
          <v-btn small elevation="0" @click="close">
            <v-icon>{{ mdiClose }}</v-icon>
          </v-btn>
        </v-card-actions>
      </v-col>
    </v-row>

    <v-row class="ma-0 pa-0">
      <v-tabs v-model="tab" align-with-title show-arrows background-color="primary">
        <v-tabs-slider color="white" />
        <v-tab class="white--text" href="#overview">
          <h4>{{ $t('modals.detail.tabTitleOverview') }}</h4>
        </v-tab>
        <v-tab class="white--text" href="#info">
          <h4>{{ $t('modals.detail.tabTitleInfo') }}</h4>
        </v-tab>
        <v-tab class="white--text" href="#trackers">
          <h4>{{ $t('modals.detail.tabTitleTrackers') }}</h4>
        </v-tab>
        <v-tab class="white--text" href="#peers">
          <h4>{{ $t('modals.detail.tabTitlePeers') }}</h4>
        </v-tab>
        <v-tab class="white--text" href="#content">
          <h4>{{ $t('modals.detail.tabTitleContent') }}</h4>
        </v-tab>
        <v-tab class="white--text" href="#tagsAndCategories">
          <h4>{{ $t('modals.detail.tabTitleTagsCategories') }}</h4>
        </v-tab>
      </v-tabs>

      <v-card-text class="pa-0">
        <v-tabs-items v-model="tab" touchless>
          <v-tab-item eager value="overview">
            <Overview v-if="torrent" :is-active="tab === 'overview'" :torrent="torrent" />
          </v-tab-item>
          <v-tab-item eager value="info">
            <Info v-if="torrent" :is-active="tab === 'info'" :torrent="torrent" />
          </v-tab-item>
          <v-tab-item eager value="trackers">
            <Trackers :is-active="tab === 'trackers'" :hash="hash" />
          </v-tab-item>
          <v-tab-item eager value="peers">
            <DetailPeers :is-active="tab === 'peers'" :hash="hash" />
          </v-tab-item>
          <v-tab-item eager value="content">
            <Content :is-active="tab === 'content'" :hash="hash" />
          </v-tab-item>
          <v-tab-item eager value="tagsAndCategories">
            <TorrentTagsAndCategories v-if="torrent" :torrent="torrent" :is-active="tab === 'tagsAndCategories'" :hash="hash" />
          </v-tab-item>
        </v-tabs-items>
      </v-card-text>
    </v-row>
  </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex'
import { Content, Info, DetailPeers, Trackers, TorrentTagsAndCategories } from '../components/TorrentDetail/Tabs'
import { mdiClose } from '@mdi/js'
import Overview from '@/components/TorrentDetail/Tabs/Overview.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TorrentDetail',
  components: { Overview, Content, Info, DetailPeers, Trackers, TorrentTagsAndCategories },
  data() {
    return {
      tab: null,
      mdiClose
    }
  },
  computed: {
    ...mapGetters(['getTorrent', 'getModals']),
    torrent() {
      //@ts-expect-error: TS2339: Property 'getTorrent' does not exist on type 'CreateComponentPublicInstance...'.
      return this.getTorrent(this.hash)
    },
    hash(): string {
      return this.$route.params.hash
    }
  },
  mounted() {
    document.addEventListener('keydown', this.handleKeyboardShortcut)
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.handleKeyboardShortcut)
  },
  methods: {
    close() {
      this.$router.back()
    },
    handleKeyboardShortcut(e: KeyboardEvent) {
      if (e.key === 'Escape' && this.getModals().length === 0) {
        this.close()
      }
    }
  }
})
</script>
