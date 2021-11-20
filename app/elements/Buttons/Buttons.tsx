import React from 'react'

const Buttons = () => {
    return (
        <div>
            
        </div>
    )
}

export default Buttons

// import React, {useState} from 'react'
// import styles from './Buttons.module.scss'
// import { useRouter } from 'next/router'

// import { GoogleLogin, GoogleLogout } from 'react-google-login';

// const clientId = "329812880258-pgurkaghm754c5egsaq83nhbjthiitn2.apps.googleusercontent.com";

// const LogInButton = () => {
//     const [showLoginButton, setShowLoginButton] = useState(true);
//     const [showLogoutButton, setShowLogoutButton] = useState(false);
//     const router = useRouter()
//     const onLoginSuccess = (res:any)=>{
//         console.log('Login Success: ', res.profileObj)
//         setShowLoginButton(false)
//         setShowLogoutButton(true)
//         router.push('/dashboard')
//     }
//     const onLoginFailure = (res:any)=>{
//         console.log('Login Failure:', res)
//     }
//     const onSignoutSuccess =()=>{
//         alert('Signout Success');
//         console.clear();
//         setShowLogoutButton(false)
//         setShowLoginButton(true)
//         router.push('/')
//     }
//     return (
//         <div className={styles.loginButton}>
//        { showLoginButton ?
//                 <GoogleLogin
//                     style={{ marginRight: '50px' }}
//                     clientId={clientId}
//                     buttonText="Sign In With Google"
//                     onSuccess={onLoginSuccess}
//                     onFailure={onLoginFailure}
//                     cookiePolicy={'single_host_origin'}
                    
//                     isSignedIn={true}
//                 /> : null}

//             { showLogoutButton ?
//                 <GoogleLogout
//                     clientId={clientId}
//                     buttonText="Sign Out"
//                     onLogoutSuccess={onSignoutSuccess}
//                 >
//                 </GoogleLogout> : null
//             }
//         </div>
//     )
// }

// export default LogInButton