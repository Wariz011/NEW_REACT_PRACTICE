import './about.css'
import { IoLogoTwitter } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
function Aboutpage(){
    return(
        <div className="bigbox">
            <div className="bigbox-content">
                <div className="img"></div>
            
            <div className="bigbox-body">
                <h1 className="bigbox-heading">My Mission</h1>
                <p className="bigbox-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus vel tenetur explicabo necessitatibus, ad soluta consectetur illo qui voluptatem. Quis soluta maiores eum. Iste modi voluptatum in repudiandae fugiat suscipit dolorum harum, porro voluptate quis? Alias repudiandae dicta doloremque voluptates soluta repellendus, unde laborum quo nam, ullam facere voluptatem similique.
                </p>
                <p className="bigbox-subtext">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor 
                    architecto excepturi aliquid minus nostrum dicta labore iusto 
                    obcaecati fugit cupiditate.
                </p>
            </div>
            </div>
            <div className="portfolio">
                <div className="user">
                    <div className="image-content">
                        <div id="user-img-1" className='scales'></div>
                    </div>
                <div className="user-header">
                    <h1 className='user-heading'>Jean Smith</h1>
                </div>
                <div className="user-body">
                    <p className='user-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur 
                        ab quas facilis obcaecati non ea, est odit repellat distinctio 
                        incidunt, quia aliquam eveniet quod deleniti impedit sapiente 
                        atque tenetur porro?</p>
                </div>
                <div className="user-logo">
                    <div className="user-icon"><IoLogoTwitter /></div>
                    <div className="user-icon"><FaInstagram /></div>
                    <div className="user-icon"><FaFacebookF /></div>
                </div>
            </div>
            <div className="user">
                <div className="image-content">
                        <div id="user-img-2" className='scales'></div>
                    </div>
                <div className="user-header">
                    <h1 className='user-heading'>Claire Smith</h1>
                </div>
                <div className="user-body">
                    <p className='user-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur 
                        ab quas facilis obcaecati non ea, est odit repellat distinctio 
                        incidunt, quia aliquam eveniet quod deleniti impedit sapiente 
                        atque tenetur porro?</p>
                </div>
                <div className="user-logo">
                    <div className="user-icon"><IoLogoTwitter /></div>
                    <div className="user-icon"><FaInstagram /></div>
                    <div className="user-icon"><FaFacebookF /></div>
                </div>
            </div>
            <div className="user">
                <div className="image-content">
                        <div id="user-img-3" className='scales'></div>
                    </div>
                <div className="user-header">
                    <h1 className='user-heading'>John Smith</h1>
                </div>
                <div className="user-body">
                    <p className='user-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur 
                        ab quas facilis obcaecati non ea, est odit repellat distinctio 
                        incidunt, quia aliquam eveniet quod deleniti impedit sapiente 
                        atque tenetur porro?</p>
                </div>
                <div className="user-logo">
                    <div className="user-icon"><IoLogoTwitter /></div>
                    <div className="user-icon"><FaInstagram /></div>
                    <div className="user-icon"><FaFacebookF /></div>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Aboutpage;