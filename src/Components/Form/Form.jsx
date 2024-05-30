import './Form.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import generateUniqueId from 'generate-unique-id';


const FormMeet = () => {

    const [inputState, setInputState] = useState({
        id: '',
        fname: '',
        lname: '',
        email: '',
        address: '',
        phone: ''
    })

    const [viewData, setViewData] = useState([])

    const handleChange = (e) => {

        let name = e.target.name;
        let value = e.target.value;

        setInputState({
            ...inputState, [name]: value
        });




    }

    const handleSubmit = (e) => {

        e.preventDefault();

        if(inputState.id){

            let record = viewData;
            let newRecord = record.map((record)=>{
                if(record.id === inputState.id){
                    return record = inputState
                }
                else{
                    return record
                }
            })

            setViewData(newRecord);

        }else{

            let obj = {
                ...inputState,
                id: generateUniqueId({
                    length: 10,
                    useLetters: false
                })
            }
            setViewData([...viewData, obj]);
        }

        setInputState({
            id: '',
            fname: '',
            lname: '',
            email: '',
            address: '',
            phone: ''
        })

    }


    const handleEdit = (id) =>{

        console.log("id",id);

        let record = viewData;
        let UpdateRecord = record.filter((rec)=>{
            return  rec
        })

        setInputState(UpdateRecord[0]);

    }

    const handleDelete = (id) =>{

        console.log("id",id);
        let record = viewData;
        let deleteRecord = record.filter((rec)=>{
            return  rec.id !== id
        })

        setViewData(deleteRecord);

    }
    return (
        <>

            <h1 className='Display-1 text-center py-5' >Employee Management CRUD</h1>

            <Container>

                <div className=' bg-Purple d-flex justify-content-between '>

                    <div className='px-4'>
                        <i className="bi bi-house-up-fill fs-1 text-white"></i>
                    </div>

                    <div className='px-3'>
                        <div className='d-flex align-items-center'>
                            <i className="bi bi-person-fill fs-1 text-white"></i>
                            <span className='fs-4 px-2 text-white'>Employee Management</span>

                        </div>
                    </div>

                </div>

                <div>
                    <Form className='py-3' onSubmit={handleSubmit}>
                        <Form.Control type="text" name='id' value={inputState.id} onChange={handleChange}  hidden/>
                        <div className='w-60 bg-Purple  m-auto'>
                            <h2 className='p-3   text-white fs-5'>New Employee</h2>
                        </div>
                        <div className='w-60 m-auto'>

                            <div className='px-5 py-4 shadow p-3 mb-5 bg-body rounded"'>

                                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                    <Form.Label column sm={2}>
                                        <div className='d-flex'>
                                            <div>First Name</div>
                                            <span className='text-danger'>*</span>
                                        </div>
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control type="text" name='fname' value={inputState.fname} onChange={handleChange} />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                                    <Form.Label column sm={2}>
                                        <div className='d-flex'>
                                            <div>Last Name</div>
                                            <span className='text-danger'>*</span>
                                        </div>
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control type="text" name='lname' value={inputState.lname} onChange={handleChange} />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                                    <Form.Label column sm={2}>
                                        <div className='d-flex'>
                                            <div>Email</div>
                                            <span className='text-danger'>*</span>
                                        </div>
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control type="email" name='email' value={inputState.email} onChange={handleChange} />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                                    <Form.Label column sm={2}>
                                        <div className='d-flex'>
                                            <div>Address</div>
                                            <span className='text-danger'>*</span>
                                        </div>
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control type="text" as="textarea" name='address' value={inputState.address} onChange={handleChange} />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                                    <Form.Label column sm={2}>
                                        <div className='d-flex'>
                                            <div>Phone</div>
                                            <span className='text-danger'>*</span>
                                        </div>
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control type="number" name='phone' value={inputState.phone} onChange={handleChange} />
                                    </Col>
                                </Form.Group>



                                <Form.Group as={Row} className="mb-3">
                                    <div className='d-flex justify-content-center'>
                                        <button className='border-0 px-4 py-2 text-white bg-success'>SUBMIT</button>
                                    </div>
                                </Form.Group>


                            </div>



                        </div>
                    </Form>
                </div>

            </Container>

            <div className='py-1 bg-Purple w-95 m-auto'>

            </div>

            <Container className='py-3 '>

                <div className=''>

                    <div className='bg-Purple p-2 '>
                        <h2 className=' text-white fs-4'>Manage Employee</h2>
                    </div>
                    <div className='border border-1  shadow p-3 mb-5 bg-body '>
                        <div className=' border border-1  shadow  mb-5 bg-body'>
                            <table className='w-100 text-center'>
                                <thead className=' border border-bottom boreder-3 border-dark'>
                                    <tr >
                                        <th hidden>id</th>
                                        <th className='border-1 border-dark py-2'>First Name</th>
                                        <th className='border-1 border-dark'>Last Name</th>
                                        <th className='border-1 border-dark'>Email</th>
                                        <th className='border-1 border-dark'>Address</th>
                                        <th className='border-1 border-dark'>Phone</th>
                                        <th className='border-1 border-dark'>Actions</th>

                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        viewData.map((data) => {
                                            return (
                                                <>
                                                    <tr>
                                                        <td className='border-1 border-dark' hidden>{data.id}</td>
                                                        <td className='border-1 border-dark'>{data.fname}</td>
                                                        <td className='border-1 border-dark'>{data.lname}</td>
                                                        <td className='border-1 border-dark'>{data.email}</td>
                                                        <td className='border-1 border-dark'>{data.address}</td>
                                                        <td className='border-1 border-dark'>{data.phone}</td>
                                                        <td className='border-1 border-dark'>
                                                            <div>
                                                                <button type='submit' className='border-0 bg-body' ><i className="bi bi-eye-fill text-primary fs-4"></i></button>
                                                                <button type='submit' className='border-0 bg-body' onClick={()=>handleEdit(data.id)}><i className="bi bi-pencil-square text-warning fs-4"></i></button>
                                                                <button type='submit' className='border-0 bg-body' onClick={()=>handleDelete(data.id)}><i className="bi bi-trash-fill text-danger fs-4"></i></button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </>
                                            )
                                        })
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Container>


        </>
    )
}

export default FormMeet;