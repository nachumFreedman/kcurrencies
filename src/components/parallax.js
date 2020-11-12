import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import window from 'global';
import document from 'global/document';

import { InitCoinMarketCap } from "../network/coinMarketCap";

let scollDownElement = "";

const Parallax = props => {
    //test
    let scrollYPos = window.scrollY;

    //this is how to make it react to mouse movements instead of scroll
    // onmousemove = function (e) {
    //     scrollYPos = e.clientY;
    //     if (scrollYPos > 0 && scollDownElement) {
    //         scollDownElement.classList.add('unvisible');
    //     }
    // }

    useEffect(() => {
        InitCoinMarketCap();
        scollDownElement = document.querySelector('.scroll-down span')
    }, [])

    window.setInterval(() => {
        scrollYPos = window.scrollY;
        if (scrollYPos > 0 && scollDownElement) {
            scollDownElement.classList.add('unvisible');
        }
    }, 20);

    global.requestAnimationFrame = cb => cb()

    const createScaleY = (x1, y1, x2, y2) => {
        const slope = (y2 - y1) / (x2 - x1);
        return (y3) => {
            if (slope === 0) {
                return null;
            }

            return ((y3 - y1) / slope) + x1;
        }
    }

    const parallaxElements = (configs) => {

        const interpolation = (end, start) => (end - start) * 0.2;

        const createAnimatable = () => {
            return (config) => {
                let curValue = null;
                let endValue = null;
                return {
                    animateElement: () => {
                        // console.log(endValue, curValue)
                        curValue += interpolation(endValue, curValue);
                        if (typeof curValue === 'number' && config.element) {
                            config.element.style.transform = config.setStyle(curValue.toFixed(3));
                        }
                    },
                    calculateElementStyle: () => {
                        const scale = config.calScale();
                        const tmpEndValue = scale(scrollYPos);
                        if (typeof tmpEndValue !== 'number') {
                            return
                        }

                        if (endValue === null) {
                            curValue = tmpEndValue
                        }
                        endValue = tmpEndValue;
                    }
                }
            }
        }


        const animatableItems = configs.map(createAnimatable());

        const play = () => {
            animatableItems.forEach((item) => {
                item.calculateElementStyle();
                item.animateElement();
            });
            requestAnimationFrame(play);
        }

        return {
            play
        }
    };

    let floorElement;
    let layer4Element;
    let layer3Element;
    let layer2Element;
    let layer1Element;
    let layer0Element;
    if (typeof document.querySelector === "function") {
        console.error("this is the document", document)
        floorElement = document.querySelector('.floor');
        layer4Element = document.querySelector('.layer:nth-of-type(2)');
        layer3Element = document.querySelector('.layer:nth-of-type(3)');
        layer2Element = document.querySelector('.layer:nth-of-type(4)');
        layer1Element = document.querySelector('.layer:nth-of-type(5)');
        layer0Element = document.querySelector('.layer:nth-of-type(6)');
    }


    const animation = parallaxElements([{
        element: floorElement,
        setStyle: value => `translate3d(0px, 0px, 0px) scaleY(${value})`,
        calScale: () => createScaleY(1, 0, -1, 914)
    }, {
        element: layer4Element,
        setStyle: value => `translate3d(-50%, ${value}px, 0px)`,
        calScale: () => createScaleY(0, 0, 410, 914)
    }, {
        element: layer3Element,
        setStyle: value => `translate3d(-50%, ${value}px, 0px)`,
        calScale: () => createScaleY(0, 0, 165, 914)
    }, {
        element: layer2Element,
        setStyle: value => `translate3d(-50%, ${value}px, 0px)`,
        calScale: () => createScaleY(0, 0, -130, 914)
    }, {
        element: layer1Element,
        setStyle: value => `translate3d(-50%, ${value}px, 0px)`,
        calScale: () => createScaleY(0, 0, -475, 914)
    }, {
        element: layer0Element,
        setStyle: value => `translate3d(-50%, ${value}px, 0px)`,
        calScale: () => createScaleY(0, 0, -900, 914)
    }]);

    animation.play();



    //end test
    return (
        <>
            <div className="container">
                <div className="parallax floor"></div>
                <div className="parallax layer"></div>
                <div className="parallax layer"></div>
                <div className="parallax layer"></div>
                <div className="parallax layer"></div>
                <div className="parallax layer"></div>
            </div>
        </>
    )
}

Parallax.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool,
}

export default Parallax
