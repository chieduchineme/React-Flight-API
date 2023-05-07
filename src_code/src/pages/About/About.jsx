import { withSidebarLayout } from "../../components/HOC.js/hoc";
import AirplaneIcon from '../../assets/images/airplan1.jpg';

const About = () => {
  return (
    <div >
      <img src={AirplaneIcon} style={{width: "100%", height: "25em"}} alt="AirplaneIcon" />
      <div className="about-section ">
        <div className="card p-4">
          <b>Unfiltered live API</b>
          <p>
            Our live API comes with Java and Python bindings, but it can be used with any language that supports JSON-based REST APIs.
          </p>
        </div>
      </div>
      <div className="about-section ">
        <div className="card p-4">
          <b>Air Traffic Statistics</b>
          <p>
            See up-to-date statistics on air traffic and our network on our Network Facts page.
          </p>
        </div>
      </div>
      <div className="about-section ">
        <div className="card p-4">
          <b>Large Dataset</b>
          <p>
            With over 25 trillion ADS-B, Mode S, TCAS and FLARM messages collected from more than 3500 sensors around the world, the OpenSky Network exhibits the largest air traffic surveillance dataset of its kind.
          </p>
        </div>
      </div>

      <div className="about-section ">
        <div className="card p-4">
          <b>About the OpenSky Network</b>
          <p>
            The OpenSky Network is a non-profit community-based receiver network which has been continuously collecting air traffic surveillance data since 2013. Unlike other networks, OpenSky keeps the complete unfiltered raw data and makes it accessible to academic and institutional researchers. The mission of our non-profit association is to support open global air traffic research by universities and other not-for-profit institutions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default withSidebarLayout(About);
