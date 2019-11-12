import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentSlide: 1,
    carModel: [],
    colors: [],
    personal: null,
    isModal: false,
    kit: null,
    pyatnikPrice: 450,
    shildaPrice: 150,
    totalPrice: null,
    kits: {
      econom: {
        title: 'Эконом',
        price: 910,
        pyatnik: {
          is: false,
        },
        shildi: {
          is: false,
          count: 1
        }
      },
      standart: {
        title: 'Стандарт',
        price: 1010,
        pyatnik: {
          is: false,
        },
        shildi: {
          is: false,
          count: 1
        }
      },
      premium: {
        title: 'Премиум',
        price: 1110,
        pyatnik: {
          is: false,
        },
        shildi: {
          is: false,
          count: 1
        }
      },
      premiumPlus: {
        title: 'Премиум Плюс',
        price: 1210
      },
      platinum: {
        title: 'Платинум',
        price: 1310
      },
      vip: {
        title: 'VIP',
        price: 1410
      }
    }
  },
  mutations: {
    next(state) {
      state.currentSlide++
    },
    prev(state) {
      state.currentSlide--
    },
    setCar(state, [brand, model]) {
      state.carModel = [brand, model]
    },
    setColor(state, [main, secondary]) {
      state.colors = [main, secondary]
    },
    setKit(state, obj) {
      state.kit = obj
    },
    setShildaCount(state, [count, id]) {
      state.kits[id].shildi.count = count
    },
    setPersonal(state, [name, phone]) {
      state.personal = [name, phone]
    },
    openModal(state, kit) {
      state.isModal = true
      state.kit = kit
      document.body.classList.add('modal-overlay')
    },
    closeModal(state) {
      state.isModal = false
      document.body.classList.remove('modal-overlay')
    },
    setKits(state, [kit, pyatnik, shilda, count, totalPrice]) {
      const set = state.kits[kit]
      if(pyatnik) set.pyatnik.is = true
      if(shilda && count) {
        set.shildi.is = true
        set.shildi.count = count
      }
      state.totalPrice = totalPrice
    },
    setOption(state, [id, which]) {
      if (which === 'pyatnik') {
        state.kits[id].pyatnik.is = !state.kits[id].pyatnik.is
      }
      if (which === 'shilda') {
        state.kits[id].shildi.is = !state.kits[id].shildi.is
      }
    }
  },
  getters: {
    getKits(state) {
      return state.kits
    },
    getPrice: state => id => {
      const kit = state.kits[id]

      if ("pyatnik" in kit) {
        if (kit.pyatnik.is && kit.shildi.is) {
          return kit.price + state.pyatnikPrice + state.shildaPrice * kit.shildi.count
        }
        else if (kit.pyatnik.is || kit.shildi.is) {
          if (kit.pyatnik.is) {
            console.log('here')
            return kit.price + state.pyatnikPrice
          }
          if (kit.shildi.is) {
            return kit.price + state.shildaPrice * kit.shildi.count
          }
        }
        else {
          return kit.price
        }
      }

      else {
        return kit.price
      }
    },
    isSelectDisabled: state => id => {
      return state.kits[id].shildi.is ? false : true
    }
  }
})