import { Form } from 'semantic-ui-react';
import { Component } from 'react';
import { AccountConsumer } from '../../providers/AccountProvider';

class AccountForm extends Component {
  state = { username: '', lvl: '' }

  // handleChange = (e) => {
  //   const { name, value } = e.target
  //   this.setState({ [name]: value })
  // }
  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.updateAccount(this.state)
    this.setState({ username: '', lvl: '' })
  }

  render() {
    const { username, lvl } = this.state
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input 
          label='Username'
          required
          name='username'
          value={username}
          onChange={this.handleChange}
        />
        <Form.Select 
          label='Membership level'
          required
          name='lvl'
          value={lvl}
          onChange={this.handleChange}
          options={lvlOpts}
        />
        <Form.Button>Save</Form.Button>
      </Form>
    )
  }
}

const lvlOpts = [
  { key: 'b', text: 'Bronze', value: 'Bronze'},
  { key: 's', text: 'Silver', value: 'Silver'},
  { key: 'g', text: 'Gold', value: 'Gold'},
  { key: 'p', text: 'Platinum', value: 'Platinum'},
]

const ConnectedAccountForm = (props) => (
  <AccountConsumer>
    { value => (
      <AccountForm 
        {...props}
        {...value}
      />
    )}
  </AccountConsumer>
)

export default ConnectedAccountForm;