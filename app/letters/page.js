"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import PostGrid from "@/components/postgrid";
import { useSession } from "next-auth/react";
import LogoutButton from "@/components/logout";

export default function LetterPage() {
  const { data: session, status } = useSession();
  const [posts, setPosts] = useState([]);

  // Only access username if the session is authenticated
  const username = status === "authenticated" ? session.user?.name : null;

  useEffect(() => {
    async function getPosts() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/getLetters`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({}),
          }
        );
        if (!res.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await res.json();
        setPosts(data.posts);
      } catch (error) {
        console.log("Error loading posts: ", error);
      }
    }

    if (status === "authenticated") {
      getPosts();
    }
  }, [status]);

  if(status == "loading"){
    return <p>Loading...</p>
  }
  return (
    <>
      <LogoutButton />
      <PostGrid posts={posts} />
    </>
  );
}
