import React from 'react';

const filterCategory = [
    {
        htmlFor:"Category-1",
        id: "Category-1",
        name: "Adventure",
        checked: false,
    },
    {
        htmlFor:"Category-2",
        id: "Category-2",
        name: "Comedy",
        checked: false
    },
    {
        htmlFor:"Category-3",
        id: "Category-3",
        name: "Action",
        checked: false
    },
    {
        htmlFor:"Category-4",
        id: "Category-4",
        name: "Horror",
        checked: false
    },
    {
        htmlFor:"Category-5",
        id: "Category-5",
        name: "Fiction",
        checked: true
    },
    {
        htmlFor:"Category-6",
        id: "Category-6",
        name: "Animation",
        checked: false
    }
];

const Sidebar = ( {sidebar }) => (
    <aside id="sidebar">
        <div className="box-filter">
            <h2 className="title-sidebar">{sidebar.titleSidebar}</h2>
            <form>
                <ul>
                    {filterCategory.map((category, index) => (
                        <li key={category.name}>
                            <label htmlFor={category.htmlFor}>{category.name}</label>
                            <input 
                                type="checkbox"
                                name="category"
                                id={category.id}
                                value={category.name}
                                checked={category.checked} />
                        </li>
                    ))}
                </ul>
            </form>
        </div>
    </aside>
)

export default Sidebar;