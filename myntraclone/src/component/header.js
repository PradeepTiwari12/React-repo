export default function Header(){
  return(
    <div className="Heading">
    <img className="images" src="https://tse4.mm.bing.net/th/id/OIP.HSGUJ_6yiaHHIEIzJIuYjQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3" height={"50px"} width={"50px"}/>
    <div className="option">
      <button>Men</button>
      <button>Women</button>
      <button>Kids</button>
      <button>Beauty</button>
      <button>Home and Living</button>
      <button>Studio</button>
    </div>
    <input className="ipt" placeholder="Search for products brands and more"></input>
    <div className="rightoption">
      <button>Profile</button>
      <button>Wishlist</button>
      <button>Bag</button>
    </div>
    </div>
  )
}