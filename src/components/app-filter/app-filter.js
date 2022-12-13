import "./app-filter.css";


const AppFilter = (props) => {
  const arrBtns =  [
    {name:'all', label: 'All employees'},
    {name:'raise', label: 'Will get a raise'},
    {name:'bonus', label: 'Will receive a bonus'},
    {name:'morethan1000', label: 'Salary more than 1000$'},
  ]
  const buttons = arrBtns.map(({name, label}) => {
    const active = props.filter === name  //проверілі active true or false
    const clazz = active ? 'btn-light' : 'btn-outline-light'
    return (
      <button type="button"
              className={`btn ${clazz}`}
              key = {name}
              onClick = {() => props.filterState(name)}
              >
              
              {label}

      </button>
    )
  })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;
