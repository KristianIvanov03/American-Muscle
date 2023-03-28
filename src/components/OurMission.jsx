import { missions } from "../data/missions";
import '../assets/missions/missions.css';

const OurMission = () => {
    return (
        <div className="container1">
            <h1 className="title1">Our Missions</h1>
            <div className="missions">
                {
                    missions.map((mission) => {
                        return (
                            <div key={mission.id} className="mission" id={mission.css}>
                                <img src={mission.icon} alt="icon"/>
                                <h2>{mission.title}</h2>
                                <p>{mission.desc}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}
 
export default OurMission;