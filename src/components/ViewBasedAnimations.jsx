import { motion, useInView } from "motion/react";
import { useEffect, useRef } from "react";

const ViewBasedAnimations = () => {
  const ref = useRef(null);
 const isInView = useInView(ref,{once:true});
useEffect(()=>{
console.log("this is show", isInView)
},[isInView])
  return (<>
  
    <div
      style={{
        height: "100vh",
      }} />
      <motion.div
        style={{
            height: "100vh",
            backgroundColor: "black",
            
        }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1 }}
      />

      <div ref={ref} 
      style={{ height: "100vh", backgroundColor: isInView? "blue":"red",
        transition:"1s background",
       }}>

      </div>
      </>
  );
};
export default ViewBasedAnimations;
