import Profile from "./profile";
const Profiles = ({ data }) => {
  return (
    <div className="profiles">
      {data.map((info, infoID) => {
        return (
          <Profile
            key={infoID}
            name={info.name}
            email={info.email}
            address={info.address.city}
            company={info.company.name}
            phone={info.phone}
            website={info.website}
          />
        );
      })}
    </div>
  );
};

export default Profiles;
