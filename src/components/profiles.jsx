// import Profile from "./profile";
import React from "react";

// import { useRef } from "react";
const Profile = React.lazy(() => import("./profile"));

const Profiles = ({ data }) => {
  const sprites = [
    "https://avatars.dicebear.com/api/male/:seed.svg",
    "https://avatars.dicebear.com/api/female/:seed.svg",
    "https://avatars.dicebear.com/api/human/:seed.svg",
    "https://avatars.dicebear.com/api/identicon/:seed.svg",
    "https://avatars.dicebear.com/api/initials/:seed.svg",
    "https://avatars.dicebear.com/api/bottts/:seed.svg",
    "https://avatars.dicebear.com/api/avataaars/:seed.svg",
    "https://avatars.dicebear.com/api/jdenticon/:seed.svg",
    "https://avatars.dicebear.com/api/gridy/:seed.svg",
    "https://avatars.dicebear.com/api/micah/:seed.svg",
  ];

  return (
    <div className="profiles">
      {data.map((info, index) => {
        return (
          <Profile
            key={index}
            name={info.name}
            email={info.email}
            address={info.address.city}
            company={info.company.name}
            phone={info.phone}
            website={info.website}
            image={sprites[index]}
          />
        );
      })}
    </div>
  );
};

export default Profiles;
