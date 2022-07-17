import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from "../../assets/slider1.png";
import slider2 from "../../assets/slider2.png";
import slider3 from "../../assets/slider3.png";
import slider4 from "../../assets/slider4.png";
import slider5 from "../../assets/slider5.png";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows:false
  };
  return (
    <Slider className="slider" {...settings}>
      <div className="slider_class">
        <img src={slider1} alt="" />
        <div className="slider_text_side">
          <p className="slider_title">Deska kompozytowa</p>
          <p className="slider_text">
            Idealna do wykonania trwałego i eleganckiego tarasu. Odporne na wodę
            i promienie słoneczne. Dostępne w wielu odcieniach.
          </p>
        </div>
      </div>
      <div className="slider_class">
        <img src={slider2} alt="" />
        <div className="slider_text_side">
          <p className="slider_title">Sztuczna trawa</p>
          <p className="slider_text">
            Doskonała do ogrodu, na taras lub balkon! Nasze produkty
            charakteryzuje wysoka jakość i estetyka wykonania.
          </p>
        </div>
      </div>
      <div className="slider_class">
        <img src={slider3} alt="" />
        <div className="slider_text_side">
          <p className="slider_title">Wykładziny PCV</p>
          <p className="slider_text">
            Do Twojego mieszkania, domu czy biura. Szeroki asortyment wzorów i
            kolorów.
          </p>
        </div>
      </div>
      <div className="slider_class">
        <img src={slider4} alt="" />
        <div className="slider_text_side">
          <p className="slider_title">LVT - Luxury Vinyl Tiles</p>
          <p className="slider_text">
            LVT mogą imitutować wyglądem drewno, kamień, beton oraz inne
            struktury. Idealne rozwiązanie dla nowoczesnych wnętrz.
          </p>
        </div>
      </div>
      <div className="slider_class">
        <img src={slider5} alt="" />
        <div className="slider_text_side">
          <p className="slider_title">Chodniki i dywaniki</p>
          <p className="slider_text">
            LVT mogą imitutować wyglądem drewno, kamień, beton oraz inne
            struktury. Idealne rozwiązanie dla nowoczesnych wnętrz.
          </p>
        </div>
      </div>
    </Slider>
  );
}
