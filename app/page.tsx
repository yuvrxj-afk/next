import axios from "axios";
import { useState } from "react";

interface User {
  name: string;
  email: string;
}

async function fetchFn() {
  const response = await axios.get(
    "https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details"
  );
  return response.data;
}

// async component
export default async function Home() {
  const userData = await fetchFn();

  return (
    <div className="bg-black h-screen p-10 text-red-600 text-4xl">
      <p>{userData.email}</p>
      <p>{userData.name}</p>
    </div>
  );
}
