import { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import './App.css';
import ModalMessage from './components/ModalMessage/ModalMessage';
import { deployGame } from './redux/gameDeploymentReducer';

class App extends Component {
  componentDidMount() {
    this.props.deployGame();
  }

  render() {
    return (
      <div className="app-wrapper">
        {this.props.modalVisible &&
          <ModalMessage msg={this.props.modalMessage} />
        }
        <div className="EnemyLeader"></div>
        <div className="enemyInfo"></div>
        <div className="weatherCards"></div>
        <div className="userInfo"></div>
        <div className="userLeader"></div>
        <div className="battlefield">
          <div className="enemySide">
            <div className="enemyMeleeCards"></div>
            <div className="enemyRangedCards"></div>
            <div className="enemySiegeCards"></div>
            <div className="enemyModifieSiege"></div>
            <div className="enemyModifieRanged"></div>
            <div className="enemyModifieMelee"></div>
            <div className="enemyMeleePower"></div>
            <div className="enemyRangedPower"></div>
            <div className="enemySiegePower"></div>
          </div>
          <div className="userSide">
            <div className="userModifierRanged"></div>
            <div className="userModifieMelee"></div>
            <div className="userModifierSiege"></div>
            <div className="userMeleeCards"></div>
            <div className="userRangedCards"></div>
            <div className="userSiegeCards"></div>
            <div className="userMeleePower"></div>
            <div className="userRangedPower"></div>
            <div className="userSiegePower"></div>
          </div>
          <div className="userHand"></div>
        </div>
        <div className="enemyGraveyard"></div>
        <div className="userGraveyard"></div>
        <div className="enemyDeck"></div>
        <div className="userDeck"></div>
        <div className="selectedCard"></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  modalVisible: state.modal.modalVisible,
  modalMessage: state.modal.modalMessage,
});

export default compose(
  connect(mapStateToProps, { deployGame })
)(App);

