import React from 'react';

function WorkHistory() {
  return (
    <ul className="blank-list">
      <li className="blank-list__element">
        <div className="work-history__company">
          Upworthy, Remote || 2012 &ndash; Present
        </div>
        <div className="work-history__title">
          FRONT-END ENGINEER
        </div>
        <div className="work-history__description">
          <p>
            Responsible for modernizing and maintaining a mature codebase,
            while building new features to help increase ad impressions, drive
            user engagement, and facilitate a better writing experience for our
            content creators.
          </p>
        </div>
        <div className="work-history__title">
          DEVELOPER & UX DESIGNER
        </div>
        <div className="work-history__description">
          <p>
            From 2012-2015, I was also a product/UX designer at Upworthy. In
            addition to building layouts, I also interviewed stakeholders, created
            wireframes and fully rendered mockups, ran discrete usability tests,
            optimized page layouts to help achieve KPIs, and shipped
            production-ready code.
          </p>
        </div>
      </li>
      <li className="blank-list__element">
        <div className="work-history__company">
          LUCENT PDX. PORTLAND, OR || 2009 &ndash; 2012
        </div>
        <div className="work-history__title">
          CO-FOUNDER, DESIGNER & DEVELOPER
        </div>
        <div className="work-history__description">
          <p>
            Co-founded a small creative web agency serving clients mostly in the
            Portland metro area. Responsible for responding to RFPs and, along
            with my partner, meeting with clients to establish project scope and
            timelines. Once approved, I was primarily responsible for iterating on
            designs and building out the final products in PHP and WordPress.
          </p>
        </div>
      </li>
      <li className="blank-list__element">
        <div className="work-history__company">
          MUSICMAN PDX. PORTLAND, OR || 2003 &dash; 2011
        </div>
        <div className="work-history__title">
          FOUNDER, DESIGNER, DEVELOPER
        </div>
        <div className="work-history__description">
          <p>
            A crowdsourced music education community monetized through
            Google Ad network. Starting as a simple educational side project, it
            eventually became my full-time job for the better part of a decade.
          </p>
          <p>
            This success was the result of SEO driven traffic, and a focus on
            differentiating my product through better UX.
          </p>
        </div>
      </li>

    </ul>
  );
}

export default WorkHistory;