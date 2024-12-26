import { render } from '@testing-library/vue'
import { describe, expect, test, vi } from "vitest"
import App from './App.vue'
import router from '@/router'
import userEvent from '@testing-library/user-event'


describe('<App>', () => {
  test('App should be able to load home page then navigate to dummy page', async () => {
    const push = vi.spyOn(router, 'push')
    const user = userEvent.setup()

    const { getByRole, findByRole } = render(App, {
      global: {
        plugins: [router]
      }
    })

    await user.click(getByRole('link', { name: 'I lead to a dummy page!' }))

    expect(push).toHaveBeenCalledWith({ name: 'dummy-page-route-name' })

    expect(await findByRole('link', { name: `Let's get back to Home` }))
  })
})
