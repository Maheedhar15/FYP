import React from 'react';
import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
const Reveal = ({ children, width = 'fit-content' }) => {
  return (
    <div style={{ position: 'relative', width }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{ hidden: { left: 0 }, visible: { left: '100%' } }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, ease: 'easeIn' }}
        style={{
          position: 'absolute',
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          zIndex: 20,
          background: '#7EFF66',
        }}
      />
    </div>
  );
};

export default Reveal;
