import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Textbox from '../component/Textbox'
import { useSelector } from 'react-redux'

 


const Sigin = () => {
    const {user}=useSelector((state)=>state.auth)
  const {register,
        handleSubmit,
        formState:{errors},} = useForm()
  const navigate =  useNavigate();

  const submithandler=async(data)=>{
   console.log(data)
  }

  useEffect(()=>{
   user && navigate("/dashbord");
  },[user])

  return (
      
   <div className='w-full min-h-screen flex items-center justify-center flex-col lg:flex-row  bg-[#f3f4f6]'>
  <div className=" w-full md:w-auto flex gap-0 md:gap-40 flex-col md:flex-row items-center justify-center">
     
     {/** left side */}
    <div className='h-full w-full lg:w-2/3 flex flex-col items-center justify-center'>
      <div className='w-full md:max-w-lg 2xl:max-w-3xl flex flex-col items-center justify-center
      gap-5 md:gap-y-10 2xl:-mt-20'>
        <span className='flex gap-1 border rounded-full py-1 px-3  text-sm md:text-base
         border-gray-300 text-gray-600 '>manager les Task de tout les employer</span>
         <p className='flex flex-col justify-center gap-0 text-4xl md:text-6xl 2xl:text-7xl font-black text-center text-blue-700'>
          <span>meilleure collaboration</span>
          <span>partager des idées</span>
         </p>
      </div>
      
        
    </div>

      {/** right side */}

    <div className='w-full md:w-1/3 p-4 md:p-1 flex flex-col justify-center items-center'>

      <form onSubmit={handleSubmit(submithandler)} className='form-container w-full md:w-[400px]
       flex flex-col gap-y-8 bg-white px-10 pt-14 pb-14'>
        <div className=''>
          <p className='text-blue-600 text-3xl font-bold text-center'>Bienvenue! </p>
          <p className='text-center text-gray-700 text-base'> commence a créer des Taches</p>
        </div>
        <div className='flex flex-col gap-y-5'>
          <Textbox 
          placeholder="karim@email.com"
          type="email"
          name="email"
          label="Email"
          className="w-full rounded-full"
          register={register("email",{
            required:"l'adresse email et obligatoire!!"
          })}
          error={errors.email? errors.email.message:""}
          >

          </Textbox>

          <Textbox 
          placeholder="Mot de passe"
          type="password"
          name="password"
          label="mot de passe"
          className="w-full rounded-full"
          register={register("password",{
            required:"password obligatoire!!"
          })}
          error={errors.email? errors.email.message:""}
          >

          </Textbox>
         <span className='text-sm hover:text-blue-400 cursor-pointer hover:underline'>Mot de Passe Oublié?</span> 
         <button className='bg-blue-600 rounded-xl p-3 text-white'>CONNEXION</button>
         <div className='flex gap-2 text-sm '>
         <span> Pas encore de compte</span>
         <p className='text-blue-600  cursor-pointer hover:underline'>Sign Up</p>
         </div>
         
        </div>

      </form>
    </div>
  </div>
  </div>
  )
 
}

export default Sigin
