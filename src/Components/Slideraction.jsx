// import React, { useState } from "react";
// import { actions } from "./Data";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// const Slideaction = () => {
//   // State to manage the current scroll position
//   const [scrollPosition, setScrollPosition] = useState(0);

//   const scrollContainer = React.useRef(null);

//   const scroll = (direction) => {
//     if (scrollContainer.current) {
//       const scrollAmount = 200; // Adjust this for scrolling speed
//       const newPosition = direction === "left" ? scrollPosition - scrollAmount : scrollPosition + scrollAmount;
//       setScrollPosition(newPosition);
//       scrollContainer.current.scrollTo({ left: newPosition, behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="bg-white rounded-lg shadow-lg max-w-full sm:max-w-[90%] md:max-w-[80%] lg:max-w-[50%] mx-auto">
//       <h2 className="text-lg font-bold text-gray-800 mb-6 text-center">Quick Actions</h2>
      
//       <div className="relative">
//         {/* Left Arrow */}
//         <button
//           onClick={() => scroll("left")}
//           className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-200 text-gray-600 p-2 rounded-full"
//         >
//           <FaChevronLeft />
//         </button>

//         <div
//           ref={scrollContainer}
//           className="overflow-x-auto flex snap-x snap-mandatory scrollbar-hide"
//           style={{ scrollSnapType: "x mandatory" }}
//         >
//           {actions.map((action, index) => (
//             <div
//               key={index}
//               className="flex flex-col items-center justify-center bg-gray-50 hover:bg-blue-100 rounded-lg p-4 transition-transform transform hover:scale-105 min-w-[140px] snap-center"
//             >
//               {/* Image Box with Icon */}
//               <div className="text-4xl text-blue-500">{action.icon}</div>
//               {/* Text */}
//               <span className="text-sm font-medium text-center mt-2 break-words">{action.label}</span>
//             </div>
//           ))}
//         </div>

//         {/* Right Arrow */}
//         <button
//           onClick={() => scroll("right")}
//           className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-200 text-gray-600 p-2 rounded-full"
//         >
//           <FaChevronRight />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Slideaction;



import React, { useState } from "react";
import { actions } from "./Data";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Slideaction = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainer = React.useRef(null);

  const scroll = (direction) => {
    if (scrollContainer.current) {
      const scrollAmount = 300; // Adjust scroll step
      const newPosition = direction === "left" ? scrollPosition - scrollAmount : scrollPosition + scrollAmount;
      setScrollPosition(newPosition);
      scrollContainer.current.scrollTo({ left: newPosition, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg w-full max-w-[800px] mx-auto p-4">
      <h2 className="text-lg font-bold text-gray-800 mb-4 text-center">Quick Actions</h2>

      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-200 text-gray-600 p-2 rounded-full shadow-md"
        >
          <FaChevronLeft />
        </button>

        <div
          ref={scrollContainer}
          className="flex overflow-x-auto gap-10 snap-x snap-mandatory scrollbar-hide p-4"
        >
          {actions.map((action, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-gray-50 hover:bg-blue-100 rounded-lg py-5 px-3 min-w-[100px] snap-center transition-transform transform hover:scale-105"
            >
              {/* Icon */}
              <div className="text-4xl text-blue-500">{action.icon}</div>
              {/* Label */}
              <span className="text-sm font-medium text-center mt-2 text-wrap">{action.label}</span>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-200 text-gray-600 p-2 rounded-full shadow-md"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Slideaction;
