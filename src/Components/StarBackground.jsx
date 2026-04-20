import { useEffect, useState } from "react"

// the stars need to have a id, size, x, y, opacity, animationDuration
// the meteors need to have a id, size, x, y, delay, animationDuration

export const StarBackground = () => {

    const [stars, setStars] = useState([])
    const [meteors, setMeteors] = useState([])

    useEffect(() => {
        Generatestars()
        Generatemeteors()
    }, [])

    const Generatestars = () => {
        const numberOfstars = Math.max(70,
        Math.floor((window.innerWidth + window.innerHeight) / 100)
        );

        const newStars = []

        for (let i = 0; i < numberOfstars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2
            });
        }

        setStars(newStars);
    }


    const Generatemeteors = () => {
        const numberOfmeteors = 4;

        const newMeteors = []

        for (let i = 0; i < numberOfmeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 1 + 1,
                x: Math.random() * 100,
                y: Math.random() * 50,
                delay: -(Math.random() * 10),
                animationDuration: Math.random() * 3 + 3
            });
        }

        setMeteors(newMeteors);
    }

    return(
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map((star) => (
                <div key={star.id} className="star animate-pulse-subtle" style={{
                    width: star.size + "px",
                    height: star.size + "px",
                    left: star.x + "%",
                    top: star.y + "%",
                    opacity: star.opacity,
                    animationDuration: star.animationDuration + "s",
                }}/>
            ))}

            {meteors.map((meteor) => (
            <div
                key={meteor.id}
                className="meteor-wrapper"
                style={{
                left: meteor.x + "%",
                }}
                >
                <div
                className="meteor animate-meteor"
                style={{
                top: meteor.y + "%",  
                width: meteor.size * 50 + "px",
                height: meteor.size * 2 + "px",
                animationDelay: meteor.delay + "s",
                animationDuration: meteor.animationDuration + "s",
                }}
                />
            </div>
            ))}
        </div>
    )
}