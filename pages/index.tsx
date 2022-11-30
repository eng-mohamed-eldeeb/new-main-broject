import { useRouter } from "next/router"
import { useEffect } from "react"

export default function Home() {
  const rout = useRouter()
  let isLoggedIn;
  useEffect(()=>{
    isLoggedIn = localStorage.getItem('isLoggedIn')
    !isLoggedIn && rout.push('./signup')
  },[])
  return (
    <div className="bg-green-500">
      hi there
      {/* {!isLoggedIn && <>s</>} */}
    </div>
  )
}
