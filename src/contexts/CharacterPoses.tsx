import { createContext, useContext, useState } from "react";

type CharacterPosesProviderProps = {
    children: React.ReactNode;
}

interface CharacterPoses {
    characterPose: string;
    setCharacterPose: React.Dispatch<React.SetStateAction<string>>;
}

const CharacterPosesContext = createContext({});

export const CharacterPosesProvider = (props: CharacterPosesProviderProps) => {
    const [characterPose, setCharacterPose] = useState('idle');

    return (
        <CharacterPosesContext.Provider
            value={
                {
                    characterPose,
                    setCharacterPose,
                }}
        >
            {props.children}
        </CharacterPosesContext.Provider>
    );
};

export const useCharacterPoses = (): CharacterPoses => {
    return useContext(CharacterPosesContext) as CharacterPoses;
};
