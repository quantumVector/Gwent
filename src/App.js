import { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import './App.css';
import ModalContainer from './components/ModalContainer/ModalContainer';
import Preloader from './components/Preloader/Preloader';
import SelectedCardContainer from './components/SelectedCard/SelectedCardContainer';
import TableContainer from './components/Table/TableContainer';
import TotalPowerContainer from './components/TotalPower/TotalPowerContainer';
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
        <div className="userInfo">
          <TotalPowerContainer state={this.props.state} />
        </div>
        <div className="userLeader"></div>
        <div className="table">
          <TableContainer state={this.props.state} side='enemy' />
          <TableContainer state={this.props.state} side='user' />
          <UserHandContainer state={this.props.state} />
        </div>
        <div className="enemyGraveyard"></div>
        <div className="userGraveyard"></div>
        <DecksContainer state={this.props.state} side='enemy' />
        <DecksContainer state={this.props.state} side='user' />
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

