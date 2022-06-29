import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';

const Aside = () => {
    return (
        <div>   
            <img src={img1} alt="food" style={{width: "100%", height: "auto"}}>
            </img>
            <img src={img2} alt="food" style={{width: "100%", height: "auto"}}>
            </img>
            <img src={img3} alt="food" style={{width: "100%", height: "auto"}}>
            </img>
        </div>
    );
}

export default Aside;