import './App.css';
import ItemMainContent from './components/ItemMainContent';
import ItemSideBar from "./components/ItemSideBar";
import { ReactComponent as IconContent } from "./asset/icon.svg"
import MainLogo from "./components/MainLogo"
const SIDE_BAR = [
  { id: 0, title: "home" },
  { id: 1, title: "Services" },
  { id: 2, title: "News" },
  { id: 3, title: "Blog" },
  { id: 4, title: "Contact" }
]
const MAIN_CONTENT= [
  {
    id: 0, header: "Lorem ipsum dolor sit amet",
    icon: <IconContent />,
    title: " Lorem ipsum dolor sit amet,  consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan.  Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at"
  },
  {
    id: 1, header: "Lorem ipsum dolor sit amet",
    icon: <IconContent />,
    title: " Lorem ipsum dolor sit amet,  consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan.  Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at"
  },
  {
    id: 2, header: "Lorem ipsum dolor sit amet",
    icon: <IconContent />,
    title: " Lorem ipsum dolor sit amet,  consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan.  Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at"
  }
]
function App() {
  return (
    <div className="App">
      <div className="side-bar"> 
        {
          SIDE_BAR.map((item) => 
            <ItemSideBar title={item.title} key={item.id} />
          )
        }
      </div>
      <div className="main">
        <MainLogo />
        <div className="main-header">
          <span 
            className="
              font-header font-18 span-item
              margin-bottom-18
            "
          >
            Lorem ipsum dolor sit asmet?
          </span>
          <span className="font-normal font-16 span-item">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed tristique consequat placerat. Vestibulum auctor pellentesque sem,
            eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper turpis pellentesque a.
          </span>
        </div>
        <div className="main-content flex js-space-between">
          {
            MAIN_CONTENT.map((item) => 
              <ItemMainContent 
                header={item.header} 
                icon={<IconContent />}
                title={item.title}
                key={item.id}
              />
            )
          }
        </div>
      </div>
    </div>
  );
}

export default App;
