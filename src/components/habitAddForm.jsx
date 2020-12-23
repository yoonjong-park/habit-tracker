import React, { Component } from 'react';

class HabitAddForm extends Component {
  inputRef = React.createRef(); /* React 함수로 Ref라는 object를 생성한다.*/
  formRef = React.createRef();

  onSubmit = (event) => {
    // function onSubmit(event)  와 같은 것임.
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    // name이 false가 아닐경우(값이 있다면) onAdd에 name을 전달하는 구문
    // this.inputRef.current.value = '';  이렇게 해도 되나, 아래와 같이 하는 게 정석이다.
    this.formRef.current.reset();
  };

  render() {
    return (
      <form ref={this.formRef} className='add-form' onSubmit={this.onSubmit}>
        <input ref={this.inputRef} type='text' className='add-input' placeholder='Habit' />
        <button className='add-button'>Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
