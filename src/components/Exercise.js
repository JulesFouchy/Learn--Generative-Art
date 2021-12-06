import React from 'react'

function Exercise({title, demo_link, code_link, code_link_name}) {
  const examples = (
    <div>
        <div style={{"text-indent": "25px"}}>
            <a href={demo_link}>Example result</a><br/>
        </div>
        <div style={{"text-indent": "25px"}}>
            <a href={code_link}>{code_link_name || "Example solution"}</a><br/>
        </div>
    </div>
  )
  if (title) {
    return (
        <p>
            <b><i>{title}</i></b><br/>
            {examples}
        </p>
    );
  }
  else {
    return examples;
  }
}

export default Exercise