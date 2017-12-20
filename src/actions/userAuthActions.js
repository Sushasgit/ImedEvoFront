
export function registrationAsync(authData) {
  console.log('registrationAsyncACTION');
  let options = {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(authData)
  };
  return dispatch => {
    return fetch('/api/User/SignUp', options)
      .then(response => {
        if (response.status === 200) {
         console.log('ok')
        }
      })
      .catch(err => console.log(err));
  };
}