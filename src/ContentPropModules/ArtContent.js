import img1 from '../Images/ArtPageImages/Dream-Point-Scape.jpg';
import img2 from '../Images/ArtPageImages/Feathered-Plant.jpg';
import img3 from '../Images/ArtPageImages/Frame-of-Sight.jpg';
import img4 from '../Images/ArtPageImages/Qua.jpg';
import img5 from '../Images/ArtPageImages/The-One-with-the-Orange-Band.png';
import img6 from '../Images/ArtPageImages/err+.jpg';

const ArtContent = {
    gallery: [
        <img className="gallery-image  hover-effect" src={img1} alt="gallery" width={"100%"} tabIndex={0}/>,
        <img className="gallery-image hover-effect" src={img2} alt="gallery" width={"100%"} tabIndex={0}/>,
        <img className="gallery-image hover-effect" src={img3} alt="gallery" width={"100%"} tabIndex={0}/>,
        <img className="gallery-image hover-effect" src={img4} alt="gallery" width={"100%"} tabIndex={0}/>,
        <img className="gallery-image hover-effect" src={img5} alt="gallery" width={"100%"} tabIndex={0}/>,
        <img className="gallery-image hover-effect" src={img6} alt="gallery" width={"100%"} tabIndex={0}/>,
    ],
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
                <p>The octopus isn't something you might have thought to make out of paper, because paper is rigid and octopuses are charactaristically flexible, but that just makes designing the model all the more interesting! Essentially, an octopus can be made out of a paper square by dividing the square into quadrants and using a technique called box-pleating for each quadrant, where one center box and and its diagonal opposite are halved, so that the arms that end in the corners are equal in length to those that end at the midpoint of the paper's edge, and finally using the remaining two center boxes to make the eyes.</p>
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
    discussion: <div>
        <p className="indent">I have always been enamored by details, and, contrary to many people who do art when they are younger, my interest in art hasn't waned a bit. In fact, I get more interested in art the older I get. As I find more techniques and more mediums to express the urge to create, I find more reasons to be creative.</p>
    </div>,
};
export { ArtContent };