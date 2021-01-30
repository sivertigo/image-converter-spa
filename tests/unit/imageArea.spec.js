import { shallowMount } from '@vue/test-utils'
import ImageConverter from '@/components/ImageConverter.vue'

describe('ImageConverter.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(ImageConverter, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
  it('place images from explorer', () => {


  })
})
