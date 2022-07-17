import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import edge from "../../assets/edge.png";
import agadir from "../../assets/agadir.png";
import duramat from "../../assets/duramat.jpg";
import panele from "../../assets/panele.png";
import lentexBonus from "../../assets/lentex_bonus_571-01.png";
import lentexMaxima from "../../assets/lentex_maxima_57-103.png";
import sheffield from "../../assets/sheffield70.png";
import { ImArrowRight2 } from "react-icons/im";

const saleProducts = [
  {
    id: 1,
    image: edge,
    name: "Edge",
    category: "SZTUCZNA TRAWA",
    link: "#",
  },
  {
    id: 2,
    image: agadir,
    name: "Agadir",
    category: "CHODNIKI",
    link: "#",
  },
  {
    id: 3,
    image: sheffield,
    name: "Sheffield - 70",
    category: "WYKŁADZINA DYWANOWA",
    link: "#",
  },
  {
    id: 4,
    image: panele,
    name: "Kabe",
    category: "PANELE",
    link: "#",
  },
  {
    id: 5,
    image: lentexBonus,
    name: "Lentex - Bonus",
    category: "WYKŁADZINA PCV",
    link: "#",
  },
  {
    id: 6,
    image: lentexMaxima,
    name: "Lentex - Maxima",
    category: "WYKŁADZINA PCV",
    link: "#",
  },
  {
    id: 7,
    image: duramat,
    name: "Duramat",
    category: "DYWANIKI",
    link: "#",
  },
];

const Sale = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint:800,
        settings: {
          arrows:false,
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      }
    ]
  };
  return (
    <section className="sale_carousel container">
      <h2>PROMOCJE</h2>
    <Slider {...settings}>
      {saleProducts.map(({image, name, category, link }) => {
        return (
          <div className="sale_product">
            <div className="sale_image">
              <img src={image} />
            </div>
            <p className="sale_category">{category}</p>
            <p className="sale_name">{name}</p>
            <button src={link} className="button">
              Zobacz szczegóły <ImArrowRight2 />
            </button>
          </div>
        );
      })}
    </Slider>
    </section>
  );
};

export default Sale;
