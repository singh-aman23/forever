'use client';
import { signOut } from 'next-auth/react';

import classes from './logout.module.css';
export default function LogoutButton(){
    return <button onClick = {() => signOut} className = {classes.button}>LOGOUT</button>
}
