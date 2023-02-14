import React, { Component } from "react";
import "./Die.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix
} from "@fortawesome/free-solid-svg-icons";

class Die extends Component {
  static defaultProps = {
    val: 1
  }
  constructor(props) { 
  super(props);
  this.handleLock = this.handleLock.bind(this);
}
handleLock() { 
  this.props.handleClick(this.props.idx);
}
  render() {
    const face = [faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix]
    let classes = 'Die ';
    if (this.props.locked) classes += 'Die-locked '
    if (this.props.rolling) classes += 'Die-rolling'
    return (
      <FontAwesomeIcon
          icon={face[this.props.val - 1]}
          className={classes}
          onClick={this.handleLock}
          disabled={this.props.disabled}
        />
    );
  }
}

export default Die;
