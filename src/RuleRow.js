import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {
  render() {
    const {doScore, name, score, des} = this.props;
    const noScore = score === undefined
    return (
      <tr className={`RuleRow RuleRow-${noScore ? 'active': 'disabled'}`} onClick={ noScore ? doScore : null}>
        <td className="RuleRow-name">{name}</td>
        <td className="RuleRow-score">{noScore ? des : score}</td>
      </tr>
    )
  }
}

export default RuleRow;