"use client"

import { ReactNode } from "react"
import { Tilt } from "react-tilt";

export default function TiltDiv({children}: {children: ReactNode}) {
  return (
    <Tilt>
        {children}
    </Tilt>
  )
}
