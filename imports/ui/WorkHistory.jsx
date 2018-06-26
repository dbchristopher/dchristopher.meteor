import React from 'react';

function WorkHistory() {
  return (
    <ul className="blank-list work-history">
      <li className="blank-list__element">
        <div className="work-history__company">
          Udacity, Remote &middot; 2017 &ndash; Present
        </div>
        <div className="work-history__title">
          FRONT-END ENGINEER (LEVEL 3)
        </div>
        <div className="work-history__description">
          <p>
            Built from the ground up a question-and-answer platform to help unblock students at scale.
            Responsible for architecting, planning the front-end tech stack, and helping build
            this brand-new platform from scratch. The end product is similar to Stack Overflow and
            provided a resource for students to help each other, increasing overall student success rates.
          </p>
        </div>
        <div className="work-history__company">
          Upworthy, Remote &middot; 2012 &ndash; 2017
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
          DEVELOPER &amp; UX DESIGNER
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
          LUCENT PDX. PORTLAND, OR &middot; 2009 &ndash; 2012
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
          MUSICMAN PDX. PORTLAND, OR &middot; 2003 &ndash; 2011
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
        </div>
      </li>

    </ul>
  );
}

export default WorkHistory;