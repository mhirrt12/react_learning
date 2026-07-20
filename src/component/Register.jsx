import {useForm} from "react-hook-form";

const Register =()=>{

const {
 register,
 handleSubmit,
 formState:{errors}
}=useForm();


const onSubmit=(data)=>{
 console.log(data);
}


return(
<form onSubmit={handleSubmit(onSubmit)}>

<input
 {...register("name")}
/>


<input
 {...register("email",{
 required:"Email is required"
 },)}
/>

<input
 type="password"
 {...register("password",{
   required:"Password required",
   minLength:{
     value:8,
     message:"Password must be 8 characters"
   }
 })}
/>
<button>
Submit
</button>

</form>
)

}

export default Register;