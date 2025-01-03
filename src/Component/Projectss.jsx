const Projectss = ({ item }) => {
  return (
    <div className="my-4  mx-4" data-aos="flip-right" data-aos-duration="1000">
      <div
        className="card bg-dark text-light"
        style={{
          width: "18rem",
          border: "1px solid yellow",
          boxShadow: " 5px 5px 10px 10px rgba(101,175,10,0.5)",
        }}
      >
        <div className="img d-flex justify-content-center align-items-center p-3">
          <img
            src={`${item.imageSrc}`}
            alt="img !!!"
            className="card-img-top "
            style={{
              width: "250px",
              height: "200px",
              border: "2px solid yellow",
              borderRadius: "10px",
            }}
          />
        </div>

        <div className="card-body text-center">
          <h4 className="card-title">{item.title}</h4>
          <p className="card-text">{item.description}</p>
          <a href={item.demo} className="btn btn-primary mx-3">
            Demo
          </a>
          <a href={item.source} className="btn btn-warning ">
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projectss;
