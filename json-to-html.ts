import { Window } from "happy-dom";
import { writeFileSync } from "node:fs";
import { DOMSerializer, Node, Schema } from "prosemirror-model";
import { nodes, marks } from "prosemirror-schema-basic";
import { addListNodes } from "prosemirror-schema-list";
import { tableNodes } from "prosemirror-tables";
import content from "./content.json";

const window = new Window({ url: "https://localhost:8080" });
const document = window.document;

document.body.innerHTML = '<div id="content"></div>';
const contentDiv = document.getElementById("content");

const convertJSONtoHTML = (content: Record<string, unknown>) => {
  const baseSchema = new Schema({
    nodes: {
      ...nodes,
      hr: nodes.horizontal_rule,
      ...tableNodes({ cellContent: "paragraph block*", cellAttributes: {} }),
    },
  });

  const schema = new Schema({
    nodes: addListNodes(baseSchema.spec.nodes, "paragraph block*", "block"),
    marks: marks,
  });

  const contentNode = Node.fromJSON(schema, content);

  DOMSerializer.fromSchema(schema).serializeFragment(
    contentNode.content,
    //@ts-ignore
    { document },
    contentDiv,
  );

  return contentDiv.innerHTML;
};

const html = convertJSONtoHTML(content);
writeFileSync("output.html", html);
console.log(html);
