import Component from '@ts/abstract/Component'
import SwiperProvider, { TSwiperElements } from '@ts/common/ui/SwiperProvider'
import { SwiperOptions } from 'swiper/types'

export default class HomeSwiper extends Component {
  private swiperProvider: SwiperProvider 

  constructor(element: HTMLElement, swiperProvider: SwiperProvider) {
    super({
      element: element,
      elements: {
        swiperSlide: '[data-ui="swiper-slide"]',
        swiperButtonPrev: '[data-ui="swiper-button-prev"]',
        swiperButtonNext: '[data-ui="swiper-button-next"]',
        swiperIndicator: '[data-ui="swiper-indicator"]',
      },
    })

    this.swiperProvider = swiperProvider
  }

  initialize() {
    const swiperElements: TSwiperElements = {
      element: this.element,
      slide: this.elements.swiperSlide,
      buttonPrev: this.elements.swiperButtonPrev ? this.elements.swiperButtonPrev : null,
      buttonNext: this.elements.swiperButtonNext ? this.elements.swiperButtonNext : null,
      indicator: this.elements.swiperIndicator ? this.elements.swiperIndicator : null,
    }

    this.swiperProvider?.initialize(swiperElements)
  }

  public generate(options: SwiperOptions) {
    this.swiperProvider?.generate(options)
  }
}
