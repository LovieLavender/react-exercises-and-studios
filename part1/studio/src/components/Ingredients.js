import styles from './Ingredients.module.css';


export default function RecipeIngredients() {
    const ingredients = [" 1 Banana", " 1 cup of frozen strawberries", "1 cup of frozen blackberries", "1 cup of frozen raspberries", "1 and 1/4 cup of almond milk", "1/2 cup of greek yogurt"];
    return (
        <div>
        <h3>Recipe Ingredients</h3>
        <ul className = {styles.ingredientList}>
           <li>{ingredients[0]}</li>
           <li>{ingredients[1]}</li>
           <li>{ingredients[2]}</li>
           <li>{ingredients[3]}</li>
           <li>{ingredients[4]}</li>
           <li>{ingredients[5]}</li>
        </ul>
     </div>    
    )
}