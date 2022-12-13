import {Component} from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[
        {name:'John C', salary:800, increase:false, raise:false, id:1}, //increase - ето состояние
        {name:'Mike K', salary:1000, increase:true, raise:false, id:2},
        {name:'Mick D', salary:2500, increase:false, raise:true, id:3},
        {name:'Nick K', salary:2500, increase:false, raise:true, id:4}
      ],
      val: '',
      filter: 'all'
    };
    this.maxId = 5;


  }
/*
  onIncrease = (id) => {

    this.setState(({data}) => {
      const index = data.findIndex(elem=>elem.id === id)
      const old = data[index];
      const newItem = {...old, increase:!old.increase} //перезапис increase на противоположний
      const newArr = [...data.slice(0,index),newItem, ...data.slice(index+1)] //создали новий массив и в нем вирезали обьекти до того которий поменяли, вставили новий обьект кот поменяли, и остаток

      return {
        data: newArr
      }
    })

    this.setState (({data}) => ({ //круглие скобки надо чтоб сразу вернуть новий обьект
      data:data.map(item=> {
          if(item.id === id) {
            return {...item, increase:!item.increase}
          }
          return item
      })
    }))
  }
  onLike = (id) => {
    this.setState (({data}) => ({ //круглие скобки надо чтоб сразу вернуть новий обьект
      data:data.map(item=> {
          if(item.id === id) {
            return {...item, like:!item.like}
          }
          return item
      })
    }))
  }
*/

  // код которий више, переписуем на onProps чтоб оптимизировать і не повторять,
  // он будет зависеmь от параметра - либо increase либо like передается в prop
  onProps = (id,prop) => {
    this.setState (({data}) => ({ //фигурние скобки надо чтоб сразу вернуть новий обьект
      data:data.map(item=> {
          if(item.id === id) {
            return {...item, [prop]:!item[prop]}
          }
          return item
      })
    }))
  }

  // Ф-ция добавления, в кот передаем параметри с Employees-add-form и которая добавляет сотрудніка
  addEmployee = (name,salary) => {
    this.setState(({data}) => {
      const newItem = {name:name, salary:salary, increase:false, raise:false, id:this.maxId++};
      const newArr = [...data, newItem]
      console.log({data:newArr})
      return {data:newArr}
      })
    }

// Ф-ция удаления сотр, в кот передаем id c EmployeesList, по id находим индекс єлемента кот надо удалить, создаем новий массив без даного елемента и записиваем его в дату изменяя стейт
  deleteEmployee = (id) => {
    this.setState(({data})=> {
      const index = data.findIndex(elem=>elem.id === id);
      const newArr = [...data.slice(0,index),...data.slice(index+1)]
      console.log({data:newArr})
        return {data:newArr}
    })
  }

  searchState = (val) => {
    this.setState({val})
  }


// Ф-ция поиска сотр, в кот передаем значение с инпута с SearchPanel и обьект дата для того чтоб его отфильтровать и вернуть нужного сотрудника
  searchEmployee = (val, data) => {

    if(val.length === 0) {
      return data;
    }
    return data.filter(item => item.name.indexOf(val) > -1)
  }

  // Ф-ция фильтра
  searchFilter = (filter, data) => {
    switch(filter) {
      case 'raise': return data.filter(item => item.raise);
      case 'bonus': return data.filter(item => item.increase);
      case 'morethan1000': return data.filter(item => item.salary > 1000);
      default: return data;
    }
  }
  filterState = (filter) => {
    this.setState({filter})
  }

  render (){
    const {val, data, filter} = this.state;
    const result = this.searchFilter(filter, this.searchEmployee(val,data)) // фильтр возвращает фильтрованую дату уже на базе дати после поиска
    const employees = this.state.data.length;
    const increased = this.state.data.filter(item =>item.increase).length;
    const raised = this.state.data.filter(item=>item.raise).length;
    const morethan1000 = this.state.data.filter(item=> item.salary > 1000).length;

    return (
      <div className="app">
          <AppInfo
              employees = {employees}
              increased = {increased}
              raised = {raised}
              morethan1000 = {morethan1000}/>

          <div className="search-panel">
              <SearchPanel
                  searchState = {this.searchState}
                  />
              <AppFilter
                  filter = {filter}
                  filterState = {this.filterState}
                  />
          </div>

          <EmployeesList
              data={result}
              /*
              onIncrease = {this.onIncrease}
              onLike = {this.onLike}  */
              onProps = {this.onProps}
              deleteEmployee = {this.deleteEmployee}/>
          <EmployeesAddForm
              data={this.state.data}
              addEmployee = {this.addEmployee}
              />
      </div>
    );
  }

}

export default App;
