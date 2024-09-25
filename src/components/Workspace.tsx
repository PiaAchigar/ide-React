// import * as Blockly from 'blockly/core';
import '../App.css'
import {BlocklyWorkspace, ToolboxDefinition } from 'react-blockly';
import * as xml2js from 'xml2js';
const builder = new xml2js.Builder();

export default function Workspace({
  toolboxConfiguration,
  initialXml,
}: {toolboxConfiguration:ToolboxDefinition,initialXml:string}) {

  // function workspaceDidChange(workspace:Blockly.WorkspaceSvg):void {
  //   // const code = BlocklyJavaScript.Javascript.workspaceToCode(workspace);
  //   const code = workspace
  //   setJavascriptCode(code);
  // }

  const xmlString = builder.buildObject(initialXml);
  return (
    <>
    <BlocklyWorkspace
              className="dimensiones"
              toolboxConfiguration={toolboxConfiguration}
              initialXml={xmlString}
              // onXmlChange={ }  
              workspaceConfiguration={{
                grid: {
                  spacing: 20,
                  length: 3,
                  colour: "#ccc",
                  snap: true,
                },
              }}
              // onWorkspaceChange={workspaceDidChange}
              />
    </>
  );

}