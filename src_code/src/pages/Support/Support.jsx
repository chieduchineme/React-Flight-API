import { withSidebarLayout } from "../../components/HOC.js/hoc";
import AirplaneIcon from '../../assets/images/airplan2.jpg';

function Support() {
    return (
        <>
        <div style={{display: 'flex', flexDirection:'column'}}>
            <img src={AirplaneIcon} style={{height:'39vh'}} alt="AirplaneIcon" />
            <h4>
                Do you want coverage in your area?
            </h4>
            <hr />
            <div style={{marginTop: '1em'}}>
                <p>The first thing you need is an ADS-B receiver. At the moment, we support the following devices: Radarcape and dump1090-based receivers (mutability and antirez forks) plus FLARM / OGN.</p>
                <p>In case you do not own such a device but you have access to a location with power supply, permanent Internet connection, a good line of sight in all directions and you are willing to host one of our devices for free, please refer to <a href="https://opensky-network.org/community/blog/item/15-opensky-network-new-hardware-program" target="_blank"  rel="noreferrer">this article</a> for more information.</p>
                <p>Once you obtain one of the listed devices, you need a free account for this website. You can simply create one by registering <a href="https://opensky-network.org/auth/register" target="_blank"  rel="noreferrer">here</a>.</p>
                <p>After logging in, you can add your receiver in the My OpenSky&gt;Receiver Profile. After approval by one of our admins, your receivers automatically starts streaming the data to our servers.</p>
                <p>In case it remains offline, please check the receiver's setup, Internet connection, or contact us for further support.</p>
            </div>
        </div>
        </>
    )
}

export default withSidebarLayout(Support)