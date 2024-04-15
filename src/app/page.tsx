"use client";
import Image from "next/image";
import MainPage from "./components/templates/main_page";
import ProfilePage from "./components/templates/profile_page";

export default function Home() {
  return (
    <>
      <MainPage />
      <hr />
      <ProfilePage />
    </>
  );
}
