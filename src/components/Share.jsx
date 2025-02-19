import iconButton from "../../images/icon-share.svg"
import iconFacebook from "../../images/icon-facebook.svg"
import iconPinterest from "../../images/icon-pinterest.svg"
import iconTwitter from "../../images/icon-twitter.svg"
export const Share = () => {
  return (
    <div>
      <p>SHARE</p>
      <div>
        <a href="https://www.facebook.com/">
          <img src={iconFacebook} alt="icon-facebook" />
        </a>
        <a href="https://www.facebook.com/">
          <img src={iconTwitter} alt="icon-twitter" />
        </a>
        <a href="https://www.facebook.com/">
          <img src={iconPinterest} alt="icon-pinterest" />
        </a>

      </div>
      <button>
        <img src={iconButton} alt="share-button" />
      </button>
    </div>
  )
}
