import React, {useContext} from "react";
import ReactMde from "react-mde";
import Showdown from "showdown";
import {Context} from "../Context"

export default function Editor() {
    const [selectedTab, setSelectedTab] = React.useState("write")

    const {currentNote, updateNote} = useContext(Context)

    const converter = new Showdown.Converter({
        tables: true,
        simplifiedAutoLink: true,
        strikethrough: true,
        tasklists: true,
    })  

    return (
        <main className="pane editor">
            <ReactMde
                value={currentNote.content}
                onChange={updateNote}
                selectedTab={selectedTab}
                onTabChange={setSelectedTab}
                generateMarkdownPreview={(markdown) =>
                    Promise.resolve(converter.makeHtml(markdown))
                }
                minEditorHeight={64.753}
                heightUnits="vh"
            />
        </main>
    )
}
