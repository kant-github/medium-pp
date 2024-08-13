import { InputBox } from "./InputBox"
import { Button } from "./Button"
import { Link } from "react-router-dom"
import { useState } from "react"
import { SignInInput } from "@kant-npm/medium-common"



export const SignInForm = () => {

    const[ authDetails, setAuthDetails ] = useState<SignInInput>({
        username: "",
        password: ""
    })

    

    function usernameHandler(e: React.ChangeEvent<HTMLInputElement>){
        setAuthDetails((prev) =>  ({
            ...prev,
           username: e.target.value
        }))
    }

    function passwordHandler (e: React.ChangeEvent<HTMLInputElement>) {
        setAuthDetails(prev => ({
            ...prev,
            password: e.target.value
        }))

    }
    async function submitHandler() {
        console.log(authDetails)
    }

    return (
        <div className="flex flex-col justify-center w-1/2 items-center ">
            <div className="container flex flex-col gap-5">

                <div className="text-4xl font-extrabold ml-1"> Sign In</div>
            
                <InputBox label={"Username"} placeHolder={"Enter your username"} onChange={usernameHandler}/>

                <InputBox label={"Password"} placeHolder={"Enter your Password"} type={"password"} onChange={passwordHandler}/>
            
                <Button label={"Sign Up"} onClick={submitHandler}/>
        </div>
    </div>
    )
}