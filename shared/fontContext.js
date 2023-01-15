import React, { createContext, useState } from "react";

export const FontContext = createContext();

export default function FontProvider ({ children }) {
  const [fonts, setFonts] = useState([]);
  return (
    <FontContext.Provider value={{ fonts, setFonts }}>
      {children}
    </FontContext.Provider>
  );
};