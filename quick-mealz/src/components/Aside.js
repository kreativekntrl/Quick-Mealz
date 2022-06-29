import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';

const Aside = () => {
    return (
        <div>   
            <img src={img1} alt="food" style={{width: "100%", height: "auto", paddingBottom: "8px", borderRadius: "5px"}}>
            </img>
            <img src={img2} alt="food" style={{width: "100%", height: "auto", paddingBottom: "8px", borderRadius: "5px"}}>
            </img>
            <img src={img3} alt="food" style={{width: "100%", height: "auto", borderRadius: "5px"}}>
            </img>
        </div>  
    );  
}

export default Aside;