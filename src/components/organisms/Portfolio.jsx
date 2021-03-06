import React from 'react'
import IntroSection from '../molecules/IntroSection'
import NavPortfolio from '../molecules/NavPortfolio';
const Portfolio = () => {
    return (
        <>
            <div className="header-portfolio">
                <IntroSection
                    size="h2"
                    title="Portafolio"
                    id="portafolio"
                    parag="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam"
                />
            </div>
            <NavPortfolio />
        </>
    )
}

export default Portfolio
