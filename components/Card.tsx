'use client'
import { ReactNode } from "react";

const Card = ({children}:{children: ReactNode}) => {
  const cardStyle = `{
    p-[100px]
    m-2.5
    shadow-lg
    border
    border-slate-300
    flex
    justify-center
    items-center
  }`
  return (
    <div className={cardStyle}>
      {children}
    </div>
  )
}
export default Card;