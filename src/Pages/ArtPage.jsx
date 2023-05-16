import React from 'react';
import { ArtContent as Content } from '../ContentPropModules/ArtContent';
import { Comp5 } from '../RenderComp/Comp5';
import { Comp6 } from '../RenderComp/Comp6';
import { Comp7 } from '../RenderComp/Comp7';

const ArtPage = (text) => {
    return (
        <div id="artpage" className="page-content">

            <Comp6 title={"Gallery"} containerFirst={"container-first"}/>

            {/* Row 0 */}
            <Comp7 image={Content.gallery[0]} galleryColumn={"gallery-image-column-0"}/>
            <Comp7 image={Content.gallery[1]} galleryColumn={"gallery-image-column-1"}/>
            <Comp7 image={Content.gallery[2]} galleryColumn={"gallery-image-column-2"}/>
            <Comp7 image={Content.gallery[3]} galleryColumn={"gallery-image-column-3"}/>
            {/* Row 1 */}
            <Comp7 image={Content.gallery[4]} galleryColumn={"gallery-image-column-0"}/>
            <Comp7 image={Content.gallery[5]} galleryColumn={"gallery-image-column-1"}/>
            <Comp7 image={Content.gallery[6]} galleryColumn={"gallery-image-column-2"}/>
            <Comp7 image={Content.gallery[7]} galleryColumn={"gallery-image-column-3"}/>

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

            <Comp6 title={"Discussion"} />

            <div id="art-section-card-discussion" className="content-container container-last artpage-layout-width middle-text">
                <div tabIndex={0}>{Content.discussion}</div>
            </div>
        </div>
    )
}

export { ArtPage }