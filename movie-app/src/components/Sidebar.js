import React from 'react';

const filterCategory = [
    {
        htmlFor:"Category-1",
        id: "Category-1",
        name: "Aventura"
    },
    {
        htmlFor:"Category-2",
        id: "Category-2",
        name: "Comédia"
    },
    {
        htmlFor:"Category-3",
        id: "Category-3",
        name: "Ação"
    },
    {
        htmlFor:"Category-4",
        id: "Category-4",
        name: "Terror"
    },
    {
        htmlFor:"Category-5",
        id: "Category-5",
        name: "Ficção"
    },
];

const Sidebar = ( {sidebar }) => (
    <aside id="sidebar">
        <div className="box-filter">
            <h2 className="title-sidebar">{sidebar.titleSidebar}</h2>
            <form>
                <ul>
                    {filterCategory.map((category, index) => (
                        <li>
                            <label htmlFor={category.htmlFor}>{category.name}</label>
                            <input type="checkbox" name="{category.name}" id={category.id} />
                        </li>
                    ))}
                </ul>
            </form>
        </div>
    </aside>
)

export default Sidebar;