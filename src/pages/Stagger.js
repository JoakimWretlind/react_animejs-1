import ReactAnime from 'react-animejs'
import { Section, SquareTwo } from "./style";

const Stagger = () => {
    const { Anime, stagger } = ReactAnime

    return (
        <Section id="stagger">
            <Anime style={{ display: "flex", flexDirection: "row" }}
                initial={[
                    {
                        targets: ".squareTwo",
                        translateX: stagger(150),
                        // customize stagger direction
                        delay: stagger(500, { from: 'last' }),
                        duration: 3000,
                        loop: true
                    }
                ]}
            >
                <SquareTwo className="squareTwo"></SquareTwo>
                <SquareTwo className="squareTwo"></SquareTwo>
                <SquareTwo className="squareTwo"></SquareTwo>
                <SquareTwo className="squareTwo"></SquareTwo>
                <SquareTwo className="squareTwo"></SquareTwo>
            </Anime>
        </Section>
    );
};

export default Stagger;
