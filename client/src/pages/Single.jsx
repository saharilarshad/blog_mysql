import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="bb"
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="cc"
          />
          <div className="info">
            <span>Rill</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="edit" />
            </Link>
            <img src={Delete} alt="delete" />
          </div>
        </div>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
          praesentium.
        </h1>
        <p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
            nostrum voluptates nobis! Molestiae et veniam consectetur doloribus
            velit vero consequuntur corporis atque placeat, ipsam, libero
            dignissimos mollitia sed cupiditate quas.
          </p>{" "}
          <br />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
            nostrum voluptates nobis! Molestiae et veniam consectetur doloribus
            velit vero consequuntur corporis atque placeat, ipsam, libero
            dignissimos mollitia sed cupiditate quas.
          </p>{" "}
          <br />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
            nostrum voluptates nobis! Molestiae et veniam consectetur doloribus
            velit vero consequuntur corporis atque placeat, ipsam, libero
            dignissimos mollitia sed cupiditate quas.
          </p>
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
