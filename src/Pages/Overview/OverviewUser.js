import React, { Component } from 'react';
import Modal from 'react-modal';

class OverviewUser extends Component{
  constructor(props){
    super(props);
    this.accessLevel = props.accessLevel;
    this.first_name = props.first_name;
    this.last_name = props.last_name;
    this.group = props.group;
    this.email = props.email;
    this.state = {
      modal: false
    }
  }

  openModal(){
    this.setState({
      modal: true
    });
  }

  closeModal(){
    this.setState({
      modal: false
    });
  }

  render(){
    return(
      <React.Fragment>
        <Modal 
          ariaHideApp={false}
          className = 'overview-modal'
          isOpen={this.state.modal}
          onRequestClose={this.closeModal.bind(this)}
          contentLabel="Example Modal">

          <h1>Edit User</h1>
          <hr/>
          <div className = 'overview-modal-body'>
            <div>
              <h3>First Name: </h3> 
              <input defaultValue ={this.first_name}/>
            </div>
            <div>
              <h3>Last Name: </h3> 
              <input defaultValue ={this.last_name}/>
            </div>
            <div>
              <h3>Email:</h3>
              <input defaultValue = {this.email}/>
            </div>
            {/* this line needs to change */}
            {(this.group !== -1)?
            <div>
              <h3>Group: </h3>
              <input id = 'overview-edit-group' type = 'number' defaultValue = {this.group}></input>
            </div> : null }
            <div>
              <h3>Type: </h3>
              <select 
                  // onChange = {(e) => this.setState({type:e.target.value})}
                  defaultValue = {this.accessLevel}
                >
                  <option value={1}>Student</option>
                  <option value= {2}>Admin</option>
                </select>
            </div>
            <button id = 'overview-modal-submit'>Submit</button>

            <button id = 'overview-modal-delete'>Delete User</button>
            <button id = 'overview-modal-cancel'>Cancel</button>

          </div>
        </Modal>
        <tr>
          <td>{this.first_name + ' ' + this.last_name}</td>
          <td>{this.email}</td>
          <td>{(this.group === -1) ? 'N/A': this.group}</td>
          <td>{(this.accessLevel === 2)? 'Admin': 'Student'}</td>
          <td className = 'overview-edit-container'>
            {/* <button> */}
              <svg 
                className = 'overview-edit-user' 
                onClick= {this.openModal.bind(this)} 
                viewBox="0 0 512 512" >
                <path d="m36.169 415.023c3.667 2 90.814 48.977 179.831 48.977 8.815 0 17.829-.409 26.93-1.2l-5.4 23.4a8 8 0 0 0 9.594 9.594l73.539-16.971c.064-.014.124-.037.187-.053.158-.04.316-.084.473-.134.1-.033.2-.07.3-.107.143-.052.284-.108.424-.168.111-.048.219-.1.327-.152s.243-.122.362-.188.236-.136.352-.208.2-.128.3-.2q.188-.13.367-.27c.085-.066.169-.133.252-.2.125-.106.245-.216.362-.328.048-.046.1-.085.147-.132l135.768-135.761 5.657-5.657a48 48 0 0 0 -67.881-67.883l-5.654 5.653-19.045 19.045c-15.182-29.252-36.461-53.654-62-70.917a169.638 169.638 0 0 0 -51.921-23.563 96 96 0 1 0 -86.912-.016c-33.16 8.7-63.155 27.408-87.009 54.772-34.512 39.585-53.519 94.862-53.519 155.644a8 8 0 0 0 4.169 7.023zm219.831 62.304 10.846-47 36.154 36.153zm153.373-198.627a32 32 0 1 1 45.254 45.255zm-11.314 11.31 45.254 45.255-124.45 124.451-45.256-45.255zm-262.059-178.01a80 80 0 1 1 80 80 80.091 80.091 0 0 1 -80-80zm-38.421 150.865c30.843-35.38 72.899-54.865 118.421-54.865 62.08 0 116.184 35.819 145.442 96l-104.8 104.8c-.046.046-.086.1-.131.144-.11.116-.219.234-.323.357-.064.076-.125.154-.186.233-.1.127-.2.256-.289.39-.057.083-.111.167-.165.252-.084.134-.166.268-.243.408-.053.095-.1.193-.151.29-.066.132-.131.265-.19.4-.05.115-.094.232-.138.349s-.094.248-.135.376-.081.276-.118.415c-.022.081-.05.159-.069.242l-7.777 33.7a298.024 298.024 0 0 1 -30.727 1.644c-74.188 0-149.593-35.583-167.957-44.844.971-54.993 18.474-104.656 49.536-140.291z"/>
              </svg>
            {/* </button> */}
            {/* <button>Delete</button> */}
          </td>
        </tr>
      </React.Fragment>
    )
  }
}

export default OverviewUser;
