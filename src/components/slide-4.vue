<template>
  <div class="slide slide-4 column-2" :class="{'submitted': submitted, 'validate': validate}">
    <div class="final" v-if="submitted">
      <button class="button button-final">Спасибо за заявку, {{this.$store.state.personal[0]}}!</button>
      <div class="description">Мы свяжемся с вами в ближайшее время, чтобы обсудить коврики, которые уже ждет ваш автомобиль {{this.$store.state.carModel[0]}} {{this.$store.state.carModel[1]}}.</div>
    </div>
    <template v-if="!submitted">
      <div class="column">
        <h2 class="title">Виртуальный<br>конструктор ковриков</h2>
        <div class="step">ШАГ 4 из 4</div>
        <template v-if="!submitted">
          <strong class="description">Последний шаг – определение сроков пошива и одного из 4 способов оплаты. Заполните форму для связи с консультантом</strong>
          <input
            :class="{'active': name, 'error': !name}"
            class="input"
            type="text"
            placeholder="Имя"
            v-model="name"
            @focus="stopFake = true"
          >

          <input
            v-model.lazy="phone"
            :class="{'active': phone, 'error': !phone}"
            class="input m-b-0"
            type="tel"
            name="phone"
            placeholder="Телефон"
            @focus="stopFake = true"
          >

          <input
            type="checkbox"
            id="agree"
            @change="agree = !agree"
            class="input"
            checked
          >
          <label
            for="agree"
            class="label"
            :class="{'error': !agree}"
            data-text="Даю согласие на обработку персональных данных"
          />
          <div class="flex">
            <button
              class="button-prev"
              @click.prevent="prev">Вернуться назад
            </button>
            <button
              v-if="!submitted"
              class="button"
              :class="{disabled: disabled}"
              :id="`complect_${finalKit}`"
              @click.prevent="sendData">Жду звонка</button>
          </div>
        </template>
      </div>
    </template>
    <transition name="fade" mode="out-in">
      <div class="column">
        <div class="features">
          <div class="feature">
            <div class="icon-1"/>
            <div>Гарантия эксплуатации<br>12 месяцев</div>
          </div>
          <div class="feature">
            <div class="icon-2"/>
            <div>Доставка по Украине<br>в течение 2 дней</div>
          </div>
          <div class="feature">
            <div class="icon-3"/>
            <div>Мгновенная<br>рассрочка платежа</div>
          </div>
          <div class="feature">
            <div class="icon-4"/>
            <div>Пошив<br>от 1 до 3 дней </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import MaskedInput from 'vue-text-mask'

export default {
  name: 'slide-4',
  data() {
    return {
      name: '',
      phone: '',
      finalText: 'Жду звонка',
      loading: false,
      submitted: false,
      agree: true,
      validate: false,
      totalObject: {},
      stopFake: false
    }
  },
  methods: {
    ...mapMutations(['setPersonal', 'prev']),
    sendData() {
      if (this.name && this.phone && this.agree) {
        this.validate = false
        this.setPersonal([this.name, this.phone])
        this.getAllInfo()
        const form = document.querySelector('input[value="form1"]').parentElement || undefined
        if (form) {
          this.totalObject.isFake = false
          form.querySelector('input[name="CRM_Object"]').value = JSON.stringify(this.totalObject)
          form.querySelector('.t-submit').click()
        }
        else {
          return alert('Форма отправки заявки не найдена. Свяжитесь с нами.')
        }
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.submitted = true
        }, 1000);
      }
      else {
        this.validate = true
      }
    },
    makeFake() {
      if (this.name && this.phone) {
        this.getAllInfo()
        const form = document.querySelector('input[value="form2"]').parentElement || undefined
        if (form) {
          this.totalObject.isFake = true
          form.querySelector('input[name="CRM_Object2"]').value = JSON.stringify(this.totalObject)
          form.querySelector('.t-submit').click()
          console.log('got data')
        }
        else {
          console.log('Статистика не была отправлена по причине отсутствия формы')
        }
      }
    },
    sendFake() {
      this.stopFake = false
      setTimeout(() => {
        if (!this.stopFake) this.makeFake()
      }, 3000)
    },
    getAllInfo() {
      const kit = this.$store.state.kit
      const total = this.$store.state.totalPrice
      const info = {
        personal: `${this.$store.state.personal[0]}, ${this.$store.state.personal[1]}`,
        car: `${this.$store.state.carModel[0]}, ${this.$store.state.carModel[1]}, ${this.$store.state.carModel[2]}`,
        color: `${this.$store.state.colors[0]}, ${this.$store.state.colors[1]}`,
        options: function() {
          if ("pyatnik" in kit) {
            var output = `Комплект: ${kit.title}; Сумма заказа: ${total}; `
            if (kit.pyatnik.is) {
              output += "Подпятник: Да. "
            }
            else {
              output += "Подпятник: Нет, "
            }
            if (kit.shildi.is) {
              output += `Шильды: Да - ${kit.shildi.count}шт.`
            }
            else {
              output += "Шильды: Нет."
            }
            return output
          }
          else {
            return `Комплект: ${kit.title}; Подпятник и Шильды - Нет`
          }
        }
      }
      const message = [info.personal, info.car, info.color, info.options()]

      this.totalObject = {
        isFake: false,
        name: this.name,
        phone: this.phone,
        carMarka: this.$store.state.carModel[0],
        carModel: this.$store.state.carModel[1],
        carYear: this.$store.state.carModel[2],
        mainColor: this.$store.state.colors[0],
        secondColor: this.$store.state.colors[1],
        kit: this.$store.state.kit,
        totalPrice: this.$store.state.totalPrice,
        pyatnik: function() {
          if ("pyatnik" in kit) {
            return 1
          }
          else return 0
        },
        shildi: function() {
          if ("pyatnik" in kit) {
            if (kit.shildi.is) {
              return kit.shildi.count
            }
            else return 0
          }
        }
      }
    },
  },
  computed: {
    disabled: {
      get() {
        return this.name && this.phone && this.agree ? false : true
      }
    },
    finalKit: {
      get() {
        return this.$store.state.finalKit
      }
    }
  },
  beforeMount() {
    const plugin = document.createElement("script");
    plugin.setAttribute(
      "src",
      "//evakovrik.com.ua/js/tilda-constructor-mask.js?123"
    );
    plugin.async = true;
    document.head.appendChild(plugin);
  }
}
</script>

<style lang="scss" scoped>
  .column:first-child {
    padding-right: 10%;
  }

  button {
    margin-top: 0;

    &:first-child {
      margin-right: 20px;
    }
  }

  .flex {
    display: flex;
  }

  .input {
    width: 100%;
    display: block;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0 15px;
    display: flex;
    height: 44px;
    font-size: 15px;
    align-items: center;
    outline: none;
    box-shadow: none;
    -webkit-appearance: none;
    appearance: none;
  }

  .m-b-0 {
    margin-bottom: 0;
  }

  .features {
    display: flex;
    flex-wrap: wrap;
    font-size: 14px;
    padding-top: 236px;

    .feature {
      max-height: 50px;
      width: 50%;
      display: flex;
      align-items: center;
      margin-bottom: 20px;

      [class^=icon] {
        width: 40px;
        height: 40px;
        display: block;
        background-repeat: no-repeat;
        background-size: cover;
        margin: 10px 0;
        margin-right: 15px;
      }

      .icon-1 {
        background-image: url('../assets/icon-1.png');
      }
      .icon-2 {
        background-image: url('../assets/icon-2.png');
      }
      .icon-3 {
        background-image: url('../assets/icon-3.png');
      }
      .icon-4 {
        background-image: url('../assets/icon-4.svg');
      }
    }
  }

  .final {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 40%;
    margin-right: 10%;

    + .column .features {
      padding-top: 80px;
      height: 100%;
      transition: all .3s ease;
    }
  }

  .button-final {
    font-size: 26px;
    margin-top: 70px;
    word-break: break-word;
  }

  .button-final::after {
    display: none;
  }

  .input[type="checkbox"] {
    width: 0.1px;
    height: 0.1px;
    visibility: hidden;
    opacity: 0;
    display: inline-block;

    + .label {
      display: block;
      width: 20px;
      height: 20px;
      border-radius: 4px;
      border: 1px solid #ccc;
      margin-right: 10px;
      cursor: pointer;
      position: relative;
      font-size: 14px;
      margin-bottom: 20px;

      &::after {
        content: attr(data-text);
        position: relative;
        left: 30px;
        z-index: 1;
        white-space: nowrap;
        word-break: keep-all;

        @media (max-width: 480px) {
          top: -10px;
          display: inline-block;
          word-break: keep-all;
          white-space: normal;
          min-width: 220px;
          max-width: 240px;
        }
      }
    }

    &:checked {
      + .label {
        background: url('../assets/check.svg') no-repeat center center / 10px;
      }
    }
  }

  .submitted {
    margin: 100px 0;
  }

  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
      appearance: none !important;
  }

  .validate {
    .input.error {
      border: 1px solid #d20004;
      box-shadow: 0px 0px 1px 1px #d2000445;
      transition: all .5s ease;
    }

    .label.error {
      border: 1px solid #d20004;
      box-shadow: 0px 0px 1px 1px #d2000445;
      transition: all .5s ease;
    }
  }
</style>
