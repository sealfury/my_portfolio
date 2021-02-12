import React, { Component } from 'react'
import { Form, Button, Container, Icon } from 'semantic-ui-react'

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.state = { name: '', email: '', message: '' }
  }

  handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error))

    e.preventDefault()
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    const { name, email, message } = this.state
    return (
      <Container>
        <Form  onSubmit={this.handleSubmit} netlify name='contact'>
          <input type='hidden' name='form-name' value='contact' />
          <Form.Field>
            <label className='formlabel'>
              Your Name:
              <input
                className='formfield'
                type='text'
                name='name'
                value={name}
                onChange={this.handleChange}
              />
            </label>
          </Form.Field>
          <Form.Field>
            <label className='formlabel'>
              Your Email:
              <input
                className='formfield'
                type='email'
                name='email'
                value={email}
                onChange={this.handleChange}
              />
            </label>
          </Form.Field>
          <Form.Field>
            <label className='formlabel'>
              Message:
              <textarea
                className='formfield'
                name='message'
                value={message}
                onChange={this.handleChange}
              />
            </label>
          </Form.Field>
          <Form.Field>
            <Button animated color='blue' type='submit'>
              <Button.Content color='white' visible>
                Send
              </Button.Content>
              <Button.Content hidden>
                <Icon color='white' name='send' />
              </Button.Content>
            </Button>
          </Form.Field>
        </Form>
      </Container>
    )
  }
}

export default ContactForm
