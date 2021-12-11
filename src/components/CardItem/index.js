import React from "react"
import { Text, TouchableOpacity } from "react-native"
import { View } from "react-native"
import { AntDesign } from '@expo/vector-icons';

import styles from './styles'
import { set } from "date-fns";
const CardItem = ({
    category = '',
    joke,
    setup,
    delivery,
    language = '',
    flag = {},

}) => {
   const [isDislike, setIsDislike] = React.useState(false)
   const [isLike, setIsLike] = React.useState(false)
    return (

        <View style={styles.cardContent}>
            <View style={styles.cardHeader}>
                <Text style={styles.titleText}>Categoria - </Text>
                <Text style={styles.text}>{category}</Text>
            </View>
            {joke && (
                <View style={styles.cardBody}>
                    <Text style={styles.text}>Joke - "{joke}"</Text>
                </View>
            )}
            {setup && <View style={styles.cardBody}>
                <Text style={styles.text}>Setup - "{setup}"</Text>
                {delivery && (<Text style={styles.text}>Resposta - "{delivery}"</Text>)}
            </View>}
            <View style={styles.cardFooter}>
                <Text style={styles.descriptionText}>Descrições</Text>
                <Text style={styles.descriptionText}>Idioma: {language}</Text>
            </View>
            <View style={{position:'absolute',bottom:0,width:'100%',padding:0,left:15,right:0,marginVertical:10}}>
               <View style={{justifyContent:'space-around',flexDirection:'row',}}>

                <View style={[styles.button,{width:30,height:30}]}>
                    <TouchableOpacity onPress={()=>{setIsLike(!isLike),
                        isDislike && setIsDislike(false),
                        isLike===true &&setIsDislike(false)}}>
                        {isLike ?(

                            <AntDesign size={30}name="like2" color={'blue'}/>
                            
                        ):(
                            <AntDesign size={30}name="like2" color={'black'}/>
                        )}
                    </TouchableOpacity>
                    </View>
                <View style={[styles.button,{width:30,height:30}]}>
                <TouchableOpacity
                    onPress={() => {
                        setIsDislike(!isDislike),
                         isDislike===true && setIsLike(false),
                         isLike === true && setIsLike(false)
                        
                        }}
                >
                    {isDislike ? (
                        
                        <AntDesign size={30}name="dislike2" color={'red'}/>) 
                        :
                        (

                            <AntDesign size={30}name="dislike2" color={'black'}/>
                        )
                    }


                    </TouchableOpacity>
                    
                </View>
               </View>
                
            </View>

        </View>
    )
}
export default CardItem