import react from 'react'

const Notification = ({ message, type}) => {
  
  const styles = {
    background: 'lightgrey',
    borderRadius: 5,
    borderStyle: 'solid',
    color: type==='success' ? 'green' : 'red',
    fontSize: 20,
    marginBottom: 10,
    padding: 10,
  }

    if (message === null) {
      return null
    }
  
    return (
      <div style={styles}>
        {message}
      </div>
    )
  }

export default Notification