import Content from "@/components/content";
import LogoutButton from "@/components/logout";

async function getLetterById(id) {
  try {
    const letterSearch = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/letterDetail`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      }
    );

    if (!letterSearch.ok) {
      throw new Error("Failed to fetch letter");
    }

    const { letter } = await letterSearch.json();
    return letter;
  } catch (error) {
    console.log("Error while fetching letter: ", error);
    return null;
  }
}

export default async function LetterContent({ params }) {
  const { slug } = await params;
  const letter = await getLetterById(slug);
  return (
    <>
    <LogoutButton/>
      <Content letter={letter} />
    </>
  );
}
