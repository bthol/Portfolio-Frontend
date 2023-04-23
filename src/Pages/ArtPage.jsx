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

            <div className="content-container artpage-layout-width fx3d">
                <div className="flex-center">
                    <div className="text-x-large title-layout-pad">Origami</div>
                </div>
            </div>

            <div className="artpage-layout-width origami-grid-layout">
                <div className="origami-grid-images">
                    {Content.origami[0].image1}
                    {Content.origami[0].image2}
                </div>
                <div className="content-container">
                    {Content.origami[0].name}
                    {Content.origami[0].describe}
                </div>
            </div>

            <div className="artpage-layout-width origami-grid-layout">
                <div>
                    {Content.origami[1].image1}
                    {Content.origami[1].image2}
                </div>
                <div className="content-container">
                    {Content.origami[1].name}
                    {Content.origami[1].describe}
                </div>
            </div>
            
            <div className="artpage-layout-width origami-grid-layout">
                <div>
                    {Content.origami[2].image1}
                    {Content.origami[2].image2}
                </div>
                <div className="content-container">
                    {Content.origami[2].name}
                    {Content.origami[2].describe}
                </div>
            </div>

            <div className="content-container artpage-layout-width fx3d">
                <div className="flex-center">
                    <div className="text-x-large title-layout-pad">Discussion</div>
                </div>
            </div>

            <div id="art-section-card-discussion" className="content-container container-last artpage-layout-width middle-text">
                {Content.discussion}
            </div>
        </div>
    )
}

export { ArtPage }