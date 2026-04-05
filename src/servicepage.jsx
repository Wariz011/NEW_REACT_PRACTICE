import './servicepage.css';
import { FaPhotoFilm } from "react-icons/fa6";
import { CiCamera } from "react-icons/ci";
import { GiGoat } from "react-icons/gi";
import { FaImagePortrait } from "react-icons/fa6";
import { LuTowerControl } from "react-icons/lu";
import { MdOutlineVideoSettings } from "react-icons/md";
function Servicepage(){
    return(
        <div className="service-container">
            <h1 className="service-heading">My Service</h1>
            <div className="service">
                <div className="content">
                    <div className="logos"><CiCamera /></div>
                    <div className="cameral-header">
                        <h2 className="heading">Cameral</h2>
                    </div>
                    <div className="cameral-body">
                        <div className="text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum exercitationem quae id dolorum debitis.
                        </div>
                    </div>
                    <div className="cameral-footer">
                        <h5 className="price">$29</h5>
                    </div>
                </div>
                <div className="content">
                    <div className="logos"><FaPhotoFilm /></div>
                    <div className="wedding-header">
                        <h2 className="heading">Wedding Photography</h2>
                    </div>
                    <div className="wedding-body">
                        <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum exercitationem quae id dolorum debitis.</p>
                    </div>
                    <div className="wedding-footer">
                        <h5 className="price">$46</h5>
                    </div>
                </div>
                <div className="content">
                    <div className="logos"><GiGoat /></div>
                    <div className="animal-header">
                        <h2 className="heading">Animal</h2>
                    </div>
                    <div className="animal-body">
                        <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum exercitationem quae id dolorum debitis.</p>
                    </div>
                    <div className="animal-footer">
                        <h5 className="price">$24</h5>
                    </div>
                </div>
            </div>
            <div className="service">
                <div className="content">
                    <div className="logos"><FaImagePortrait /></div>
                    <div className="cameral-header">
                        <h2 className="heading">Portrait</h2>
                    </div>
                    <div className="cameral-body">
                        <div className="text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum exercitationem quae id dolorum debitis.
                        </div>
                    </div>
                    <div className="cameral-footer">
                        <h5 className="price">$40</h5>
                    </div>
                </div>
                <div className="content">
                    <div className="logos"><LuTowerControl /></div>
                    <div className="wedding-header">
                        <h2 className="heading">Travle</h2>
                    </div>
                    <div className="wedding-body">
                        <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum exercitationem quae id dolorum debitis.</p>
                    </div>
                    <div className="wedding-footer">
                        <h5 className="price">$35</h5>
                    </div>
                </div>
                <div className="content">
                    <div className="logos"><MdOutlineVideoSettings /></div>
                    <div className="animal-header">
                        <h2 className="heading">Video Editing</h2>
                    </div>
                    <div className="animal-body">
                        <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum exercitationem quae id dolorum debitis.</p>
                    </div>
                    <div className="animal-footer">
                        <h5 className="price">$15</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Servicepage;