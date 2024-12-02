import React from "react";

import Transaction from "../../Components/Transaction";
import Slideaction from "../../Components/Slideraction";
import MyOrder from "../../Components/MyOrder";

const Contents = () => {
  return (
    <div className="mt-[110px] px-4">
      
      <div className="flex flex-col md:flex-row justify-between gap-6">
        
        <div className="md:w-[55%] w-[100%] flex flex-col gap-6">
          <Slideaction />
          <Transaction />
        </div>

        
        <div className="md:w-[50%] md:self-start">
          <MyOrder />
        </div>
      </div>
    </div>
  );
};

export default Contents;