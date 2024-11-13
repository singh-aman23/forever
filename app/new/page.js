'use client';

import LogoutButton from '@/components/logout';
import { useRouter } from 'next/navigation';

export default function New(){
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        try {
              const postDetails = {
                date: formData.get("date"),
                greetings: formData.get("greetings"),
                content: formData.get("content"),
              };

              const postResponse = await fetch ( `${process.env.NEXT_PUBLIC_API_URL}/api/newLetter`, {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json",
                },
                body : JSON.stringify(postDetails)
              });

              const postResult = await postResponse.json();
              if (postResponse.ok) {
                console.log("Post created successfully: ", postResult);
                router.push("/letters");
              } else {
                console.error("Post creation failed", postResult.error);
              }


        } catch (error) {
            console.error("error" , error);
        }
    }

    return <>
        <form onSubmit = {handleSubmit}>
        <div>
          <input
            type="text"
            id="date"
            name = "date"
            required
            placeholder = "date"
          />
        </div>
        <div >
          <input
            type="text"
            id="greetings"
            placeholder = "greetings"
            name = "greetings"
            required
          />
        </div>
        <div >
          <textarea
            id="content"
            required
            name = "content"
            placeholder = "content"
            style={{ minHeight: "150px" }}
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      <LogoutButton/>
    </>
}