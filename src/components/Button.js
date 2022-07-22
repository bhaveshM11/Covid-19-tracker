import Form from 'react-bootstrap/Form';
import Select from 'react-select'
import {useState} from 'react'
import './button.css'

const Button = (props)=>{

  const [selectedOption, setSelectedOptions] = useState('Total');
  const selectValueChange = (e) => {
    setSelectedOptions(e)
    props.changefunction(e.value)
  }
  
  return (
          <Select
            value={selectedOption}
            onChange={selectValueChange}
            options={props.states}
            className="select"
        />
    )
}
export default Button;