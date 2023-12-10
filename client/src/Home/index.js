import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";

function Home() {
  return (
    <div className="container-fluid">
      <br />
      <p className="display-6">Hi 'username',</p>
      <br />
      Feel free to choose any of the below templates to your liking:
      <br />
      <br />
      <div class="row">
        {/* <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4  mt-5"> */}
        <div className="card col-sm-12 col-md-6 col-lg-6 col-xl-4  mt-5">
          <div className="card-header card-header-style">
            <FontAwesomeIcon
              icon={"ellipsis-vertical"}
              style={{ float: "right", color: "white" }}
            ></FontAwesomeIcon>
            Template 1
          </div>
          <div className="card-body">
            <img
              class="card-img-top"
              src="sampleTemp1.jpg"
              alt="Card image cap"
            />
            <h5
              className="card-title"
              style={{ color: "#4682b4", fontSize: "medium" }}
            >
              <br></br>
              <button className="btn btn-danger btn-sm float-end">Use</button>
              what's this
            </h5>
          </div>
        </div>
        {/* temp-2 */}
        <div className="card col-sm-12 col-md-6 col-lg-6 col-xl-4  mt-5">
          <div className="card-header card-header-style">
            <FontAwesomeIcon
              icon={"ellipsis-vertical"}
              style={{ float: "right", color: "white" }}
            ></FontAwesomeIcon>
            Template 2
          </div>
          <div className="card-body">
            <img
              class="card-img-top"
              src="sampleTemp2.jpg"
              alt="Card image cap"
            />
            <h5
              className="card-title"
              style={{ color: "#4682b4", fontSize: "medium" }}
            >
              <br></br>
              <button className="btn btn-danger btn-sm float-end">Use</button>
              what's this
            </h5>
          </div>
        </div>
        {/* temp-3 */}
        <div className="card col-sm-12 col-md-6 col-lg-4 col-xl-3  mt-5">
          <div className="card-header card-header-style">
            <FontAwesomeIcon
              icon={"ellipsis-vertical"}
              style={{ float: "right", color: "white" }}
            ></FontAwesomeIcon>
            Template 3
          </div>
          <div className="card-body">
            <img
              class="card-img-top"
              src="sampleTemp3.jpg"
              alt="Card image cap"
            />
            <h5
              className="card-title"
              style={{ color: "#4682b4", fontSize: "medium" }}
            >
              <br></br>
              <button className="btn btn-danger btn-sm float-end">Use</button>
              what's this
            </h5>
          </div>
        </div>
        {/* temp-4 */}
        <div className="card col-sm-12 col-md-6 col-lg-4 col-xl-3  mt-5">
          <div className="card-header card-header-style">
            <FontAwesomeIcon
              icon={"ellipsis-vertical"}
              style={{ float: "right", color: "white" }}
            ></FontAwesomeIcon>
            Template 3
          </div>
          <div className="card-body">
            <img
              class="card-img-top"
              src="sampleTemp3.jpg"
              alt="Card image cap"
            />
            <h5
              className="card-title"
              style={{ color: "#4682b4", fontSize: "medium" }}
            >
              <br></br>
              <button className="btn btn-danger btn-sm float-end">Use</button>
              what's this
            </h5>
          </div>
        </div>
        {/* temp-5 */}
        <div className="card col-sm-12 col-md-6 col-lg-4 col-xl-3  mt-5">
          <div className="card-header card-header-style">
            <FontAwesomeIcon
              icon={"ellipsis-vertical"}
              style={{ float: "right", color: "white" }}
            ></FontAwesomeIcon>
            Template 3
          </div>
          <div className="card-body">
            <img
              class="card-img-top"
              src="sampleTemp3.jpg"
              alt="Card image cap"
            />
            <h5
              className="card-title"
              style={{ color: "#4682b4", fontSize: "medium" }}
            >
              <br></br>
              <button className="btn btn-danger btn-sm float-end">Use</button>
              what's this
            </h5>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default Home;
