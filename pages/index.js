import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NewProducts from "@/components/NewProducts";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { getSession, useSession, signOut } from 'next-auth/react';
import Link from "next/link";
import { useState } from "react";

export default function HomePage({featuredProduct, newProducts}){
  // const {data:session} = useSession();
  
  // function handleSignout(){
  //   signOut();
  // }

  return(
    <div>
      <Header />
      <Featured product={featuredProduct}/>
      <NewProducts products={newProducts}/>
      <Footer />
    </div>
  );
}


// //Guest-no need to login
// function Guest(){
//   return(
//     <main className="container mx-auto text-center py-20">
//         <h3 className='text-4xl font-bold'>Guest Home Page</h3>

//         <div className='flex justify-center'>
//           <Link legacyBehavior href={'/login'}><a className='mt-5 px-10 py-1 rounded-sm bg-indigo-500'>Sign In</a></Link>
//         </div>
//       </main>
//   )
// }

// //Authorized User-need to login and edit their profile
// function User({session, handleSignout }){
//   return(
//     <main className="container mx-auto text-center py-20">
//         <h3 className='text-4xl font-bold'>Authorized User Home Page</h3>

//         <div className='details'>
//           <h5>{session?.user?.name}</h5>
//           <h5>{session?.user?.email}</h5>
//         </div>

//         <div className='flex justify-center'>
//           <button onClick={handleSignout} className='mt-5 px-10 py-1 rounded-sm bg-indigo-500 bg-gray-50'>Sign Out</button>
//         </div>

//         <div className='flex justify-center'>
//           <Link legacyBehavior href={'/profile'}><a className='mt-5 px-10 py-1 rounded-sm bg-indigo-500'>Profile page</a></Link>
//         </div>
//   </main>
//  )
// }

export async function getServerSideProps({req}){

//   const session = await getSession({req});

//   if(!session){
//     return{
//       redirect:{
//         destination:'/login',
//         permanent:false
//       }
//     }
//   }

//   return {
//     props:{session}
//   }

  const featuredProductId = '6460f636ff14338fcb262168';
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  const newProducts = await Product.find({}, null, {sort: {'_id':-1}, limit:10});
  return {
    props: {featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
    newProducts: JSON.parse(JSON.stringify(newProducts)),
    },
  };
}