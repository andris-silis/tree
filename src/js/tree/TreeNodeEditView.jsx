import React from 'react';
import _ from 'lodash';
import classNames from 'classnames';


export default React.createClass({
  mixins: [React.addons.LinkedStateMixin],

  getInitialState() {
    return {
      text: '',
      editing: false,
      focused: false
    };
  },


  componentWillMount() {
    this.setState({
      text: this.props.node.get('text')
    });
  },


  componentWillReceiveProps(nextProps) {
    // Don't overwrite text state if it is changed
    if (this.state.text !== this.props.node.get('text')) {
      return;
    }

    this.setState({
      text: nextProps.node.get('text')
    })
  },


  onSaveClick() {
    this.setState({
      editing: false
    });

    this.props.node.set('text', this.state.text);
  },


  onCancelClick() {
    this.setState({
      editing: false,
      text: this.props.node.get('text')
    });
  },


  onFocus() {
    this.setState(
      {
        focused: true,
        editing: true
      },
      () => {
        _.delay(
          () => {
            var textInputEl = this.getDOMNode().querySelector('input[type=text]');
            textInputEl.select();
          },
          100
        );
      }
    );
  },


  onBlur() {
    this.setState({
      focused: false
    });
  },


  renderCancelButton() {
    if (!this.state.editing) {
      return;
    }

    return (
      <button
        onClick={this.onCancelClick}
      >
        Cancel
      </button>
    );
  },


  renderSaveButton() {
    // Show save button only when text is changed
    if (
      this.state.text === this.props.node.get('text')
    ) {
      return;
    }

    return (
      <button
        onClick={this.onSaveClick}
      >
        Save
      </button>
    );
  },


  render() {
    var classes = classNames(
      'mui-text-field',
      'mui-has-value',
      { 'mui-is-focused': this.state.focused }
    );

    return (
      <span
        className='edit'
      >
        <div className={classes}>
          <input
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            className='mui-text-field-input'
            type='text'
            valueLink={this.linkState('text')}
            disabled={this.props.node.get('id') === 'root'}
          />
          <hr className='mui-text-field-underline' />
          <hr className='mui-text-field-focus-underline' />
        </div>

        {this.renderCancelButton()}
        {this.renderSaveButton()}
      </span>
    );
  }
});
