import { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { Card, Table, Spinner } from "react-bootstrap";

function DoctorView(props)
{
    const web3React = useWeb3React();
    const [data, setData] = useState(null);

    useEffect(()=> {
        fetch(`http://emnt-desktop:9090/doctor?` + new URLSearchParams({
            requester: web3React.account
        }))
            .then(response => response.json())
            .then(data => setData(data));
    }, [web3React.account]);

    if(data)
    {
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
    } else {
        return(
            <h1>Loading...<Spinner animate="border" size="sm"/></h1>
        );
    }
}

export default DoctorView;
