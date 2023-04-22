import React from 'react';
import { ArtContent as Content } from '../ContentPropModules/ArtContent';

const ArtPage = (props) => {
    return (
        <div id="artpage" className="page-content">
            <div className="content-container shadow-behind container-first artpage-layout-width fx3d">
                <div className="flex-center">
                    <h3 className="underline text-x-large">Gallery</h3>
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
            <div className="content-container artpage-layout-width shadow-behind">
                <div className="flex-center">
                    <h3 className="underline text-x-large">Origami</h3>
                </div>
            </div>
            <div className="art-origami-model artpage-layout-width flex-center">
                <div className="gallery-image">
                    <img src="" alt="img-origami-1" />
                </div>
                <div className="content-container fade-left">
                    <p><b>Octopus</b></p>
                    <p>The octopus isn't something you might of thought to make out of paper, because paper is rigid and octopuses are charactaristically flexible to the extant that they are nearly amorphous, but that just makes designing the model all the more interesting!</p>
                </div>
            </div>
            <div className="content-container artpage-layout-width shadow-behind ">
                <div className="flex-center">
                    <h3 className="underline text-x-large">Discussion</h3>
                </div>
            </div>
            <div id="art-section-card-discussion" className="content-container shadow-behind container-last artpage-layout-width">
                {Content.discussion}
            </div>
        </div>
    )
}

export { ArtPage }