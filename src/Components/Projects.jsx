export default function Projects (props){
  const knights = props.photos;
  const tasks = props.tasks;
    return (
        <div className="text-primary">
        <ul >
        <li > Task Tracker </li>
        <li> Rick and Morty </li>
        </ul>
        <div className="carousel carousel-end rounded-box">
  <div className="carousel-item">
    <p className="">Knights of Java </p>
    <img src={knights} alt="Drink" className="max-w-md max-h-md" />
  </div> 
  <div className="carousel-item max-w-md max-h-md">
    <img src={tasks} alt="Drink" />
  </div> 
  <div className="carousel-item">
    <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt="Drink" />
  </div> 
  <div className="carousel-item">
    <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" alt="Drink" />
  </div> 
  </div>
        </div>
    )
}