import ReactDOM from 'react-dom/client'
import { App } from './App'
import { Global } from './styles'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<>
		<Global />
		<App />
	</>
)
