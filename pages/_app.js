// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <AnimatePresence exitBeforeEnter>
      <motion.div initial={{opacity: 0, y: '100px'}} animate={{opacity: 1, y: '0px'}} exit={{opacity: 0}}>

      <Component {...pageProps} />
      </motion.div>
      </AnimatePresence>
    </ChakraProvider>
  )
}

export default MyApp