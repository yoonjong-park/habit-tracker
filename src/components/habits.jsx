import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
  handleIncrement = (habit) => {
    this.props.onIncrement(habit);
  };

  handleDecrement = (habit) => {
    this.props.onDecrement(habit);
  };

  handleDelete = (habit) => {
    this.props.onDelete(habit);
  };

  render() {
    return (
      <ul>
        {this.props.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
          /***  Key는 항상 제공 되어야 함. habit은 props를 의미함. {habit} 부분은habits object의 1개 배열의 아이템을 의미함.***/
        ))}
      </ul>
    );
  }
}

export default Habits;
