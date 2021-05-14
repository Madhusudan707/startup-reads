
export const useAPI = ()=>{
    const localDomain = "http://localhost:"
    const port = "3002"
    const local= `${localDomain}${port}/`
    const remote="https://startup-reads-backend.maddydev.repl.co/"
   
    const api = {
    URL:remote,
    books:{
        "GET":"books/",
        "POST":"books/"
    },
    users:
        {
        "GET":"users/",
        "GETBYID":"users/id/",
        "GETBYAUTHID":"users/authid/",
        "POST":"users/"
        },
    usersActivity:{
        "GET":"userActivity/",
        "GETUSERBYID":"user/",
        "GETCARTITEMS":"cart/",
        "POSTWISH":"userActivity/wish",
        "POST":"userActivity/"
    },
    address:{
        "GET":"address/",
        "GETBYID":"address/user/",
        "GETBYLABEL":"address/user-id/label/",
        "POST":"address/"
    }
    
    }
   return {api}

}