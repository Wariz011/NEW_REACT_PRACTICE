import "./gallery.css";
function Gallerypage() {
  const gallery = [
    {
      id: 1,
      image:"https://images.unsplash.com/photo-1770873263537-fbb8d39b6103?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      image:"https://plus.unsplash.com/premium_photo-1677560517139-1836389bf843?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
    },
    {
      id: 3,
      image:"https://images.unsplash.com/photo-1772202289452-e9e87552527a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 4,
      image:"https://plus.unsplash.com/premium_photo-1772029998902-caf64709122d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D"
    },
  ]
  const second_gallery = [
    {
      id: 5,
      image:"https://images.unsplash.com/photo-1773743225175-bf2ffc503af4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8"
    },
    {
      id: 6,
      image:"https://images.unsplash.com/photo-1773645451271-cdc31a13a37c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"
    },
    {
      id: 7,
      image:"https://images.unsplash.com/photo-1773982055669-b537fd6d010c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8"
    },
    {
      id: 8,
      image:"https://plus.unsplash.com/premium_photo-1773277358595-bf62436f9aea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D"
    },
  ]
  const third_gallery = [
    {
      id: 9,
      image:"https://images.unsplash.com/photo-1774009485852-13a515d32e36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 10,
      image:"https://images.unsplash.com/photo-1774129126134-7fee55478cdc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 11,
      image:"https://plus.unsplash.com/premium_photo-1771923042183-f49ad313f354?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 12,
      image:"https://images.unsplash.com/photo-1774142532286-2ae46f0c3563?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D"
    },
  ]
  const fourth_gallery = [
    {
      id: 13,
      image:"https://images.unsplash.com/photo-1774035035189-32043bae4c88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 14,
      image:"https://images.unsplash.com/photo-1773577822818-2787811552ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
    },
    {
      id: 15,
      image:"https://images.unsplash.com/photo-1773993392678-cfb1fe478591?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 16,
      image:"https://plus.unsplash.com/premium_photo-1675014768115-bc56913eeb9c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
    },
  ]
  const fifth_gallery = [
    {
      id: 17,
      image:"https://images.unsplash.com/photo-1773402315969-6f492837d198?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 18,
      image:"https://images.unsplash.com/photo-1774017082273-4dccd73da6aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 19,
      image:"https://images.unsplash.com/photo-1761839257658-23502c67f6d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 20,
      image:"https://images.unsplash.com/photo-1773820681050-0a836221436a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2OHx8fGVufDB8fHx8fA%3D%3D"
    },
  ]
  const six_gallery = [
    {
      id: 21,
      image:"https://images.unsplash.com/photo-1773746685112-647c4f81344c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8"
    },
    {
      id: 22,
      image:"https://plus.unsplash.com/premium_photo-1692049124290-528e5f92a523?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TmF0dXJlJTIwcGhvdG9zfGVufDB8fDB8fHww"
    },
    {
      id: 23,
      image:"https://images.unsplash.com/photo-1773723055881-6bd2a4f85cea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 24,
      image:"https://images.unsplash.com/photo-1445264718234-a623be589d37?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TmF0dXJlJTIwcGhvdG9zfGVufDB8fDB8fHww"
    },
  ]
  return (
    <div className="gallery-container">
      <h1 className="gallery-heading">Portrait Gallery</h1>
      <div className="gallery">
        {
          gallery.map(function(gallery){
          return(
            <div>
          <div className="images">
          <div ><img className="portrait " src={gallery.image} alt="" /></div>
          <div className="layover"></div>
        </div>
        </div>
          )
          })
        }
      </div>
        <div className="gallery">
          {
            second_gallery.map(function(gallery){
              return(
              <div>
            <div className="images">
            <div ><img className="portrait " src={gallery.image} alt="" /></div>
            <div className="layover"></div>
          </div>
                </div>
              )
            })
          }
        </div>
        <div className="gallery">
          {
            third_gallery.map(function(gallery){
              return(
              <div>
            <div className="images">
            <div ><img className="portrait " src={gallery.image} alt="" /></div>
            <div className="layover"></div>
          </div>
                </div>
              )
            })
          }
        </div>
        <div className="gallery">
          {
            fourth_gallery.map(function(gallery){
              return(
              <div>
            <div className="images">
            <div ><img className="portrait " src={gallery.image} alt="" /></div>
            <div className="layover"></div>
          </div>
                </div>
              )
            })
          }
        </div>
        <div className="gallery">
          {
            fifth_gallery.map(function(gallery){
              return(
              <div>
            <div className="images">
            <div ><img className="portrait " src={gallery.image} alt="" /></div>
            <div className="layover"></div>
          </div>
                </div>
              )
            })
          }
        </div>
        <div className="gallery">
          {
            six_gallery.map(function(gallery){
              return(
                <div>
                <div className="images">
            <div ><img className="portrait" src={gallery.image} alt="" /></div>
            <div className="layover"></div>
            </div>
                </div>
              )
            })
          }
        </div>
    </div>
  );
}

export default Gallerypage;
