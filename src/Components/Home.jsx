
//./assets/photos/1596646766880.jpeg
export default function Home (){
    return(
        <div className="w-full flex flex-col items-center">
        <div className="avatar my-10">
            <div className="w-48 rounded-full">
                <img src="https://media.licdn.com/dms/image/C4D03AQE8VKFJdsvL-Q/profile-displayphoto-shrink_400_400/0/1596646766880?e=1715817600&v=beta&t=u194XYFD5Q93cqjhuDYNaEAj2xP1g9GWnDNMLsqxjII" />
            </div>
        </div>
        <div className=" flex text-secondary">
            <div>
            <h1 className="text-9xl ">Hi,</h1>
            </div>
            <div>
            <h1 className="text-3xl text-right">I'm Marcia Harris! A full-stack engineer, and so much more...</h1>
            </div>
        </div>
</div>
    )
}