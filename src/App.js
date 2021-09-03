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