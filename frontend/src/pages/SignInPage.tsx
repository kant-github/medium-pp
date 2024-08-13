import { SignUpForm } from "../components/SignUpForm";
import { Quote } from "../components/Quote";
import { SignInForm } from "../components/SignInForm";

export const SignInPage = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2  h-screen w-screen">

            <div className=' h-screen bg-customMid flex flex-col justify-center  items-center pr-7'>
                <SignInForm/>
            </div>
          
            <div className=' h-full flex justify-center items-center bg-customDark invisible lg:visible'>
                <Quote/>
            </div>


            
        </div>
      );
}