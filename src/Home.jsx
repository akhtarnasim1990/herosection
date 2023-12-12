import "./Home.css";
import { FaAngleDown } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
import { FaApple } from "react-icons/fa";

const Home = () => {
  return (
    <div className="herosection_main_container">
      <div className="herosection_content">
        <div className="herosection_relative_div">
          <img src="/images/bg-image.webp" alt="bg-imagee" />
        </div>
        <div className="herosection_header">
          <div className="log">
            <div className="logo_image">
              <img src="images/mercury logo.svg" alt="log iamge" />
            </div>
            {/* <div className="comapny_name">mercury</div> */}
          </div>
          <div className="navbar">
            <div className="navigation">Product</div>
            <div className="navigation">
              Compare <FaAngleDown />
            </div>
            <div className="navigation">Pricing</div>
            <div className="navigation">Contact</div>
          </div>
          <div className="buttons">
            <div className="login_btn">Login</div>
            <div className="login_btn lets_talk_btn">
              Let's Talk <GoArrowUpRight />
            </div>
          </div>
        </div>
        <div className="herosection_body">
          <div className="left">
            <div className="left_upper">
              <div className="financial_btn">Financal Management</div>
              <div className="herosection_title">
                <h1>A simpler, smarter basic</h1>
                <h1>
                  credit <span>card.</span>
                </h1>
                <p>Your powerful companion on the road to financial success! Explore personal budget management, investment opportunities.</p>
              </div>
            </div>
            <div className="left_lower">
              <div className="apple_store_btn">
                <FaApple className="apple_logo" /> App Store
              </div>
              <div className="users_and_count">
                <div className="users_div">
                  <img src="/images/user1.webp" alt="user1" />
                  <img src="/images/user2.webp" alt="user1" />
                  <img src="/images/user3.webp" alt="user1" />
                </div>
                <div className="count_div">
                  <div>24K+</div>
                  <div>Active User</div>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <img src="/images/mobile-image.webp" alt="mobile-imagee" />
            <div className="linear"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
