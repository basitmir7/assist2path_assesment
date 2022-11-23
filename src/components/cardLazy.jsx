import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const CardLazy = () => {
  return (
    <div className="card-loading-skeleton profiles-sk">
      {[...Array(10)].map((x, i) => (
        <Skeleton className="profile-sk" key={i} />
      ))}
    </div>
  );
};

export default CardLazy;
