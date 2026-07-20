import { useForm } from "react-hook-form"

const LoginForm = () => {
    const {
 register,
 handleSubmit,
 formState:{errors}
    } = useForm();
    const onSubmit=(data)=>{
 console.log(data);
}

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input type="email" placeholder="Email" {...register("email",{
 required:"Email is required"
 })} />
              <input type="password" placeholder="Password" {...register("password",{
 required:"Password is required", minLength:{
     value:6,
     message:"Password must be 6 characters"
   }
 })} />
              <button type="submit">Login</button>
            </form>
        </>
    )
}