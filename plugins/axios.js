export default function ({ $axios, $auth }) {
$axios.setHeader('Accept', 'application/json')



$axios.onError(error => {
    if(error.response.status === 401) {
        console.log(error.response.status,'error interceptado')
        $auth.strategy.token.set('Bearer '+ $auth.$storage.getCookie('token'))
        const userId = $auth.$storage.getLocalStorage('user').id
        console.log(userId)
    $auth.logout( {data:{
      id:userId
    }} ).then(response => {
      console.log(response,'logout')
      $auth.$storage.removeLocalStorage('user')
      console.log('user deleted')
      $auth.$storage.removeCookie('token', false)
       console.log('user Token deleted')
       location.reload()
    })
    }
  })

}
