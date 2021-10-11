import { SideBar } from './components/SideBar/SideBar';
import './styles/global.scss';


export function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      
      <SideBar />
      
    </div>
  )
}