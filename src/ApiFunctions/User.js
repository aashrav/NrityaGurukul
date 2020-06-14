import axios from 'axios';
const api = axios.create({baseURL: 'http://localhost:5000'})

export const getUser = (user) => {
  return api
        .get('users/login',{params:user})
        .then(res =>{
          localStorage.setItem('usertoken', res.data);
          return res.data;
        })
        .catch(err =>{
          console.log(err);
        })
}

// export const getUser = (user) =>{
//   return axios({
//     method: 'get',
//     url: 'http://localhost:5000/users/getUser',
//     data:{
//       email: user.email
//     },  
//     validateStatus: (status) =>{
//       return status;
//     }
//   }).catch(err =>{
//     console.log(err);
//   }).then(res =>{
//     return res.data;
//   })
// }

export const createUser = (newUser) => {
  return axios
        .post('/user/createUser',{
          first_name: newUser.first_name,
          last_name: newUser.last_name,
          email: newUser.email,
          group: newUser.group,
          password: newUser.password
        })
        .then(res =>{
          console.log("Created New User");
        })
}

