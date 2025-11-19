
// const UnderstandingDiabetes = () => {
//   return (
//     <section className="w-full py-16 bg-whi">
//       <div className="absolute w-[1150px] h-[490px] rounded-[20px] bg-white opacity-100 top-[770px] left-[169px]
//       gap-[52px] p-6 flex">
        
//         {/* Header Section */}
//         <div >
//         <div className="text-cen mb-12">
//           <h1 className="text-4xl font-bold text-gray-900 mb-4">
//             Understanding Diabetes
//           </h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-au">
//             Diabetes is a chronic condition that affects how your  body coverts food into energy. With the right
//             tools and knowledge, you can take charge of your health and live a full life.
//           </p>
//         </div>

//         {/* Features Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
//           {/* Types Card */}
//           <div className="bg-blue-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
//             <div className="mb-6 flex justify-center">
//               {/* Replace with your types icon */}
//               <div className="w-16 h-16  grid grid-cols-2 items-cente justify-center">
//                 <img 
//                   src="/icons/types-icon.png" 
//                   alt="Diabetes Types" 
//                   className="w-8 h-8"
//                 />
//                 <h3 className="text-2xl font-semibold text-gray-900 mb-4">Types</h3>
//                 <p className="text-gray-600 mb-4">
//                     Learn about type 1, type 2 and Gestational
//                 </p>
//               </div>
//             </div>
            
//           </div>

//           {/* Symptoms Card */}
//           <div className="bg-green-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
//             <div className="mb-6 flex justify-center">
//               {/* Replace with your symptoms icon */}
//               <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
//                 <img 
//                   src="/icons/symptoms-icon.png" 
//                   alt="Diabetes Symptoms" 
//                   className="w-8 h-8"
//                 />
//               </div>
//             </div>
//             <h3 className="text-2xl font-semibold text-gray-900 mb-4">Symptoms</h3>
//             <p className="text-gray-600 mb-4">
//               Early signs and how to detect
//             </p>
//           </div>

//           {/* Prevention Card */}
//           <div className="bg-orange-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
//             <div className="mb-6 flex justify-center">
//               {/* Replace with your prevention icon */}
//               <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
//                 <img 
//                   src="/icons/prevention-icon.png" 
//                   alt="Diabetes Prevention" 
//                   className="w-8 h-8"
//                 />
//               </div>
//             </div>
//             <h3 className="text-2xl font-semibold text-gray-900 mb-4">Prevention</h3>
//             <p className="text-gray-600 mb-4">
//               Protect your health now
//             </p>
//           </div>
//         </div>

//         {/* CTA Section */}
          
//         </div>
//         <aside className="w-[384px] h-[379px] rounded-[20px] border-[3px] border-blue-500 bg-white opacity-100 shadow-lg"><img src="./landing images/Understanding.jpg" alt="understanding image" /></aside>
//       </div>
//       <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg">
//             Get Started Now
//           </button>

//     </section>
//   );
// };

// export default UnderstandingDiabetes;


export const UnderstandingSection = () => {
return (
<section className="w-full bg-[#E6F2FF]">
<div className="absolute w-[1150px] h-[490px] rounded-[20px] opacity-100 top-[770px] left-[169px]
      gap-[52px] p-6 flex">
{/* LEFT TEXT CONTENT */}
<div>
<h2 className="text-4xl font-extrabold text-black mb-4">
Understanding Diabetes
</h2>


<p className="text-gray-700 leading-relaxed mb-6 text-lg">
Diabetes is a chronic condition that affects how your body converts food
into energy. With the right tools and knowledge, you can take charge of
your health and live a full life.
</p>


{/* THREE FEATURE CARDS */}
<div className="grid sm:grid-cols-3 gap-4 mb-6">
{/* Types */}
<div className="bg-white border border-blue-400 rounded-xl p-5 text-center shadow-sm">
<div className="text-3xl mb-2">
    <img src="./" alt="sdfg" />
    <h3 className="font-semibold text-xl mb-2">Types</h3>
</div>

<p className="text-gray-600 text-sm">
Learn about type 1, type 2, and gestational
</p>
</div>


{/* Symptoms */}
<div className="bg-white border border-blue-400 rounded-xl p-5 text-center shadow-sm">
<div className="text-3xl mb-2">💊</div>
<h3 className="font-semibold text-xl mb-2">Symptoms</h3>
<p className="text-gray-600 text-sm">
Early signs and how to detect
</p>
</div>


{/* Prevention */}
<div className="bg-white border border-blue-400 rounded-xl p-5 text-center shadow-sm">
<div className="text-3xl mb-2">🩺</div>
<h3 className="font-semibold text-xl mb-2">Prevent</h3>
<p className="text-gray-600 text-sm">
Relate your health now
</p>
</div>
</div>


{/* BUTTON */}
<button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-blue-700 transition">
Start Tracking
</button>
</div>


{/* RIGHT IMAGE */}
<div>
<img
src="./landing images/Understanding.jpg"
alt="Checking blood sugar"
className="w-full h-auto rounded-xl object-cover"
/>
</div>
</div>
</section>
);
};
export default UnderstandingSection