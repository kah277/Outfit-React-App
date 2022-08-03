import React, {useEffect} from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import Button from 'react-bootstrap/Button';
import black from './shirts/pexels-anna-nekrashevich-8532616.jpg'
import blue from './shirts/cristofer-maximilian-AqLIkOzWDAk-unsplash.jpg'
import green from './shirts/pexels-ron-lach-9594940.jpg'
import white from './shirts/pexels-vie-studio-8148576.jpg'
import supreme from './shirts/supreme.jpg'
import sweater from './shirts/toa-heftiba-mavrg7cLwbA-unsplash.jpg'
import jacket from './shirts/tobias-tullius-Fg15LdqpWrs-unsplash.jpg'
import buttons from './shirts/ben-tofan-6_ccU1FWOvQ-unsplash.jpg'
import suit from './shirts/gez-xavier-mansfield-b34E1vh1tYU-unsplash.jpg'
import denim from './shirts/caio-coelho-QRN47la37gw-unsplash.jpg'
import crop from './shirts/napat-saeng-mVGW8j9rrC4-unsplash.jpg'
import neon from './shirts/sherise-vd-4AnE9aqUIEI-unsplash.jpg'
import plain from './shirts/quianna-richardson-g7nZZOFTB3g-unsplash.jpg'


const shirts = [
    black,
    blue,
    green,
    white,
    supreme,
    sweater,
    jacket,
    buttons,
    suit,
    denim,
    crop,
    neon,
    plain
];

const Shirt = ({ shirtIndex, setShirtIndex }) => {

    useEffect(() => {
        const lastIndex = shirts.length - 1;
        if (shirtIndex < 0) {
          setShirtIndex(lastIndex);
        }
        if (shirtIndex > lastIndex) {
          setShirtIndex(0);
        }
    }, [shirtIndex, setShirtIndex]);

    return <div className="clothes-container">
        <Button className="prev" onClick={() => setShirtIndex(shirtIndex - 1)} variant="secondary">
            <FiChevronLeft />
        </Button>
        <img src={shirts[shirtIndex]} alt="" />
        <Button className="next" onClick={() => setShirtIndex(shirtIndex + 1)} variant="secondary">
            <FiChevronRight />
        </Button>
    </div>
}

export default Shirt