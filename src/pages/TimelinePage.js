import ReactAnime from 'react-animejs'
import { Section, GridContainer, Square } from './style';

const TimelinePage = () => {
    const { Anime, stagger } = ReactAnime

    /*
    let tl = {
        duration: 750,
        loop: true,
        direction: 'alternate'
    }
    */

    return (
        <Section id="timeline">
            <Anime
                initial={[
                    //tl = 
                    {
                        targets: ".squareFour",
                        translateX: stagger(10, { grid: [12, 5], from: "center", axis: "x" }),
                        translateY: stagger(10, { grid: [12, 5], from: "center", axis: "y" }),
                        rotateZ: stagger([0, 90], { grid: [12, 5], from: "center", axis: "x" }),
                        delay: stagger(200, { grid: [12, 5], from: 'center' }),
                        easing: 'easeInOutQuad'
                    }, {
                        targets: ".squareFour",
                        translateX: stagger(20, { grid: [12, 5], from: "center", axis: "x" }),
                        translateY: stagger(20, { grid: [12, 5], from: "center", axis: "y" }),
                        rotateZ: stagger([90, 180], { grid: [12, 5], from: "center", axis: "x" }),
                        delay: stagger(200, { grid: [12, 5], from: 'center' }),
                        easing: 'easeInOutQuad'
                    }
                ]}
            >
                <GridContainer>
                    <Square className='squareFour'></Square>
                    <Square className='squareFour'></Square>
                    <Square className='squareFour'></Square>
                    <Square className='squareFour'></Square>
                    <Square className='squareFour'></Square>
                    <Square className='squareFour'></Square>
                    <Square className='squareFour'></Square>
                    <Square className='squareFour'></Square>
                    <Square className='squareFour'></Square>
                    <Square className='squareFour'></Square>
                    <Square className='squareFour'></Square>
                    <Square className='squareFour'></Square>
                    <Square className='squareFour'></Square>
                    <Square className='squareFour'></Square>
                    <Square className='squareFour'></Square>
                    <Square className='squareFour'></Square>
                    <Square className='squareFour'></Square>
                    <Square className='squareFour'></Square>
                    <Square className='squareFour'></Square>
                    <Square className='squareFour'></Square>
                    <Square className='squareFour'></Square>
                    <Square className='squareFour'></Square>
                    <Square className='squareFour'></Square>
                    <Square className='squareFour'></Square>
                    <Square className='squareFour'></Square>
                    <Square className='squareFour'></Square>
                    <Square className='squareFour'></Square>
                    <Square className='squareFour'></Square>
                    <Square className='squareFour'></Square>
                    <Square className='squareFour'></Square>
                    <Square className='squareFour'></Square>
                    <Square className='squareFour'></Square>
                    <Square className='squareFour'></Square>
                    <Square className='squareFour'></Square>
                    <Square className='squareFour'></Square>
                    <Square className='squareFour'></Square>
                    <Square className='squareFour'></Square>
                    <Square className='squareFour'></Square>
                    <Square className='squareFour'></Square>
                    <Square className='squareFour'></Square>
                    <Square className='squareFour'></Square>
                    <Square className='squareFour'></Square>
                    <Square className='squareFour'></Square>
                    <Square className='squareFour'></Square>
                    <Square className='squareFour'></Square>
                    <Square className='squareFour'></Square>
                    <Square className='squareFour'></Square>
                    <Square className='squareFour'></Square>
                    <Square className='squareFour'></Square>
                    <Square className='squareFour'></Square>
                    <Square className='squareFour'></Square>
                    <Square className='squareFour'></Square>
                    <Square className='squareFour'></Square>
                    <Square className='squareFour'></Square>
                    <Square className='squareFour'></Square>
                    <Square className='squareFour'></Square>
                    <Square className='squareFour'></Square>
                    <Square className='squareFour'></Square>
                    <Square className='squareFour'></Square>
                    <Square className='squareFour'></Square>
                </GridContainer>
            </Anime>
        </Section>
    )
};

export default TimelinePage;
