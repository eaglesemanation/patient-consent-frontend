import { useState, useEffect } from "react";

import { Card, Table,  } from "react-bootstrap";

function DoctorView(props)
{
    const {contract} = props;
    const [data, setData] = useState(null);
    
    useEffect(()=> {

    },[props.therapist, props.id]);

    if(data)
    {
        if(props.id)
        {
                return(
                    <>
                        <Card className='color-nav'>
                            <Card.Body>
                                <Card.Title><strong>Selected patient</strong></Card.Title>
                                <Card.Text>
                                    Therapist: {data.therapist}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>First name</th>
                                    <th>Last name</th>
                                    <th>Gender</th>
                                    <th>Birth date</th>
                                    <th>Diagnose</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    
                                <tr key={data.id}>
                                    <th>{data.id}</th>
                                    <th>{data.first_name}</th>
                                    <th>{data.last_name}</th>
                                    <th>{data.gender}</th>
                                    <th>{data.birthdate}</th>
                                    <th>{data.diagnose}</th>
                                </tr>
                                        
                                }
                            </tbody>
                        </Table>
                    </>
                );    
        } else { 
            return(
                <>
                    <Card >
                        <Card.Body>
                            <Card.Title>Patients of {data[0].therapist}</Card.Title>
                        </Card.Body>
                    </Card>
                    <Table striped bordered hover >
                        <thead >
                            <tr>
                                <th style={{fontWeight : "normal"}}>Id</th>
                                <th style={{fontWeight : "normal"}}>First name</th>
                                <th style={{fontWeight : "normal"}}>Last name</th>
                                <th style={{fontWeight : "normal"}}>Gender</th>
                                <th style={{fontWeight : "normal"}}>Birth date</th>
                                <th style={{fontWeight : "normal"}}>Diagnose</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map(patient=>
                                    (
                                        <tr key={patient.id}>
                                            <th style={{fontWeight : "normal"}}>{patient.id}</th>
                                            <th style={{fontWeight : "normal"}}>{patient.first_name}</th>
                                            <th style={{fontWeight : "normal"}}>{patient.last_name}</th>
                                            <th style={{fontWeight : "normal"}}>{patient.gender}</th>
                                            <th style={{fontWeight : "normal"}}>{patient.birthdate}</th>
                                            <th style={{fontWeight : "normal"}}>{patient.diagnose}</th>
                                        </tr>
                                    ))
                            }
                        </tbody>
                    </Table>
                </>
            );
        }
    }
    else{
        return(
            <h1>Loading...</h1>
        );
    }
}

export default DoctorView;
