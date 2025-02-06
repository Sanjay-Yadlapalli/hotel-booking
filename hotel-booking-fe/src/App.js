import "./App.css";

function App() {
  return (
    <>
      <nav className="nav-container">
        <h3>
          <span style={{ color: "blue" }}>My</span>
          <span style={{ color: "red" }}>Hotel</span> Booking
        </h3>
        <ul>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#about-us">About</a>
          </li>
          <li>
            <a href="#place">Places</a>
          </li>
        </ul>
      </nav>

      <div className="main-container">
        <div className="search-container">
          <h3>Save up to 55% on your next hotel stay</h3>
          <p>We compare hotel prices from over 100 sites</p>
          <div className="search-label">
            <div>
              <input type="search" placeholder="search hotels here..." />
              <button>Search</button>
            </div>
          </div>
          <div className="companies">
            <img
              alt=""
              src="https://imgcy.trivago.com/image/upload/hardcodedimages/mpm-localised-logos-dark/395.png"
            />
            <img
              alt=""
              src="https://imgcy.trivago.com/image/upload/hardcodedimages/mpm-localised-logos-dark/3340.png"
            />
            <img
              alt=""
              src="https://imgcy.trivago.com/image/upload/hardcodedimages/mpm-localised-logos-dark/626.png"
            />
            <img
              alt=""
              src="https://imgcy.trivago.com/image/upload/hardcodedimages/mpm-localised-logos-dark/2192.png"
            />
            <img
              alt=""
              src="https://imgcy.trivago.com/image/upload/hardcodedimages/mpm-localised-logos-dark/14.png"
            />
            <img
              alt=""
              src="https://imgcy.trivago.com/image/upload/hardcodedimages/mpm-localised-logos-dark/634.png"
            />
          </div>
        </div>

        <div className="hot-deals">
          <h3>Hot hotel deals right now</h3>
          <div className="hot-deals-cards">
            <div className="hot-deals-card">
              <img
                alt=""
                src="https://t3.ftcdn.net/jpg/00/29/13/38/360_F_29133877_bfA2n7cWV53fto2BomyZ6pyRujJTBwjd.jpg"
              />
              <div className="hotel-desc">
                <h3>Hotel Vallemar</h3>
                <p>
                  8.7 - Excellent <span style={{ color: "grey" }}>(2925)</span>
                </p>
                <p style={{ color: "gray" }}>Goa, India</p>
                <h5>
                  $219
                  <span
                    style={{ color: "#ff0000", textDecoration: "line-through" }}
                  >
                    $379
                  </span>
                </h5>
                <button>Check Deal</button>
              </div>
            </div>
            <div className="hot-deals-card">
              <img
                alt=""
                src="https://cdn.pixabay.com/photo/2017/05/31/10/23/manor-house-2359884_1280.jpg"
              />
              <div className="hotel-desc">
                <h3>Hardrock Hotel Madrid</h3>
                <p>
                  9.1 - Excellent <span style={{ color: "grey" }}>(11672)</span>
                </p>
                <p style={{ color: "gray" }}>Sydney, Australia</p>
                <h5>
                  $239
                  <span
                    style={{ color: "#ff0000", textDecoration: "line-through" }}
                  >
                    $319
                  </span>
                </h5>
                <button>Check Deal</button>
              </div>
            </div>
            <div className="hot-deals-card">
              <img
                alt=""
                src="https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_534,q_40,w_800/hotelier-images/cb/f2/2dacfa15b7aee1bf9f858ffb992bdae73aefff0cb3664fe34df8ebe16bc2.jpeg"
              />
              <div className="hotel-desc">
                <h3>Meridien Hotel</h3>
                <p>
                  8.1 - Excellent <span style={{ color: "grey" }}>(10650)</span>
                </p>
                <p style={{ color: "gray" }}>Mumbai, India</p>
                <h5>
                  $189
                  <span
                    style={{ color: "#ff0000", textDecoration: "line-through" }}
                  >
                    $259
                  </span>
                </h5>
                <button>Check Deal</button>
              </div>
            </div>
          </div>
        </div>

        <div className="benefits">
          <div className="benefit">
            <img
              alt=""
              src="https://imgcy.trivago.com//hardcodedimages/homepage-landing/usp/SearchDesktop.svg"
            />
            <h3>Seacrh Simply</h3>
            <p>Search through 5 million hotels in just a few seconds.</p>
          </div>
          <div className="benefit">
            <img
              alt=""
              src="https://imgcy.trivago.com//hardcodedimages/homepage-landing/usp/CompareDesktop.svg"
            />
            <h3>Compare confidently</h3>
            <p>Compare hotel prices from over 100 sites at once.</p>
          </div>
          <div className="benefit">
            <img
              alt=""
              src="https://imgcy.trivago.com//hardcodedimages/homepage-landing/usp/SaveDesktop.svg"
            />
            <h3>Save big</h3>
            <p>Discover a great deal to book on our partner sites.</p>
          </div>
        </div>

        <div id="about-us" className="about-us">
          <h3>About Us</h3>
          <p>
            Welcome to My Hotel Booking, your trusted partner for hassle-free
            hotel bookings and unforgettable travel experiences. We are
            dedicated to providing you with the best selection of
            accommodations, from luxury hotels to cozy boutique stays, all at
            competitive prices. Our easy-to-use platform is designed to help you
            find the perfect hotel that fits your needs and budget, whether
            you’re planning a weekend getaway or a long vacation.
          </p>
          <p>
            We believe in making travel planning simple and stress-free. Our
            team works hard to ensure that every booking experience is smooth,
            secure, and personalized. With real-time availability, detailed
            hotel information, and a seamless booking process, we’re here to
            help you plan your next adventure with ease.
          </p>
          <p>
            We’re passionate about delivering top-notch customer service, so if
            you have any questions or need assistance, our team is always ready
            to assist you. Thank you for choosing [Your Website Name]—we look
            forward to helping you find your next perfect stay!
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
