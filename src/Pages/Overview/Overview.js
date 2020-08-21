import React, { Component } from 'react';
import Header from '../../Components/Text/Header';
import {getAllUsers, createUser} from '../../ApiFunctions/User';
import OverviewUser from './OverviewUser';
import Modal from 'react-modal';
import './Overview.css';

class Overview extends Component{

  state = {
    users: null,
    addUserModal: false,
    search: '',
    first_name: null,
    last_name: null,
    email: null,
    password: null,
    group: null,
    type: 1
  };
  
  openModal(){
    this.setState({
      modal: true
    });
  }

  closeModal(){
    this.setState({
      addUserModal: false
    });
  }

  handleSearch(e) {
    this.setState({
      search: e.target.value.toLowerCase()
    })
  }

  openModal(){
    this.setState({
      addUserModal: true
    });
  }

  async addUserForm(e){
    const response = await createUser({
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      group: this.state.group,
      password: this.state.password,
      accessLevel: this.state.type
    })
    console.log(response);
  }

  componentDidMount(){
    getAllUsers()
      .then((res) => {
          console.log(res.data)
          this.setState({
            users:res.data
          });
      })
  }

  
  render(){
    return(
      <div className = 'overview'>
        <Header>OVERVIEW</Header>
        <div className ='overview-search-add'>
          <input className ='overview-search' onChange = {this.handleSearch.bind(this)} placeholder = 'Search user by name or email....'></input>
          <svg className = 'overview-add-user' onClick ={this.openModal.bind(this)} viewBox="0 0 512 512">
            <path d="M312,392h48v48a8,8,0,0,0,16,0V392h48a8,8,0,0,0,0-16H376V328a8,8,0,0,0-16,0v48H312a8,8,0,0,0,0,16Z"/>
            <path d="M36.169,415.023C39.835,417.023,126.983,464,216,464a332.248,332.248,0,0,0,67.025-7.122A111.978,111.978,0,1,0,368,272c-2.142,0-4.268.066-6.38.186-25.414-38.012-61.228-63.9-102.114-74.624a96,96,0,1,0-86.978.017c-33.16,8.7-63.155,27.408-87.009,54.772C51.007,291.941,32,347.218,32,408A8,8,0,0,0,36.169,415.023ZM368,288a96,96,0,1,1-96,96A96.108,96.108,0,0,1,368,288ZM136,112a80,80,0,1,1,80,80A80.091,80.091,0,0,1,136,112ZM97.58,262.865C128.422,227.485,170.478,208,216,208c50.71,0,96.7,24.14,127.817,66.637A111.947,111.947,0,0,0,272.6,442.613,312.1,312.1,0,0,1,216,448c-74.188,0-149.593-35.583-167.958-44.844C49.013,348.164,66.517,298.5,97.58,262.865Z"/>
          </svg>
        </div>
        <Modal 
          ariaHideApp={false}
          className = 'overview-add-modal'
          isOpen={this.state.addUserModal}
          onRequestClose={this.closeModal.bind(this)}
          contentLabel="Example Modal">
            <h1>Add User</h1>
            <hr/>

            <form className ='overview-add-form' onSubmit = {this.addUserForm.bind(this)}>
              <div>
                <label>First name:</label>
                <input 
                  required 
                  onChange = {(e) => this.setState({first_name:e.target.value})}
                />
              </div>
              <div>
                <label>Last name:</label>
                <input 
                  required 
                  onChange = {(e) => this.setState({last_name:e.target.value})}
                />
              </div>
              <div>
                <label>Email:</label>
                <input 
                  required 
                  onChange = {(e) => this.setState({email:e.target.value})}
                />
              </div>
              <div>
                <label>Password:</label>
                <input 
                  required 
                  onChange = {(e) => this.setState({password:e.target.value})}
                />
              </div>
              
              <div>
                <label>Group:</label>
                <input 
                  id = 'overview-add-group' 
                  required type = 'number' 
                  max = {17} 
                  min ={1} 
                  onChange = {(e) => this.setState({group:e.target.value})}
                  />
              </div>
              <div>
                <label>Type:</label>
                <select 
                  onChange = {(e) => this.setState({type:e.target.value})}
                  value = {this.state.type}
                >
                  <option value={1}>Student</option>
                  <option value= {2}>Admin</option>
                </select>
              </div>
              <button type = 'submit'>Create</button>
              <button id = 'overview-add-cancel' onClick = {this.closeModal.bind(this)}>Cancel</button>

            </form>
          
        </Modal>
        <table className= "content-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Group</th>
              <th>Type</th>
              <th></th>
            </tr>
          </thead>
          <tbody id = "aashrav">
            {(this.state.users) ? 
              this.state.users
              .map((user,index) => {                
                if((user.first_name + ' ' + user.last_name)
                  .toLowerCase()
                  .includes(this.state.search)
                  || user.email.includes(this.state.search)){
                  return(
                    <OverviewUser
                      key = {index}
                      first_name = {user.first_name}
                      last_name ={user.last_name}
                      email = {user.email}
                      group = {user.group}
                      accessLevel = {user.accessLevel}
                    />
                  )
                }else{ return null } 
              }) :null  
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default Overview;
