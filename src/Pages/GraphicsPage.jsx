import React from 'react';
import { GraphicsContent as Content } from '../ContentPropModules/GraphicsContent';

const GraphicsPage = (props) => {
    return (
        <div id="graphicspage" className="page-content">
            <div id="graphics-section-card-gallery" className="content-container shadow-behind container-first graphicspage-layout-width">
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
            <div id="graphics-section-card-discussion" className="content-container shadow-behind graphicspage-layout-width">
                <div className="flex-center">
                    <h3 className="underline text-x-large">Discussion</h3>
                </div>
            </div>
            <div id="graphics-section-card-discussion" className="content-container shadow-behind container-last graphicspage-layout-width">
                {Content.discussion}
            </div>
        </div>
    )
}

export { GraphicsPage }