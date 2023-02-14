import React, { Component } from 'react';
import RuleRow from './RuleRow';
import './ScoreTable.css';
import { ones, twos, threes, fours, fives, sixes, threeOfKind, fourOfKind, fullHouse, smallStraight, largeStraight, yahtzee, chance } from './Rules';


class ScoreTable extends Component {
  getTotalScore() {
    let totalScore = 0;
    const { scores } = this.props;
    for (let key in scores) {
      if (scores[key] !== undefined) {
        totalScore += scores[key];
      }
    }
    return totalScore;
  }
  render() {
    const { scores, doScore } = this.props;

    return (
      <div className="ScoreTable">
        <section className="ScoreTable-section">
          <h2>Upper</h2>
          <table cellSpacing="0">
            <tbody>
              <RuleRow name="Ones" score={scores.ones} des={"1pt per one"} doScore={evt => doScore("ones", ones.evalRoll)} />
              <RuleRow name="Twos" score={scores.twos} des={"2pts per two"} doScore={evt => doScore("twos", twos.evalRoll)} />
              <RuleRow name="Threes" score={scores.threes} des={"3pts per three"} doScore={evt => doScore("threes", threes.evalRoll)} />
              <RuleRow name="Fours" score={scores.fours} des={"4pts per four"} doScore={evt => doScore("fours", fours.evalRoll)} />
              <RuleRow name="Fives" score={scores.fives} des={"5pts per five"} doScore={evt => doScore("fives", fives.evalRoll)} />
              <RuleRow name="Sixes" score={scores.sixes} des={"6pts per six"} doScore={evt => doScore("sixes", sixes.evalRoll)} />
            </tbody>
          </table>
        </section>
        <section className="ScoreTable-section ScoreTable-section-lower">
          <h2>Lower</h2>
          <table cellSpacing="0">
            <tbody>
              <RuleRow name="Three of Kind" score={scores.threeOfKind} des={"sum of 3 of a kind"} doScore={evt => doScore("threeOfKind", threeOfKind.evalRoll)} />
              <RuleRow name="Four of Kind" score={scores.fourOfKind} des={"sum of 4 of a kind"} doScore={evt => doScore("fourOfKind", fourOfKind.evalRoll)} />
              <RuleRow name="Full House" score={scores.fullHouse} des={"25pts for 3 of a kind and 2 of a kind"} doScore={evt => doScore("fullHouse", fullHouse.evalRoll)} />
              <RuleRow name="Small Straight" score={scores.smallStraight} des={"30pts for 4 different die in order"} doScore={evt => doScore("smallStraight", smallStraight.evalRoll)} />
              <RuleRow name="Large Straight" score={scores.largeStraight} des={"40pts for 5 different die in order"} doScore={evt => doScore("largeStraight", largeStraight.evalRoll)} />
              <RuleRow name="Yahtzee" score={scores.yahtzee} des={"50pts for 5 of a kind"} doScore={evt => doScore("yahtzee", yahtzee.evalRoll)} />
              <RuleRow name="Chance" score={scores.chance} des={"sum of all die"} doScore={evt => doScore("chance", chance.evalRoll)} />
            </tbody>
          </table>
        </section>
        <h2>TOTAL SCORE: { this.getTotalScore() }</h2>
      </div>
    )
  }
}

export default ScoreTable;