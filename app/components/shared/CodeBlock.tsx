import refractor from "refractor";
const Refractor = require("react-refractor"); 
const { registerLanguage } = require('refractor/core');

// Language imports
import js from "refractor/lang/javascript";
import ts from "refractor/lang/typescript";
import tsx from "refractor/lang/tsx";
import jsx from "refractor/lang/jsx";
import sql from "refractor/lang/sql";
import bash from "refractor/lang/bash";
import markdown from "refractor/lang/markdown";
import css from "refractor/lang/css";
import scss from "refractor/lang/scss";
import python from "refractor/lang/python";
import html from "refractor/lang/markup";
import yaml from "refractor/lang/yaml";
import graphql from "refractor/lang/graphql";
import json from "refractor/lang/json";
import java from "refractor/lang/java";

import Clipoboard from "./Clipoboard";

// Supported languages: https://prismjs.com/#supported-languages
refractor.register(js);
refractor.register(ts);
refractor.register(tsx);
refractor.register(jsx);
refractor.register(sql);
refractor.register(bash);
refractor.register(markdown);
refractor.register(css);
refractor.register(scss);
refractor.register(python);
refractor.register(html);
refractor.register(yaml);
refractor.register(graphql);
refractor.register(json);
refractor.register(java);
type codeTypes = {
  value: {
    code: string;
    language: string;
    filename?: string | null;
  };
};

export default function CodeBlock({ value }: codeTypes) {
  return (
    <div className="my-6">
      <div className="flex items-center justify-between bg-zinc-50 dark:bg-[#141414] border dark:border-zinc-800 border-zinc-200 rounded-t-lg px-4 py-3 translate-y-2">
        {value.filename && <p className="text-sm">{value.filename}</p>}
        <Clipoboard content={value.code} />
      </div>
      <Refractor
        language={value.language ?? "jsx"}
        value={value.code}
        className="text-sm border-x border-b dark:border-zinc-800 border-zinc-200 rounded-b-lg tracking-normal"
      />
    </div>
  );
}
