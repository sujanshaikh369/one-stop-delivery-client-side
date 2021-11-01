import React from "react";

const Testimonial = () => {
  return (
    <div>
      <div className="container">
        <h3>Our Testimonial</h3>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card h-100">
              <img
                className="img-fluid"
                src="https://images.unsplash.com/photo-1551860863-d98db3dbbee3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Tom Cruise</h5>
                <p class="card-text">
                  I do want to thank your company, especially Timolyn, for
                  assisting me at the 11th hour in getting my documents picked
                  up and successfully delivered. Dash Courier is now at the top
                  of my list of preferred vendors! Thank you!
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img
                className="img-fluid"
                src="https://images.unsplash.com/photo-1566482385965-a65e38b67395?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Sakib Khan</h5>
                <p class="card-text">
                  I’ve been in customer service for a long time and have not run
                  across anyone as nice and helpful as Sabrina…just wanted her
                  to be recognized for making the process easy.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img
                className="img-fluid"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Salman Khan</h5>
                <p class="card-text">
                  Great customer service and very timely delivery. The driver
                  was great and worked very hard to make it to the destination
                  on time. I very much appreciate the hard work and
                  communication!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
