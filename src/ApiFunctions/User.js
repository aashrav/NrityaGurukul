import axios from 'axios';
const api = axios.create({baseURL: 'http://localhost:5000'})

export const getUser = (user) => {
    return api
       .get('user/getUser', {params:user})
       .then( (res) =>{
        return res;
      })
}

export const getAllUsers = () => {
  return api
    .get('user/getAllUsers')
    .then((res) => {
      return res;
    })

}

export const login = (user) =>{
  const response = api
    .get('user/login',{params:user})
    .then(res =>{
      return res
    })
    .catch(err => {
      return err;
    });
    return response
}
export const checkIfUserIsSignedIn = async() => {
  const token = window.localStorage ? window.localStorage.getItem('jwtToken'):'';
  if(!token){
    return token;
  }
  const response = await api
    .post('/user/verify', { token })
    .then(res => {
      return res;
    })
    .catch(err => {
      return err;
    });
  return response;
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

export const createUser = async(newUser) => {
  console.log("CREATE USER")
  const token = window.localStorage ? window.localStorage.getItem('jwtToken'):'';
  if(!token){
    return token;
  }
  const response = await api
        .post('/user/createUser',{
          first_name: newUser.first_name,
          last_name: newUser.last_name,
          email: newUser.email,
          group: newUser.group,
          password: newUser.password,
          accessLevel: newUser.accessLevel
        })
        .then(res =>{
          console.log("Created New User ", res);
        })
  return response;
}

