import { NextPageContext } from "next";
import Navbar from "@/components/Navbar";

import { getSession, signOut } from "next-auth/react";
import useCurrentUser from "@/hooks/useCurrentUser";


// export async function getServerSideProps(context: NextPageContext) {
//   const session = await getSession(context);

//   if(!session) {
//     return {
//       redirect: {
//         // destination: '',
//         permanent: false,
//       }
//     }
//   }
//   return {
//     props: {}
//   }
// } 

export default function Home() {
  const { data: user } = useCurrentUser();
  return (
    <>
      <Navbar />
    </>
  )
}
