import { Stage } from 'react-pixi-fiber';
import {PixiCharacterView} from "@/components/PixiCharacterView";
import {useState} from "react";
import {useCharacterPoses} from "@/contexts/CharacterPoses";
import {useCharacterCustomization} from "@/contexts/CharacterCustomizationContext";
export default function Home() {
        const [openSection, setOpenSection] = useState<string | null>(null);
    const handleClick = (section: string) => {
        setOpenSection(openSection === section ? null : section);
    };

    const { characterPose, setCharacterPose } =
        useCharacterPoses();

    const { characterTop, setCharacterTop } =
        useCharacterCustomization();

    return (
        <>
            <div className="flex justify-between" style={{width: '100vw', height: '100vh', overflow: 'hidden'}}>
                <div style={{width: '40%', height: '100vh', overflow: 'hidden',  background: 'linear-gradient(45deg, #282c34, #3c3b3f, #0d47a1)'}} className={'flex items-center content-center'}>
                    <div style={{width: '100%'}} className={'p-5'}>
                        <div style={{height: '100px'}}></div>
                        <div className="max-w-md py-5 mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4">
                            <div className="w-full max-w-md mx-auto">
                                {["SHIRT", "POSES"].map((section) => (
                                    <div key={section} className={`border-b border-gray-200`}>
                                        <button
                                            className={`w-full py-3 px-2 text-left font-bold text-gray-700 hover:bg-gray-100 rounded focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out ${openSection === section ? 'bg-gray-300' : ''}`}
                                            onClick={() => handleClick(section)}
                                        >
                                            {section.charAt(0).toUpperCase() + section.slice(1).toLowerCase()}
                                        </button>
                                        {openSection === section && (
                                            <div>
                                                {section === 'POSES' && (
                                                <div>
                                                    <button
                                                        onClick={()=> setCharacterPose('idle') }
                                                        className="mr-2 my-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full">
                                                        Idle
                                                    </button>
                                                    <button
                                                        onClick={()=> setCharacterPose('thumbs-up') }
                                                        className="mr-2 my-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full">
                                                        Thumbs Up
                                                    </button>
                                                </div>
                                            )}
                                                {section === 'SHIRT' && (
                                                <div>
                                                    <button
                                                        onClick={()=> setCharacterTop('top-1') }
                                                        className="mr-2 my-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full">
                                                        White T
                                                    </button>
                                                    <button
                                                        onClick={()=> setCharacterTop('top-2') }
                                                        className="mr-2 my-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full">
                                                        Black T
                                                    </button>
                                                </div>
                                            )}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                        </div>

                    </div>
                </div>
                <div style={{width: '60%'}} className={'flex items-center justify-center'}>
                    <Stage options={{backgroundColor: 0xffffff}}>
                         <PixiCharacterView characterPose={characterPose}  characterTop={characterTop} />
                    </Stage>
                </div>
            </div>
        </>
    );
}
