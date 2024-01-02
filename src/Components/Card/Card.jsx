import React from "react";
import { useLoaderData } from "react-router-dom";

const Card = () => {
  const userDetails = useLoaderData();
  console.log(userDetails);
  const { title, logo, companyName, description } = userDetails;
  return (
    <div>
        <img src={logo} alt="" />
        <ul>
            <li>{title}</li>
            <li>{companyName}</li>
            <li>{description}</li>
        </ul>
    </div>
  )
};

export default Card;
