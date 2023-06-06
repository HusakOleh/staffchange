import { Metadata } from "next";

export const generateMetadata  =   ():Metadata => {
  return {
    title: 'Staffchange | About',
  }
}

const Page = () => {
  return (
    <h1>ABOUT</h1>
  )
}

export default Page;

