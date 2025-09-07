import React, { useRef, useCallback } from 'react';
import { ArtContent as Content } from '../ContentModules/ArtContent';
// import { Comp5 } from '../Components/Comp5';
import { Comp6 } from '../Components/Comp6';
import { Comp7 } from '../Components/Comp7';

const ArtPage = (props) => {
    // section refs
    const forefrontRef = useRef(null);
    const machineErrorRef = useRef(null);
    const textureFieldsRef = useRef(null);

    const scrollManeuver = useCallback((ref) => {
        // scrolls current value of given ref to view
        ref.current.scrollIntoView({behavior: "smooth"});
    }, []);

    const links = {
        gallery: <div>
            <div className="drop link-desat fade-left" onClick={() => {
                scrollManeuver(forefrontRef);
            }}>Forefront</div>

            <div className="drop link-desat fade-left" onClick={() => {
                scrollManeuver(machineErrorRef);
            }}>Machine Error</div>

            <div className="drop link-desat fade-left" onClick={() => {
                scrollManeuver(textureFieldsRef);
            }}>Texture Fields</div>
        </div>,
    };

    return (
        <div id="artpage" className="page-content">

            <Comp6 title={"Gallery"} containerFirst={"container-first"} links={links.gallery}/>

            <div ref={forefrontRef} className="artpage-layout-width flex-center"><h2>Forefront</h2></div>

            <div className="artpage-gallery-row">
                <Comp7 image={Content.gallery.forefront[0]} info={Content.gallery.forefront[0].props.src.split(/(\\|\/)/g).pop().split('.')[0]} enter={props.enter} />
                <Comp7 image={Content.gallery.forefront[1]} info={Content.gallery.forefront[1].props.src.split(/(\\|\/)/g).pop().split('.')[0]} enter={props.enter} />
            </div>

            <br />

            <div ref={machineErrorRef} className="machine error-section artpage-layout-width flex-center"><h2>Machine Error</h2></div>
            
            <div className="artpage-gallery-row">
                <Comp7 image={Content.gallery.machineError[3]} info={Content.gallery.machineError[3].props.src.split(/(\\|\/)/g).pop().split('.')[0]} enter={props.enter} />
                <Comp7 image={Content.gallery.machineError[2]} info={Content.gallery.machineError[2].props.src.split(/(\\|\/)/g).pop().split('.')[0]} enter={props.enter} />
            </div>

            <div className="artpage-gallery-row">
                <Comp7 image={Content.gallery.machineError[0]} info={Content.gallery.machineError[0].props.src.split(/(\\|\/)/g).pop().split('.')[0]} enter={props.enter} />
                <Comp7 image={Content.gallery.machineError[1]} info={Content.gallery.machineError[1].props.src.split(/(\\|\/)/g).pop().split('.')[0]} enter={props.enter} />
            </div>

            <br />

            <div ref={textureFieldsRef} className="artpage-layout-width flex-center"><h2>Texture Fields</h2></div>
            
            <div className="artpage-gallery-row">
                <Comp7 image={Content.gallery.textureFields[1]} info={Content.gallery.textureFields[1].props.src.split(/(\\|\/)/g).pop().split('.')[0]} enter={props.enter} />
                <Comp7 image={Content.gallery.textureFields[2]} info={Content.gallery.textureFields[2].props.src.split(/(\\|\/)/g).pop().split('.')[0]} enter={props.enter} />
            </div>

            <div className="artpage-gallery-row">
                <Comp7 image={Content.gallery.textureFields[3]} info={Content.gallery.textureFields[3].props.src.split(/(\\|\/)/g).pop().split('.')[0]} enter={props.enter} />
                <Comp7 image={Content.gallery.textureFields[5]} info={Content.gallery.textureFields[5].props.src.split(/(\\|\/)/g).pop().split('.')[0]} enter={props.enter} />
            </div>

            <div className="artpage-gallery-row">
                <Comp7 image={Content.gallery.textureFields[0]} info={Content.gallery.textureFields[0].props.src.split(/(\\|\/)/g).pop().split('.')[0]} enter={props.enter} />
                <Comp7 image={Content.gallery.textureFields[4]} info={Content.gallery.textureFields[4].props.src.split(/(\\|\/)/g).pop().split('.')[0]} enter={props.enter} />
            </div>

            {/* <Comp6 title={"Origami"} />

            <Comp5
                name={Content.origami[0].name}
                image1={Content.origami[0].image1}
                image2={Content.origami[0].image2}
                describe={Content.origami[0].describe}
            />
            <Comp5
                name={Content.origami[1].name}
                image1={Content.origami[1].image1}
                image2={Content.origami[1].image2}
                describe={Content.origami[1].describe}
            /> */}

        </div>
    )
}

export { ArtPage }