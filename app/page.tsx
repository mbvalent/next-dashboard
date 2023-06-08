import LoginForm from "./components/LoginForm";

export default function Home() {
  return (
    <div className="flex h-screen">
      <div className="w-[40%] flex justify-center items-center bg-[#000000]">
         <h1 className='text-7xl text-white font-bold'>Board.</h1>
      </div>

      <div className="w-[60%] bg-[#F5F5F5] flex justify-center items-center">
        <LoginForm />  
      </div>
    </div>
  )
}
