import ReactAnime from 'react-animejs'
import { Section, Square } from "./style";

const Stagger = () => {
    const { Anime, stagger } = ReactAnime

    return (
        <Section id="stagger">
            <Anime style={{ display: "flex", flexDirection: "row" }}
                initial={[
                    {
                        targets: ".squareTwo",
                        translateX: stagger(150),
                        scale: 2,
                        // customize stagger direction
                        delay: stagger(500, { from: 'last' }),
                        duration: 3000,
                        loop: true
                    }
                ]}
            >
                <Square className="squareTwo"></Square>
                <Square className="squareTwo"></Square>
                <Square className="squareTwo"></Square>
                <Square className="squareTwo"></Square>
                <Square className="squareTwo"></Square>
            </Anime>
        </Section>
    );
};

export default Stagger;
