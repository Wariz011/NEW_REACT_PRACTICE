import './footer.css'
import { CiHeart } from "react-icons/ci";
function Footerpage(){
    return(
        <div>
            <div className="footer">
                <div className="footer-body">
                    <p className='text-footer'>Copyright ©2026 All rights reserved | This template is made with  by <CiHeart className='heart-icon' /> <span>Colorlib</span></p>
                </div>
            </div>
        </div>
    )
}
export default Footerpage;