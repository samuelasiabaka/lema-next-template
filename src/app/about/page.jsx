import Button from "@/components/Button/Button";
import Image from "next/image";
import React from "react";
import styles from "./page.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=600"
          fill={true}
          alt="about us pix"
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experience
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who We Are?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas enim
            maxime corrupti aspernatur tenetur nisi qui illo. Unde iste, omnis
            voluptate a earum ab fugiat fuga esse alias distinctio quod commodi
            voluptates maxime dolorem ipsam animi autem, quis atque cupiditate.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, iusto
            fugiat. Eius iusto cum maiores natus tempore laborum itaque neque
            ullam excepturi magni sed facere, inventore, molestias cumque
            corrupti maxime.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, iusto
            fugiat. Eius iusto cum maiores natus tempore laborum itaque neque
            ullam excepturi magni sed facere, inventore, molestias cumque
            corrupti maxime.
            <br />
            <br />- Creative Illustration
            <br />
            <br />- Dynamic Websites
            <br />
            <br />- Fast and Handy Mobile Apps
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
