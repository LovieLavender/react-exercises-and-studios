import React from 'react';
import styles from './Description.module.css';


function RecipeAuthor() {
    let authorLink = "https://www.delish.com/cooking/recipe-ideas/a24892347/how-to-make-a-smoothie/"
    let authorPhoto = "https://hips.hearstapps.com/rover/profile_photos/743afec2-8cb0-4247-8722-05b4d891fe7a_1576786937.file?fill=1:1&resize=160:*";
    let authorName = "Makinze Gore";
    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Picture of the Author" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Delish Recipe</a> 
           </div>
        </div>
     );
}
class RecipeDescription extends React.Component {
    render() {
        return (
            <div> 
              <div>
                <h1>How to Make a Smoothie</h1>
                <p>Here's how to make the best smoothie at home!</p>
             </div>
        <RecipeAuthor />
            </div>   
        )
    }
}


export default RecipeDescription;


