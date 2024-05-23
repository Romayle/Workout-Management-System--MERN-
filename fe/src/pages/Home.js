import { useEffect, useState } from "react"

// components
import WorkoutDeatils from "../components/WorkoutDetails"

const Home = () => {
    const [workouts, setWorkouts] = useState(null)
    

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts')
            console.log("response:",response);
            const json = await response.json()
            console.log("json:",json);

            if (response.ok) {
                setWorkouts(json)
            }
        }

        fetchWorkouts()
    }, [])

    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => (
                    <WorkoutDeatils key={workout._id} workout={workout} />
                ))}
            </div>
        </div>
    )
}

export default Home