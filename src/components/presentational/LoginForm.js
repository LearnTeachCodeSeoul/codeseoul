import React from 'react';

const LoginForm = (props) => {
    return(
        <div>
            <div>
                Authenticated User :{' '}
                {isAuthenticated
                    ? user.username
                    : 'not authenticated'}
            </div>
            <form>
                <input 
                    type='text' 
                    onChange={e=>handleInputChange(e, 'id')} 
                    placeholder='username'/>
                <input 
                    type='password' 
                    onChange={e=>handleInputChange(e, 'pw')} 
                    placeholder='password'/>
            </form>
            <div>{formInput.id}</div>
            <div>{formInput.pw}</div>
            <button onClick={(e)=>register()}>Register</button>
            <button onClick={(e)=>login()}>Login</button>
            <button onClick={(e)=>logout()}>Logout</button>
            <button onClick={(e)=>checkAuth()}>CheckAuth</button>
        </div>
    )
}

export default LoginForm;