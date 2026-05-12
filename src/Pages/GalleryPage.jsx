import React, { useRef, useCallback, useState, useEffect } from 'react';
import { ArtContent as Content } from '../ContentModules/GalleryContent';
import { Comp6 } from '../Components/Comp6';
import { Comp7 } from '../Components/Comp7';
import { Comp10 } from '../Components/Comp10';

const GalleryPage = (props) => {
    // section refs
    const forefrontRef = useRef(null);
    const machineErrorRef = useRef(null);
    const textureFieldsRef = useRef(null);
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
                scrollManeuver(forefrontRef);
                if (togShowDropsRef.current !== null && setShowDropsRef.current !== null) {
                    setShowDropsRef.current(setShowDropsArgRef.current);
                    togShowDropsRef.current();
                }
            }}>Forefront</div>

            <div className="drop link-desat fade-left" onClick={() => {
                scrollManeuver(machineErrorRef);
                if (togShowDropsRef.current !== null && setShowDropsRef.current !== null) {
                    setShowDropsRef.current(setShowDropsArgRef.current);
                    togShowDropsRef.current();
                }
            }}>Machine Error</div>

            <div className="drop link-desat fade-left" onClick={() => {
                scrollManeuver(textureFieldsRef);
                if (togShowDropsRef.current !== null && setShowDropsRef.current !== null) {
                    setShowDropsRef.current(setShowDropsArgRef.current);
                    togShowDropsRef.current();
                }
            }}>Texture Fields</div>
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
        <div id="gallerypage" className="page-content">

            <Comp10 title={"Gallery"} />

            <Comp6 title={"Collections"} addClass={""} links={links.gallery} linkRef={linkContainer} togShowDropsRef={togShowDropsRef} setShowDropsRef={setShowDropsRef} setShowDropsArgRef={setShowDropsArgRef} />
            
            <div ref={forefrontRef} className="gallerypage-layout-width flex-center"><h2>Forefront</h2></div>

            <div className="gallerypage-gallery-row">
                <Comp7 image={Content.gallery.forefront[0]} info={Content.gallery.forefront[0].props.src.split(/(\\|\/)/g).pop().split('.')[0]} enter={props.enter} />
                <Comp7 image={Content.gallery.forefront[1]} info={Content.gallery.forefront[1].props.src.split(/(\\|\/)/g).pop().split('.')[0]} enter={props.enter} />
            </div>

            <br />

            <div ref={machineErrorRef} className="machine error-section gallerypage-layout-width flex-center"><h2>Machine Error</h2></div>
            
            <div className="gallerypage-gallery-row">
                <Comp7 image={Content.gallery.machineError[3]} info={Content.gallery.machineError[3].props.src.split(/(\\|\/)/g).pop().split('.')[0]} enter={props.enter} />
                <Comp7 image={Content.gallery.machineError[2]} info={Content.gallery.machineError[2].props.src.split(/(\\|\/)/g).pop().split('.')[0]} enter={props.enter} />
            </div>

            <div className="gallerypage-gallery-row">
                <Comp7 image={Content.gallery.machineError[0]} info={Content.gallery.machineError[0].props.src.split(/(\\|\/)/g).pop().split('.')[0]} enter={props.enter} />
                <Comp7 image={Content.gallery.machineError[1]} info={Content.gallery.machineError[1].props.src.split(/(\\|\/)/g).pop().split('.')[0]} enter={props.enter} />
            </div>

            <br />

            <div ref={textureFieldsRef} className="gallerypage-layout-width flex-center"><h2>Texture Fields</h2></div>
            
            <div className="gallerypage-gallery-row">
                <Comp7 image={Content.gallery.textureFields[1]} info={Content.gallery.textureFields[1].props.src.split(/(\\|\/)/g).pop().split('.')[0]} enter={props.enter} />
                <Comp7 image={Content.gallery.textureFields[2]} info={Content.gallery.textureFields[2].props.src.split(/(\\|\/)/g).pop().split('.')[0]} enter={props.enter} />
            </div>

            <div className="gallerypage-gallery-row">
                <Comp7 image={Content.gallery.textureFields[3]} info={Content.gallery.textureFields[3].props.src.split(/(\\|\/)/g).pop().split('.')[0]} enter={props.enter} />
                <Comp7 image={Content.gallery.textureFields[5]} info={Content.gallery.textureFields[5].props.src.split(/(\\|\/)/g).pop().split('.')[0]} enter={props.enter} />
            </div>

            <div className="gallerypage-gallery-row">
                <Comp7 image={Content.gallery.textureFields[0]} info={Content.gallery.textureFields[0].props.src.split(/(\\|\/)/g).pop().split('.')[0]} enter={props.enter} />
                <Comp7 image={Content.gallery.textureFields[4]} info={Content.gallery.textureFields[4].props.src.split(/(\\|\/)/g).pop().split('.')[0]} enter={props.enter} />
            </div>

        </div>
    )
}

export { GalleryPage }