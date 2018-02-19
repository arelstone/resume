import Vue from 'vue'
import VueI18n from 'vue-i18n'
import * as Utils from './Utils'

Vue.use(VueI18n)

export const messages = {
  da: require('./locale/da')
}

// Create VueI18n instance with options
export const i18n = new VueI18n({
  locale: Utils.getLanguage(),
  messages // set locale messages
})
