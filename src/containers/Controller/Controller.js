import React, { Component } from 'react';

import Heading from '../../components/Heading/Heading';
import InputWrapper from '../../components/InputWrapper/InputWrapper';
import DailyList from '../../components/DailyList/DailyList';

import classes from './Controller.module.css';

class Controller extends Component {
  state = {
    maxCalories: 2400,
    input: '',
    entries: JSON.parse(window.localStorage.getItem("SimpleCalories") || "[]")
  }

  // Update local storage for persistence:
  componentDidUpdate = () => {
    window.localStorage.setItem("SimpleCalories", JSON.stringify(this.state.entries));
  }

  // Bind input to state.input:
  inputHandler = (event) => {
    this.setState({ input: event.target.value });
  }

  // Let's be nice and let users submit the entry when they hit enter:
  onEnterSubmitSearch = (event) => {
    if (event.key === 'Enter') {
      this.addEntry();
    }
  }

  // Add entry to state:
  addEntry = () => {
    let { input } = this.state;

    if (isNaN(input)) {
      alert('Calories must be a number...');
      this.setState({ input: '' });
    } else {
      const newEntries = [...this.state.entries].concat(+input);

      this.setState({
        entries: newEntries,
        input: ''
      });
    }
  }

  // Reset - delete entries from state:
  reset = () => {
    this.setState({ entries: [] });
  }

  render() {
    let { maxCalories, input, entries } = this.state;

    // Calculate the running total:
    let runningTotal = entries.reduce((acc, val) => {
      return (acc + val);
    }, 0);

    // Calculate the remaining calories for the day:
    let remainingCals = maxCalories - runningTotal;

    let status = 'good';

    return (
      <div className={classes['Controller']}>
        <div>
          <div className={classes['Title']}>Dead Simple Calorie Counter</div>
          <Heading size={5} status={status}>
            Remaining Calories: {remainingCals}
          </Heading>
          <InputWrapper
            placeholder='Enter calories...'
            value={input}
            onChange={this.inputHandler}
            onKeyPress={this.onEnterSubmitSearch}
            addEntry={this.addEntry}
            onReset={this.reset}
          />
        </div>
        <DailyList entries={entries} total={runningTotal} />
      </div>
    );
  };
};

export default Controller;