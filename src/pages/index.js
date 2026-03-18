import React from "react"
import Layout from "../components/Layout"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function Home() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,      // Значення для десктопа (за замовчуванням)
    slidesToScroll: 1,
    autoplay: true,
    speed: 11000,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        // Коли ширина екрана стає 768px або менше
        breakpoint: 768, 
        settings: {
          slidesToShow: 4, // Показуємо 3 слайди для планшетів та мобілок
          slidesToScroll: 1,
        }
      },
      {
        // Можна додати ще одну точку для зовсім маленьких телефонів (опціонально)
        breakpoint: 480,
        settings: {
          slidesToShow: 3, // 2 слайди для вузьких екранів
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <Layout>
      {/* OUR CLIENTS + FULL PORTFOLIO on white background */}
      <section id="services" className="section-white">
        <div className="section-inner">
          <h2>OUR CLIENTS</h2>
          <Slider {...sliderSettings}>
            <div>
              <a
                href="https://binibambini.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/images/binigames.png"
                  alt="Bini Games"
                  style={{ width: "120px", margin: "0 auto" }}
                />
              </a>
            </div>
            <div>
              <a
                href="https://awem.com"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/images/awem.png"
                  alt="Awem"
                  style={{ width: "120px", margin: "0 auto" }}
                />
              </a>
            </div>
            <div>
              <a
                href="https://belka-games.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/images/belka.png"
                  alt="Belka Games"
                  style={{ width: "120px", margin: "0 auto" }}
                />
              </a>
            </div>
            <div>
              <a
                href="https://www.nanobit.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/images/nanobit.png"
                  alt="Nanobit"
                  style={{ width: "120px", margin: "0 auto" }}
                />
              </a>
            </div>
            <div>
              <a
                href="https://www.zeptolab.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/images/zeptolab.png"
                  alt="ZeptoLab"
                  style={{ width: "120px", margin: "0 auto" }}
                />
              </a>
            </div>
            <div>
              <a
                href="https://www.akuparagames.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/images/akupara.png"
                  alt="Akupara Games"
                  style={{ width: "120px", margin: "0 auto" }}
                />
              </a>
            </div>
            <div>
              <a
                href="https://www.bebopbee.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/images/bebopbee.png"
                  alt="BebopBee"
                  style={{ width: "120px", margin: "0 auto" }}
                />
              </a>
            </div>
            <div>
              <a
                href="https://liveanimations.org/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/images/liveanim.png"
                  alt="Live Animations"
                  style={{ width: "120px", margin: "0 auto" }}
                />
              </a>
            </div>
            <div>
              <a
                href="https://www.sportsengine.com/solutions/sportssignup"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/images/sportsil.png"
                  alt="Sports Illustrated"
                  style={{ width: "120px", margin: "0 auto" }}
                />
              </a>
            </div>

          </Slider>
          <a
            href="https://drive.google.com/file/d/1N7ggSnS2FjlcX37kiKQyICPxM4uY_BwP"
            className="portfolio-btn"
            target="_blank"
            rel="noreferrer"
          >
            FULL PORTFOLIO
          </a>
        </div>
      </section>

      {/* PLATFORMS + DEVICES MATRIX + QA/Team icons block */}
      <section id="more" className="section-dark">
        <div className="section-inner">
          <h2 class="orange-heading">PLATFORMS WE TEST FOR</h2>
          <div className="grid grid-platforms">
            <div className="grid-item">
              <img src="/images/macos.png" alt="MacOS" />
              MacOS
            </div>
            <div className="grid-item">
              <img src="/images/windows.png" alt="Windows" />
              Windows
            </div>
            <div className="grid-item">
              <img src="/images/ios.png" alt="iOS" />
              iOS
            </div>
            <div className="grid-item">
              <img src="/images/android.png" alt="Android" />
              Android
            </div>
            <div className="grid-item">
              <img src="/images/web.png" alt="Web" />
              Web
            </div>
          </div>
                    <a
            href="https://drive.google.com/file/d/19lgYj6m0-wNQucwOLD6qpWSdWZvOmTpx"
            className="portfolio-white-btn"
            target="_blank"
            rel="noreferrer"
          >
            DEVICES MATRIX
          </a>
        </div>
      </section>

      {/* QA Audit / Dedicated Team / Multi Platform / Full Cycle back on white */}
      <section className="section-white">
        <div className="section-inner">
          <div className="grid grid-services">
            <div className="grid-item">
              <img src="/images/nonfunctional_icon.png" alt="QA Audit" />
              QA Audit
            </div>
            <div className="grid-item">
              <img src="/images/localization_icon.png" alt="Dedicated Team" />
              Dedicated Team
            </div>
            <div className="grid-item">
              <img src="/images/multi_platform_icon.png" alt="Multi Platform" />
              Multi Platform
            </div>
            <div className="grid-item">
              <img src="/images/full_cycle_icon.png" alt="Full Cycle" />
              Full Cycle
            </div>
          </div>
        </div>
      </section>

      {/* From WHY BRIGHT IT STUDIO? to the end on black */}
      <section id="about" className="section-dark section-dark-text">
        <div className="section-inner">
          <h2 class="orange-heading">WHY BRIGHT IT STUDIO?</h2>
          <p className="normal-text">
            We are committed to providing high-quality software testing services
            to businesses of all sizes. With our experienced team of dedicated QA
            professionals, customized solutions, and competitive pricing, we offer
            a range of advantages that set us apart from our competitors. Contact
            us today to learn more about why Bright IT Studio is the best choice
            for your software testing needs.
          </p>
          <a
            href="mailto:contact@brightitstudio.com"
            className="portfolio-white-btn"
            style={{backgroundColor: "#ED6734" }}
          >
            EMAIL US
          </a>
        </div>
      </section>
    </Layout>
  )
}