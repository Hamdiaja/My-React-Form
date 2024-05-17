import Inputform from "../Elements/Input/Index";
import Button from "../Elements/Button/Index";
const FormLogin = () => {
    return (
        <form action="">
        <Inputform
        label="Email" 
        type="email" 
        placeholder="example@gmail.com" 
        name="email" 
        /> 
        <Inputform 
        label="Password" 
        type="password" 
        placeholder="********" 
        name="password" 
        />
        <Button classname="bg-blue-600 w-full">Login</Button>
      </form>
    )
}

export default FormLogin;