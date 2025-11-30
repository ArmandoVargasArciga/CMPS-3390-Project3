import { defineStore } from 'pinia'

export const useFingerprintStore = defineStore('fingerprint', {
  state: () => ({
    visitorId: null,
    requestId: null,
    fullData: null,
  }),

  actions: {
    setFingerprintData(data) {
      this.visitorId = data?.visitorId || null
      this.requestId = data?.requestId || null
      this.fullData = data || null
    },
  },
})
