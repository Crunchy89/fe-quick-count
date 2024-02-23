import CIcon from "@coreui/icons-react";
import {
    cilLocationPin,
    cilSpeedometer,
  } from '@coreui/icons'
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <>
    <li className="nav-item">
      <Link className="nav-link" to="/dashboard">
        <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
        Dashboard
      </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/dashboard/provinsi">
        <CIcon customClassName="nav-icon" icon={cilLocationPin} />
        Provinsi
      </Link>
    </li>
        </>
    );
};

export default Sidebar;