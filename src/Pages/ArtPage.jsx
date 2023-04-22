import React from 'react';
import { ArtContent as Content } from '../ContentPropModules/ArtContent';

const ArtPage = (props) => {
    return (
        <div id="artpage" className="page-content">

            <div className="content-container container-first artpage-layout-width fx3d">
                <div className="flex-center">
                    <div className="text-x-large title-layout-pad">Gallery</div>
                </div>
            </div>

            <div className="gallery-image gallery-image-column-1">
                <img src="" alt="img1" />
            </div>
            <div className="gallery-image gallery-image-column-2">
                <img src="" alt="img2" />
            </div>
            <div className="gallery-image gallery-image-column-3">
                <img src="" alt="img3" />
            </div>
            <div className="gallery-image gallery-image-column-4">
                <img src="" alt="img4" />
            </div>
            <div className="gallery-image gallery-image-column-1">
                <img src="" alt="img1" />
            </div>
            <div className="gallery-image gallery-image-column-2">
                <img src="" alt="img2" />
            </div>
            <div className="gallery-image gallery-image-column-3">
                <img src="" alt="img3" />
            </div>
            <div className="gallery-image gallery-image-column-4">
                <img src="" alt="img4" />
            </div>

            <div className="content-container artpage-layout-width fx3d">
                <div className="flex-center">
                    <div className="text-x-large title-layout-pad">Origami</div>
                </div>
            </div>

            <div className="art-origami-model artpage-layout-width flex-center">
                <div>
                    {Content.origami[0].image1}
                    {Content.origami[0].image2}
                </div>
                <div className="content-container">
                    {Content.origami[0].name}
                    {Content.origami[0].describe}
                </div>
            </div>

            <div className="content-container artpage-layout-width fx3d">
                <div className="flex-center">
                    <div className="text-x-large title-layout-pad">Discussion</div>
                </div>
            </div>

            <div id="art-section-card-discussion" className="content-container container-last artpage-layout-width">
                {Content.discussion}
            </div>
        </div>
    )
}

export { ArtPage }