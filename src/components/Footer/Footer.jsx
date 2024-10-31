import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <div className="bg-gradient">
        <div className="p-5 rounded-xl border border-zinc-300  w-10/12 mx-auto backdrop-blur-sm">
          <div className="text-center *:text-black newsletter">
            <h3 className="font-bold text-3xl">Subscribe to our Newsletter</h3>
            <h3 className="my-2">
              Get the latest updates and news right in your inbox!
            </h3>
            <div className="join">
              <input
                className="input input-bordered join-item"
                placeholder="Enter Your Email"
              />
              <button className="btn join-item text-black bg-gradient-to-r from-[#F14749] to-[#FBCA57]">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#06091A] pt-16">
        <div className="flex justify-center">
          <img src="/src/assets/logo-footer.png" />
        </div>
        <footer className="footer grid-cols-3 text-base-content p-10 w-10/12 mx-auto">
          <nav className="*:text-white">
            <h6 className="footer-title">About Us</h6>
            <p>
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </nav>
          <nav className="*:text-white">
            <h6 className="footer-title">Quick Links</h6>
            <a className="link link-hover">Home</a>
            <a className="link link-hover">Services</a>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
          </nav>
          <nav>
            <h6 className="footer-title text-white ">Subscribe</h6>
            <p className="text-white">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="join">
              <input
                className="input input-bordered join-item"
                placeholder="Enter Your Email"
              />
              <button className="btn join-item text-black bg-gradient-to-r from-[#F14749] to-[#FBCA57]">
                Subscribe
              </button>
            </div>
          </nav>
        </footer>
        <footer className=" border-base-300 border-t border-t-zinc-900 px-10 py-4 text-center text-zinc-500">
          <p>@2024 Your Company All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
