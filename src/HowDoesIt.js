import React,{useState} from 'react'
import workapi from './API/workApi'

const HowDoesIt = () => {

    const [workdata,setWorkData] = useState(workapi);

    return (
        <>
            <section>
                <div className="container work-container">
                    <h1 className="main-heading text-center">How Does It Work!</h1>
                    <div className="row">
                    {workdata.map((curElem)=>{
                        const{logo,title,info} = curElem;
                        return <>
                        <div className="col-12 col-lg-4 text-center work-container-subdiv">
                            <i className={`fontawesome-style ${logo}`}></i>
                            <h2>{title}</h2>
                            <p className="main-hero-para w-100">
                                {info}
                            </p>
                        </div>
                        </>
                    })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default HowDoesIt
