import { redirect } from "next/navigation";

export const metadata = {
  title: "Surprise Mfker",
  description: "This is a custom valentines day page i made for my girlfriend",
};

export default function Page() {
  redirect("/greeting"); // Immediately redirects the user
  return null;
}
