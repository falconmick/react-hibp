import React, { Component } from 'react';
import { search } from 'hibp';
import { debounce } from './lib/debounce';


export const pwnSearch = ComposedComponent => class extends Component {
  constructor(props) {
    super(props);

    const { throttle = 300, pwnLength = 1 } = props;

    this.state = { minLength: pwnLength };

    this.breachedAccount = debounce(this.breachedAccount, throttle, this);
  }
  breachedAccount(username) {
    const { minLength } = this.state;
    if (username && username.length >= minLength) {
      search(username)
        .then(data => {
          const { breaches = [], pastes = [] } = data;
          this.setState({breaches, pastes})
        })
        .catch((err) => {
          // todo: remove
          console.log(err);
        });
    }
  }
  render() {
    const { breaches, pastes } = this.state;
    return <ComposedComponent
      {...this.props}
      searchAccount={this.breachedAccount}
      breaches={breaches}
      pastes={pastes}
    />;
  }
};