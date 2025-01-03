const Navbar = () => {
  return (
    <>
      <nav
        className="res1 container Nav_bar d-flex justify-content-between align-items-center"
        data-aos="fade-down"
        data-aos-animation="1000"
      >
        <div className="left nav_items">Portfolio</div>
        <div className="right">
          <a
            href="#home"
            className="res2 nav_items text-decoration-none text-white"
          >
            Home
          </a>
          <a
            href="#experience"
            className="res2 nav_items text-decoration-none  text-white"
          >
            Experience
          </a>
          <a
            href="#skill"
            className="res2 nav_items text-decoration-none  text-white"
          >
            Skills
          </a>
          <a
            href="#project"
            className="res2 nav_items text-decoration-none  text-white"
          >
            Project
          </a>
          <a
            href="#contect"
            className="res2 nav_items text-decoration-none  text-white"
          >
            Contact
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
