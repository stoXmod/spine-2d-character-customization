import { useCallback, useEffect, useState } from 'react'
import { Spine } from '@pixi-spine/all-4.1'
import { Assets } from '@pixi/assets'

type SpineLoaderOptions = {
  spineAtlas?: any
  atlasRawData?: any
  spineAtlasFile?: string
  spineAtlasAlias?: string
  imageMetadata?: any
  spineSkeletonScale?: number
}

export type UsePixiSpineOptions = {
    initialPose: string
  spineCustomAtlasUrl?: string
  spineJsonUrl: string
}

export function usePixiSpine(options: UsePixiSpineOptions): {
  spineRig: Spine | undefined
} {
  const [spineRig, setSpineRig] = useState<Spine>()

  useEffect(() => {
    Assets.load({
      src: options.spineJsonUrl,
      data: {
        spineAtlasFile: options.spineCustomAtlasUrl
      } as SpineLoaderOptions
    })
        .then(data => {
          console.log('🎉 Spine Data Loaded!')
          const animation = new Spine(data.spineData)
          setSpineRig(() => animation)
        })
        .catch(ex => {
          console.error(ex)
        })
  }, [])

  return {
    spineRig
  }
}
