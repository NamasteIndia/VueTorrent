<template>
  <v-card flat>
    <v-row dense class="ma-0 pa-0">
      <v-col cols="12" sm="6" lg="3" v-for="item in availableRules" :key="item.uid">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title v-text="item.name" />
          </v-list-item-content>
          <v-list-item-action class="icon">
            <v-icon @click="editRule(item)">
              {{ mdiPencil }}
            </v-icon>
          </v-list-item-action>
          <v-list-item-action>
            <v-icon color="red" @click="deleteRule(item)">
              {{ mdiDelete }}
            </v-icon>
          </v-list-item-action>
        </v-list-item>
        <v-divider />
      </v-col>
    </v-row>
    <v-row class="mb-3">
      <v-col cols="12" class="d-flex align-center justify-center">
        <v-btn class="mx-auto accent white--text elevation-0 px-4" @click="createRule">
          {{ $t('modals.settings.rss.rules.btnCreateNew') }}
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
import { mapGetters } from 'vuex'
import qbit from '@/services/qbit'
import { mdiEye, mdiPencil, mdiDelete } from '@mdi/js'

import { Tab, General, FullScreenModal } from '@/mixins'

export default {
  name: 'Rules',
  mixins: [Tab, General, FullScreenModal],
  data: () => ({
    mdiEye,
    mdiPencil,
    mdiDelete
  }),
  computed: {
    ...mapGetters(['getRules']),
    availableRules() {
      return this.getRules()
    }
  },
  created() {
    this.$store.commit('FETCH_RULES')
  },
  methods: {
    activeMethod() {
      this.$store.commit('FETCH_RULES')
    },
    async deleteRule(item) {
      await qbit.deleteRule(item.name)
      this.$store.commit('FETCH_RULES')
    },
    createRule() {
      this.createModal('RuleForm')
    },
    editRule(item) {
      this.createModal('RuleForm', { initialRule: item })
    }
  }
}
</script>

<style scoped>
.icon {
  margin-left: 16px;
}
</style>
