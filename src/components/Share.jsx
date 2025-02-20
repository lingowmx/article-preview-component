import iconButton from "../../images/icon-share.svg"
import iconFacebook from "../../images/icon-facebook.svg"
import iconPinterest from "../../images/icon-pinterest.svg"
import iconTwitter from "../../images/icon-twitter.svg"

export const Share = ({onClose}) => {
  return (
    <div className="bg-veryDarkGrayishBlue flex justify-between items-center w-80 h-[72px] 
    rounded-b-lg pl-6 pr-6">
      <p className="text-grayishBlue">S H A R E</p>
      <div className="flex gap-4 mr-6">
        <a href="https://www.facebooks.com/">
          <img src={iconFacebook} alt="icon-facebook" />
        </a>
        <a href="https://www.facebooks.com/">
          <img src={iconTwitter} alt="icon-twitter" />
        </a>
        <a href="https://www.facebooks.com/">
          <img src={iconPinterest} alt="icon-pinterest" />
        </a>

      </div>
      <button className="w-10 h-10 bg-desaturatedDarkBlue flex justify-center items-center rounded-full cursor-pointer"
            onClick={(onClose)}
            >
        <img src={iconButton} alt="share-button" />
      </button> 
    </div>
  )
}
