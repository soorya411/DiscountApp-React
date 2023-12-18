import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Discount.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Discount() {
  const[amount,setAmount]=useState(0)
  const[discount,setDiscount]=useState(0)
  const [final,setFinal] = useState(0);
const [saving,setSaving] = useState(0)
console.log(amount,discount);
const calculate=(e)=>{
  const output=amount * (discount / 100);
  console.log(output);
  setFinal(output)
  const savings=amount-output;
  console.log(savings);
  setSaving(savings); 
 }
 const reset=(e)=>{
  setFinal(0);
  setSaving(0);
  setDiscount(0);
  setAmount(0);
}
  return (
    <div>
      <Container className='container'>
      <Row>
        <Col><img src="" alt="" /></Col>
        <Col >
        <div className='heading'>
        <h3>Enter the discount details</h3>
        </div>
       <form>
        <div className='Discountform'>
        <TextField id="outlined-basic" value={amount ||""} onChange={(e) => setAmount(e.target.value)} label="Amount" variant="outlined" /> <br />
        <br />
        <TextField id="outlined-basic" value={discount ||""} onChange={(e) => setDiscount(e.target.value)} label="Discount %" variant="outlined" />
          </div>
          <div className="button">
          <Button variant="contained" onClick={e=>calculate(e)}>Calculate</Button>
          
          <Button variant="contained" onClick={e=>reset(e)}>Reset</Button>
          </div>
          </form>
          <div className='result'>
          <h3>Final Price: ₹{saving}</h3>
          <p>You have Saved ₹{final}</p>
        </div>
          </Col>

      </Row>
    </Container>
    </div>
  )
}

export default Discount