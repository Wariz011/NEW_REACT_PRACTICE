import './homepage.css'
import { CiHeart } from "react-icons/ci";
function Homepage(){
    const images = [
        {
            id:1,
            title: "Nature",
            Image: "https://images.unsplash.com/photo-1745758278817-90f97fb6db98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QSUyMHdvbWFuJTIwaG9sZCUyMGElMjBjbGlwYm9hcmR8ZW58MHx8MHx8fDA%3D",
        },
        {
            id:2,
            title: "Portrait",
            Image: "https://images.unsplash.com/photo-1741805190677-699163f75635?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFjaWVudCUyMHdvbWFufGVufDB8fDB8fHww",
        },
        {
            id:3,
            title:"People",
            Image: "https://images.unsplash.com/photo-1752317591841-bbca8ed3eb0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFjaWVudCUyMHdvbWFufGVufDB8fDB8fHww",
        },
    ]
    const image = [
        {
            id:4,
            title: "Architecture",
            Image: "https://plus.unsplash.com/premium_photo-1731951687922-1bb9d7722a49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9vayUyMGltYWdlfGVufDB8fDB8fHww",
        },
        {
            id:5,
            title:"Animal",
            Image: "https://plus.unsplash.com/premium_photo-1744851724383-2c7eb110ae1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW4lMjBsYXlpbmclMjBvbiUyMHRoZSUyMGZsb29yfGVufDB8fDB8fHww",
        },
        {
            id:6,
            title:"Sport",
            Image: "https://images.unsplash.com/photo-1625019030820-e4ed970a6c95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YSUyMG1hbiUyMHNtaWxpbmd8ZW58MHx8MHx8fDA%3D",
        }
    ]
    const img = [
        {
            id:7,
            title:"Travel",
            Image: "https://images.unsplash.com/photo-1741746720775-dcd899dfb32e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEElMjBtYW4lMjBhbmQlMjBoaXMlMjB3aWZlJTIwbG9va2luZyUyMHNhZCUyMGF0JTIwdGhlaXIlMjB3ZWRkaW5nfGVufDB8fDB8fHww",
        },
        {
            id:8,
            title:"People",
            Image: "https://plus.unsplash.com/premium_photo-1731951687922-1bb9d7722a49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9vayUyMGltYWdlfGVufDB8fDB8fHww",
        },
        {
            id:9,
            title:"Architecture",
            Image: "https://images.unsplash.com/photo-1752317591841-bbca8ed3eb0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFjaWVudCUyMHdvbWFufGVufDB8fDB8fHww",
        },
    ]
    return(
    <div className='container'>
        <div className="first-img">
            {
                images.map(function(image){
                    return(
            <div className='image'>
                <div><img  className='bg' src= {image.Image} alt="" /></div>
                <div className="overlay">
                    <h2 className='text-heading'>{image.title}</h2>
                <button type='button' className='click-button'>More Photos</button>
            </div>
        </div>
                    )
                })
            }
        </div>
        <div className="second-img">
            {
                image.map(function(images){
                    return(
                        <div className='image'>
                <div><img  className='bg' src= {images.Image} alt="" /></div>
                <div className="overlay">
                    <h2 className='text-heading'>Nature</h2>
                <button type='button' className='click-button'>More Photos</button>
            </div>
        </div>
                    )
                })
            }
        </div>
        <div className="third-img">
            {
                img.map((image)=>{
                    return(
                <div className='image'>
                <div><img  className='bg' src= {image.Image} alt="" /></div>
                <div className="overlay">
                    <h2 className='text-heading'>Nature</h2>
                <button type='button' className='click-button'>More Photos</button>
            </div>
            </div>
                    )
                })
            }
        </div>
    </div>
    )
}
export default Homepage;