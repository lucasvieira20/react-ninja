import React from 'react';

const Sidebar = ( {sidebar }) => (
    <aside id="sidebar">
        <div className="box-filter">
            <h2 className="title-sidebar">{sidebar.titleSidebar}</h2>
            <form>
                <ul>
                    <li>
                        <label htmlFor="category-1">Aventura</label>
                        <input type="checkbox" name="" id="category-1" />
                    </li>
                    <li>
                        <label htmlFor="category-2">Comédia</label>
                        <input type="checkbox" name="" id="category-2"/>
                    </li>
                    <li>
                        <label htmlFor="category-3">Ação</label>
                        <input type="checkbox" name="" id="category-3"/>
                    </li>
                    <li>
                        <label htmlFor="category-4">Terror</label>
                        <input type="checkbox" name="" id="category-4"/>
                    </li>
                    <li>
                        <label htmlFor="category-5">Documentário</label>
                        <input type="checkbox" name="" id="category-5"/>
                    </li>
                </ul>
            </form>
        </div>
    </aside>
)

export default Sidebar;