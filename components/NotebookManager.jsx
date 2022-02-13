import { React } from "react";
import { NotebookForm, CreateNotebookForm } from "./";
import { DataContext, useOutletData } from "../context/DataContext";

const NotebookManager = () => {
    const { ...outletData } = useOutletData(DataContext);
    const { ...outletState } = outletData.state;
console.log("render");
    return (
        <div className="container mx-auto px-10 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12">
                <div className="lg:col-span-3 col-span-1">
                    <div className="lg:grid grid-cols-3">
                        { outletState.notebooks !== undefined && outletState.notebooks.map(notebook => (
                            <NotebookForm key={notebook.id} notebook={notebook} />
                        ))}
                        <CreateNotebookForm />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotebookManager;