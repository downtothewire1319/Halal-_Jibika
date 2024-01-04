import { CiHeart } from "react-icons/ci";
import style from "./Cards.module.css";
import useFetch from "../../CustomHooks/useFetch";
import { useState } from "react";
import { Link } from "react-router-dom";

const Cards = () => {
  const { data, error } = useFetch(
    "http://localhost:9000/jobs"
  );


  

  return (
    <div className={style.cardsWrapper}>
      {data &&
        data.map((singleData) => (
          
          <div key={singleData.id} className={style.cardWrapper_page}>
            <div className={style.cardwrapper_container}>
              <div className={style.card_company_info}>
                <div className={style.company_info_one}>
                  <div className={style.company_image}>
                    <img
                      src={singleData.logo}
                      alt="company"
                    />
                  </div>

                  <div className={style.company_name}>
                    <h4>{singleData.title}</h4>
                    <h2>{singleData.companyName}</h2>
                  </div>
                </div>

                <div className={style.company_info_two}>
                  <span>
                    <CiHeart />
                  </span>
                  <h3>{singleData.position}</h3>
                </div>
              </div>
              <div className={style.description}>{singleData.description}
               
              </div>

              <div className={style.company_btn_area}>
                <div className="left_btn">
                  <button>Edtit</button>
                  <button className={style.deleteBtn}>Delete</button>
                </div>

                <div className={style.right_btn}>
                  <button className={style.rightBtn}>Apply</button>
                  <Link to={`singleData/${singleData.id}`}>
                  <button className={style.rightBtn}>details</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Cards;
