

// const SidebarFilter = () => {
//     return (
//       <div className="bg-white p-4 rounded-md shadow-md">
   
//         <h2 className="font-semibold text-lg mb-4">Type</h2>
//         <ul className="space-y-2">
//           {["Sport (10)", "SUV (12)", "MPV (16)", "Sedan (20)", "Coupe (14)", "Hatchback (14)"].map(
//             (type) => (
//               <li key={type} className="flex items-center">
//                 <input type="checkbox" id={type} className="mr-2" />
//                 <label htmlFor={type} className="text-gray-700">{type}</label>
//               </li>
//             )
//           )}
//         </ul>
  
  
//         <h2 className="font-semibold text-lg mt-6 mb-4">Capacity</h2>
//         <ul className="space-y-2">
//           {["2 Person (10)", "4 Person (14)", "6 Person (12)", "8 or More (16)"].map((capacity) => (
//             <li key={capacity} className="flex items-center">
//               <input type="checkbox" id={capacity} className="mr-2" />
//               <label htmlFor={capacity} className="text-gray-700">{capacity}</label>
//             </li>
//           ))}
//         </ul>
  
     
//         <h2 className="font-semibold text-lg mt-6 mb-4">Price</h2>
//         <input type="range" className="w-full" />
//         <p className="mt-2 text-gray-600">Max: $100.00</p>
//       </div>
//     );
//   };
  
//   export default SidebarFilter;
import React from "react";

const SidebarFilter = () => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      {/* Type Section */}
      <h2 className="font-semibold text-lg mb-4">Type</h2>
      <ul className="space-y-2">
        {["Sport (10)", "SUV (12)", "MPV (16)", "Sedan (20)", "Coupe (14)", "Hatchback (14)"].map(
          (type) => (
            <li key={type} className="flex items-center">
              <input type="checkbox" id={type} className="mr-2" />
              <label htmlFor={type} className="text-gray-700">{type}</label>
            </li>
          )
        )}
      </ul>

      {/* Capacity Section */}
      <h2 className="font-semibold text-lg mt-6 mb-4">Capacity</h2>
      <ul className="space-y-2">
        {["2 Person (10)", "4 Person (14)", "6 Person (12)", "8 or More (16)"].map((capacity) => (
          <li key={capacity} className="flex items-center">
            <input type="checkbox" id={capacity} className="mr-2" />
            <label htmlFor={capacity} className="text-gray-700">{capacity}</label>
          </li>
        ))}
      </ul>

      {/* Price Range */}
      <h2 className="font-semibold text-lg mt-6 mb-4">Price</h2>
      <input type="range" className="w-full" />
      <p className="mt-2 text-gray-600">Max: $100.00</p>
    </div>
  );
};

export default SidebarFilter;
