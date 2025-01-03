const Experiences = ({ item }) => {
  return (
    <div
      className="text-center ex-item my-5"
      data-aos="zoom-in"
      data-aos-duration="1000"
    >
      <div className="left">
        <img
          src={`/assets/${item.imageSrc}`}
          style={{ width: "60px" }}
          alt=""
        />
      </div>
      <div className="right">
        <h2 className="k1">{item.role} </h2>
        <h4>
          <span className="k2" style={{ color: "yellowgreen" }}>
            {" "}
            {item.startDate} {item.endDate}{" "}
          </span>
          <span className="k2" style={{ color: "yellow" }}>
            {item.location}
          </span>
        </h4>

        {item.experiences.map((data) => (
          <h5 className="k2" key={data} style={{ color: "yellow" }}>
            {data}
          </h5>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
