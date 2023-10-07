import { Dispatch, SetStateAction } from 'react'

export interface HomeSceneProps {
  videoSelected: string
  setVideoProgress: Dispatch<SetStateAction<number>>
}
