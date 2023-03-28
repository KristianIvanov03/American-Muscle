import { missions } from "../data/missions";

const OurMission = () => {
    return (
        <div className="missions">
            {
                missions.map((mission) => {
                    return (
                        <div key={mission.id} className="mission" id={mission.id}>
                            <img src={mission.icon} alt="icon"/>
                            <h1>{mission.title}</h1>
                            <p>{mission.desc}</p>
                        </div>
                    )
                })
            }
        </div>
    );
}
 
export default OurMission;