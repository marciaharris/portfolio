
export default function Home(props) {
    const daisies = props.daisies;
    const selfies = props.selfie;
    const galaxy = props.galaxy;
    return (
        <>
            <div className="overflow-auto flex justify-center mt-10">

                <div className="flex justify-center max-w-screen-xl text-primary ">
                    <div className="avatar h-44 w-44 ">
                        <img className="  m-3.5 rounded-full" src={selfies} />
                    </div>
                    <div className="px-5 w-1/2">
                        <h1 className=" text-7xl text-center ">Hi,</h1>
                        <br />
                        <h1 className="text-2xl text-center">I'm Marcia Harris! A full-stack engineer, and so much more...</h1>
                        <br/>
                        <h1 className="text-2xl text-center">I have worked over 9 years in customer facing roles, in sales, retail and the food industry! </h1>
                        <br/>
                        <h1 className="text-2xl">From sales, I learned perserverance, discipline and empathy</h1>
                        <h1 className="text-2xl">In the food industry I learned</h1>
                    </div>


                </div>
            </div>
            
        </>
    )
}