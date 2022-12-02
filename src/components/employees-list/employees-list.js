import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onProps, deleteEmployee}) => {
  const elements = data.map(item=>{
    const {id,...itemProps}=item
    return(
      /*<EmployeesListItem name={item.name} salary={item.salary} increase={item.increase} key={item.id}/>*/
      <EmployeesListItem
          key={id}
          {...itemProps}
          /*
          onIncrease={() => onIncrease(id)}
          onLike = {() => on (id)} */
          onProps = {(e) => onProps(id, e.currentTarget.getAttribute('data-toggle'))}
          deleteEmployee = {() => deleteEmployee(id)}/>
    )
  })
  return (
      <ul className="app-list list-group">
          {elements}
      </ul>
  )
}

export default EmployeesList;
