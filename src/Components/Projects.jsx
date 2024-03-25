export default function Projects(props) {
  const knights = props.photos;
  const tasks = props.tasks;
  const rick = props.rick;
  return (
    <div className="text-primary mt-10 mx-5 ">
      <div className="carousel carousel-end rounded-box ">
        <div className="carosel-format">
          <a  className="text-center" href="https://github.com/marciaharris/KnightsofJavaScript.git">Knights of Java</a>
          <img src={knights} alt="Drink" className="rounded-md size-96 " />
        </div>
        <div className="carosel-format">
          <a className="text-center" href="https://github.com/marciaharris/tracker.git"> Task Tracker </a>
          <img src={tasks} alt="Drink" className="rounded-md size-96" />
        </div>
        <div className="carosel-format">
          <a className="text-center" href="https://github.com/marciaharris/rickandmorty.git">Rick and Morty</a>
          <img className="rounded-md size-96" src={rick} alt="Drink" />
        </div>
        <div className="carosel-format">
          <a className="text-center" href="https://github.com/marciaharris/rickandmorty.git">Coming</a>
          <img className="rounded-md size-96" src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" alt="Drink" />
        </div>
      </div>
    </div>
  )
}