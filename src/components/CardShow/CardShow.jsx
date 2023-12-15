import React from "react";
import "./CardShow.css";
import { MDBIcon } from "mdb-react-ui-kit";

function CardShow() {
  let data = [
    {
      title: "Pro",
      head: 9,
      month: "Month",
      Year: "Year",
      Quater: "Quaterly",
      t1: "single User",
      t2: "50GB Storage",
      t3: "Unlimited Public Projects",
      t4: "Community Access",
      t5: "Unlimited Private Projects",
      t6: "Dedicated Phone Support",
      t7: "Free Subdomain",
      t8: "Monthly Status Reports",
    },
    {
      title: "Plus",
      head: 3,
      month: "Month",
      Year: "Year",
      Quater: "Quaterly",
      t1: "single User",
      t2: "50GB Storage",
      t3: "Unlimited Public Projects",
      t4: "Community Access",
      t5: "Unlimited Private Projects",
      t6: "Dedicated Phone Support",
      t7: "Free Subdomain",
      t8: "Monthly Status Reports",
    },
    {
      title: "Free",
      head: 12,
      month: "Month",
      Year: "Year",
      Quater: "Quaterly",
      t1: "single User",
      t2: "50GB Storage",
      t3: "Unlimited Public Projects",
      t4: "Community Access",
      t5: "Unlimited Private Projects",
      t6: "Dedicated Phone Support",
      t7: "Free Subdomain",
      t8: "Monthly Status Reports",
    },
    {
      title: "Pro",
      head: 6,
      month: "Month",
      Year: "Year",
      Quater: "Quaterly",
      t1: "single User",
      t2: "50GB Storage",
      t3: "Unlimited Public Projects",
      t4: "Community Access",
      t5: "Unlimited Private Projects",
      t6: "Dedicated Phone Support",
      t7: "Free Subdomain",
      t8: "Monthly Status Reports",
    },
  ];

  return (
    <div className="container main-container">
      <div className="row">
        {data?.map((el, i) => {
          return (
            <div
              key={i}
              className="card mb-2 mt-2 col-sm-12 col-md-6 col-lg-4 align-items-center m-auto card-div"
              style={{ width: "18rem" }}
            >
              <div className="card-body">
                <p className="">
                  <small className="card-subtitle text-muted">
                    {" "}
                    {el.title}
                  </small>
                </p>
                <h6 className="card-title mb-2 display-6">
                  ${el.head}/{el.month}
                </h6>

                <p className="card-text d-flex text-cont">
                  <i
                    className="bi bi-check tick-size"
                    style={{ fontSize: "18px" }}
                  ></i>
                  <p style={{margin:"0px"}}>{el.t1}</p>{" "}
                </p>

                <p className="card-text d-flex text-cont">
                  <i
                    className="bi bi-check tick-size"
                    style={{ fontSize: "18px" }}
                  ></i>
                  <p style={{margin:"0px"}}>{el.t2}</p>{" "}
                </p>

                <p className="card-text d-flex text-cont">
                  <i
                    className="bi bi-check tick-size"
                    style={{ fontSize: "18px" }}
                  ></i>
                  <p style={{margin:"0px"}}>{el.t3}</p>{" "}
                </p>
               
                <p className="card-text d-flex text-cont">
                  <i
                    className="bi bi-check tick-size"
                    style={{ fontSize: "18px" }}
                  ></i>
                  <p style={{margin:"0px"}}>{el.t4}</p>{" "}
                </p>


                <p className="card-text d-flex text-cont">
                  <i
                    className="bi bi-check tick-size"
                    style={{ fontSize: "18px" }}
                  ></i>
                  <p style={{margin:"0px"}}>{el.t5}</p>{" "}
                </p>

                <p className="card-text d-flex text-muted text-cont">
                  <i
                    className="bi bi-x tick-size"
                    style={{ fontSize: "18px", fontWeight: "700" }}
                  ></i>
                  <p style={{margin:"0px"}}>{el.t6}</p>{" "}
                </p>

                <p className="card-text text-muted d-flex text-cont">
                  <i
                    className="bi bi-x tick-size"
                    style={{ fontSize: "18px" }}
                  ></i>
                  <p style={{margin:"0px"}}>{el.t7}</p>{" "}
                
                </p>

                <p className="card-text text-muted d-flex text-cont">
                  <i
                    className="bi bi-x tick-size"
                    style={{ fontSize: "18px" }}
                  ></i>
                  <p style={{margin:"0px"}}>{el.t8}</p>{" "}
                </p>

                {/* <i className="bi bi-x"></i> */}
                {/* <MDBIcon fas icon="times" size="sm 2x lg" /> */}
                 {/* <p className="card-text d-inline-block align-items-center justify-content-center m-auto"> <MDBIcon fas icon="times" size="sm" /><p>{el.t6}</p>  </p> */}
                <button className="btn btn-primary w-80 but">BUTTON</button>
              </div>
            </div>
          );
        })}

        {/*  "width": (
      property: width,
      class: w,
      values: (
        25: 25%,
        50: 50%,
        75: 75%,
        100: 100%,
        auto: auto
      )
    ) */}
      </div>
    </div>
  );
}

export default CardShow;
