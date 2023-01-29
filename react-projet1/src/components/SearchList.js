import React, {useEffect, useState} from 'react';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, InputGroup, FormControl, ListGroup} from 'react-bootstrap';

let data = [
    {
        id:1,
        title: 'Juicy Grapes'
    },
    {
        id:2,
        title: 'Juicy Grapes'
    },
    {
        id:3,
        title: 'Juicy Grapes'
    },
]




const SearchList = () => {
    const [searchInput, setSearchInput] = useState('');

    useEffect(() => {
        console.log(searchInput)

    }, [searchInput])

    return(
        <Container className='py-4'>
            <Row className='justify-content-center'>
                <Col xs={7} md={7} lg={4} className="mb-3 mx-auto">
                    <InputGroup className='mb-3'>
                        <InputGroup.Test>@</InputGroup.Test>
                        <FormControl
                                placeholder="Search"
                                value={searchInput}
                                onChange={(e) => setSearchInput(e.target.value)}

                                />

                    </InputGroup>

                </Col>

            </Row>

        </Container>
    );
};

export default SearchList;