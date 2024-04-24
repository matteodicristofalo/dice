import styles from "./image.module.css";

interface ImageProps {
  src: string;
  alt: string;
}

export function Image({ src, alt }: ImageProps) {
  return (
    <div className={styles["container"]}>
      <img src={src} alt={alt} />
    </div>
  );
}
