
export default function BookList() {
   let pageTitle = "Newly Released Books";
   let book1 = "https://www.bing.com/th?id=OP.DjLbC4N2Yahe0w474C474&o=5&pid=21.1&w=142&h=188&qlt=100&dpr=1.3&c=17";
   let book2 = "https://www.bing.com/th?id=OP.fFMEWnQYlVFEGQ474C474&o=5&pid=21.1&w=142&h=188&qlt=100&dpr=1.3&c=17";
   let book3 = "https://www.bing.com/th?id=OP.kK%2bJsVfrSmFfig474C474&o=5&pid=21.1&w=142&h=188&qlt=100&dpr=1.3&c=17";

   return (
      <div>
         <h3>{pageTitle}</h3>

         <img src={book1} alt="The Mistake" width = "150" height = "200" />
         <img src={book2} alt="The Last Lie"  width = "150" height = "200"/>
         <img src={book3} alt="The Perfect Son"  width = "150" height = "200"/>
      </div>      
   );
}