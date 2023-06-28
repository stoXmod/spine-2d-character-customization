import { createContext, useContext, useState } from "react";

interface CharacterCustomization {
    characterTop: string;
    setCharacterTop: React.Dispatch<React.SetStateAction<string>>;
}


const CharacterCustomizationContext = createContext({});

type CharacterCustomizationProviderProps = {
    children: React.ReactNode;
}

export const CharacterCustomizationProvider = ({ children }: CharacterCustomizationProviderProps) => {
    const [characterTop, setCharacterTop] = useState('top-1');

  return (
    <CharacterCustomizationContext.Provider
      value={
        {
            characterTop,
            setCharacterTop,
      }}
    >
      {children}
    </CharacterCustomizationContext.Provider>
  );
};

export const useCharacterCustomization = ():CharacterCustomization => {
  return useContext(CharacterCustomizationContext) as CharacterCustomization;
};
