import react from 'react'

const AddForm = ({submitAction, name, handleNameChange, number, handleNumberChange}) =>{
    return (
        <form onSubmit={submitAction}>
        <div>
          name: <input value={name} onChange={handleNameChange} />
        </div>
        <div>number: <input value={number} onChange={handleNumberChange} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default AddForm