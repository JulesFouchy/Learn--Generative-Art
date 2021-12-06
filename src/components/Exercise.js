import React from 'react'

function Exercise({title, demo_link, code_link}) {
  return (
    <p>
        <b><i>{title}</i></b><br/>
        <div style={{"text-indent": "25px"}}>
            <a href={demo_link}>Example result</a><br/>
        </div>
        <div style={{"text-indent": "25px"}}>
            <a href={code_link}>Example solution</a><br/>
        </div>
    </p>
  );
}

export default Exercise