function Product({tittle , description ,oldprice , newprice}){
let border={
     border:"2px solid black",
     margin:"14px",

}
    return(
        <div style={border}>
        <div style={{backgroundColor:"violet"}}> <span style={{fontWeight:"500", color:"black" , padding:"6px"}}>{tittle} </span>
         <span>{description} </span></div>
         <div style={{backgroundColor:"yellow"}}>
        <span style={{textDecorationLine:"line-through" , color:"black"}}>{oldprice }</span>
        <span style={{color:"red"}}>{newprice}</span>
        </div>
        </div>
    );
}
export default Product;