import './employees-list-item.css';



const EmployeesListItem = (props) => {
  /*
            -----ВАРИАНТ ЧЕРЕЗ КЛАСС------
  constructor(props){ //принимает с function App
    super(props);
    this.state = {  //создали стейт чтоб менять его локально
      increase:false,
      like:false
    }
  }
  changeColor = () => { //будет менять цвет по нажатии на печеньку
        this.setState(({increase})=>({
          increase:!increase
      }))
  }
  addStar =() =>{ //появляется лайк
      this.setState(({like})=>({
        like:!like
      }))
  }
  */

      const {name,salary, increase, raise, onProps, deleteEmployee} = props;
      /*const {increase, like} = this.state; */
      let classIncrease = "list-group-item d-flex justify-content-between";
      if(increase){
        classIncrease+=' increase'
      }
      if(raise){
        classIncrease+= ' raise'
      }
      return(
      <li className={classIncrease}>
          <span className="list-group-item-label"
                onClick = {onProps}
                data-toggle='increase'
                >{name}</span>
          <input type="text" className="list-group-item-input" defaultValue={salary+'$'}/>
          <div className='d-flex justify-content-center align-items-center'>
              <button type="button"
                  onClick = {onProps}
                  className="btn-cookie btn-sm "
                  data-toggle='raise'>
                  <i className="fas fa-cookie"></i>
              </button>

              <button type="button"
                      className="btn-trash btn-sm "
                      onClick = {deleteEmployee}
                      aria-label="trash">
                <i className="fas fa-trash"></i>
              </button>
              <i className="fas fa-star"></i>
          </div>
      </li>
    )
}

/*
const EmployeesListItem = ({name, salary,increase}) => {
    let classIncrease = "list-group-item d-flex justify-content-between";
    if(increase){
      classIncrease+=' increase'
    }
    return (
        <li className={classIncrease}>
            <span className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary+'$'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm ">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}
*/
export default EmployeesListItem;
