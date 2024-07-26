import { Container, Row } from 'react-bootstrap'
import './Homepage.css'

function Homepage() {
    return (
        <Container>
            <Row>
                <div className='col-12 col-lg-7 rworkman-header'>
                    <Row>
                        <div className='col-12 rylan-workman-header'>
                            Rylan Workman
                        </div>
                        <div className='col-12 rylan-workman-sub-header'>
                            Software Developer
                        </div>
                    </Row>
                </div>
                <div className='col-12 col-lg-5'>
                    <Row className="full-height">
                        <div className="col-12 homepage-selection-item">
                            Technical Portfolio
                        </div>
                        <div className="col-12 homepage-selection-item">
                            Websites
                        </div>
                        <div className="col-12 homepage-selection-item">
                            About Me
                        </div>
                        <div className="col-12 homepage-selection-item">
                            Articles
                        </div>
                    </Row>
                </div>
            </Row>
        </Container>
    )
}
export default Homepage