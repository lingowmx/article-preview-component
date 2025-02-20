import mainImage from "../../images/drawers.jpg"

export const ImageDrawers = () => {
  return (
    <div className="w-80 xl:mt-0 xl:h-[298px] 
    xl:object-fill xl:relative xl:transform xl:-translate-x-1/2">
      <img src={mainImage} alt="drawers-image" 
      className="rounded-t-xl xl:h-full xl:rounded-t-none 
      xl:rounded-l-lg"/>
    </div>
  )
}
