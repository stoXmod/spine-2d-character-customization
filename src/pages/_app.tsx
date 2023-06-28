import type { AppProps } from 'next/app'
import '../styles/globals.css'
import {CharacterPosesProvider} from "@/contexts/CharacterPoses";
import {CharacterCustomizationProvider} from "@/contexts/CharacterCustomizationContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <CharacterPosesProvider>
        <CharacterCustomizationProvider>
          <Component {...pageProps} />
        </CharacterCustomizationProvider>
      </CharacterPosesProvider>
  )
}
