const Skillss = ({ item }) => {
  return (
    <div className="item" data-aos="flip-left" data-aos-duration="1000">
      <img
        className="img-fluid"
        style={{ width: "70px" }}
        src={`assets/${item.imageSrc}`}
        alt=""
      />
      <h4>{item.title}</h4>
    </div>
  );
};

export default Skillss;
