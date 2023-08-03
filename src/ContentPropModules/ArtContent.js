import Forefront1 from '../Images/ArtPageImages/Forefront/png/Feathered-Plant.png';
import Forefront2 from '../Images/ArtPageImages/Forefront/png/In-Organic.png';

import MachineError1 from '../Images/ArtPageImages/MachineError/png/A-Fracture_6.png';
import MachineError2 from '../Images/ArtPageImages/MachineError/png/C-Fracture_1.png';

import TextureFields1 from '../Images/ArtPageImages/TextureFields/png/Calc.png';
import TextureFields2 from '../Images/ArtPageImages/TextureFields/png/Dream-Point-Scape.png';
import TextureFields3 from '../Images/ArtPageImages/TextureFields/png/Motor-Tome.png';
import TextureFields4 from '../Images/ArtPageImages/TextureFields/png/Qua.png';
import TextureFields5 from '../Images/ArtPageImages/TextureFields/png/The-One-with-the-Orange-Band.png';


const ArtContent = {
    gallery: {
        forefront: [
            <img className="gallery-image" src={Forefront1} alt="gallery" width={"100%"} tabIndex={0}/>,
            <img className="gallery-image" src={Forefront2} alt="gallery" width={"100%"} tabIndex={0}/>,
        ],
        machineError: [
            <img className="gallery-image" src={MachineError1} alt="gallery" width={"100%"} tabIndex={0}/>,
            <img className="gallery-image" src={MachineError2} alt="gallery" width={"100%"} tabIndex={0}/>,
        ],
        textureFields: [
            <img className="gallery-image" src={TextureFields1} alt="gallery" width={"100%"} tabIndex={0}/>,
            <img className="gallery-image" src={TextureFields2} alt="gallery" width={"100%"} tabIndex={0}/>,
            <img className="gallery-image" src={TextureFields3} alt="gallery" width={"100%"} tabIndex={0}/>,
            <img className="gallery-image" src={TextureFields4} alt="gallery" width={"100%"} tabIndex={0}/>,
            <img className="gallery-image" src={TextureFields5} alt="gallery" width={"100%"} tabIndex={0}/>,
        ],
    },
    origami: [
        {
            name: <div>
                <p><b>Octopus</b></p>
            </div>,
            image1: <div>
                <img className="img-origami" src="" alt="origami-octopus" />
            </div>,
            image2: <div>
            </div>,
            describe: <div>
                <p>The octopus isn't something you might have thought to make out of paper, because paper is rigid and octopi are charactaristically flexible, but that just makes designing the model all the more interesting! Essentially, an octopus can be made out of a paper square by dividing the square into quadrants and using a technique called box-pleating for each quadrant, where one center box and and its diagonal opposite are halved, so that the arms that end in the corners are equal in length to those that end at the midpoint of the paper's edge, and finally using the remaining two center boxes to make the eyes.</p>
            </div>
        },
        {
            name: <div>
                <p><b>Seahorse</b></p>
            </div>,
            image1: <div>
                <img className="img-origami" src="" alt="origami-seahorse" />
            </div>,
            image2: <div>
            </div>,
            describe: <div>
                <p>The seahorse model is one that is surprisingly simple due to the bilateral symmetry of seahorse morphology. It begins with the triangle base. What is nice about this model is that the basic shape is so simple to create that much of the character in each instance of the model comes from subtler methods like shaping the head, pleating the fins to give them ridges, and angling the tail to give the seahorse some personality.</p>
            </div>
        },
    ],
};
export { ArtContent };