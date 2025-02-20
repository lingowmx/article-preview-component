import { useState } from "react"
import avatar from "../../images/avatar-michelle.jpg"
import iconButton from "../../images/icon-share.svg"
import { Share } from "./Share"


export const AuthorInfo = () => {
  //Create the state 
  const [isSharedOpen, setIsSharedOpen] = useState(false)
  return (
    <div className="flex justify-between">
      <img src={avatar} alt="avatar-Michelle" className="rounded-full w-12 h-12" />
      <div className="flex flex-col mr-6">
        <h2 className="font-semibold text-veryDarkGrayishBlue">Michelle Appleton</h2>
        <p className="text-grayishBlue">28 Jun 2020</p>
      </div>
      <button className="w-10 h-10 bg-nightGrayishBlue flex justify-center 
          items-center rounded-full cursor-pointer"
        onClick={() => setIsSharedOpen(!isSharedOpen)}
      >
        <img src={iconButton} alt="share-icon" className="w-5 h-5" />
      </button>
      {isSharedOpen && (
        <div className="absolute left-7">
          <Share onClose={() => setIsSharedOpen(!isSharedOpen)}/>
        </div>
      )}
    </div>
  )
}
