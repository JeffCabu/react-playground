import React from 'react'
import ReactDOM from 'react-dom'

// import App from './webApp/App'
// import App from './acmeApp/App'
// import data from './acmeApp/data' /////////////////// data={data}
// import Data from './MappingAndFiltering/Data' /////// Data={Data}
// import MappingAndFiltering from './MappingAndFiltering/MappingAndFiltering'
// import MonsterApp from './monsterMash/monsterApp'
// import SmartApp from './smartApp/App'
import ChatterApp from './chatterApp/ChatterApp'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<ChatterApp />, document.getElementById('root'))
registerServiceWorker()
