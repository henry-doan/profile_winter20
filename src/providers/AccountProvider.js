import React, { Component } from 'react';

// SEt up the initial context 
export const AccountContext = React.createContext();

// create a exportable consumer, to access the provider
export const AccountConsumer = AccountContext.Consumer;

// provider, everything logic, state, global
class AccountProvider extends Component {
  state = { username: 'bossbaby99', dateJoined: '12/18/19', lvl: 'Silver' }

  updateAccount = (account) => {
    this.setState({...account,  })
  }

  render() {
    return(
      <AccountContext.Provider value={{
        ...this.state,
        updateAccount: this.updateAccount,
        // deleteAccount: this.deleteAccount,
      }}>
        { this.props.children }
      </AccountContext.Provider>
    )
  }
}

export default AccountProvider;