import {useState} from 'react' // React.useState
import validation from './validation'

 const Form = ({login}) => {

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({})

    const handleChange = (event) => {
        let property = event.target.name
        let value = event.target.value
        console.log(property, value)
        setUserData({...userData, [property]: value})
        validation({...userData, [property]: value}, errors, setErrors) 
        //onBlur onFocus
    }

    const handleSubmit = (event)=> {
        event.preventDefault()
        login(userData)
    }

    return <div>
       
        <form onSubmit={handleSubmit}>
            <label>Email: </label>
            <input type='text' name='email' value= {userData.email} onChange={handleChange}/>
           { errors.email && <p>{errors.email}</p>}
            <label>Password: </label>
            <input type='password' name='password' value= {userData.password} onChange={handleChange}/>
            <p>{errors.password} </p>
            <button > SUBMIT </button>  
        </form>
    </div>
}

export default Form