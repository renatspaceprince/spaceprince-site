const feedback = {
  state: {
    form: document.querySelector('.contact__feedback-form'),

    baseUrl: 'http://127.0.0.1:3000',

    failedFetchs: 0,
  },

  getFields() {
    return this.state.form.querySelectorAll('input, textarea')
  },

  async sendForm(formBody, success) {
    try {
      const data = await fetch(`${this.state.baseUrl}/feedback`, {
        method: 'POST',

        body: JSON.stringify(formBody),

        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (data.status === 200) {
        alert('Форма отправлена')
        success()
      } else {
        switch (this.state.failedFetchs) {
          case 0:
          default:
            alert('Произошла ошибка при отправке формы. Повторите попытку.')
            break

          case 1:
            alert('Произошла ошибка при отправке формы. Повторите попытку. 2')
            break

          case 2:
            alert('Произошла ошибка при отправке формы. Повторите попытку. 3')
            break
        }

        this.state.failedFetchs++
      }
    } catch (error) {
      console.error(error)
    }
  },

  init() {
    this.state.form.addEventListener('submit', async (event) => {
      event.preventDefault()

      const fieldsArray = [...this.getFields()]

      const [name, phoneNumber, message] = fieldsArray.map((item) =>
        item.value.trim()
      )

      if (!name || !phoneNumber) {
        alert('Заполните обязательные поля')
        return
      }

      const formBody = {
        name,
        phoneNumber,
        message,
      }

      await this.sendForm(formBody, () => {
        fieldsArray.forEach((item) => (item.value = ''))
      })
    })
  },
}

feedback.init()
