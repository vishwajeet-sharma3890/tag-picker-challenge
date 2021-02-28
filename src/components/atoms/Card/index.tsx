import "./styles.scss";

export default function Card(props) {
  return <div className="card-container">{props.children}</div>;
}
