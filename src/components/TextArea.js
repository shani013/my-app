import React,{useState} from 'react'

export default function TextArea(props) {
    //using state hook i can change dark mode to light mode
    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor:'white',
    })
    const [btnText, setBtnText] = useState('Dark Mode');
    const setdarkMode = () => {
        if (myStyle.color === 'black') {
            setMyStyle({
                color: 'white',
                backgroundColor: 'black',
            });
            setBtnText('Light Mode'); 
        }
        else {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white',
            });
            setBtnText('Dark Mode');
        }
    }


    const handletoUpper = () => {
        setText(text.toUpperCase());
    };
    const handletoReverse = () =>
    {
        setText(text.split('').reverse().join(''));
    }
    const handletoLower = () => {
        setText(text.toLowerCase());
    };
    const handleonChange = (event) => {
        setText(event.target.value);
    };
    // using useState i can change the text of input field(textArea)
    const [text,setText]=useState('');
    return (
      <div className="container">
            <div className="mb-3 " style={myStyle}>
                <label htmlFor="textarea" className="form-label" style={myStyle}>{props.heading}</label>
                <textarea className="form-control" name='textarea' id="textarea" style={myStyle}  value={text} onChange={handleonChange} rows="8"></textarea>
            </div>
            <div className="d-grid gap-4 d-md-flex justify-content-md-center">
                <button className="btn btn-primary btn-block" onClick={handletoUpper}>
                    Convert to UpperCase <span>&uarr;</span>

                </button>
                <button className="btn btn-primary btn-block" onClick={handletoLower}>
                    Convert to LowerCase <span>&darr;</span>

                </button>
                <button className="btn btn-primary btn-block" onClick={handletoReverse}>
                    Reverse Text <span>&larr;</span>

                </button>
                
                <button className='btn btn-primary' onClick={setdarkMode}>
                    {btnText}
                </button>
            </div>
      </div>
  )
}
