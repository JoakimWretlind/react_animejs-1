import ReactAnime from 'react-animejs'
import { Section, Input } from "./style";

const Inputanimation = () => {
    const { Anime } = ReactAnime

    return (
        <Section id="input">
            <Anime
                initial={[
                    {
                        targets: "#demo-input",
                        value: [0, 100],
                        duration: 3000,
                        round: 1,
                        // the default easing will make it count beyound 100
                        easing: "linear",
                        // to make it play back to the beginning
                        direction: "alternate",
                        loop: true
                    }
                ]}
            >
                <Input id='demo-input' />
            </Anime>
        </Section >
    )
};

export default Inputanimation;
