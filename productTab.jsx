import Product from "./product.jsx";
function ProductTab() {
    let des1 = [<li>8000 DPI</li>, <li>5 Programmable Buttons</li>];
    let des2 = [<li>Intuitive touch surface</li>, <li>Design for ipad Pro</li>];
    let des3 = [<li>Intuitive touch surface</li>, <li>Design for ipad Pro</li>];
    let des4 = [<li>Wireless mouse 2.4 GHz</li>, <li>Optical Orientation</li>];
    let oldprice1 = [<span>12,495 </span> , <span>11,900 </span> , <span>1,599 </span> ,<span>599 </span> ];
    let newprice1 = [<span>8,999 </span> , <span>9,199 </span> , <span>899 </span> ,<span>278 </span> ];
    let css={
         display:"flex",

         justifyContent:"centre",
         alignItem:"centre",
        border:"1px solid rgb(236, 6, 6)",
        backgroundColor: "aqua",
        margin: "14px",
        borderRadius: "14px",

        height:"128px"
    }
    return (
        <div>
            <h1 style={{color:"violet"}}>Amazon Cards</h1>
        <div style={css}>

            <Product  tittle="Logitech MX Master 35" description={des1} oldprice={oldprice1[0]} newprice={newprice1[0]} />
            <Product tittle="Apple Pencil(2nd gen)" description={des2} oldprice={oldprice1[1]} newprice={newprice1[1]}/>
            <Product tittle="Zebronics Zeb-Transformer " description={des3} oldprice={oldprice1[2]} newprice={newprice1[2]}/>
            <Product tittle="Petronic Toad Wireless Mouse " description={des4} oldprice={oldprice1[3]} newprice={newprice1[3]}/>
        </div>
        <h4>Grab these deals at maximum disscount</h4>
        <h6>FIRST PROJECT USING REACT </h6>
        </div>
    );
}
export default ProductTab;