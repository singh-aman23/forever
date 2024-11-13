"use client";

import { useState } from "react";
import styles from './login.module.css';
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!username || !password){
      setError("All fields are necessary");
      return;
    }

    try {
      const res = await signIn("credentials", {
        email : username, password, redirect :false
      });
      if(res.error){
        setError("Unauthorised Access");
        return;
      }
      router.replace("letters");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          className={styles.input}
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className={styles.input}
        />
        {error && <p className = {styles.error}>{error}</p>}
        <button className={styles.button}>Log In</button>
      </form>
    </div>
  );
}
