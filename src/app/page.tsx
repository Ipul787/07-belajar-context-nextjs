"use client";
import Image from "next/image";
import MainPage from "./components/templates/main_page";
import ProfilePage from "./components/templates/profile_page";
import MyApp from "./components/atoms/myapp";

export default function Home() {
  return <MyApp Component={MainPage} pageProps={undefined} />;
}
