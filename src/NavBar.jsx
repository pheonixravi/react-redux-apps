import React from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarLink,
  MDBNavbarBrand,
  MDBBadge,
  MDBBtn,
} from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import CartData from "./data";
const NavBar = () => {
  const { totalCount } = useSelector((state) => state.cart);
  //const dispatch = useDispatch();

  return (
    <div>
      <MDBNavbar expand="lg" dark bgColor="primary">
        <MDBContainer>
          <MDBNavbarBrand
            style={{
              alignItems: "center",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            Redux-Toolkit Shopping Cart
          </MDBNavbarBrand>
          <MDBNavbarLink to="#!" className="mx-3">
            {/* <MDBIcon fas icon="shopping-cart" size="lg" color="white" /> */}
            {/* <a className="mx-3"> */}
            <MDBIcon fas icon="shopping-cart" size="lg" color="white">
              <MDBBadge
                pill
                color="danger"
                notification
                style={{ fontSize: "12px" }}
              >
                {totalCount}
              </MDBBadge>
            </MDBIcon>
            {/* </a> */}
          </MDBNavbarLink>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
};

export default NavBar;
