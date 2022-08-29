import { TagCloud } from "react-tagcloud";
import styles from "./TagCloudMobile.module.scss";
const data = [
  { value: "HLTV.org", count: 2 },
  { value: "Dust2.dk", count: 2 },
  { value: "NadeKing", count: 2 },
  { value: "EsportalPolska", count: 1 },
  { value: "DreamHack", count: 3 },
  { value: "Svenska Elitserien", count: 1 },
  { value: "Galaxy Racer", count: 1 },
  { value: "FABRYKA ESPORTU", count: 1 },
  { value: "ESL", count: 3 },
  { value: "IEM", count: 3 },
  { value: "SCOVER", count: 1 },
];

const SimpleCloud = () => (
  <TagCloud className={styles.cloud} minSize={12} maxSize={35} tags={data} />
);

export default SimpleCloud;
