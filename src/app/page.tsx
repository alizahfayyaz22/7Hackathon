

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//               src/app/page.tsx
//             </code>
//             .
//           </li>
//           <li>Save and see your changes instantly.</li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }import React from "react";



// const Home = () => {
//   return (
//     <div className="min-h-screen bg-gray-100">
//       <div className="container mx-auto py-6 flex">
//         {/* Sidebar */}
//         <div className="w-1/4 pr-4">
//           <SidebarFilter />
//         </div>

       
//         <div className="w-3/4">
         
//           <SearchBar />

         
//           <div className="grid grid-cols-3 gap-6 mt-6">
           
//              <CarCard name="Koenigsegg" type="Sport" price="99.00" fuel="70" transmission="Manual" capacity="2" image="" />
//   <CarCard name="Nissan GT-R" type="Sport" price="80.00" fuel="60" transmission="Manual" capacity="2" />
//   <CarCard name="Rolls-Royce" type="Sport" price="96.00" fuel="80" transmission="Manual" capacity="2" />
//   <CarCard name="All New Rush" type="SUV" price="72.00" fuel="70" transmission="Manual" capacity="4" />
//   <CarCard name="CR-V" type="SUV" price="80.00" fuel="80" transmission="Manual" capacity="4" />
//   <CarCard name="All New Terios" type="SUV" price="74.00" fuel="70" transmission="Manual" capacity="4" />
//   <CarCard name="MG ZX Exclusive" type="Hatchback" price="76.00" fuel="70" transmission="Electric" capacity="4" />
//   <CarCard name="New MGZS" type="Hatchback" price="80.00" fuel="80" transmission="Manual" capacity="4" />
//   <CarCard name="MG ZX Excite" type="Hatchback" price="74.00" fuel="90" transmission="Electric" capacity="4" />
//           </div>

//           {/* Show More Button */}
//           <div className="text-center mt-8">
//             <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
//               Show more car
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
"use client"
import React from "react";
import SidebarFilter from "./components/SidebarFilter";
import SearchBar from "./components/SearchBar";
import CarCard from "./components/CarCard";

const CarRental = () => {
  const cars = [
    {
      name: "Koenigsegg",
      type: "Sport",
      price: "99.00",
      fuel: "50",
      transmission: "Manual",
      capacity: "2",
      image: "/image.png", // Unique image
    },
    {
      name: "Nissan GT-R",
      type: "Sport",
      price: "80.00",
      fuel: "40",
      transmission: "Manual",
      capacity: "2",
      image: "/Nissan.png", // Unique image
    },
    {
      name: "Rolls-Royce",
      type: "Luxury",
      price: "96.00",
      fuel: "60",
      transmission: "Automatic",
      capacity: "4",
      image: "Rolls.png", // Unique image
    },
    {
      name: "All New Rush",
      type: "SUV",
      price: "72.00",
      fuel: "70",
      transmission: "Manual",
      capacity: "4",
      image: "/rush.png", // Unique image
    },
    {
      name: "CR-V",
      type: "SUV",
      price: "80.00",
      fuel: "80",
      transmission: "Manual",
      capacity: "4",
      image: "/crv.png", // Unique image
    },
    {
      name: "All New Terios",
      type: "SUV",
      price: "74.00",
      fuel: "90",
      transmission: "Manual",
      capacity: "4",
      image: "/terious2.png", // Unique image
    },
    {
      name: "MG ZX Exclusice",
      type: "SUV",
      price: "74.00",
      fuel: "90",
      transmission: "Manual",
      capacity: "4",
      image: "/MG ZX Exclusice.png", // Unique image
    },
    {
      name: "New MG ZS",
      type: "SUV",
      price: "74.00",
      fuel: "90",
      transmission: "Manual",
      capacity: "4",
      image: "/New MG ZS.png", // Unique image
    },
    {
      name: "MG ZX Excite",
      type: "SUV",
      price: "74.00",
      fuel: "90",
      transmission: "Manual",
      capacity: "4",
      image: "/MG ZX Excite.png", // Unique image
      
    }
  ]

    return (
      <div className="min-h-screen bg-gray-100">
        {/* Search Bar */}
        <SearchBar />
  
        <div className="flex mt-6 space-x-4 px-6">
          {/* Sidebar */}
          <div className="w-1/4">
            <SidebarFilter />
          </div>
  
          {/* Car Cards Grid */}
          <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars.map((car, index) => (
              <CarCard key={index} {...car} />
            ))}
          </div>
        </div>
      </div>
    );
  };



export default CarRental
