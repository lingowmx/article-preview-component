import { AuthorInfo } from "./AuthorInfo"
export const Article = () => {

  return (
    <div className="bg-white p-6 w-80 rounded-b-xl 
    xl:w-96 xl:rounded-b-none xl:rounded-r-lg xl:absolute 
     xl:left-80 xl:transform xl:-translate-x-1/2" >
      <h1 className="font-semibold text-veryDarkGrayishBlue text-base mb-4
      xl:text-xl">Shift the overall look and feel by adding these
        wonderful touches to furnitre in you home.</h1>
      <p className="text-grayishBlue font-semibold text-[13px] mb-6 xl:relative">
        Ever been in a room and felt like something was missing?
        Perhaps it felt slightly bare and uninviting. Ive got some simple
        tips to help you make any room feel complete.
      </p>
      <AuthorInfo />
    </div>
  )
}
