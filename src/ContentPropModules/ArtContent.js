import Forefront1 from '../Images/ArtPageImages/Forefront/jpg/Feathered-Plant.jpg';
import Forefront2 from '../Images/ArtPageImages/Forefront/jpg/In-Organic.jpg';

import MachineError1 from '../Images/ArtPageImages/MachineError/jpg/A-Fracture_6.jpg';
import MachineError2 from '../Images/ArtPageImages/MachineError/jpg/A-Scan_4.jpg';
import MachineError3 from '../Images/ArtPageImages/MachineError/jpg/B-Structure_4.jpg';
import MachineError4 from '../Images/ArtPageImages/MachineError/jpg/C-Scan_8.jpg';

import TextureFields1 from '../Images/ArtPageImages/TextureFields/jpg/Calc.jpg';
import TextureFields2 from '../Images/ArtPageImages/TextureFields/jpg/Dream-Point-Scape.jpg';
import TextureFields3 from '../Images/ArtPageImages/TextureFields/jpg/Err-Sec.jpg';
import TextureFields4 from '../Images/ArtPageImages/TextureFields/jpg/Motor-Tome.jpg';
import TextureFields5 from '../Images/ArtPageImages/TextureFields/jpg/Neon-Crust.jpg';
import TextureFields6 from '../Images/ArtPageImages/TextureFields/jpg/Qua.jpg';
import TextureFields7 from '../Images/ArtPageImages/TextureFields/jpg/Stone-Dance.jpg';
import TextureFields8 from '../Images/ArtPageImages/TextureFields/jpg/The-One-with-the-Orange-Band.jpg';


const ArtContent = {
    gallery: {
        forefront: [
            <img className="gallery-image" src={Forefront1} alt="gallery" width={"100%"} tabIndex={0} />,
            <img className="gallery-image" src={Forefront2} alt="gallery" width={"100%"} tabIndex={0} />,
        ],
        machineError: [
            <img className="gallery-image" src={MachineError1} alt="gallery" width={"100%"} tabIndex={0} />,
            <img className="gallery-image" src={MachineError2} alt="gallery" width={"100%"} tabIndex={0} />,
            <img className="gallery-image" src={MachineError3} alt="gallery" width={"100%"} tabIndex={0} />,
            <img className="gallery-image" src={MachineError4} alt="gallery" width={"100%"} tabIndex={0} />,
        ],
        textureFields: [
            <img className="gallery-image" src={TextureFields1} alt="gallery" width={"100%"} tabIndex={0} />,
            <img className="gallery-image" src={TextureFields2} alt="gallery" width={"100%"} tabIndex={0} />,
            <img className="gallery-image" src={TextureFields3} alt="gallery" width={"100%"} tabIndex={0} />,
            <img className="gallery-image" src={TextureFields4} alt="gallery" width={"100%"} tabIndex={0} />,
            <img className="gallery-image" src={TextureFields5} alt="gallery" width={"100%"} tabIndex={0} />,
            <img className="gallery-image" src={TextureFields6} alt="gallery" width={"100%"} tabIndex={0} />,
            <img className="gallery-image" src={TextureFields7} alt="gallery" width={"100%"} tabIndex={0} />,
            <img className="gallery-image" src={TextureFields8} alt="gallery" width={"100%"} tabIndex={0} />,
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