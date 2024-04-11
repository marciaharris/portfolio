// conditional rendering for clicked button to change to space mode
export default function Home(props) {
    const selfies = props.selfie;
    return (
        <>
            <div className="overflow-auto flex justify-center mt-10">
                <div className="flex justify-center max-w-screen-xl text-primary ">
                <div className="avatar h-44 w-44 ">
                        <img className=" m-3.5 rounded-full" src={selfies} />
                    </div>
                    <div className="px-5 w-1/2 text-center">
                        <h1 className=" text-7xl ">Hi,</h1>
                        <br />
                        <h1 className="text-2xl">I'm Marcia Harris! A full-stack engineer, and so much more...</h1>
                        <br />
                        <h1 className="text-2xl ">I have over 9 years of experience in customer facing roles, and I believe these experiences have made me adaptable and ready for any challenge this new career path may give me! </h1>
                        <br />
                        <h1 className="text-2xl">Each role helped shape a different aspect of my work ethic.</h1>
                        <h1 className="text-2xl">I put together a timeline to better demonstrate the most impactful lessons I've learned.</h1>


                        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mt-10">
                            <li>
                                <div className="timeline-middle">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                </div>
                                <div className="timeline-start md:text-end mb-10">
                                    <time className="font-mono italic">2015</time>
                                    <div className="text-lg font-black">First job at White Castle</div>
                                    I got my first job at the age of 16, and this was where I first learned the value of a team. We learned each other's strengths, 
                                    and leveraged those to work better and faster daily. This is a skill I have brought to every job in my life, and has been a great help when working on a project with other coders.
                                </div>
                                <hr />
                            </li>
                            <li>
                                <hr />
                                <div className="timeline-middle">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                </div>
                                <div className="timeline-end mb-10">
                                    <time className="font-mono italic">2018</time>
                                    <div className="text-lg font-black">First Sales Job at Bloomingdales</div>
                                    <p> I worked in the shoe department of Bloomingdales for over a year, and just like in web development, I had to learn to think outside of the box.
                                        There were of litany of new challenges daily as a shoe-salesman, but I learned to leverage my team and my resources.
                                    </p>
                                </div>
                                <hr />
                            </li>
                            <li>
                                <hr />
                                <div className="timeline-middle">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                </div>
                                <div className="timeline-start md:text-end mb-10">
                                    <time className="font-mono italic">2020</time>
                                    <div className="text-lg font-black">Job as a visual merchandiser at Target</div>
                                    This role taught me the importance of attention to detail and how bringing a brand's vision to life requires knowledge of what they want and need. 
                                    I bring this experience to my tech roles by making sure I understand each client's & their customer's needs, to produce the most efficient code.
                                </div>
                                <hr />
                            </li>
                            <li>
                                <hr />
                                <div className="timeline-middle">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                </div>
                                <div className="timeline-end mb-10">
                                    <time className="font-mono italic">2021</time>
                                    <div className="text-lg font-black">Job as door-to-door salesman</div>
                                    Showing up unannounced to 40+ businesses daily to sell prospect leads and close deals helped me gain an immense amount of self-confidence. 
                                    Confidence to ask questions, have tough conversations, illicit feedback and interact with people of all backgrounds.
                                </div>
                                <hr />
                            </li>
                            <li>
                                <hr />
                                <div className="timeline-middle">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                </div>
                                <div className="timeline-start md:text-end mb-10">
                                    <time className="font-mono italic">2023</time>
                                    <div className="text-lg font-black">Learning Web Dev with TKH</div>
                               <p> For a year, I dedicated 60% of my free-time to attending classes to learn code and even more to attending events, webinars and office hours to make sure I learned as much as I could. 
                                I completed projects that can be found in my Projects tab! The most important lesson I learned in my experience at TKH was how to stay thirsty for knowledge.
                                Web Dev is constantly changing, and being thirsty for knowledge is necessary to stay competitive in tech </p>
                                </div>
                            </li>
                        </ul>
                    </div>


                </div>
            </div>

        </>
    )
}