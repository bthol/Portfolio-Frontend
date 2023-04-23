import React from 'react';
import { ArtContent as Content } from '../ContentPropModules/ArtContent';
import { Comp5 } from '../RenderComp/Comp5';
import { Comp6 } from '../RenderComp/Com6';

const ArtPage = () => {
    return (
        <div id="artpage" className="page-content">

            <Comp6 title={"Gallery"} containerFirst={"container-first"}/>

            <div className="gallery-image gallery-image-column-1 hover-effect">
                <img src="" alt="img1" />
            </div>
            <div className="gallery-image gallery-image-column-2 hover-effect">
                <img src="" alt="img2" />
            </div>
            <div className="gallery-image gallery-image-column-3 hover-effect">
                <img src="" alt="img3" />
            </div>
            <div className="gallery-image gallery-image-column-4 hover-effect">
                <img src="" alt="img4" />
            </div>
            <div className="gallery-image gallery-image-column-1 hover-effect">
                <img src="" alt="img1" />
            </div>
            <div className="gallery-image gallery-image-column-2 hover-effect">
                <img src="" alt="img2" />
            </div>
            <div className="gallery-image gallery-image-column-3 hover-effect">
                <img src="" alt="img3" />
            </div>
            <div className="gallery-image gallery-image-column-4 hover-effect">
                <img src="" alt="img4" />
            </div>

            <Comp6 title={"Origami"} />

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
            />
            <Comp5
                name={Content.origami[2].name}
                image1={Content.origami[2].image1}
                image2={Content.origami[2].image2}
                describe={Content.origami[2].describe}
            />

            <Comp6 title={"Discussion"} />

            <div id="art-section-card-discussion" className="content-container container-last artpage-layout-width middle-text">
                {Content.discussion}
            </div>
        </div>
    )
}

export { ArtPage }