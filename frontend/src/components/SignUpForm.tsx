import "./SignUpForm.css"
import { InputBox } from "./InputBox"
import React, { useState } from "react"
import { Button } from "./Button";
import {  SignUpInput } from "@kant-npm/medium-common";
import { Link } from "react-router-dom";
import axios from "axios"

const SignUpForm = () => {

    const [ authDetails, setAuthDetails ] = useState<SignUpInput>({
        name: "",
        username: "",
        password: ""
    })

    function nameHandler(e: React.ChangeEvent<HTMLInputElement>){
        setAuthDetails((prev) =>  ({
            ...prev,
            name: e.target.value
        }))
    }

    function usernameHandler(e: React.ChangeEvent<HTMLInputElement>){
        setAuthDetails((prev) =>  ({
            ...prev,
           username: e.target.value
        }))
    }

    function passwordHandler(e: React.ChangeEvent<HTMLInputElement>){
        setAuthDetails((prev) =>  ({
            ...prev,
           password: e.target.value
        }))
    }

    function submitHandler() {

        console.log(authDetails);
    }
   

  return (
    <div className="flex flex-col justify-center w-1/2 items-center ">
        <div className="container flex flex-col gap-5">
            

            <div className="text-4xl font-extrabold ml-1"> Sign Up </div>
            
            <InputBox label={"Full Name"}  placeHolder={"Enter your full name"} onChange={nameHandler}/>
            
            <InputBox label={"Username"} placeHolder={"Choose a username"} onChange={usernameHandler}/>

            <InputBox label={"Password"} placeHolder={"Password"} type={"password"} onChange={passwordHandler}/>
            
            <Button label={"Sign Up"} onClick={submitHandler}/>
                <p className='text-md mt-1'>Already have an account?
                    <Link className="hover:underline" to={"./signin"}>Sign In</Link>
                </p>
        </div>
    </div>
  )
}

export {SignUpForm}