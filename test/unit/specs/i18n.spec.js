import VueI18n from 'vue-i18n'
import translations from '@/locale/da.json'
import chai from 'chai'

const expect = chai.expect

describe('i18n', () => {
  it('loads danish language settings', () => {
    const i18n = new VueI18n({
      locale: 'da',
      messages: translations
    })
    expect(i18n.messages.Profile).to.equal('Profil')
  })
})
