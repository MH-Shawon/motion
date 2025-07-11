import { useScroll, motion, useSpring, useTransform } from "framer-motion";

const ScrollAnimations = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);
  const backgroundColor = useTransform(
    scrollYProgress,
    [ 0,1,1],
      [
          "rgb(211, 9, 225)",
          "rgb(68, 0, 255)",
          "rgb(3, 209, 0)",
      ]
  );
  return (
    <div>
      <motion.div
        style={{
          // scaleX: scrollYProgress,
          scaleX,
          backgroundColor,
        }}
        className="h-6  fixed top-0 origin-left w-full"
      ></motion.div>
      <div className="mx-6 text-white">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          impedit ab ad a natus molestiae atque, temporibus molestias non et
          eligendi quis aut odio minima eos autem reiciendis eum laboriosam ex
          veniam soluta vitae fuga itaque vero. Ut reprehenderit, commodi porro
          necessitatibus quos quam corrupti saepe laborum magni enim ratione
          maiores quod fugit error blanditiis aliquid odit corporis, fuga
          placeat velit! Quasi illum earum quo ex ut sequi corrupti, incidunt
          doloribus perspiciatis, accusamus voluptatibus facilis placeat harum
          aut quaerat accusantium iure cupiditate, inventore quos possimus.
          Libero, assumenda non! Mollitia dolore nihil nisi tempore amet magni,
          nam sint odio omnis, perspiciatis commodi quaerat magnam deserunt
          pariatur minima laudantium rerum voluptates repellendus dicta, a rem
          placeat. Iure sint repellat, dicta esse dolorum tenetur commodi quae
          repellendus repudiandae corrupti, quod expedita quam aut rerum.
          Itaque, ipsa fuga. Non quisquam est consequuntur repudiandae, quae
          dignissimos, autem, quas aliquam necessitatibus esse vel corporis
          fugit possimus?
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo
          accusamus officia adipisci incidunt. Suscipit, modi, quo provident
          quibusdam, ad expedita ex quis eum minima eos dolore quas voluptatem
          ducimus non beatae odio commodi minus. Nostrum assumenda est fuga
          ducimus error, eaque accusantium quam dolore hic omnis dolores minima,
          sed quaerat molestiae. Recusandae, excepturi nostrum. Laudantium
          fugiat corrupti laboriosam maiores tempora unde tenetur. Accusantium
          nisi quia ratione qui ex sit, architecto, a repellendus cum modi
          quibusdam deserunt fugit dignissimos labore nostrum sapiente iste
          fugiat eaque quisquam, voluptatum nemo amet dolore? Totam sequi, nam
          rem nemo quam officiis at harum sapiente saepe sit ipsum dignissimos
          architecto non animi explicabo perferendis perspiciatis in dicta
          molestiae! Quos repudiandae non alias ex corrupti facere aperiam
          incidunt eaque beatae, eum atque sapiente consequatur laudantium a
          sequi nostrum, voluptates obcaecati, recusandae illum placeat?
          Molestiae, corrupti nulla vel ducimus ab rerum eaque facere eos
          minima. Corrupti, optio doloribus?
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum laborum
          eaque magnam vel voluptates beatae! Facere officia consectetur, soluta
          unde alias est odio, quo nam, illo repudiandae asperiores id
          reprehenderit sunt atque. Optio, nihil? Harum ipsum dignissimos animi
          inventore ut, dicta excepturi magnam id laudantium nam optio quod
          ipsam sunt minima impedit blanditiis vel iste quia commodi quos
          perspiciatis doloremque obcaecati nulla! Ea amet quisquam, beatae
          velit saepe explicabo eius molestias ut eaque dolore sequi veritatis,
          earum porro adipisci consectetur exercitationem inventore praesentium
          reprehenderit? Aliquam temporibus, repellendus explicabo totam id
          optio molestiae similique corrupti dicta, vel magni impedit voluptate
          odit. Dicta cumque similique autem dolores laboriosam eos veniam
          perferendis pariatur ratione quae, officiis, repellat sunt ipsam
          asperiores et nam, voluptatum amet blanditiis commodi reiciendis
          officia. Accusantium iste ipsum voluptate porro architecto, eum,
          quaerat et voluptatem dolores, vel ut ad maxime magnam non ex
          repellendus quibusdam nulla! Tenetur soluta maxime qui.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Exercitationem deleniti, laboriosam magnam provident in beatae nisi
          labore ducimus? Ad accusantium quisquam consequuntur tempora similique
          impedit ut fugit, odit tempore error quia, consectetur aperiam. Fuga
          omnis quisquam a ea, deleniti tenetur molestias tempore vero accusamus
          inventore dolores! Beatae officiis quia, dolore vero quam illo qui
          facilis maxime sint quo nesciunt esse inventore omnis, consequuntur
          suscipit voluptatibus possimus ipsam reiciendis saepe fugit facere
          laborum vitae animi. Saepe eaque cumque mollitia molestiae vero
          officia? Ex suscipit est harum fugit reiciendis! Aliquam temporibus
          recusandae perspiciatis! Saepe molestias ipsa ratione aliquid eum sint
          modi sed. Accusantium officia doloribus facilis perspiciatis harum
          quidem, ratione, aspernatur excepturi neque nesciunt at nam. Sequi
          maiores qui amet ab eaque nisi nostrum nihil voluptatem. Voluptas fuga
          ex temporibus saepe beatae optio magni soluta repellat hic excepturi
          iusto minima laborum, sunt doloribus quidem iste maxime earum eveniet
          tenetur omnis molestiae qui?
        </p>
      </div>
    </div>
  );
};
export default ScrollAnimations;
