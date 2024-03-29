import { useTypewriter } from 'react-simple-typewriter'
import { Col } from "react-bootstrap";
import "./AnimatedWriting.css"

const AnimatedWriting = () => {

    const { text } = useTypewriter({
        words: [' Web Developer', ' React JS Developer', ' Node JS Developer',],
        loop: 0
    })

    return (

        <Col lg={12} className="mt-5 mb-5">
            <div className='tamanioletra'>
                Yo soy
                <span className='fw-bold'>
                    {text}
                </span>
            </div>
        </Col>
    )
}
export default AnimatedWriting