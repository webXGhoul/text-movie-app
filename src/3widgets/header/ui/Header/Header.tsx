import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { Container } from "@/shared/ui";
import { useTransform, useScroll, motion } from "framer-motion";

const Header = () => {
  const { scrollY } = useScroll();
  const offsetY = [100, 300];

  const headerBackground = useTransform(scrollY, offsetY, [
    "rgba(0, 0, 0, 0)",
    "rgb(7, 2, 28)",
  ]);
  const headerLogoColor = useTransform(scrollY, offsetY, ["#fff", "#96c8ff"]);
  const headerPadding = useTransform(scrollY, offsetY, [40, 20]);
  const headerBorderLine = useTransform(scrollY, offsetY, [1, 0]);

  return (
    <motion.header
      style={{
        background: headerBackground,
        paddingTop: headerPadding,
        paddingBottom: headerPadding,
        borderBottomWidth: headerBorderLine,
      }}
      className={styles.header}
    >
      <Container className={styles.header__container}>
        <Link className={styles.header__logo} to={"/"}>
          <motion.span style={{ color: headerLogoColor }}>
            M<span className={styles["header__logo-letters"]}>oo</span>vie
          </motion.span>
        </Link>
      </Container>
      
    </motion.header>
  );
};

export default Header;
