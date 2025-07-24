import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";


function Home() {
  return (     
    <>
       <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-white p-8">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-5xl font-bold mb-4"
        >
          Hi, I’m Sumsul Arifin
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-xl text-gray-600 mb-6"
        >
          Full Stack Developer | Data Analyst | Mobile Developer
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
        <Button>
            <a href="#contact">Contact Me</a>
        </Button>
        </motion.div>
      </motion.div>
    </section>
    </>
  )
}

export default Home;
