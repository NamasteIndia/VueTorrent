<template>
  <v-card flat>
    <v-subheader>
      {{ $t('modals.settings.vueTorrent.general.tip') }}
    </v-subheader>

    <v-list-item class="my-3">
      <v-row>
        <v-col cols="12" sm="6">
          <v-checkbox v-model="settings.showCurrentSpeed" hide-details class="ma-0 pa-0" :label="$t('modals.settings.vueTorrent.general.currentSpeed')" />
        </v-col>
        <v-col cols="12" sm="6">
          <v-checkbox v-model="settings.showSpeedGraph" hide-details class="ma-0 pa-0" :label="$t('modals.settings.vueTorrent.general.speedGraph')" />
        </v-col>
        <v-col cols="12" sm="6">
          <v-checkbox v-model="settings.showAlltimeStat" hide-details class="ma-0 pa-0" :label="$t('modals.settings.vueTorrent.general.allTimeStats')" />
        </v-col>
        <v-col cols="12" sm="6">
          <v-checkbox v-model="settings.showSessionStat" hide-details class="ma-0 pa-0" :label="$t('modals.settings.vueTorrent.general.sessionStats')" />
        </v-col>
        <v-col cols="12" sm="6">
          <v-checkbox v-model="settings.showFreeSpace" hide-details class="ma-0 pa-0" :label="$t('modals.settings.vueTorrent.general.freeSpace')" />
        </v-col>
        <v-col cols="12" sm="6">
          <v-checkbox v-model="settings.showTrackerFilter" hide-details class="ma-0 pa-0" :label="$t('modals.settings.vueTorrent.general.trackerFilter')" />
        </v-col>
        <v-col cols="12" sm="6">
          <v-checkbox v-model="settings.rightDrawer" hide-details class="ma-0 pa-0" :label="$t('modals.settings.vueTorrent.general.rightDrawer')" />
        </v-col>
        <v-col cols="12" sm="6">
          <v-checkbox v-model="settings.topPagination" hide-details class="ma-0 pa-0" :label="$t('modals.settings.vueTorrent.general.topPagination')" />
        </v-col>
        <v-col cols="12" sm="6">
          <v-checkbox v-model="settings.openSideBarOnStart" hide-details class="ma-0 pa-0" :label="$t('modals.settings.vueTorrent.general.openSideBarOnStart')" />
        </v-col>
        <v-col cols="12" sm="6">
          <v-checkbox v-model="settings.showShutdownButton" hide-details class="ma-0 pa-0" :label="$t('modals.settings.vueTorrent.general.showShutdownButton')" />
        </v-col>
        <v-col cols="12" sm="6">
          <v-checkbox v-model="settings.useBinaryUnits" hide-details class="ma-0 pa-0" :label="$t('modals.settings.vueTorrent.general.useBinaryUnits')" />
        </v-col>
        <v-col cols="12" sm="6">
          <v-checkbox v-model="settings.useBitSpeed" hide-details class="ma-0 pa-0" :label="$t('modals.settings.vueTorrent.general.useBitSpeed')" />
        </v-col>
      </v-row>
    </v-list-item>

    <v-divider class="mb-5" />

    <v-list-item class="my-2">
      <v-row>
        <v-col cols="12" sm="6" md="4" class="mb-n4">
          <v-text-field
            v-model="settings.refreshInterval"
            type="number"
            dense
            outlined
            :hint="$t('modals.settings.vueTorrent.general.refreshIntervalHint')"
            :label="$t('modals.settings.vueTorrent.general.refreshInterval')"
          />
        </v-col>
        <v-col cols="12" sm="6" md="4" class="mb-n4">
          <v-text-field
            v-model="settings.contentInterval"
            type="number"
            dense
            outlined
            :hint="$t('modals.settings.vueTorrent.general.contentIntervalHint')"
            :label="$t('modals.settings.vueTorrent.general.contentInterval')"
          />
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-text-field
            v-model="settings.torrentPieceCountRenderThreshold"
            type="number"
            dense
            outlined
            hide-details
            :label="$t('modals.settings.vueTorrent.general.torrentPieceCountRenderThreshold')"
          />
        </v-col>
      </v-row>
    </v-list-item>

    <v-divider class="my-5" />

    <v-list-item class="mb-3">
      <v-row>
        <v-col cols="12" sm="6" md="3">
          <v-select v-model="settings.lang" height="1" flat dense hide-details outlined :items="languages" :label="$t('modals.settings.vueTorrent.general.language')" />
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-select
            v-model="settings.paginationSize"
            height="1"
            flat
            dense
            hide-details
            outlined
            :items="paginationSizes"
            :label="$t('modals.settings.vueTorrent.general.paginationSize')"
          />
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-select v-model="settings.title" height="1" flat dense hide-details outlined :items="titleOptions" :label="$t('modals.settings.vueTorrent.general.vueTorrentTitle')" />
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-text-field
            v-model="settings.dateFormat"
            class="mb-2"
            outlined
            dense
            hide-details
            placeholder="DD/MM/YYYY, HH:mm:ss"
            hint="using Dayjs"
            :label="$t('modals.settings.vueTorrent.general.dateFormat')"
          />
        </v-col>
      </v-row>
    </v-list-item>

    <v-list-item>
      <v-row>
        <v-col cols="6" md="2" class="d-flex align-center justify-end">
          <h3>{{ $t('modals.settings.vueTorrent.general.currentVersion') }}</h3>
        </v-col>
        <v-col cols="6" md="2" class="d-flex align-center justify-start">
          <h3>
            <span v-if="!version">undefined</span>
            <a v-else-if="version.endsWith('-dev')" target="_blank" href="https://github.com/WDaan/VueTorrent/">{{ version }}</a>
            <a v-else target="_blank" :href="`https://github.com/WDaan/VueTorrent/releases/tag/v${version}`">{{ version }}</a>
          </h3>
        </v-col>

        <v-col cols="6" md="2" class="d-flex align-center justify-end">
          <h3>{{ $t('modals.settings.vueTorrent.general.qbittorrentVersion') }}</h3>
        </v-col>
        <v-col cols="6" md="2" class="d-flex align-center justify-start">
          <h3>
            <a target="_blank" :href="`https://github.com/qbittorrent/qBittorrent/releases/tag/release-${Qbitversion}`">{{ Qbitversion }}</a>
          </h3>
        </v-col>

        <v-col cols="12" md="4" class="d-flex align-center justify-center">
          <v-btn @click="registerMagnetHandler">{{ $t('modals.settings.vueTorrent.general.registerMagnet') }}</v-btn>
        </v-col>
      </v-row>
    </v-list-item>

    <v-list-item>
      <v-textarea v-model="settingsField" />
    </v-list-item>

    <v-list-item>
      <v-row>
        <v-col cols="12" sm="6" class="d-flex align-center justify-center">
          <v-btn @click="importSettings">{{ $t('modals.settings.vueTorrent.general.importSettings') }}</v-btn>
        </v-col>

        <v-col cols="12" sm="6" class="d-flex align-center justify-center">
          <v-btn @click="exportSettings">{{ $t('modals.settings.vueTorrent.general.exportSettings') }}</v-btn>
        </v-col>

        <v-col cols="12" class="d-flex align-center justify-center">
          <v-btn dark color="red" @click="resetSettings">{{ $t('modals.settings.vueTorrent.general.resetSettings') }}</v-btn>
        </v-col>
      </v-row>
    </v-list-item>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters, mapState } from 'vuex'
import { Qbit } from '@/services/qbit'
import { LOCALES } from '@/lang/locales'
import { General } from '@/mixins'
import { TitleOptions } from '@/enums/vuetorrent'
import Ajv from 'ajv'
import { StoreStateSchema } from '@/schemas'
import WebUISettings from '@/types/vuetorrent/WebUISettings'

export default defineComponent({
  name: 'VueTorrent-General',
  mixins: [General],
  data() {
    return {
      languages: LOCALES,
      paginationSizes: [0, 5, 15, 30, 50],
      titleOptions: [TitleOptions.DEFAULT, TitleOptions.GLOBAL_SPEED, TitleOptions.FIRST_TORRENT_STATUS],
      Qbitversion: '',
      settingsField: ''
    }
  },
  computed: {
    ...mapState(['webuiSettings']),
    ...mapGetters(['getAppVersion']),
    version() {
      return this.getAppVersion()
    },
    settings(): WebUISettings {
      return this.webuiSettings
    }
  },
  created() {
    this.fetchQbitVersion()
  },
  methods: {
    async fetchQbitVersion() {
      this.Qbitversion = await Qbit.getAppVersion()
    },
    importSettings() {
      let isValidJson = true
      try {
        const userState = JSON.parse(this.settingsField)

        const ajv = new Ajv()
        const validate = ajv.compile(StoreStateSchema)
        isValidJson = validate(userState)
        console.error(validate.errors)
      } catch (e) {
        console.error(e)
        isValidJson = false
      }

      if (!isValidJson) {
        this.$toast.error(this.$t('toast.invalidJson').toString())
        return
      }

      window.localStorage.setItem('vuetorrent', this.settingsField)
      location.reload()
    },
    exportSettings() {
      this.settingsField = window.localStorage.getItem('vuetorrent') ?? ''
    },
    resetSettings() {
      window.localStorage.clear()
      location.reload()
    },
    registerMagnetHandler() {
      if (typeof navigator.registerProtocolHandler !== 'function') {
        this.$toast.error(this.$t('toast.magnetHandlerNotSupported').toString())
        return
      }

      const templateUrl = location.href.replace('/settings', '/download=%s')
      navigator.registerProtocolHandler('magnet', templateUrl)
    }
  }
})
</script>

<style lang="scss" scoped>
:deep(.v-select .v-select__selection) {
  padding-top: 10px !important;
  padding-bottom: 10px !important;
}
</style>
