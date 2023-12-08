# [Redux](https://redux.js.org/style-guide)
- state container
- centralizar state
- todos componentes que acessam ele, serão renderizados 
- state que pode ser acessado em qualquer lugar da aplicação
- Cada reducer corresponde a uma entidade na aplicação (UserReducer, CartReducer)
- Os reducer ficam dentro do Root Reducer
- Acessar dados **useSelector**
- alterar dados **useDispatch**
  - esse hook dispacha actions
    - modificações no redux são feitas por meio de **actions**
    - é um objeto js
    - dois campos
      - type: natureza da action, evento / ação realizada pra action ser dispachada
      - payload: dados relacionado ao evento
    - Ao dispachar uma action, EntityReducer fica monitorando certos types de actions

# [Diferença Context x Redux](https://levelup.gitconnected.com/react-context-api-vs-redux-99d46b8ff2eb)

