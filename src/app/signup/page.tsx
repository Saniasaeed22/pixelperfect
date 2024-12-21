import { FcGoogle } from "react-icons/fc";


export default function Signup(){
    return(
        <section id="contact" className="container bg-black text-white font-medium max-auto  max-w-screen-2xl p-24 ">
            <div className="">
                <h1 className="text-3xl font-bold text-center">Sign-Up</h1>
              <form className=" flex justify-center">
                <div className="">
                    <div className="">


                        <div className="my-7">
                        <input type="text" placeholder="Username" className="w-full border p-4
                         border-yellow-400 px-7 py-3 rounded-md focus:outline-none
                          hover:bg-yellow-200 focus:ring-2 inputStyle required:"/>
                          </div>

                         <div className="my-7">
                        <input type="text" placeholder="Email addresse" className="w-full border
                         border-yellow-400 px-4 py-3 rounded-md focus:outline-none
                          hover:bg-yellow-200 focus:ring-2 inputStyle required:"/>
                          </div>

                         <div className="my-7">
                        <input type="text" placeholder="Password" className="w-full border
                         border-yellow-400 px-4 py-3 rounded-md focus:outline-none
                          hover:bg-yellow-200 focus:3ring-2 inputStyle required:"/>
                          </div>

                         <div className="my-7">
                        <input type="text" placeholder="Repeat Password" className="w-full border
                         border-yellow-400 px-4 py-3 rounded-md focus:outline-none
                          hover:bg-yellow-200 focus:ring-2 inputStyle required:"/>
                          </div>

                    </div>

                    <div className="flex justify-center">
                        <button type="submit"className="bg-yellow-400 rounded-md py-2 px-7 hover:bg-yellow-200 
                        hover:text-black">Sign-Up</button>
                    </div>
                    <h1 className="text-center p-4">or with</h1>
                    <button 
                        className="w-full sm:w-auto border bg-white text-black mb-4 text-center 
                        border-yellow-400 rounded-md focus:outline-none hover:bg-yellow-200 
                         focus:ring-2 focus:ring-yellow-400 flex items-center justify-center 
                        p-3 sm:p-4 text-sm sm:text-base">
                         <FcGoogle className="mr-3 text-2xl sm:text-3xl" />
                         Sign-Up with Google</button>

                    

                </div>
              </form>
            </div>
         </section>


    )
}