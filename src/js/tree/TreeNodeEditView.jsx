import React from 'react';
import _ from 'lodash';

export default React.createClass({
  mixins: [React.addons.LinkedStateMixin],

  getInitialState() {
    return {
      text: ''
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


  componentDidMount() {
    var textInputEl = this.getDOMNode().querySelector('input[type=text]');
    textInputEl.focus();
    textInputEl.select();
  },


  onSaveClick() {
    this.setState({
      editing: false
    });

    this.props.node.set('text', this.state.text);

    if (_.isFunction(this.props.onEdited)){
      this.props.onEdited();
    }
  },


  onCancelClick() {
    this.setState({
      editing: false
    });

    if (_.isFunction(this.props.onEdited)){
      this.props.onEdited();
    }
  },


  renderCancelButton() {
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
    )
  },


  render() {
    return (
      <span className='edit'>
        <input
          type='text'
          valueLink={this.linkState('text')}
        />
        {this.renderCancelButton()}
        {this.renderSaveButton()}
      </span>

    );
  }
});
