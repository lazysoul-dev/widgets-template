import './../styles/index.css'

import { createApp } from 'vue'
import { createPinia, Pinia } from 'pinia'
import Counter from './CounterWidget.vue'

const main = async (): Promise<void> => {
  const pinia: Pinia = createPinia()

  const counterElement: HTMLElement | null = document.getElementById('widget-counter')

  if (!counterElement) return

  createApp(Counter).use(pinia).mount(counterElement)
}

window.addEventListener('load', main)
