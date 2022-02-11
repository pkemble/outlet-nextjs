import { React } from "react";
import { NotebookManager } from "../../components";
import { DataContextProvider } from "../../context/DataContext";

export default function NotebookManagerWrapper() {
    return (
        <div>
                <NotebookManager />
        </div>
    );
}