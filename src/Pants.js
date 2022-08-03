import React, {useEffect} from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import Button from 'react-bootstrap/Button';
import jeans from './pants/jason-leung-EtOMMg1nSR8-unsplash.jpg'
import dark from './pants/matt-moloney-YeGao3uk8kI-unsplash.jpg'
import pink from './pants/engin-akyurt-5raPrOhbKQo-unsplash.jpg'
import red from './pants/engin-akyurt-RSm7GBuMqos-unsplash.jpg'
import sweatpants from './pants/engin-akyurt-oXYGKCYhQOI-unsplash.jpg'
import redSkirt from './pants/jp-pau-hOFQEjFE1jY-unsplash.jpg'
import blackSkirt from './pants/laura-chouette-WLSiDqaBeuc-unsplash.jpg'
import tanSkirt from './pants/engin-akyurt-JWZe-4hg9aA-unsplash.jpg'
import stripes from './pants/laura-chouette-zU8hYK_yWLI-unsplash.jpg'
import wideJeans from './pants/jasmin-chew-j-vpjNZwnBE-unsplash.jpg'
import shorts from './pants/engin-akyurt-Hd4nlxLgIbA-unsplash.jpg'
import orange from './pants/alexandra-i-SdR2wW-v4PE-unsplash.jpg'
import khaki from './pants/mark-adriane--uJ3N7HLiEg-unsplash.jpg'

const pants = [
    jeans,
    dark,
    pink,
    red,
    sweatpants,
    redSkirt,
    blackSkirt,
    tanSkirt,
    stripes,
    wideJeans,
    shorts,
    orange,
    khaki
];

const Pants = ({ pantsIndex, setPantsIndex }) => {

    useEffect(() => {
        const lastIndex = pants.length - 1;
        if (pantsIndex < 0) {
          setPantsIndex(lastIndex);
        }
        if (pantsIndex > lastIndex) {
          setPantsIndex(0);
        }
        console.log("hewwo");
    }, [pantsIndex, setPantsIndex]);

    return <div className="clothes-container">
        <Button className="prev" onClick={() => setPantsIndex(pantsIndex - 1)} variant="secondary">
            <FiChevronLeft />
        </Button>
        <img src={pants[pantsIndex]} alt="" />
        <Button className="next" onClick={() => setPantsIndex(pantsIndex + 1)} variant="secondary">
            <FiChevronRight />
        </Button>
    </div>
}

export default Pants