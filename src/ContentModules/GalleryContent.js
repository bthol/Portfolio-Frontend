import Forefront1 from '../Images/ArtPageImages/Forefront/Feathered-Plant.avif';
import Forefront2 from '../Images/ArtPageImages/Forefront/In-Organic.avif';

import MachineError1 from '../Images/ArtPageImages/MachineError/A-Fracture_6.avif';
import MachineError2 from '../Images/ArtPageImages/MachineError/A-Scan_4.avif';
import MachineError3 from '../Images/ArtPageImages/MachineError/B-Structure_4.avif';
import MachineError4 from '../Images/ArtPageImages/MachineError/C-Scan_8.avif';

import TextureFields1 from '../Images/ArtPageImages/TextureFields/Dream-Point-Scape.avif';
import TextureFields2 from '../Images/ArtPageImages/TextureFields/Motor-Tome.avif';
import TextureFields3 from '../Images/ArtPageImages/TextureFields/Neon-Crust.avif';
import TextureFields4 from '../Images/ArtPageImages/TextureFields/Aqua-Tile.avif';
import TextureFields5 from '../Images/ArtPageImages/TextureFields/Stone-Dance.avif';
import TextureFields6 from '../Images/ArtPageImages/TextureFields/The-One-with-the-Orange-Band.avif';

// module containing static data
// dynamic data is in jsx page

const ArtContent = {
    gallery: {
        forefront: [
            <img className="gallery-image" src={Forefront1} alt="gallery" width={"100%"} loading="lazy" tabIndex={0} />,
            <img className="gallery-image" src={Forefront2} alt="gallery" width={"100%"} loading="lazy" tabIndex={0} />,
        ],
        machineError: [
            <img className="gallery-image" src={MachineError1} alt="gallery" width={"100%"} loading="lazy" tabIndex={0} />,
            <img className="gallery-image" src={MachineError2} alt="gallery" width={"100%"} loading="lazy" tabIndex={0} />,
            <img className="gallery-image" src={MachineError3} alt="gallery" width={"100%"} loading="lazy" tabIndex={0} />,
            <img className="gallery-image" src={MachineError4} alt="gallery" width={"100%"} loading="lazy" tabIndex={0} />,
        ],
        textureFields: [
            <img className="gallery-image" src={TextureFields1} alt="gallery" width={"100%"} loading="lazy" tabIndex={0} />,
            <img className="gallery-image" src={TextureFields2} alt="gallery" width={"100%"} loading="lazy" tabIndex={0} />,
            <img className="gallery-image" src={TextureFields3} alt="gallery" width={"100%"} loading="lazy" tabIndex={0} />,
            <img className="gallery-image" src={TextureFields4} alt="gallery" width={"100%"} loading="lazy" tabIndex={0} />,
            <img className="gallery-image" src={TextureFields5} alt="gallery" width={"100%"} loading="lazy" tabIndex={0} />,
            <img className="gallery-image" src={TextureFields6} alt="gallery" width={"100%"} loading="lazy" tabIndex={0} />,
        ],
    },
};
export { ArtContent };