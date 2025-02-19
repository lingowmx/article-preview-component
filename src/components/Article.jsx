// import { Share } from "./Share"
import { AuthorInfo } from "./AuthorInfo"
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
      <AuthorInfo />
    </div>
  )
}
