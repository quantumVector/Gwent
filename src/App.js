import { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import './App.css';
import ModalContainer from './components/ModalContainer/ModalContainer';
import Preloader from './components/Preloader/Preloader';
import SelectedCardContainer from './components/SelectedCard/SelectedCardContainer';
import DecksContainer from './components/UserDeck/DecksContainer';
import UserHandContainer from './components/UserHand/UserHandContainer';
import { deployGame } from './redux/appReducer';
import { hideModal } from './redux/modalReducer';

class App extends Component {
  componentDidMount() {
    this.props.deployGame();
  }

  render() {
    if (!this.props.deploymentSuccess) {
      return <Preloader />
    }

    return (
      <div className="app-wrapper">
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
          <UserHandContainer state={this.props.state} />
        </div>
        <div className="enemyGraveyard"></div>
        <div className="userGraveyard"></div>
        <DecksContainer state={this.props.state} side='enemy'/>
        <DecksContainer state={this.props.state} side='user'/>
        <SelectedCardContainer state={this.props.state} />
        <ModalContainer state={this.props.state} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  deploymentSuccess: state.app.deploymentSuccess
});

export default compose(
  connect(mapStateToProps, { deployGame, hideModal })
)(App);

