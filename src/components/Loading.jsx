function Loading(){
  return (
    <>
      {Array.from({ length: 8 }).map((_, index) => (
        <div className="col-md-3 mb-4" key={index}>
          <div className="card h-100">
            <div
              className="placeholder-glow"
              style={{ height: "200px" }}
            >
              <span className="placeholder col-12 h-100"></span>
            </div>

            <div className="card-body">
              <p className="placeholder-glow">
                <span className="placeholder col-8"></span>
              </p>

              <p className="placeholder-glow">
                <span className="placeholder col-6"></span>
              </p>

              <a className="btn btn-primary disabled placeholder col-12"></a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Loading;