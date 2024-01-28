import Nabvar from './components/Nabvar';
import Card from './components/Card';

//context
import {useLanguage} from './context/languageContext';

class Language {
  dictionary = {
    EN:{ title:"Title", description:"Description", name:"Name" },
    ES:{ title:"Título", description:"Descripción", name:"Nombre" }
  }
}

export let idiom = new Language();

function App() {

 const { language } = useLanguage()

 return (
    <div>
       <Nabvar/>
       <h1>{idiom.dictionary[language].name}</h1>
       <h4>{idiom.dictionary[language].description}</h4>
       <Card/>
    </div>
)
}

export default App;
