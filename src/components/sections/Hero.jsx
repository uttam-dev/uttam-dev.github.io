import { motion } from 'framer-motion';
import { AnimatedText } from '../ui/AnimatedText';
import { staggerContainer, textVariant } from '../../lib/motion';
import { ScrambleName } from '../ui/ScrambleName';



export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center py-24">
      <motion.h1
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="font-mono text-4xl md:text-5xl font-semibold text-(--color-text-primary) tracking-tight overflow-hidden pb-2 -mb-2"
      >
        <motion.div variants={textVariant} className="inline-block pb-1">
          <ScrambleName text="Uttam Prajapati" />
        </motion.div>
      </motion.h1>

      <div className="h-16"></div>

      <AnimatedText
        text=">_ Software Engineer"
        className="font-mono text-sm text-(--color-text-muted) mt-1 mb-10"
        as="h2"
      />

      <div className="text-(--color-text-muted) leading-relaxed max-w-md">
        <AnimatedText
          text={[
            "Building the invisible layer - the architecture, APIs,",
            "and systems that make products actually work."
          ]}
        />
      </div>

      <div className="text-(--color-text-subtle) text-sm mt-3 flex gap-2 items-center">
        <AnimatedText
          text={["</> Based in Ahmedabad. :) Open to interesting problems."]}
          className="text-(--color-text-muted)"
        />
      </div>
    </section>
  );
}
