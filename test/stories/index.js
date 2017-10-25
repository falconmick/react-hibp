import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { pwnSearch } from '../../src/main';

class ExampleInput extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(searchAccount) {
    return (event) => {
      this.setState({value: event.target.value});
    }
  }

  render() {
    const { breaches, pastes, searchAccount } = this.props;
    return (
      <div>
        <span>breaches: {breaches}</span>
        <span>pastes: {pastes}</span>
        <input type="text" value={this.state.value} onChange={this.handleChange(searchAccount)} />
      </div>
    )
  }
}

const SmartInput = pwnSearch(ExampleInput);

storiesOf('Button', module)
  .add('with text', () => (
    <SmartInput />
  ));