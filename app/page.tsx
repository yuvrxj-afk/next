import { useState } from "react";

interface User{

}

export default function Home() {
  const [userData,setUserData] = useState<User>({})
  
  return (
    <div className="bg-black h-screen p-10 text-red-600 text-4xl">
      <p>Hey this is a new next project</p>
    </div>
  );
}
