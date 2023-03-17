const FormatPrice = ({total}) =>{
    console.log(total);
    return Intl.NumberFormat("en-IN",{
        style:"currency",
        currency:"INR",
        maximumFractionDigits:2
    }).format(total);
}
export default FormatPrice;