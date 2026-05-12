import Forefront1 from '../Images/ArtPageImages/Forefront/Feathered-Plant.jpg';
import Forefront2 from '../Images/ArtPageImages/Forefront/In-Organic.jpg';

import MachineError1 from '../Images/ArtPageImages/MachineError/A-Fracture_6.jpg';
import MachineError2 from '../Images/ArtPageImages/MachineError/A-Scan_4.jpg';
import MachineError3 from '../Images/ArtPageImages/MachineError/B-Structure_4.jpg';
import MachineError4 from '../Images/ArtPageImages/MachineError/C-Scan_8.jpg';

import TextureFields1 from '../Images/ArtPageImages/TextureFields/Dream-Point-Scape.jpg';
import TextureFields2 from '../Images/ArtPageImages/TextureFields/Motor-Tome.jpg';
import TextureFields3 from '../Images/ArtPageImages/TextureFields/Neon-Crust.jpg';
import TextureFields4 from '../Images/ArtPageImages/TextureFields/Aqua-Tile.jpg';
import TextureFields5 from '../Images/ArtPageImages/TextureFields/Stone-Dance.jpg';
import TextureFields6 from '../Images/ArtPageImages/TextureFields/The-One-with-the-Orange-Band.jpg';

// module containing static data
// dynamic data is in jsx page

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
        ],
    },
};
export { ArtContent };