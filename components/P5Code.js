import React from 'react'

function P5Code({code}) {
  return (
    <script type="text/p5">
        {code.replaceAll(";br", "")}
    </script>
  );
}

export default P5Code