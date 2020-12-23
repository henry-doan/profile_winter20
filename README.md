React Context API


Context is designed to share data that can be considered "global" for a 
tree of React components
  - eliminate prop drilling

  - User Authentication
  - Style Themes
  - Language Preferences 
  - Access in a global scale
   - HOC 
   - CRUD from the HOC


Context Api 
  Consumer - Access to the provider 
  Provider - anything you want to have at a global scale







  class App extends React.Component {
    render() {
      return <Toolbar theme="dark" />;
    }
  }
  
  function Toolbar(props) {
    return (
      <div>
        <ThemedButton theme={props.theme} />
      </div>
    );
  }
  
  class ThemedButton extends React.Component {
    render() {
      return <Button theme={this.props.theme} />;
    }
  }



  const ThemeContext = React.createContext('light');

class App extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

class ThemedButton extends React.Component {
  static contextType = ThemeContext;
  render() {
    return <Button theme={this.context} />;
  }
}




  //                                  Index
  //                                    |
  //                                   App
  //                               /             \ 
  //                         Messages             Market 
  //                           / \                      \
  //                   PForm       Posts                 List 
  //                                 \                     \
  //                                  Post                Item 
  //                                   / \                     \ 
  //                             CForm    Comments          Reviews 
  //                                       \                       \
  //                                        Comment              Review













  //                                   Index
  //                                     |
  //                                    App
  //                                     |
  //                                    Auth
  //                               /             \ 
  //                         Messages (user)      Market  (user) 
  //                           / \                      \
  //                   PForm       Posts (user)           List (user) 
  //                                 \                     \
  //                                 Post (user)            Item (user) 
  //                                   / \                     \ 
  //                             CForm    Comments (user)       Reviews (user) 
  //                                       \                       \
  //                                         Comment (user)        Review (user)










//  Context API
//  Provider  store globaly user  Index
// {Consumer}                     |
//                                App
//                               /             \ 
//                         Messages             Market 
//                           / \                      \
//                   PForm       Posts                 List 
//                                 \                     \
//                                 {Post} (user)            Item 
//                                   / \                     \ 
//                             CForm    Comments          Reviews 
//                                       \                       \
//                                         {Comment} (user)        {Review}(user)



user Date, member, username


 Context
  provider 
     user  = { date, member, username }

     updateuser
     adduser 
     deleteuser
 { consumer }
 
                          index 
                         app (routes)
                {navbar} (username)    accountProfile
                               {Form}                {account} (date, member, username)


//  Context API
//  Provider  store globaly        Index
// {Consumer}                     |
//                                App
//                 /              /             \ 
//   (register)  Register         Login (handleLogin)           Navbar (user, logout)
//                           / \                      
//                   PForm       Posts                 
//                                 \                     
//                                 {Post} (user)            
//                                   / \                     
//                             CForm    Comments           
//                                       \                       
//                                         {Comment} (user)      

// Provider
//   user Object
//   handleRegister
//   handleLogin
//   handleLogout
//   isAuthenticated
//   setUser