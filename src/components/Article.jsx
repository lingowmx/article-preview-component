import avatar from "../../images/avatar-michelle.jpg"
import iconButton from "../../images/icon-share.svg"
export const Article = () => {
  return (
    <div className="bg-white p-6 w-80 h-auto rounded-b-xl" >
      <h1 className="font-semibold text-veryDarkGrayishBlue text-base mb-4">Shift the overall look and feel by adding these
        wonderful touches to furnitre in you home.</h1>
      <p className="text-grayishBlue font-semibold text-[13px] mb-6">
        Ever been in a room and felt like something was missing?
        Perhaps it felt slightly bare and uninviting. Ive got some simple
        tips to help you make any room feel complete.
      </p>
      <div className="flex justify-between">
        <img src={avatar} alt="avatar-Michelle" className="rounded-full w-12 h-12" />
        <div className="flex flex-col mr-6">
          <h2 className="font-semibold text-veryDarkGrayishBlue">Michelle Appleton</h2>
          <p className="text-grayishBlue">28 Jun 2020</p>
        </div>
        <button className="w-10 h-10 bg-nightGrayishBlue flex justify-center items-center rounded-full">
          <img src={iconButton} alt="share-icon" className="w-5 h-5"/>
        </button>
      </div>
    </div>
  )
}
