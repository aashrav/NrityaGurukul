import axios from 'axios';
const api = axios.create({baseURL: 'http://localhost:5000'})

export const getUser = (user) => {
    return api
       .get('users/getUser', {params:user})
       .then( (res) =>{
        return res;
      })
}

export const login = (user) =>{
  return api
    .get('users/login',{params:user})
    .then(res =>{
      return res
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

