import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Resume = () => {
  return (
    <>
      <VerticalTimeline lineColor='#262626'>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{ background: "#262626", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #262626" }}
          //date='Jan 2022 - Present'
          iconStyle={{ background: "#262626", color: "#fff" }}
          //icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>Staff Engineer</h3>
          <h4 className='vertical-timeline-element-title'>
            Mid-South Engineering Company
          </h4>
          <h5 className='vertical-timeline-element-subtitle'>
            Industrial Building Design
          </h5>
          <p>
            <ul>
              <li>
                Provided input to team lead regarding areas for process and
                procedural improvement.
              </li>
            </ul>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          //contentArrowStyle={{ borderLeft: "7px solid  #262626" }}
          //date='2010 - 2011'
          iconStyle={{ background: "#262626", color: "#fff" }}
          //icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>Design Engineer</h3>
          <h4 className='vertical-timeline-element-title'>Porticos, inc.</h4>
          <h5 className='vertical-timeline-element-subtitle'>
            Engineering Consulting
          </h5>
          <p>
            <ul>
              <li>
                Used PTC Creo to meet design specifications for functional
                prototypes.
              </li>
              <li>
                Collaborated with cross-functional teams to conceptualize and
                refine product concepts.
              </li>
              <li>
                Researched and designed to requirements in alignment with legal
                and regulatory controls for the NFPA
              </li>
            </ul>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          //contentArrowStyle={{ borderRight: "7px solid  #262626" }}
          //date='2008 - 2010'
          iconStyle={{ background: "#262626", color: "#fff" }}
          //icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Product Engineer III
          </h3>
          <h4 className='vertical-timeline-element-title'>
            John Deere via RFA Engineering
          </h4>
          <h5 className='vertical-timeline-element-subtitle'>
            Precision Golf Equipment Design
          </h5>
          <p>
            <ul>
              <li>
                Drove continuous improvement culture in engineering to provide
                clear product design standards, improve manufacturability
                through enhanced documentation and reduce engineering cycle
                time.
              </li>
              <li>
                Applied comprehensive understanding of high-volume manufacturing
                processes and materials to optimize designs.
              </li>
            </ul>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{ background: "#262626", color: "#fff" }}
          //date='2006 - 2008'
          iconStyle={{ background: "#262626", color: "#fff" }}
          //icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Product Engineer II
          </h3>
          <h4 className='vertical-timeline-element-title'>
            John Deere via RFA Engineering
          </h4>
          <h5 className='vertical-timeline-element-subtitle'>
            Precision Golf Equipment Design
          </h5>
          <p>
            <ul>
              <li>
                Documented and updated build, quality and performance records.
              </li>
              <li>
                Prepared complete and accurate design documentation for
                precision golf turf management products.
              </li>
              <li>
                Collaborated with cross-functional teams to develop and
                implement product improvements to enhance performance.
              </li>
            </ul>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          contentArrowStyle={{ borderRight: "7px solid  #262626" }}
          //date='April 2013'
          iconStyle={{ background: "#262626", color: "#fff" }}
          //icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Prove Design Build Engineer
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Caterpillar, inc via EASi, LLC
          </h4>
          <h5 className='vertical-timeline-element-subtitle'>
            Heavy Equipment Prototype Management
          </h5>
          <p>
            <ul>
              <li>
                Used coordination and planning skills to achieve results
                according to schedule.
              </li>
              <li>
                Managed daily shop, technician, and machine maintenance orders
                and activities.
              </li>
              <li>
                Planned test bed and prototype builds; implemented tracking
                strategies for prototype machines to ensure validation efficacy.
              </li>
            </ul>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          //date='November 2012'
          iconStyle={{ background: "#262626", color: "#fff" }}
          //icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Research and Development Engineer
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Newell Rubbermaid
          </h4>
          <h5 className='vertical-timeline-element-subtitle'>
            Consumer Product Design
          </h5>
          <p>
            <ul>
              <li>
                Proved successful working within tight deadlines and fast-paced
                atmosphere.
              </li>
              <li>
                Resolved conflicts and negotiated mutually beneficial agreements
                between parties as a liaison between industrial design and
                manufacturing.
              </li>
            </ul>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          //date='November 2012'
          iconStyle={{ background: "#262626", color: "#fff" }}
          //icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>Engineer II </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Caterpillar, inc via Belcan Engineering
          </h4>
          <h5 className='vertical-timeline-element-subtitle'>
            Heavy Equipment Design
          </h5>
          <p>
            <ul>
              <li>
                Managed engineering engagement risk by employing simulations and
                rapid prototyping to reduce initial outlay and prevent costly
                mistakes.
              </li>
              <li>
                Developed production plans, integrating cross-functional teams
                to streamline operations.
              </li>
              <li>
                Reviewed specifications and technical manuals for compliance
                with ongoing operational goals and conformity to applicable
                regulations.
              </li>
            </ul>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          contentStyle={{ background: "#262626", color: "#fff" }}
          //date='2020 - 2022'
          iconStyle={{ background: "#262626", color: "#fff" }}
          // icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>Independent Study</h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Udemy.com, codecademy.com
          </h4>
          <h5 className='vertical-timeline-element-subtitle'>
            Personal Coding Bootcamp
          </h5>
          <p>Javascript, Reactjs, Node.js, MongDB, Redux, APIs</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2011'
          iconStyle={{ background: "#262626", color: "#fff" }}
          // icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Bachelor of Science
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            North Carolina State University
          </h4>
          <h5 className='vertical-timeline-element-subtitle'>
            Mechanical Engineering
          </h5>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2008'
          iconStyle={{ background: "#262626", color: "#fff" }}
          // icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Associate's of Arts
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Wake Technical Community College
          </h4>
          <h5 className='vertical-timeline-element-subtitle'>
            College Transfer
          </h5>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );
};
export default Resume;
