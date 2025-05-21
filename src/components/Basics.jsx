import { useState } from "react";
import { AnimatePresence, motion, useScroll } from "motion/react";
const Basics=()=>{
     // const {scrollYProgress} = useScroll()
    const [show, setShow] = useState(true);
    return(
        <div>
            {/* <motion.div
        drag
        whileDrag={{
          scale: 1.2,
        
        }}
        dragConstraints={{
          left: 100,
          top: 100,
          bottom: 200,
          right: 400,
        }}
        dragDirectionLock
        
        class="box"
      >
        {" "}
        Framer box{" "}
      </motion.div>

      <motion.div
        animate={{
          x: [0, 400, 400, 0, 0],
          y: [0, 0, 200, 200, 0],
          rotate: [0, 360, 0, -360, 0],
        }}
        transition={{
          duration: 20,

          ease: "anticipate",
          repeat: Infinity,
        }}
        class="circle"
      >
        Framer circle
      </motion.div> */}

            {/* <motion.div
      style={{ scaleX: scrollYProgress }}
      className="bg-emerald-700 origin-left w-full fixed top-0 left-0 h-4"></motion.div>
      <div className="text-center text-white font-mono m-8">
        <h1 className="text-4xl mb-4 font-bold">Learning Motion</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, eius
          asperiores, temporibus laborum in vero harum ullam ipsam omnis sunt
          consequuntur possimus, similique molestias maxime quos aspernatur odio
          recusandae officiis facere ipsa itaque. Sequi iste aliquam, id
          voluptates commodi sint? Nesciunt sed officia saepe atque quia, minus
          natus ipsum quisquam quae! Eveniet quisquam non minus consequuntur quo
          neque possimus, illum veritatis deserunt doloribus itaque, placeat
          nemo cupiditate natus! Quibusdam ipsum cumque sunt fugiat ad quidem
          minima libero eaque aliquid, accusamus exercitationem quaerat,
          praesentium consectetur at aut explicabo quas? Doloremque, iure
          laborum? Labore esse illo excepturi vero, ipsa voluptates doloribus
          aliquam nesciunt fugiat amet odit iure est, id necessitatibus.
          Laboriosam iure consectetur hic sequi aperiam tempore voluptate quo
          repellendus libero et! Deleniti iste dolorem, tenetur sint magni
          aspernatur, in eligendi libero nihil voluptatem doloribus consectetur
          blanditiis pariatur quibusdam doloremque ab suscipit repudiandae
          sapiente quas qui aliquid. Nam nisi aperiam non deserunt. <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
          reiciendis voluptate officiis nam similique fugiat rerum cum, commodi
          assumenda dolores suscipit quo ducimus sint quisquam alias. Totam
          illum blanditiis facere quasi dolorem in dolores reiciendis quaerat
          officiis, ipsum, magnam neque laboriosam odit, consectetur minus
          aliquid eveniet ut dicta possimus dolorum est. Earum nobis quaerat
          quos, totam modi quidem ipsam ipsum adipisci neque, veritatis iure
          accusantium aperiam! Neque modi doloremque quidem molestias quas
          nesciunt cumque, dolore esse veniam est cum, iure ipsam aperiam totam
          magnam reprehenderit voluptates quod officia illum asperiores omnis ab
          reiciendis hic. Minus, eaque a dolorum iure tempore laboriosam
          perspiciatis inventore ea quibusdam nihil ex consequuntur optio?
          Asperiores nobis molestias velit impedit recusandae tempore dolor
          alias, amet illum suscipit ipsum eligendi, aut voluptate nemo
          laboriosam dolore! Nisi sequi, at dignissimos autem necessitatibus
          earum quidem voluptas possimus laudantium repellendus nihil, eos sint
          esse aliquid repellat non vitae aspernatur molestiae. <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit nihil
          maiores unde tempore id. Deleniti sed, nam sunt, doloremque sit fugit
          quisquam molestiae necessitatibus a animi iste alias culpa. Possimus
          aspernatur cupiditate ad, nisi accusamus corrupti est consectetur
          dolorum tenetur, atque ipsum similique animi, aperiam iste modi
          nostrum praesentium ipsam laboriosam odit consequuntur adipisci cum
          commodi aliquam in? Aliquid, dolor tempora. Quisquam a praesentium nam
          consequatur, minus itaque architecto fugiat nesciunt alias voluptate
          quo hic aliquam? Magnam quibusdam nostrum a rem expedita fugit non
          doloremque repudiandae nemo alias aspernatur, iure enim, explicabo
          perspiciatis architecto facilis minus? Eveniet nulla quas voluptatum
          officiis velit minima ut dicta repellat ipsam placeat dignissimos, ex
          iste, saepe accusamus odit molestiae reprehenderit nisi temporibus?
          Quos aspernatur consequatur possimus deserunt recusandae incidunt ad
          perspiciatis, aliquam totam iste rerum temporibus! Aliquam nemo iusto
          quos maxime ea dolore non corrupti corporis voluptate. Repudiandae
          temporibus nulla ipsam ab suscipit quo.
        </p>
      </div> */}


            <div className="flex flex-col items-center justify-center h-screen">
                <motion.button
                    layout
                    onClick={() => setShow(!show)}
                    className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 mb-4 rounded shadow "
                    whileTap={{ scale: 0.95 }}
                >
                    {show ? 'Hide' : 'Show'}
                </motion.button>

                <AnimatePresence >
                    {show && (
                        <motion.div
                            initial={{ rotate: 0, scale: 1, opacity: 0 }}
                            animate={{ rotate: 180, scale: 1.2, opacity: 1 }}
                            exit={{ opacity: 0, scale: 0.2 }}
                            transition={{
                                duration: 5,
                                ease: "backInOut",
                                repeat: Infinity,
                            }}
                            className="w-[150px] h-[150px] bg-emerald-700 flex items-center justify-center text-white "
                        >
                            {/* Optional name or content */}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )}
export default Basics;