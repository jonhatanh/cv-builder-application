import { useState } from "react";



function Forms({ children }) {
  
  return <div className="min-w-[400px] md:min-w-60 flex flex-col gap-4">{children}</div>;
}

export default Forms;
