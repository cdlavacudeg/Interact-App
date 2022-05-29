const Notification = ({ message }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div style={{ padding:"2rem", textAlign: "center" }}>
        {message}
      </div>
    )
  }
  
  export default Notification