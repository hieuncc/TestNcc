import '../App.css'
const ItemMainContent = ({header, title, icon}) => {
    return (
        <div className="main-item-content">
            <span className="font-24 font-header margin-bottom-18">{header}</span>
            <div className="flex">
                {icon}
            </div>
        </div>
    )
}
export default ItemMainContent