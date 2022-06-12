import { useParams } from "react-router-dom";


const Materiaid = () => {
    const { materiaId } = useParams();

  return (
    <div>{materiaId}</div>
  )
}

export default Materiaid
