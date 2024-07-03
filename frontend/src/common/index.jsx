const backendDomain = "http://localhost:8080"
const summaryApi = {
  signUp: {
    url: `${backendDomain}/api/signup`,
    method: "post"
  },
  signIn: {
    url: `${backendDomain}/api/signin`,
    method: "post"
  },
  current_user: {
    url: `${backendDomain}/api/user-details`,
    method: "get"
  },
  logOutUser: {
    url: `${backendDomain}/api/logout`,
    method: "get"
  }
}


export default summaryApi