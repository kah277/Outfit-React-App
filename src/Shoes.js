import React, {useEffect} from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import Button from 'react-bootstrap/Button';
import converse from './shoes/rachael-ren-Ueu_6ZrVb80-unsplash.jpg'
import heels from './shoes/emily-pottiger-Zx76sbAndc0-unsplash.jpg'
import boots from './shoes/mostafa-mahmoudi-3OZr-hLbsq0-unsplash.jpg'
import sneakers from './shoes/ryan-plomp-jvoZ-Aux9aw-unsplash.jpg'
import sandals from './shoes/jakob-owens-WzncgWs3RJ4-unsplash.jpg'
import white from './shoes/brian-hall-x5aavOm7PFc-unsplash.jpg'
import brown from './shoes/alex-motoc-xyjB6_ZDaKw-unsplash.jpg'
import leather from './shoes/mana-akbarzadegan-Y0RB2z12F1A-unsplash.jpg'
import colorful from './shoes/mohammad-metri-E-0ON3VGrBc-unsplash.jpg'

const shoes = [
    converse,
    heels,
    boots,
    sneakers,
    sandals,
    white,
    brown,
    leather,
    colorful
];
    

const Shoes = ({ shoesIndex, setShoesIndex }) => {

    useEffect(() => {
        const lastIndex = shoes.length - 1;
        if (shoesIndex < 0) {
          setShoesIndex(lastIndex);
        }
        if (shoesIndex > lastIndex) {
          setShoesIndex(0);
        }
        console.log("hewwo");
    }, [shoesIndex, setShoesIndex]);

    return <div className="clothes-container">
        <Button className="prev" onClick={() => setShoesIndex(shoesIndex - 1)} variant="secondary">
            <FiChevronLeft />
        </Button>
        <img src={shoes[shoesIndex]} alt="" />
        <Button className="next" onClick={() => setShoesIndex(shoesIndex + 1)} variant="secondary">
            <FiChevronRight />
        </Button>
    </div>
}

export default Shoes