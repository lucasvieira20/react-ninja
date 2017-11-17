import React from 'react';


const Sidebar = ({ sidebar }) => (
    
    <aside id="sidebar">
        <div className="box-filter">
            <h2 className="title-sidebar">{sidebar.titleSidebar}</h2>
            <form>
                <ul>
                    {sidebar.filterCategory.map((category, index) => (
                        <li key={category.name}>
                            <label htmlFor={category.htmlFor}>{category.name}</label>
                            <input 
                                type="checkbox"
                                name="category"
                                id={category.id}
                                value={category.name}
                                onChange={() => {}} 
                                checked={category.checked} />
                        </li>
                    ))}
                </ul>
            </form>
        </div>
    </aside>
)

export default Sidebar;