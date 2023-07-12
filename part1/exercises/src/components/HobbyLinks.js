export default function HobbyLinks() {
    let hobbyLinks = ["https://www.youtube.com/channel/UCgELJycvd81OTg4eDr0ZenQ", "https://www.amazon.com/"]
   return (
      <div>
         <a href = {hobbyLinks[0]}>My Nail YouTube Page</a>
         <br></br><a href = {hobbyLinks[1]}>My Favorite Online Store</a>
      </div>      
   );
}