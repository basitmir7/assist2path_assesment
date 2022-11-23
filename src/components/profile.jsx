import { FaUserAlt } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { MdWork } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { MdWeb } from "react-icons/md";
const Profile = ({ name, company, address, phone, email, website, image }) => {
  return (
    <div className="profile">
      <img loading="lazy" src={image} alt="image loading error" />
      <div className="name">
        <FaUserAlt /> {name}
      </div>
      <div className="address">
        {" "}
        <ImLocation />
        {address}
      </div>
      <div className="company">
        <MdWork /> {company}
      </div>
      <div className="phone">
        {" "}
        <BsTelephoneFill />
        {phone}
      </div>
      <div className="email">
        <GrMail />
        {email}
      </div>
      <div className="website">
        <MdWeb />
        {website}
      </div>
    </div>
  );
};

export default Profile;
