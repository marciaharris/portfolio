
//./assets/photos/1596646766880.jpeg
export default function Home(props) {
    const daisies = props.daisies;
    const selfies = props.selfie;
    return (
        <div className="">
            <div className="grid grid-cols-2 my-0">
                <img className="grid h-screen grid-cols-20 my-0" src={daisies} />

                <div className=" w-full flex-col items-center  flex text-primary">
                    <div>
                        <h1 className="text-9xl ">Hi,</h1>
                    </div>
                    <div>
                        <h1 className="text-3xl mx-0 text-center">I'm Marcia Harris! A full-stack engineer, and so much more...</h1>
                    </div>
                    <h1 className="text-slate-50"> This is my firt easter egg</h1>
                    <br></br>
                    <div className="avatar">
                    <img className="h-10 max-w-44  m-3.5 rounded-full" src={selfies} />
                    </div>
                </div>
            </div>
        </div>
    )
}