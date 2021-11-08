import { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import './App.css';
import ModalContainer from './components/ModalContainer/ModalContainer';
import Preloader from './components/Preloader/Preloader';
import SelectedCardContainer from './components/SelectedCard/SelectedCardContainer';
import TableContainer from './components/Table/TableContainer';
import TotalPowerContainer from './components/TotalPower/TotalPowerContainer';
import Decks from './components/UserDeck/Decks';
import UserHand from './components/UserHand/UserHand';
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
        <div className="userInfo">
          <TotalPowerContainer state={this.props.state} />
        </div>
        <div className="userLeader"></div>
        <div className="table">
          <TableContainer state={this.props.state} side='enemy' />
          <TableContainer state={this.props.state} side='user' />
          <UserHand />
        </div>
        <div className="enemyGraveyard"></div>
        <div className="userGraveyard"></div>
        <Decks side='enemy' />
        <Decks side='user' />
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

