"use client";
import Image from "next/image";
import styles from "../Styles/productList.module.css";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
const productList = () => {
    
      const route = useRouter();

    const products=[
        {name:"ToteBags",photo:'/bag.png',background:"rgba(163, 163, 163, 0.7)"},
        
        {name:"Skirts",photo:'/skirt.png',background:"rgba(163, 163, 163, 0.7)"},
        
        {name:"Shirts",photo:'/Shirts.png',background:"rgba(163, 163, 163, 0.7)"},
        {name:"Dresses",photo:'/dress.png',background:"rgba(163, 163, 163, 0.7)"},
        {name:"Bracelets",photo:'/bracelets.png',background:"rgba(163, 163, 163, 0.7)"},
    ];
    const handleRouting=(name)=>{
        if(name=="ToteBags"){
            route.push("/products/ToteBags")
        }else if(name=="Bracelets"){
            route.push("/products/Bracelets")
        }
        else if(name=="Dresses"){
            route.push("/products/Dresses")
        }else if(name=="Shirts"){
            route.push("/products/Shirts")
        }else if(name=="Skirts"){
            route.push("/products/Skirts")
        }
    }
    const items=products.map((item,index)=>{
        return (
            <li key={index} style={{background:item.background}}
                onClick={()=>handleRouting(item.name)}
            >
                   
                <div className={styles.itemText}>
                    <span>
                        {item.name}
                    </span>
                </div> 
                    
                <motion.div className={styles.imgTwo}
                    /*initial={{
                        x:0,y:0,
                    }}
                    animate={{
                        opacity:1,
                        //y:5,
                        scale:[1,1.05],
                    }}
                    transition={{
                        type: 'tween',
                        stiffness: 200,
                        repeat: Infinity, 
                        repeatType:'reverse',
                        duration:2
                        }}*/
                >
                    <Image
                        src={item.photo}
                        alt='w'
                        quality={100}
                        width="120"
                        height="120"
                        sizes='(max-width:768px)100vw, (max-width:1200pxpx)50vw, 33vw'
                        priority
                    />
                </motion.div>
            </li>
        )
    })
    return (
        <div>
        <div className={styles.container}>
            <h2 className={styles.tittle}>
            Our Services
            </h2>
            <ul className={styles.displayedItems}>
                {items}
            </ul>

        </div>
        
        <div style={{position:"relative",height:"150px"}}></div>
        </div>
    );
}
 
export default productList;