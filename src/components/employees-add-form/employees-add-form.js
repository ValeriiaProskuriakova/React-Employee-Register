/*import './employees-add-form.css';*/
import {Component} from 'react';
import './employees-add-form.scss'


class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state= {
      name: '',
      salary: ''
    }
  }
  onValueChange = (e) => {
    this.setState ({
      [e.target.name]:e.target.value
    })
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addEmployee(this.state.name,this.state.salary); //визиваем ф-цию с пропсов, добавляем нового сотр с инпутов в стейт на app.js
    this.setState({ //очищаем єтот стейт для нових инпутов
      name: '',
      salary: ''
    })
  }


  render() {
    const {name, salary} = this.state;

    return (
        <div className="app-add-form">
            <h3>Add new employee</h3>
            <form
                className="add-form d-flex"
                onSubmit = {this.onSubmit}>

                <input type="text"
                    className="form-control new-post-label"
                    placeholder="New employee's name"
                    name = "name"
                    onChange = {this.onValueChange}
                    value ={name}/>
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="Salary in $"
                    name="salary"
                    onChange = {this.onValueChange}
                    value ={salary}/>

                <button type="submit"
                        className="btn btn-outline-light"
                        >Add</button>
            </form>
        </div>
    )
  }
}

export default EmployeesAddForm;
