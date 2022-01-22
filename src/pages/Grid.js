import ReactAnime from 'react-animejs'
import { Section, GridContainer, SquareThree } from './style';

const Grid = () => {
    const { Anime, stagger } = ReactAnime

    return (
        <>
            <Section id="grid">
                <Anime
                    initial={[
                        {
                            targets: ".squareThree",
                            translateX: stagger(10, { grid: [12, 5], from: "center", axis: "x" }),
                            translateY: stagger(10, { grid: [12, 5], from: "center", axis: "y" }),
                            rotateZ: stagger([0, 90], { grid: [12, 5], from: "center", axis: "x" }),
                            delay: stagger(200, { grid: [12, 5], from: 'center' }),
                            loop: true,
                            direction: 'alternate',
                            easing: 'easeInOutQuad'
                            /*
                            // set rotation
                            rotate: stagger(
                                // how much to rotate
                                [0, 90],
                                {
                                    // size of the grid
                                    grid: [12, 5],
                                    from: "center",
                                    // to start from the center along the x-axis
                                    axis: "x"
                                })
                                */
                        }
                    ]}
                >
                    <GridContainer>
                        <SquareThree className='squareThree'></SquareThree>
                        <SquareThree className='squareThree'></SquareThree>
                        <SquareThree className='squareThree'></SquareThree>
                        <SquareThree className='squareThree'></SquareThree>
                        <SquareThree className='squareThree'></SquareThree>
                        <SquareThree className='squareThree'></SquareThree>
                        <SquareThree className='squareThree'></SquareThree>
                        <SquareThree className='squareThree'></SquareThree>
                        <SquareThree className='squareThree'></SquareThree>
                        <SquareThree className='squareThree'></SquareThree>
                        <SquareThree className='squareThree'></SquareThree>
                        <SquareThree className='squareThree'></SquareThree>
                        <SquareThree className='squareThree'></SquareThree>
                        <SquareThree className='squareThree'></SquareThree>
                        <SquareThree className='squareThree'></SquareThree>
                        <SquareThree className='squareThree'></SquareThree>
                        <SquareThree className='squareThree'></SquareThree>
                        <SquareThree className='squareThree'></SquareThree>
                        <SquareThree className='squareThree'></SquareThree>
                        <SquareThree className='squareThree'></SquareThree>
                        <SquareThree className='squareThree'></SquareThree>
                        <SquareThree className='squareThree'></SquareThree>
                        <SquareThree className='squareThree'></SquareThree>
                        <SquareThree className='squareThree'></SquareThree>
                        <SquareThree className='squareThree'></SquareThree>
                        <SquareThree className='squareThree'></SquareThree>
                        <SquareThree className='squareThree'></SquareThree>
                        <SquareThree className='squareThree'></SquareThree>
                        <SquareThree className='squareThree'></SquareThree>
                        <SquareThree className='squareThree'></SquareThree>
                        <SquareThree className='squareThree'></SquareThree>
                        <SquareThree className='squareThree'></SquareThree>
                        <SquareThree className='squareThree'></SquareThree>
                        <SquareThree className='squareThree'></SquareThree>
                        <SquareThree className='squareThree'></SquareThree>
                        <SquareThree className='squareThree'></SquareThree>
                        <SquareThree className='squareThree'></SquareThree>
                        <SquareThree className='squareThree'></SquareThree>
                        <SquareThree className='squareThree'></SquareThree>
                        <SquareThree className='squareThree'></SquareThree>
                        <SquareThree className='squareThree'></SquareThree>
                        <SquareThree className='squareThree'></SquareThree>
                        <SquareThree className='squareThree'></SquareThree>
                        <SquareThree className='squareThree'></SquareThree>
                        <SquareThree className='squareThree'></SquareThree>
                        <SquareThree className='squareThree'></SquareThree>
                        <SquareThree className='squareThree'></SquareThree>
                        <SquareThree className='squareThree'></SquareThree>
                        <SquareThree className='squareThree'></SquareThree>
                        <SquareThree className='squareThree'></SquareThree>
                        <SquareThree className='squareThree'></SquareThree>
                        <SquareThree className='squareThree'></SquareThree>
                        <SquareThree className='squareThree'></SquareThree>
                        <SquareThree className='squareThree'></SquareThree>
                        <SquareThree className='squareThree'></SquareThree>
                        <SquareThree className='squareThree'></SquareThree>
                        <SquareThree className='squareThree'></SquareThree>
                        <SquareThree className='squareThree'></SquareThree>
                        <SquareThree className='squareThree'></SquareThree>
                        <SquareThree className='squareThree'></SquareThree>
                    </GridContainer>
                </Anime>

            </Section>
        </>
    )
};

export default Grid;
