"use client";

import styles from "./Menu.module.scss";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

import img from "/public/images/img.avif";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const links = ["Work", "Studio", "News", "Contact"];

  return (
    <div className={styles.menuContainer}>
      <motion.div
        initial="initial"
        whileHover="hover"
        onClick={() => setIsOpen(!isOpen)}
        className={styles.menuBtn}
      >
        <motion.div
          initial="initial"
          animate="animate"
          className={styles.menuTextContainer}
        >
          <motion.span
            variants={{
              initial: {
                opacity: 1,
                y: 0,
              },
              animate: {
                opacity: isOpen ? 0 : 1,
                y: isOpen ? "-100%" : 0,
                rotate: isOpen ? "-15deg" : 0,
                color: isOpen ? "#FFF" : "#000",
                translateZ: 0,
              },
            }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            style={{ backfaceVisibility: "hidden", willChange: "transform" }}
            className={styles.menuText}
          >
            Menu
          </motion.span>
          <motion.span
            variants={{
              initial: {
                opacity: 0,
                y: "100%",
              },
              animate: {
                opacity: isOpen ? 1 : 0,
                y: isOpen ? 0 : "100%",
                rotate: isOpen ? 0 : "15deg",
                color: isOpen ? "#FFF" : "#000",
                translateZ: 0,
              },
            }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            style={{ backfaceVisibility: "hidden", willChange: "transform" }}
            className={styles.menuText}
          >
            Close
          </motion.span>
        </motion.div>

        <motion.div
          transition={{
            ease: "easeInOut",
          }}
          variants={{
            hover: {
              rotate: 90,
            },
          }}
          className={styles.hamburger}
        >
          <motion.div
            animate={{ backgroundColor: isOpen ? "#FFF" : "#000" }}
            className={styles.bar}
          ></motion.div>
          <motion.div
            animate={{ backgroundColor: isOpen ? "#FFF" : "#000" }}
            className={styles.bar}
          ></motion.div>
          <motion.div
            animate={{ backgroundColor: isOpen ? "#FFF" : "#000" }}
            className={styles.bar}
          ></motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ y: "-100%" }}
        animate={{
          y: isOpen ? 0 : "-100%",
          rotate: isOpen ? 7 : 0,
          scale: isOpen ? 1.3 : 1,
        }}
        transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.3 }}
        className={styles.menu}
      >
        <motion.div
          animate={{
            rotate: isOpen ? "-7deg" : 0,
            y: isOpen ? 0 : "-50%",
            scale: isOpen ? 0.7 : 1,
          }}
          transition={{ ease: "easeInOut", duration: 1 }}
          className={styles.navContainer}
        >
          <Image
            src={img}
            alt="alt"
            height={10000}
            width={100000}
            className={styles.image}
          />
          <AnimatePresence mode="wait">
            <nav className={styles.nav}>
              {links.map((link, index) => {
                return (
                  <motion.a
                    initial="initial"
                    whileHover="hover"
                    exit="exit"
                    href="#"
                    key={index}
                    className={styles.linkContainer}
                  >
                    <motion.div
                      animate={{ y: isOpen ? 0 : "100%" }}
                      transition={{
                        ease: "easeInOut",
                        duration: 1,
                        delay: 0.6 + index * 0.085,
                      }}
                      className={styles.link}
                      style={{
                        backfaceVisibility: "hidden",
                        willChange: "transform",
                      }}
                    >
                      {link}
                    </motion.div>
                    <motion.div
                      variants={{
                        initial: {
                          width: "100%",
                          x: "-110%",
                        },
                        hover: {
                          x: 0,
                        },
                        exit: {
                          x: "110%",
                        },
                      }}
                      transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
                      className={styles.underline}
                    ></motion.div>
                  </motion.a>
                );
              })}
            </nav>
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
}
