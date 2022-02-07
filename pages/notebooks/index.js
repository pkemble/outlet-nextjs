import React from "react";
import { NotebookForm, CreateNotebookForm } from "../../components";
import { getNotebooks } from "../api";

export default function Notebooks({ notebooks }) {
    return (
        <div className="container mx-auto px-10 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-3 col-span-1">
                    <div className="grid grid-cols-3">
                        {notebooks.map(notebook => (
                            <NotebookForm key={notebook.id} notebook={notebook} />
                        ))}
                        <CreateNotebookForm />
                    </div>
                </div>
            </div>
        </div>
    );
}

export async function getServerSideProps() {
    const notebooks = await getNotebooks();
    return {
        props: {
            notebooks: notebooks
        } || []
    }
}