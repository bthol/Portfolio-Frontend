import React, { useRef, useCallback, useState, useEffect } from 'react';
import { OrigamiContent as Content } from '../ContentModules/OrigamiContent';
import { Comp5 } from '../Components/Comp5';
import { Comp6 } from '../Components/Comp6';
import { Comp10 } from '../Components/Comp10';

const OrigamiPage = (props) => {

    // section refs
    const octopusRef = useRef(null);
    const seahorseRef = useRef(null);
    // get height value from ref passed as prop to component
    const linkContainer = useRef(null);
    // store callback in ref and pass as prop
    const togShowDropsRef = useRef(null);

    // let scrollTimeout;
    const scrollManeuver = useCallback((ref) => {
        // scrolls current value of given ref to view
        ref.current.scrollIntoView({behavior: "smooth", block:"center"});
    }, []);

    const links = {
        gallery: <div>
            <div className="drop link-desat fade-left" onClick={() => {
                scrollManeuver(octopusRef);
                if (togShowDropsRef.current !== null && setShowDropsRef.current !== null) {
                    setShowDropsRef.current(setShowDropsArgRef.current);
                    togShowDropsRef.current();
                }
            }}>Octopus</div>

            <div className="drop link-desat fade-left" onClick={() => {
                scrollManeuver(seahorseRef);
                if (togShowDropsRef.current !== null && setShowDropsRef.current !== null) {
                    setShowDropsRef.current(setShowDropsArgRef.current);
                    togShowDropsRef.current();
                }
            }}>Seahorse</div>
        </div>,
    }

    const [linksHeight, setLinksHeight] = useState(null);
    const [showDrops, setShowDrops] = useState(true);
    const setShowDropsArgRef = useRef(showDrops);

    const setShowDropsRef = useRef(null);
    setShowDropsRef.current = (arg) => {
        setShowDropsArgRef.current = !arg;
        setShowDrops(!arg);
    };

    useEffect(() => { // runs once after component mounts
        setLinksHeight(linkContainer.current.clientHeight)
    }, []);
    useEffect(() => {
        if (linksHeight) {
            // runs once after first useEffect completes
            // get height of cloud link container + assign it to cloud link container
            linkContainer.current.style.height = `${linksHeight}px`;
            // declare function after setLinksHeight function completes
            const togShowDrops = () => {
                if (setShowDropsArgRef.current) {
                    // visible
                    document.querySelectorAll('.drop').forEach((drop) => {
                        drop.style.opacity = 1;
                        drop.style.visibility = 'visible';
                    })
                    linkContainer.current.style.height = `${linksHeight}px`;
                } else {
                    // hidden
                    document.querySelectorAll('.drop').forEach((drop) => {
                        drop.style.opacity = 0;
                        const cache = setTimeout(() => {
                            clearTimeout(cache);
                            drop.style.visibility = 'hidden';
                        }, 500);
                    })
                    linkContainer.current.style.height = '0px';
                }
            };
            togShowDropsRef.current = togShowDrops;
        }
    }, [linksHeight]);

    return (
        <div id='origamipage' className="page-content">

            <Comp10 title={"Origami"} />

            <Comp6 title={"Models"} addClass={""} links={links.gallery} linkRef={linkContainer} togShowDropsRef={togShowDropsRef} setShowDropsRef={setShowDropsRef} setShowDropsArgRef={setShowDropsArgRef} />

            <div ref={octopusRef} className="origamipage-layout-width flex-center"><h2>Octopus</h2></div>
            <Comp5
                name={Content.origami[0].name}
                image1={Content.origami[0].image1}
                image2={Content.origami[0].image2}
                describe={Content.origami[0].describe}
            />

            <div ref={seahorseRef} className="origamipage-layout-width flex-center"><h2>Seahorse</h2></div>
            <Comp5
                name={Content.origami[1].name}
                image1={Content.origami[1].image1}
                image2={Content.origami[1].image2}
                describe={Content.origami[1].describe}
            />

        </div>
    )
}

export { OrigamiPage }