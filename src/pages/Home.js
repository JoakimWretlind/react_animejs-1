import ReactAnime from 'react-animejs'
import { Section, Square } from './style'

const Home = () => {
    const { Anime } = ReactAnime

    return (
        <>
            <Section id="home">
                <Anime
                    initial={[
                        {
                            targets: '.square',
                            keyframes: [
                                // each keyfram is an object
                                { translateX: 250, scale: 1 },
                                { translateY: 50, scale: 1.5 },
                                { translateX: -250, scale: 2 },
                                { translateY: -50, scale: 2.5 },
                            ],
                            duration: 4000,
                            loop: true
                        }
                    ]}
                >
                    <Square className='square' />
                </Anime>
            </Section>
        </>
    )
};

export default Home;
