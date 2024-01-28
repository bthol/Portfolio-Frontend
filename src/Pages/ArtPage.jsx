import React from 'react';
import { ArtContent as Content } from '../ContentPropModules/ArtContent';
import { Comp5 } from '../RenderComp/Comp5';
import { Comp6 } from '../RenderComp/Comp6';
import { Comp7 } from '../RenderComp/Comp7';

const ArtPage = (props) => {
    return (
        <div id="artpage" className="page-content">

            <Comp6 title={"Forefront"} containerFirst={"container-first"} />

            <div className="artpage-gallery-row">
                <Comp7 image={Content.gallery.forefront[0]} info={Content.gallery.forefront[0].props.src.split(/(\\|\/)/g).pop().split('.')[0]} enter={props.enter} />
                <Comp7 image={Content.gallery.forefront[1]} info={Content.gallery.forefront[1].props.src.split(/(\\|\/)/g).pop().split('.')[0]} enter={props.enter} />
            </div>

            <Comp6 title={"Machine Error"} />

            <div className="artpage-gallery-row">
                <Comp7 image={Content.gallery.machineError[3]} info={Content.gallery.machineError[3].props.src.split(/(\\|\/)/g).pop().split('.')[0]} enter={props.enter} />
                <Comp7 image={Content.gallery.machineError[2]} info={Content.gallery.machineError[2].props.src.split(/(\\|\/)/g).pop().split('.')[0]} enter={props.enter} />
            </div>

            <div className="artpage-gallery-row">
                <Comp7 image={Content.gallery.machineError[0]} info={Content.gallery.machineError[0].props.src.split(/(\\|\/)/g).pop().split('.')[0]} enter={props.enter} />
                <Comp7 image={Content.gallery.machineError[1]} info={Content.gallery.machineError[1].props.src.split(/(\\|\/)/g).pop().split('.')[0]} enter={props.enter} />
            </div>

            <Comp6 title={"Texture Fields"} />

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