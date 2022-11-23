const Profile = ({ name, company, address, phone, email, website, image }) => {
  return (
    <div className="profile">
      <img src={image} />
      <div className="name">Name : {name}</div>
      <div className="address"> Adress:{address}</div>
      <div className="company">Company:{company}</div>
      <div className="phone">Phone:{phone}</div>
      <div className="email">email:{email}</div>
      <div className="website">website:{website}</div>
    </div>
  );
};

export default Profile;
