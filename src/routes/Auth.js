import {useState} from "react";
import { authService } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const Auth = ()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);

    const onChange = (event)=>{
        const{
            target: {name, value},
        } = event;
        if(name==="email"){
            setEmail(value);
        }
        else if(name==="password"){
            setPassword(value)
        }
    }
    const onSubmit = async (event)=>{
        event.preventDefault();
        try{
            let data;
            if(newAccount){
                data = await createUserWithEmailAndPassword(authService, email, password);
            }
            else{
                data = await authService.signInWithEmailAndPassword(email, password);
            }
            console.log(data);
        }
        catch(error){
            console.log(error);
        }
    }

    return(
        <div>
            <form onSubmit={onSubmit}>
                <input type="email" name="email" value={email} onChange={onChange} placeholder="Email" requrired />
                <input type="password" name="password" value={password} onChange={onChange} placeholder="Password" required />
                <input type="submit" value={newAccount ? "Create Account" : "Sign in"} />
            </form>
            <div>
                <button>Sign in With Google</button>
            </div>
        </div>
    );
}

export default Auth;