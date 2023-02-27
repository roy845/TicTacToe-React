function Square({onClick,value}) {
    const boxStyle = {
        'width':'60px',
        'height':'60px',
        'backgroundColor': '#ddd',
        'margin': '4px',
        'display': 'flex',
        'justifyContent': 'center',
        'alignItems': 'center',
        'fontSize': '20px',
        'color': 'white'
      }
      
    return (
      <div
        onClick={onClick}
        className="square"
        style={boxStyle}>
        {value}
      </div>
    );
  }
  
  export default Square