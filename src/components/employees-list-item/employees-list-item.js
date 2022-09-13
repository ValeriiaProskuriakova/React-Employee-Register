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

      const {name,salary, increase, like, onProps, deleteEmployee} = props;
      /*const {increase, like} = this.state; */
      let classIncrease = "list-group-item d-flex justify-content-between";
      if(increase){
        classIncrease+=' increase'
      }
      if(like){
        classIncrease+= ' like'
      }
      return(
      <li className={classIncrease}>
          <span className="list-group-item-label"
                onClick = {onProps}
                data-toggle='like'
                style = {{fontSize:'1.5em', color:'#000'}}
                >{name}</span>
          <input type="text" className="list-group-item-input" defaultValue={salary+'$'}/>
          <div className='d-flex justify-content-center align-items-center'>
              <button type="button"
                  onClick = {onProps}
                  className="btn-cookie btn-sm "
                  data-toggle='increase'>
                  <i className="fas fa-cookie"></i>
              </button>

              <button type="button"
                      className="btn-trash btn-sm "
                      onClick = {deleteEmployee}>
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
