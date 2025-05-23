import {motion} from 'motion/react'

const AnimationControls=()=>{
    return(
        <div className="flex flex-col items-center justify-center h-screen">
            <motion.button
                
                
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 mb-4 rounded  text-xl font-bold w-[150px]"
                
            >
                Flip it!
            </motion.button>

            
                
                    <motion.div
                        
                        className="w-[150px] h-[150px] bg-emerald-700 flex items-center justify-center text-white "
                    >
                        
                    </motion.div>
                
           
        </div>
    )}
export default AnimationControls;