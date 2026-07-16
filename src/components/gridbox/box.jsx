import './box.css';

function Box(
   {img, title, description}) 
  {
  return (
  
    <div className='card'>
      <img src={img} alt={title}/>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href='/'>READ MORE &rarr;</a>
    </div>
  
  );
}

export default Box;


// function Box()
//       {Box.map((Box)=>(
//       <> 
//       img={Box.img} 
//       title={Box.title}  
//       description={Box.description}
//       </>))}


// export default Box;


